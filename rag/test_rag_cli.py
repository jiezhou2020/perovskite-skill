import importlib.util
import sys
from pathlib import Path

MODULE_PATH = Path(__file__).with_name("rag_cli.py")
spec = importlib.util.spec_from_file_location("rag_cli", MODULE_PATH)
rag_cli = importlib.util.module_from_spec(spec)
sys.modules["rag_cli"] = rag_cli
spec.loader.exec_module(rag_cli)


def test_chunk_text_preserves_overlap_and_metadata():
    text = "alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu"
    chunks = rag_cli.chunk_text(text, source="paper.pdf", page=3, chunk_size=30, overlap=10)
    assert len(chunks) >= 2
    assert chunks[0]["source"] == "paper.pdf"
    assert chunks[0]["page"] == 3
    assert chunks[0]["chunk_id"] == 0
    assert chunks[0]["text"]
    assert chunks[1]["text"][:5] in chunks[0]["text"] or chunks[0]["text"][-5:] in chunks[1]["text"]


def test_cosine_search_orders_most_similar_first():
    chunks = [
        {"text": "a", "source": "a.pdf", "page": 1, "chunk_id": 0},
        {"text": "b", "source": "b.pdf", "page": 2, "chunk_id": 0},
    ]
    embeddings = rag_cli.np.array([[1.0, 0.0], [0.0, 1.0]], dtype="float32")
    results = rag_cli.rank_chunks(rag_cli.np.array([0.9, 0.1], dtype="float32"), embeddings, chunks, top_k=2)
    assert results[0]["source"] == "a.pdf"
    assert results[0]["score"] > results[1]["score"]


def run_tests():
    test_chunk_text_preserves_overlap_and_metadata()
    test_cosine_search_orders_most_similar_first()


if __name__ == "__main__":
    run_tests()
    print("2 tests passed")
