# Module 1 — Design notes

**Status:** started 2026-07-08 to capture the match-or-reason ruling. Earlier M1 design
decisions live in the repo CLAUDE.md (language rules) and the continuation briefs.

## Ruling — every change gets a match or a reason (Rick, 2026-07-08)

**The rule (one of the most important points of the prework):**

> Every change in an Asset or a Liability gets either a **match** or a **reason**.
> A *match* is the other line that moved with it — same transaction, same amount:
> an Asset with a Liability (parts on the card, Smith's deposit), or one Asset with
> another (the stand bought with cash). A matched pair explains itself, and
> **Assets − Liabilities does not move**. A change with **no match** is the kind that
> moved the difference — its why lives outside the sheets, so it gets written on the
> Reasons tab. The reasons alone carry every move in the difference.

Consequences:

- **14-2 rebuilt (2026-07-08)** as "Walk the Changes": all categories walked
  (Equipment, Computer equipment, Fixtures, Supplies bought *and* used, Right of Use
  paid *and* used, Liabilities, Cash last) at **item-level granularity everywhere**
  (per Rick: no aggregates — seven kinds of parts bought ↔ one QBP charge, seven
  kinds used → seven reasons; bought − used reconciles to the shelf line for line),
  each change answered with
  "what else moved?"; a rule strip counts matches (difference unmoved) vs reasons
  (running total of the difference's moves). Fixtures teach the one-to-many match
  (four lines ↔ one $750 charge, invoice as bridge). Smith's deposit carries the
  forward pointer: delivering the frame will drop the promise with **no match** —
  that change will need a reason (M3's revenue moment, unnamed here). The Cash walk
  ends at the −$160 tally and the **$160 cover is discovered there** (never
  pre-listed). Matched pairs never enter the Reasons tab.
- **14-3 "Pairs That Cancel" retired** — the pairing is now 14-2's own gesture; its
  payoff line ("the reasons left over are the ones that moved the difference") folded
  into 14-2's close. 14-4 keeps the sort-into-piles job (gear row split to per-item
  for continuity with 14-2's jots).
- **Vague/incorrect "two lines" language replaced** everywhere it surfaced (14-1,
  14-5, glossary): the old copy said pairs cancel because "Assets and Liabilities
  shift by the same amount," which is false for asset–asset swaps.
- Glossary: "Reason" redefined; "Match" added (earned at 14-2).
- The difference stays **unnamed** (repo CLAUDE.md); 14-2 shows the arithmetic and
  the movement but does not pre-compute A − L = $1,160 as a headline (15-1 does the
  find-the-difference beat — check for echo during click-through).

## Carried

- 22-4-era continuity: every Bike-Repair.xlsx depiction matches the last one shown
  (see CLAUDE.md standing rule).
