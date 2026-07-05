# Instructional_Redesign_v2 — project rules

Interactive HTML tutorials for the bike-repair accounting prework (branch `Rick`).
Student-facing surfaces are the root `*.html` tutorials, `shared.js`, and
`bike-repair-workbook.js`. `dev.js` / `dev-index.html` and code comments are
instructor-side.

## Language rules for student-facing content (NON-NEGOTIABLE)

The difference **Assets − Liabilities has no name in these materials** until an
entity type supplies one:

- **Module 1 (11-x … 15-x):** the difference stays **unnamed**. Refer to it
  descriptively — "the difference," "A − L," or the earned idiom "the net
  (have minus owe)." Never christen it.
- **Module 2 on (2x-x, 3x-x):** its one name is **"Members' Capital"**, because
  that is the word the Operating Agreement uses. No other name.
- **Banned in student-facing text:**
  - "equity" / "equities" (purged 2026-07, commit 6e0cb67)
  - "Net Assets"
  - **"the residual" used as a name or label.** "Residual" is instructor-side
    design vocabulary — fine in code comments and design docs, never in text a
    student sees.
  - "accounting equation" (say "accounting identity")
- **No possession/leftover framing** for the difference: never "what's left
  after taking Liabilities out of Assets," never "what's left for the owner"
  (except as an explicitly negated quote in a glossary def). It is a
  definitional, computed difference — "a difference, not a thing anyone could
  pocket."
- **Workbook facsimile labels are entity-framed:** the records belong to the
  repair work, not the student. No "what I have / what I owe" — headers are bare
  "Assets" / "Liabilities" / "TOTAL". Watch for the same drift in prose.
- The `.claude/skills/accounting-pedagogy` skill speaks instructor-to-instructor
  (it says "Equities," "residual"). **Its vocabulary must not leak into
  student-facing pages.** Use it for reasoning, not for on-page wording.
- **Voice rule:** Anna's dialogue may say "you/your" — she is a character
  speaking to the protagonist. But narration, workbook/sheet labels, balance-sheet
  rows, insight boxes, and glossary definitions describe the *records*, and there
  the entity framing holds: "the net," "the difference," "the repair work," never
  "your net" / "what you have" / "what you owe" as descriptions of record
  contents. Addressing the student's *actions* ("you drew the line," "you kept
  the reasons") is fine anywhere; claiming record contents as the student's
  possessions is not. (Swept in Module 5; older modules may still have
  instances — follow the rule for any text you touch.)

**Before finishing any session that touched `*.html`, `shared.js`, or
`bike-repair-workbook.js`, run:**

```bash
bash lint-language.sh
```

It must print `lint-language: clean`. If it flags something you believe is
legitimate, stop and ask Rick — do not edit the linter to make it pass.

## Other standing rules

- `shared.css` and `shared.js` are **append-only**; no `shared.css` edits without
  Rick's explicit approval (see `.claude/skills/instructional-shared-styles`).
- Do not commit or push without Rick's explicit permission; stage files by name,
  never `git add -A`.
- Teaching pattern: experience first, names last. Never introduce a formal term
  before the student has built the thing it names.
