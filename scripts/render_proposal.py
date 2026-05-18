"""Render state_locked_research_proposal_submission.md to HTML, preserving the
bespoke CSS from the original hand-authored HTML file."""

import re
import sys
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
MD = ROOT / "state_locked_research_proposal_submission.md"
HTML = ROOT / "state_locked_research_proposal_submission.html"

CSS = """@page { size: A4; margin: 16mm 16mm 16mm 16mm; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: "Times New Roman", "Cambria Math", "Yu Mincho", "MS Mincho", serif;
  font-size: 10.4pt;
  line-height: 1.19;
  color: #111;
  background: white;
  text-align: justify;
}
h1 { text-align: center; font-size: 17pt; margin: 0 0 8pt 0; font-weight: 700; }
h2 { font-size: 12.4pt; margin: 8.5pt 0 4pt 0; font-weight: 700; page-break-after: avoid; }
p { margin: 0 0 4.4pt 0; text-indent: 1.25em; }
h1 + p, h2 + p, blockquote p, .caption { text-indent: 0; }
blockquote { margin: 5pt 12pt 6pt 12pt; padding: 4pt 8pt; border-left: 2px solid #6f8092; background: #f5f7f9; font-style: italic; }
blockquote p { margin: 0; }
ul, ol { margin: 3pt 0 5pt 18pt; padding: 0; }
li { margin: 1pt 0; }
table { width: 100%; border-collapse: collapse; margin: 5.5pt 0 5.5pt 0; font-size: 8.8pt; page-break-inside: avoid; }
th, td { border: 0.55px solid #9a9a9a; padding: 2.8pt 3.4pt; vertical-align: top; }
th { background: #edf1f5; font-weight: 700; text-align: left; }
strong { font-weight: 700; }
em, i { font-style: italic; }
sub, sup { font-size: 72%; line-height: 0; }
.eq { font-family: "Cambria Math", "Times New Roman", serif; text-align: center; font-size: 9.8pt; margin: 4pt 0 5pt 0; padding: 2pt 0; background: transparent; border: 0; page-break-inside: avoid; }
a { color: #111; text-decoration: none; }"""


def main() -> int:
    md_text = MD.read_text(encoding="utf-8")
    body_html = markdown.markdown(
        md_text,
        extensions=["tables", "md_in_html"],
        output_format="html5",
    )
    # md author drops H1/strong/sub inside paragraphs; the extension keeps inline HTML as-is.
    page = f"""<!doctype html>
<html>
<head>
<meta charset=\"utf-8\">
<title>State-Locked Research Proposal</title>
<style>
{CSS}
</style>
</head>
<body>
{body_html}
</body>
</html>
"""
    HTML.write_text(page, encoding="utf-8")
    print(f"wrote {HTML} ({HTML.stat().st_size} bytes)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
