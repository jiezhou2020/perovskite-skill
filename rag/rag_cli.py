from __future__ import annotations

import argparse
import json
import math
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

import fitz
import numpy as np
import ollama

ROOT = Path(__file__).resolve().parents[1]
CONFIG_PATH = Path(__file__).with_name("config.json")
SUPPORTED_EXTENSIONS = {".pdf", ".md"}

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")


@dataclass(frozen=True)
class Config:
    papers_dir: Path
    index_dir: Path
    embedding_model: str
    chat_model: str
    chunk_size: int
    chunk_overlap: int
    batch_size: int
    min_score: float


def load_config() -> Config:
    data = json.loads(CONFIG_PATH.read_text(encoding="utf-8-sig"))
    return Config(
        papers_dir=(ROOT / data["papers_dir"]).resolve(),
        index_dir=(ROOT / data["index_dir"]).resolve(),
        embedding_model=data["embedding_model"],
        chat_model=data["chat_model"],
        chunk_size=int(data["chunk_size"]),
        chunk_overlap=int(data["chunk_overlap"]),
        batch_size=int(data["batch_size"]),
        min_score=float(data["min_score"]),
    )


def iter_source_files(papers_dir: Path) -> Iterable[Path]:
    for path in sorted(papers_dir.rglob("*")):
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS:
            yield path


def read_pdf_pages(path: Path) -> Iterable[tuple[int, str]]:
    with fitz.open(path) as doc:
        for index, page in enumerate(doc, start=1):
            text = page.get_text("text").strip()
            if text:
                yield index, text


def read_markdown(path: Path) -> Iterable[tuple[int | None, str]]:
    try:
        text = path.read_text(encoding="utf-8").strip()
    except UnicodeDecodeError:
        text = path.read_text(encoding="utf-8", errors="ignore").strip()
    if text:
        yield None, text


def normalize_text(text: str) -> str:
    lines = [line.strip() for line in text.replace("\x00", " ").splitlines()]
    compact: list[str] = []
    blank = False
    for line in lines:
        if not line:
            if not blank:
                compact.append("")
            blank = True
            continue
        compact.append(line)
        blank = False
    return "\n".join(compact).strip()


def chunk_text(text: str, source: str, page: int | None, chunk_size: int, overlap: int) -> list[dict]:
    text = normalize_text(text)
    if not text:
        return []
    if overlap >= chunk_size:
        raise ValueError("chunk_overlap must be smaller than chunk_size")

    chunks: list[dict] = []
    start = 0
    chunk_id = 0
    while start < len(text):
        end = min(start + chunk_size, len(text))
        if end < len(text):
            boundary = max(text.rfind("\n\n", start, end), text.rfind(". ", start, end))
            if boundary > start + math.floor(chunk_size * 0.55):
                end = boundary + 1
        body = text[start:end].strip()
        if body:
            chunks.append({
                "source": source,
                "page": page,
                "chunk_id": chunk_id,
                "text": body,
            })
            chunk_id += 1
        if end >= len(text):
            break
        start = max(0, end - overlap)
    return chunks


def extract_chunks(config: Config) -> tuple[list[dict], list[dict]]:
    chunks: list[dict] = []
    skipped: list[dict] = []
    for path in iter_source_files(config.papers_dir):
        rel = path.relative_to(ROOT).as_posix()
        try:
            pages = read_pdf_pages(path) if path.suffix.lower() == ".pdf" else read_markdown(path)
            before = len(chunks)
            for page, text in pages:
                chunks.extend(chunk_text(text, rel, page, config.chunk_size, config.chunk_overlap))
            if len(chunks) == before:
                skipped.append({"source": rel, "reason": "no extractable text"})
        except Exception as exc:  # keep indexing other papers
            skipped.append({"source": rel, "reason": f"{type(exc).__name__}: {exc}"})
    return chunks, skipped


