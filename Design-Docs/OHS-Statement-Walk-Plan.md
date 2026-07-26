# OHS Statement Walk — Module 6 Rebuild Plan (6x-x)

**Status: DRAFT — awaiting Rick's approval. Once approved, this is the build
contract.**

Drafted 2026-07-25. Source: the **Oregon Humane Society FY2025 audited
financial statements** (year ended December 31, 2025, Perkins & Co, 35 pages,
`OHS-Financials/2025_Oregon_Humane_Financials.pdf`) — statements pp. 3–7,
notes pp. 8–35. Target: the course page format (vanilla JS, `shared.css`
idioms, step-based `render()`, one arc per page), the same conversion
discipline as the CVS (53-x) and Yale (63-x) walks.

**Ruled 2026-07-25 (Rick):** OHS **replaces Yale in place** as the course's
main nonprofit — chosen because its Statement of Financial Position is
single-column with net assets as stacked rows (no restricted/unrestricted
column format), and the walk should **emphasize the lessons of the prework**.
Yale stays **student-facing** as the scale-contrast companion (see lock #2).

## Why OHS teaches the prework

The balance sheet's net-assets section reads like the shop's capital section:
piles, in rows, with names that say why — three unrestricted pieces
(available for operations / board-designated endowment / net investment in
capital assets) plus one donor-restricted line. Every statement prints 2025
and 2024 side by side, so **every account walks** on the page. And the year
itself poses the module's question four ways:

| "How did OHS do in 2025?" | Figure |
|---|---|
| Operating result (before non-operating) | **(2,284,005)** — a deficit |
| Change in net assets | **+823,378** — grew richer |
| Operating cash | **(2,314,012)** — operations used cash |
| Change in cash | **+2,082,341** — cash rose |

All four are true; a reader must be able to say why each frame exists.
(2024 is the mirror: change in net assets +4,011,032 and cash FELL 500,244 —
the sign of ΔCash tells you nothing about the sign of the year.)

## Prework echo map (the plan's spine — each echo lands on a named page)

| Prework lesson | OHS carrier | Page |
|---|---|---|
| The identity ties the sheet | 113,761,647 − 6,549,532 = 107,212,115, both dates | 63-1 |
| Piles, named for their reasons | Net assets in rows; board-designated vs donor-restricted | 63-1, 63-4 |
| Recognition needs a knowable effect (71-2's refusal) | Volunteers: 416,720 hours ≈ 200 FTEs, **not recorded** (note 20 — "no reasonable method of valuation"); in-kind $1,402,144 recorded because priceable; the LID commitment (note 22) real but unestimable | 63-1, 63-3 |
| The entity boundary (ruling 17's lesson) | Note 15: funds at OCF benefiting OHS are **outside the statements** — OCF retains variance power | 63-1 |
| Match-or-reason | Note 3m: exchange revenue (adoption fees — a match) vs contribution (one-sided — pure reason) | 63-3 |
| Statements are sortings (33-1) | Functional expenses: the SAME $41,026,148 sorted twice — by kind AND by purpose | 63-5 |
| Every account walks (M7) | Two-date columns everywhere; note 19's endowment table IS a walk table | all, 63-6 |
| Representation is a choice (75-1) | Board-designated endowment = a choice wearing a restriction's clothes; management defines "operating" (note 3t); depreciation allocated by square footage | 63-4, 63-5 |
| Profitable-but-poorer (34-1, 73-1) | The four-answers table; the 2024/2025 sign flip | 63-2, 63-3 |
| Periods are chosen | Calendar year (vs the shop's season, vs Yale's June 30) | 61-1 |
| Depreciation given, never calculated | 2,588,332 on the functional-expenses statement, asserted | 63-5 |

## Decisions FOR RICK TO LOCK

1. **Replace in place — RULED 2026-07-25.** 61-1, 62-1, 63-1…63-6 rebuild on
   OHS under the same page numbers. Chains and the 71-1 back-link survive.
2. **Yale's new home.** Yale stays student-facing (ruled), so it needs new
   numbers. **Proposed: 64-1…64-6, an optional branch** titled as "the same
   architecture at $59 billion," reached from 63-6 alongside the main chain
   to 71-1 (two forward buttons on 63-6: *Continue* → 71-1, *Optional: Yale at
   scale* → 64-1; 64-6 chains back → 71-1). Mechanics: git-mv + title/nav
   edits only; Yale page content otherwise untouched.
3. **Page cut: six walk pages, same numbers.** Proposed suite below —
   the functional-expenses statement gets its own page (63-5), and the
   liquidity lesson folds into 63-6 with the architecture close. Alternative:
   a seventh page separating liquidity from the close. **Recommend six.**
4. **The walk's question cards.** Two, in the 53-x/63-x idiom: the **cash**
   card on 63-2 ("Cash rose $2.08M — did OHS have a good year?") and the
   **four-answers** card on 63-3/63-4 ("How did OHS do in 2025?" — the
   module's central card). **Recommend both.**
5. **The volunteers beat placement.** The strongest single beat in the
   document (note 20). Proposed: 63-1's "What's NOT on this statement" step
   (with the OCF boundary and, briefly, the LID commitment), reprised in
   61-1's intro framing. Alternative: its own short page. **Recommend the
   63-1 step.**
6. **Indirect-method reading of the cash statement.** OHS's CFS starts from
   change in net assets and adjusts (unlike the shop's channel sort). Teach
   it as: *the adjustments UNDO the no-cash gives and the not-yet-cash
   earnings* — the reconciliation of 73-1, run in reverse, as the statement
   itself. No direct-method reconstruction. **Recommend.**
7. **What gets waved off, by name.** Split-interest agreements, beneficial
   interests in trusts, deferred compensation, fair-value levels: read the
   labels, state the idea in one sentence each (promises with names —
   e.g., the Nancy J. Mathews note: $6,000/month through 2050), chase none
   of them. The "we won't chase this" move is itself the lesson (aggregation
   has a floor for outsiders — 74-2's lesson).
8. **ERTC beat.** The $2,913,362 Employee Retention Tax Credit line: a
   one-time item sitting inside operating revenue — the label a careful
   reader must catch before comparing years. One step on 63-3, no tax-law
   detour. **Recommend keep.**
9. **61-1 and 62-1 rebuild scope.** 61-1: new intro draft (mission measured,
   not profit — 12,478 pets placed, 97% live-release rate, note 2's metrics
   as color; what the prework gave you; the four-answers question posed).
   62-1: the three-column statement map rebuilt on OHS's FOUR statements
   (functional expenses joins the map). Companion doc
   `Design-Docs/Module-6-Intro-Draft.md` gets rewritten (OHS edition) for
   Rick's ruling alongside this plan.
10. **Lint carve-out.** The 6x NFP vocabulary carve-out (net assets, donor
    restrictions) must cover the rebuilt 63-x (same filenames — should carry
    over) AND the renamed Yale 64-x files. Verified at build, extended
    named-file style if needed; no new vocabulary classes.
11. **Numbers canon.** Statement faces are canon. Known document wrinkle:
    note 17 prints releases 6,189,518 vs the statement's 6,189,517 — a $1
    discrepancy in the published PDF. Canon = **6,189,517**. (Noted in the
    data check so nobody "fixes" it backward.)

## Prototype rulings (2026-07-25, Rick, on `mockup-ohs-statement-map.html`)

The Statement Map prototype was built and click-ruled the same day (Ringer run
`ohs-statement-map`, three rounds, checks in `Accounting Pre-work/M6-ohs-build/`).
These govern 61-1/62-1 and the walk's shared vocabulary:

P1. **The first teaching point is the structure of the statements** and the
    definitions of the elements. Definitions are FORMAL: Assets — *economic
    benefits owned or controlled by OHS*. Liabilities — *obligations to
    sacrifice economic benefits in the future*. Net assets — the difference
    (A − L = Net Assets).
P2. **61-1 is much shorter than drafted**, and the Statement Map appears
    SOON after landing — the map is the module's front door, not a page-two
    reveal.
P3. **Terminology bridges on every statement title**: Statement of Financial
    Position IS a balance sheet; Statement of Activities is analogous to the
    income statement; the cash flow statement is the same statement under the
    same name.
P4. **Statement of Functional Expenses reads "expenses broken down by kind
    and by function."** Never "what the money did" — expenses may be incurred
    by taking on a liability or by using an existing asset, not only by
    spending money. The two views are "by kind" and "by function."
P5. **Uniform totals**: Total Liabilities renders in the same font, size,
    and style as Total Assets and Total Net Assets — never visually
    subordinate.
P6. **Expandable lines**: the map carries the FULL detail of every statement
    behind expandable rows (verdict on the prototype: "fantastic").
P7. **The cash-flow panel names its method**: the operating section uses the
    indirect method — it reconciles the change in net assets to the
    operating cash flow.

## The page suite (proposed)

### 61-1 Module 6 Introduction (rebuild, telling mode, single view — SHORT)
Per ruling P2: a brief landing — the turn (you built the shop's statements;
now read a stranger's), OHS in two or three sentences of mission color, and
straight on to the map. The four-answers question and the prework-carryover
inventory move into the walk pages. Chain: Back → 53-6 · Forward → 62-1.

### 62-1 A Nonprofit Statement Map (rebuild from the ruled prototype)
`mockup-ohs-statement-map.html` graduates into the course page (the 71-2
mockup-graduation workflow): two balance-sheet snapshots flanking the three
explainer panels, full statement detail behind expandable rows, terminology
bridges, formal definitions on the section headers, uniform totals, the
releases row as the zero-sum transfer, both walk lines tying the columns,
and the indirect-method note on the cash panel (rulings P1–P7). First
teaching beat: the structure of each statement and the element definitions.

### 63-1 The Statement of Financial Position (~6 steps)
| Step | Beat |
|---|---|
| 0 | One column, two dates. The identity ties both: 113,761,647 − 6,549,532 = 107,212,115 (and 2024's ties too). "Net assets" = the difference, wearing its earned name |
| 1 | Read the asset labels: cash, receivables — including bequests receivable 3,812,163 and the note receivable 1,371,617 (a promise with a name: $6,000/month through 2050). Promises, priced and discounted |
| 2 | Investments 37,453,436 and property 61,294,513 — most of OHS is not money |
| 3 | The liabilities are small (6,549,532): claims on a shop that mostly owes promises of care, not payments |
| 4 | **The piles**: net assets in rows — available for operations 10,144,704 / board-designated endowment 14,395,813 / net investment in capital assets 61,090,468 / with donor restrictions 21,581,130. Names that say why — the Reasons tab, grown up |
| 5 | **What's NOT on this statement**: 416,720 volunteer hours (≈200 FTEs) — real, essential, unrecorded: no reliable price, so recognition refuses (the 71-2 move). The OCF funds (note 15) — real money for OHS's benefit, outside the boundary. The LID commitment — real, unestimable, unrecognized |

### 63-2 The Cash Question (~5 steps)
| Step | Beat |
|---|---|
| 0 | QUESTION CARD: Cash walked 3,932,294 → 6,014,635 (+2,082,341). Did OHS have a good year? (Commit before reading on) |
| 1 | The statement's three channels: operating **(2,314,012)** / investing +3,216,793 / financing +1,179,560. Operations USED cash |
| 2 | The indirect method read the prework's way: start at +823,378 and UNDO — the no-cash gives (depreciation +2,588,332; unrealized gains −3,893,029), the not-yet-cash promises (bequests receivable up), the timing of payables. The 73-1 reconciliation, run as the statement itself |
| 3 | Where the cash actually came from: selling investments (8,811,390 sold vs 4,720,415 bought) and restricted gifts in financing. Classification follows the claim |
| 4 | Answer the card: cash up ≠ good year — and 2024 proves the converse (best year recently, cash DOWN 500,244). The sign of ΔCash tells you nothing about the sign of the year |

### 63-3 The Statement of Activities (~6 steps)
| Step | Beat |
|---|---|
| 0 | Two columns = **two piles' walks** run side by side (without / with donor restrictions), then the total. Not a format to decode — two accounts walking |
| 1 | Operating revenues read by match-or-reason: exchange revenue (adoption fees, program fees 8,551,991 — matched, value both ways) vs contributions 10,662,292 and legacies 10,586,160 (one-sided — pure reason). Note 3m says it the course's way |
| 2 | The releases row: +6,189,517 / (6,189,517) / **—**. A transfer between piles when promises are kept — no new money, total column zero. The restricted pile gives; the free pile receives |
| 3 | Read the labels before comparing years: ERTC 2,913,362 — one-time money inside operating revenue. In-kind 1,402,144 — recognized because priceable (the volunteers, again, are not here) |
| 4 | **The operating line: (2,284,005)** — the day-job ran a deficit. Then non-operating: the endowment's return above the spending draw (+3,107,383) carries the year to **+823,378** |
| 5 | QUESTION CARD (the module's center): "How did OHS do in 2025?" — the four answers, each tied to its statement line, each true in its frame |

### 63-4 The Net Assets Question (~5 steps)
| Step | Beat |
|---|---|
| 0 | Walk each pile: without 87,289,882 → 85,630,985 (fell — the deficit year lived here); with 19,098,855 → 21,581,130 (rose — new promises outran kept ones); total +823,378. The walk ties each pile; the identity ties the sheet |
| 1 | Open the restricted pile (note 16): three kinds of promises — purpose 165,205 / time 7,708,941 / perpetuity 13,706,984. The Lulu Madison Fund: a time restriction that EXPIRED in 2025 — watch a promise finish |
| 2 | **Board-designated endowment 14,395,813 = a choice wearing a restriction's clothes** (note 18: the Swigert fund, the building fund, the $1,890 Susan Carey cat advancement fund). The board can undesignate; donors' restrictions it cannot touch. 75-1's lesson, audited |
| 3 | "Net investment in capital assets" 61,090,468: not spendable, not restricted — just the buildings' value, fenced for the reader's honesty |
| 4 | INFER (the 74-x move): from the two balance sheets alone, could you tell a deficit happened? (No — only the piles' walks, given by the activities statement, reveal which pile fell and why) |

### 63-5 What the Money Did — the Statement of Functional Expenses (~5 steps)
| Step | Beat |
|---|---|
| 0 | A statement neither CVS nor the shop ever showed: the SAME 41,026,148 of expenses, sorted **twice at once** — by kind (rows) and by purpose (columns). 33-1's sorting lesson, squared |
| 1 | Read the rows: salaries 22,565,764 (more than half — care is people), depreciation 2,588,332 (given, as always), feed/shelter/supplies, surgical & lab |
| 2 | Read the columns: five named programs (Sheltering & Adoptions 18.7M, Community Veterinary 8.0M, …, Humane Law Enforcement 1.1M) vs Management & General 3.9M and Fundraising 4.3M |
| 3 | TASK: program vs supporting — 32,805,920 vs 8,220,228, exactly 80%. The ratio every donor site quotes, computed from the matrix by the student |
| 4 | The honest caveat: allocation is a choice (note 3o — depreciation by square footage, salaries by time estimates). The sort is lawful, and it is chosen. Representation, again |

### 63-6 How Much Can OHS Spend? — and the Full Architecture (~6 steps)
| Step | Beat |
|---|---|
| 0 | The reader's last question: 107M of net assets — can OHS spend it? |
| 1 | The liquidity note (note 4) walked as pile-fencing: financial assets 46,632,619, minus the board's own fences (quasi-endowment 14,395,813 — a choice), minus donors' fences (endowment 13,111,142, annuity assets), plus next year's approved draws → **16,971,708 available within one year** |
| 2 | Scale it: ~5 months of expenses. A 107M organization with 5 months of ready money — and that is healthy, because the fences are the mission |
| 3 | The endowment's own walk (note 19's table, read as-is): 23,571,202 + gifts + returns − appropriations = 27,506,955. A walk table, printed by the auditors |
| 4 | The full architecture: four statements, one organization — position flanks, activities and functional expenses explain, cash flows explains the hardest column. Every prework lesson named as it appears |
| 5 | Close + chain: *Continue* → 71-1 (Module 7). *Optional* → 64-1: the same architecture at $59 billion (Yale) |

### 64-1…64-6 Yale at Scale (renamed, content untouched — lock #2)
The existing Yale walk, renumbered, reframed by one added sentence of intro
on 64-1: same architecture, three decimal places more zeros. 64-6 chains
→ 71-1.

## Data & verification

- **`ohs-fy2025-data.js`** (NEW, repo root): both dates of the SFP; the
  activities statement's full two-column body; the functional-expenses
  matrix (rows × columns, both years' totals); the CFS; note tables 4
  (liquidity), 16 (restriction kinds), 18 (board designations), 19
  (endowment walk), 20 (in-kind); the mission metrics used by 61-1.
- **Check harness** (`Accounting Pre-work/M6-ohs-build/checks/`,
  Ringer-run): identity at both dates; every statement column foots; the
  functional-expenses matrix ties row-wise AND column-wise to 41,026,148;
  CFS channels sum to +2,082,341 and tie 3,932,294 → 6,014,635; activities
  columns cross-foot to +823,378 and to each pile's balance-sheet walk;
  liquidity note recomputes to 16,971,708; note 16 sums to 21,581,130;
  note 18 to 14,395,813; note 19 walks tie both years; in-kind sums to
  1,402,144; investment-return splits tie to the statement lines (1,757,289
  operating; 3,107,383 non-operating = 3,837,035 − 729,652); the four-answers
  figures asserted verbatim. Target ~120+ assertions, M7-style.
- The $1 note-17 wrinkle asserted EXPECTED (statement face canon — lock #11).

## Build order & review gates

1. Rick locks this plan + the rewritten Module-6-Intro-Draft (OHS edition).
2. Data port + check harness (Ringer worker; verbatim check output kept).
3. Yale pages renamed to 64-x (mechanical; carve-out + nav verified; both
   flow checks green).
4. Pages rebuilt 61-1 → 63-6, one at a time, each: build (worker) → static
   check → `bash lint-language.sh` → live click-through on serve.py (8765)
   → commit on `graph-teach-wip`.
5. Rick's click-through; RAG docs (module-6 pair) and Learning-Objectives
   rewritten after the module stabilizes; Yale RAG docs re-pointed to 64-x.
6. M7 untouched; 71-1's Back target stays 63-6.

## Out of scope

- Any change to the OHS PDF's figures (statement faces are canon, lock #11).
- The M7 graph board on OHS data (revisit only after this walk ships, if
  ever — no mockup scheduled).
- Assessment pages; index.html/view.html wiring (blocked on the standing
  M7 placement decision, which now includes where 64-x appears).
