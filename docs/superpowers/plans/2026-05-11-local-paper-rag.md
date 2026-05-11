# Local Paper RAG Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local command-line RAG knowledge base over `papers/` using Ollama embeddings and local Ollama chat models.

**Architecture:** A small Python CLI scans PDF/Markdown files, extracts text with page metadata, chunks text, embeds chunks through Ollama, persists vectors as NumPy plus JSONL metadata, and retrieves top-k chunks for search or answer generation. The generated answer is grounded in retrieved snippets and includes source citations.

**Tech Stack:** Python 3.13, PyMuPDF, NumPy, Ollama Python client, Ollama local models.

---

### Task 1: Create CLI and index pipeline

**Files:**
- Create: `rag/rag_cli.py`
- Create: `rag/config.json`
- Create: `rag/README.md`
- Generated: `rag/index/chunks.jsonl`, `rag/index/embeddings.npy`, `rag/index/manifest.json`

- [ ] Implement a single-file Python CLI with `build`, `search`, and `ask` subcommands.
- [ ] Extract `.pdf` with PyMuPDF and `.md` as UTF-8 text.
- [ ] Chunk extracted text with source path and page metadata.
- [ ] Generate embeddings through Ollama.
- [ ] Save metadata and vectors locally.
- [ ] Search with cosine similarity.
- [ ] Ask by sending retrieved context to the configured Ollama chat model.

### Task 2: Verify locally

**Commands:**
- `ollama pull mxbai-embed-large`
- `python rag\rag_cli.py build`
- `python rag\rag_cli.py search "phase segregation mechanism" --top-k 5`
- `python rag\rag_cli.py ask "What mechanisms drive phase segregation in wide bandgap perovskites?" --top-k 6`

**Expected:**
- Build creates the index files under `rag/index/`.
- Search returns cited snippets from papers.
- Ask returns a grounded answer with source citations.