def _embed_one_with_truncation(text: str, model: str) -> list[float]:
    candidate = text
    while len(candidate) >= 80:
        try:
            response = ollama.embed(model=model, input=candidate)
            vector = response.get("embedding")
            if vector is None:
                embeddings = response.get("embeddings") or []
                vector = embeddings[0] if embeddings else None
            if vector is None:
                raise RuntimeError("Ollama returned no embedding")
            if candidate != text:
                print(f"warning: embedded truncated chunk {len(text)} -> {len(candidate)} chars", flush=True)
            return vector
        except Exception as exc:
            message = str(exc).lower()
            if "context length" not in message and "input length" not in message:
                raise
            candidate = candidate[: max(80, len(candidate) // 2)]
    raise RuntimeError("Could not embed text even after truncation")


def embed_texts(texts: list[str], model: str, batch_size: int) -> np.ndarray:
    vectors: list[list[float]] = []
    for start in range(0, len(texts), batch_size):
        batch = texts[start:start + batch_size]
        try:
            response = ollama.embed(model=model, input=batch)
            batch_vectors = response.get("embeddings")
            if not batch_vectors:
                raise RuntimeError(f"Ollama returned no embeddings for batch starting at {start}")
            vectors.extend(batch_vectors)
        except Exception as exc:
            message = str(exc).lower()
            if "context length" not in message and "input length" not in message:
                raise
            print(f"warning: batch starting at {start} exceeded context; retrying one chunk at a time", flush=True)
            for text in batch:
                vectors.append(_embed_one_with_truncation(text, model))
        print(f"embedded {len(vectors)}/{len(texts)} chunks", flush=True)
    matrix = np.array(vectors, dtype="float32")
    norms = np.linalg.norm(matrix, axis=1, keepdims=True)
    norms[norms == 0] = 1.0
    return matrix / norms


def save_index(config: Config, chunks: list[dict], embeddings: np.ndarray, skipped: list[dict]) -> None:
    config.index_dir.mkdir(parents=True, exist_ok=True)
    chunks_path = config.index_dir / "chunks.jsonl"
    with chunks_path.open("w", encoding="utf-8") as handle:
        for chunk in chunks:
            handle.write(json.dumps(chunk, ensure_ascii=False) + "\n")
    np.save(config.index_dir / "embeddings.npy", embeddings)
    files = []
    for path in iter_source_files(config.papers_dir):
        stat = path.stat()
        files.append({
            "source": path.relative_to(ROOT).as_posix(),
            "size": stat.st_size,
            "mtime": stat.st_mtime,
        })
    manifest = {
        "embedding_model": config.embedding_model,
        "chat_model": config.chat_model,
        "chunk_size": config.chunk_size,
        "chunk_overlap": config.chunk_overlap,
        "chunk_count": len(chunks),
        "file_count": len(files),
        "skipped": skipped,
        "files": files,
    }
    (config.index_dir / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")


def load_index(config: Config) -> tuple[list[dict], np.ndarray]:
    chunks_path = config.index_dir / "chunks.jsonl"
    embeddings_path = config.index_dir / "embeddings.npy"
    if not chunks_path.exists() or not embeddings_path.exists():
        raise FileNotFoundError("Index not found. Run: python rag\\rag_cli.py build")
    chunks = [json.loads(line) for line in chunks_path.read_text(encoding="utf-8").splitlines() if line.strip()]
    embeddings = np.load(embeddings_path)
    return chunks, embeddings


def embed_query(query: str, model: str) -> np.ndarray:
    response = ollama.embed(model=model, input=query)
    vector = response.get("embedding")
    if vector is None:
        embeddings = response.get("embeddings") or []
        vector = embeddings[0] if embeddings else None
    if vector is None:
        raise RuntimeError("Ollama returned no query embedding")
    arr = np.array(vector, dtype="float32")
    norm = np.linalg.norm(arr)
    if norm == 0:
        return arr
    return arr / norm


def rank_chunks(query_embedding: np.ndarray, embeddings: np.ndarray, chunks: list[dict], top_k: int) -> list[dict]:
    scores = embeddings @ query_embedding
    order = np.argsort(scores)[::-1][:top_k]
    results: list[dict] = []
    for idx in order:
        item = dict(chunks[int(idx)])
        item["score"] = float(scores[int(idx)])
        results.append(item)
    return results


def format_citation(result: dict) -> str:
    page = result.get("page")
    suffix = f", p. {page}" if page else ""
    return f"{result['source']}{suffix}, chunk {result['chunk_id']}"


def print_results(results: list[dict]) -> None:
    for index, result in enumerate(results, start=1):
        text = " ".join(result["text"].split())
        preview = text[:700] + ("..." if len(text) > 700 else "")
        print(f"\n[{index}] score={result['score']:.4f} | {format_citation(result)}")
        print(preview)


def build_command(_: argparse.Namespace) -> int:
    config = load_config()
    print(f"Scanning {config.papers_dir}")
    chunks, skipped = extract_chunks(config)
    if not chunks:
        print("No chunks extracted.", file=sys.stderr)
        return 1
    print(f"Extracted {len(chunks)} chunks; skipped {len(skipped)} files/pages")
    embeddings = embed_texts([chunk["text"] for chunk in chunks], config.embedding_model, config.batch_size)
    save_index(config, chunks, embeddings, skipped)
    print(f"Index written to {config.index_dir}")
    return 0


def search_command(args: argparse.Namespace) -> int:
    config = load_config()
    chunks, embeddings = load_index(config)
    query_embedding = embed_query(args.query, config.embedding_model)
    results = rank_chunks(query_embedding, embeddings, chunks, args.top_k)
    print_results(results)
    return 0


def ask_command(args: argparse.Namespace) -> int:
    config = load_config()
    chunks, embeddings = load_index(config)
    query_embedding = embed_query(args.query, config.embedding_model)
    results = rank_chunks(query_embedding, embeddings, chunks, args.top_k)
    if not results or results[0]["score"] < config.min_score:
        print("The knowledge base does not contain enough relevant evidence for this question.")
        print_results(results)
        return 0

    context_parts = []
    citations = []
    for index, result in enumerate(results, start=1):
        citation = format_citation(result)
        citations.append(f"[{index}] {citation}")
        context_parts.append(f"[{index}] {citation}\n{result['text']}")
    prompt = f"""Use only the retrieved paper excerpts below to answer the question. If the excerpts are insufficient, say that the knowledge base does not contain enough evidence. Cite sources with bracket numbers like [1] and [2].

Question:
{args.query}

Retrieved excerpts:
{chr(10).join(context_parts)}
"""
    response = ollama.chat(
        model=config.chat_model,
        messages=[
            {"role": "system", "content": "You are a careful research assistant for perovskite literature. Ground answers in the provided excerpts and avoid unsupported claims."},
            {"role": "user", "content": prompt},
        ],
    )
    print(response["message"]["content"].strip())
    print("\nSources:")
    for citation in citations:
        print(citation)
    return 0


def make_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Local command-line RAG over papers/ using Ollama.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    build = subparsers.add_parser("build", help="Build or rebuild the local vector index.")
    build.set_defaults(func=build_command)

    search = subparsers.add_parser("search", help="Retrieve relevant chunks without generation.")
    search.add_argument("query")
    search.add_argument("--top-k", type=int, default=5)
    search.set_defaults(func=search_command)

    ask = subparsers.add_parser("ask", help="Retrieve chunks and generate a grounded answer.")
    ask.add_argument("query")
    ask.add_argument("--top-k", type=int, default=6)
    ask.set_defaults(func=ask_command)
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = make_parser()
    args = parser.parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())



