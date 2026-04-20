---
name: Prefer scannable reports with bottom-line-up-front
description: User found dense multi-table reports hard to read — always lead each section with a one-sentence blockquote takeaway, cap tables at 3 cols, no nested bullets, one bold phrase per paragraph.
type: feedback
originSessionId: 1425cd3e-92bc-4613-a3c6-e4b642db9654
---
User prefers scannable, visually-breathable reports over dense multi-table ones.

**Why:** On 2026-04-20, when shown a research-plan draft with stacked 4-column tables and nested bullets, user said the output "看起来有点吃力" (hard to read). The fix that landed well was: bottom-line blockquote per section, simpler tables, one-idea-per-paragraph structure.

**How to apply:** For any structured output (research reports, plans, comparisons, summaries):
- Lead each H2 section with a `> one-sentence takeaway` blockquote
- Tables max 3 columns, cells ≤ 15 words, no nested bullets inside cells
- One idea per paragraph, break at 4 lines
- Bold at most one phrase per paragraph (the key claim)
- No nested bullets anywhere — start a new paragraph for sub-points
- End with "Next steps" (2-4 numbered items), not a summary

This is codified in `~/.claude/skills/research-plan/SKILL.md`. For other contexts (code reviews, plans outside the skill), still apply.
