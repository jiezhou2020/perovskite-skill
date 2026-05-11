# Local Paper RAG

Command-line RAG over the `papers/` directory using local Ollama models.

## Commands

```powershell
ollama pull mxbai-embed-large
python rag\rag_cli.py build
python rag\rag_cli.py search "phase segregation mechanism" --top-k 5
python rag\rag_cli.py ask "What mechanisms drive phase segregation in wide bandgap perovskites?" --top-k 6
```

The generated index lives under `rag/index/`:

- `chunks.jsonl`: chunk text and metadata
- `embeddings.npy`: vector matrix
- `manifest.json`: build settings and file fingerprints

## Notes

- PDF text extraction uses PyMuPDF.
- Embeddings and answer generation use Ollama locally.
- If retrieval scores are weak, the answer command says the knowledge base lacks enough evidence instead of guessing.
