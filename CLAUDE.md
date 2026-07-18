# Instructional_Redesign_v2 — project rules

Interactive HTML tutorials for the bike-repair accounting prework (branch `Rick`).
Student-facing surfaces are the root `*.html` tutorials, `shared.js`, and
`bike-repair-workbook.js`. `dev.js` / `dev-index.html` and code comments are
instructor-side.

## Language rules for student-facing content (NON-NEGOTIABLE)

The difference **Assets − Liabilities has no name in these materials** until an
entity type supplies one:

- **Module 1 (11-x … 15-x):** the difference stays **unnamed**. Refer to it
  descriptively — "the difference," "A − L," "the difference between Assets
  and Liabilities." Never christen it. "The net" / "your net" and every
  "have minus owe" gloss were retired 2026-07-05 — say "the difference."
  ("Net cash flow" on the Cash sheet, "net income" (M3+), and trade terms
  like "net 15" are standard vocabulary and stay.)
- **Module 2 on (2x-x, 3x-x):** its one name is **"Member's Capital"**, because
  the LLC has one member and that is the term its Operating Agreement uses. No
  other name. Anna's City Cycle old-job agreement retains its plural wording
  because it is a different company's document.
- **Banned in student-facing text:**
  - "equity" / "equities" (purged 2026-07, commit 6e0cb67)
  - "Net Assets"
  - **"the residual" used as a name or label.** "Residual" is instructor-side
    design vocabulary — fine in code comments and design docs, never in text a
    student sees.
  - "accounting equation" (say "accounting identity")
  - "the net" / "your net" / "net-mover" as a name for the A − L difference,
    and "have minus owe" in any form (retired 2026-07-05)
- **No possession/leftover framing** for the difference: never "what's left
  after taking Liabilities out of Assets," never "what's left for the owner"
  (except as an explicitly negated quote in a glossary def). It is a
  definitional, computed difference — "a difference, not a thing anyone could
  pocket."
- **Workbook facsimile labels are entity-framed:** the records belong to the
  repair work, not the student. No "what I have / what I owe" — headers are bare
  "Assets" / "Liabilities" / "TOTAL". Watch for the same drift in prose.
- **"The repair work" is an activity, not an actor (adopted 2026-07-05).**
  It cannot own, owe, hold title, bear risk of loss, agree, or promise —
  pre-LLC the only actor with legal capacity is the student. Never make it
  the subject of a possession or agency verb ("the repair work
  has/owns/owes/agreed/promised"). Legal moves instead:
  - records as subject: "the Things sheet lists…," "recorded on the
    repair-work side of the line"
  - creditor-framed passive: "still owed on the bike-repair card,"
    "still owed because of the repair work"
  - prepositional attachment: "tied up in / used in / set aside for /
    brought into the repair work"
  - activity verbs are fine: "the repair work has grown / has run /
    produced / generated"
  - aboutness-possessives are fine: "the records of the repair work,"
    "its books" — books are *about* a subject, never "books of its own"
  - Anna's dialogue may still name the person's real property and debts
    ("you still owe Smith the frame") — pre-LLC that is who owes.
- **Documents are not actors (adopted 2026-07-08).** An agreement, schedule,
  certificate, or statement cannot wait, want, write, decide, or catch up.
  Give the action to a person: "you complete the schedule after the facts are
  in," "you sign last." ("The schedule attests to…" is standard legal drafting
  usage and stays.)
- **Time periods are not actors (adopted 2026-07-08).** A season, month, or
  period cannot use things up, consume, need, deliver, add, or make. Recast
  with a passive ("was used up during the season"), a possessive ("the
  season's share"), or a real subject (the person, the shop post-LLC, the
  records). Charging a share *to* a season (object position) is fine.
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
  possessions is not. (Swept across M1–M2 on
  2026-07-05; follow the rule for any text you touch.)

**Before finishing any session that touched `*.html`, `shared.js`, or
`bike-repair-workbook.js`, run:**

```bash
bash lint-language.sh
```

It must print `lint-language: clean`. If it flags something you believe is
legitimate, stop and ask Rick — do not edit the linter to make it pass.

## Other standing rules

- **Bike-Repair.xlsx look-and-feel continuity (adopted 2026-07-08).** Every
  depiction of the workbook must have the same look and feel as the **last one
  shown in the module/tutorial sequence** — same tab set, same category labels,
  same expandable-line idiom (category rows with toggles, item drill-downs, the
  dated cash ledger), same totals wording. Never invent a new flat or
  re-labeled rendering for one page. As of Module 2, the reference is the
  end-of-Module-1 workbook (15-2): Equipment / Computer equipment / Supplies /
  Fixtures / Cash / Right of Use.

- `shared.css` and `shared.js` are **append-only**; no `shared.css` edits without
  Rick's explicit approval (see `.claude/skills/instructional-shared-styles`).
- Do not commit or push without Rick's explicit permission; stage files by name,
  never `git add -A`.
- Teaching pattern: experience first, names last. Never introduce a formal term
  before the student has built the thing it names.
