# Module 7 — Graph Walk — Conversion Plan (7x-x)

**Status: DRAFT — awaiting Rick's approval. This document, once approved, is the
build contract, and approving it locks the page cut (ruling 7).**

Drafted 2026-07-21 on `graph-teach-wip`. Source: the four pages in
`Bike-Repair-Graph-Teach/` (`bike-forward`, `bike-cashflows`, `bike-outsider`,
`bike-draw`) plus the rulings in `Module-7-Graph-Teach-Evaluation.md`
("Presentation rulings 2026-07-21," rulings 1–11, and the resolved ruling
list). Target: the course page format — course chrome + the graph lab board
(look ruling), vanilla JS, step-based `render()`, one teaching arc per page.
All figures are Bike-Repair canon, already verified against the workbook.

## Governing rulings (locked 2026-07-21 — restated for the builder)

1. **Layout:** beginning balance sheet column LEFT of the graph; ending
   balance sheet column RIGHT. The ending column is **live**: it starts at the
   June-1 values, its lines and totals move as items are recognized, and it is
   **christened** "Balance Sheet — August 31, 2026" only when the last entry
   posts (titled "Where we stand" until then).
2. **No closing, ever.** The ending column's Generated line accumulates
   implicitly (0 → 2,640; revised 2026-07-22 — see ruling 17, June 1 is all-Contributed). No merge, no reset, no closing vocabulary, no
   journal-entry explainers (reserved for the future accounting-terms module).
3. **Member's Capital in three pieces** on the ending column: Contributed /
   Generated / Withdrawn.
4. **Dotted enclosures:** Revenue and Expense nodes sit inside a dotted
   enclosure marking them subparts of **Generated**; the whole canvas groups
   into three labeled regions — **ASSETS, LIABILITIES, REASONS**. (73-1
   extends the same idea to an asset: Cash's three channels in a dotted
   "Cash, in detail" enclosure.)
5. **Matches first, then Reasons:** the walk opens with the three
   assets-and-liabilities-only entries, whose arrows never leave the A/L
   regions; everything after needs the Reasons region.
6. **Accumulating arrows:** one arrow per account pair; posting more updates
   the TOTAL on the arrow (Revenue→Cash 120 → 5,500; Parts→Parts Used
   10 → 1,200); hover shows constituents by name from the job records.
7. **Give/receive language only.** Arrows run from the account that GAVE to
   the account that RECEIVED. The words debit/credit never appear.
8. **The walk, not "laws of motion":** every account walks — beginning + what
   came in − what went out = ending; the identity ties the sheet, the walk
   ties each account.
9. **Cross-highlighting** spans balance-sheet columns ↔ nodes ↔ arrows.
10. **Nodes appear when needed** — no node before its first use; the three
    region enclosures render faintly from the start so the geography precedes
    the population.
11. **No Freddie; no 7x lint carve-out; full scrub.** The outsider is a
    generic prospective investor. 7x pages must pass `lint-language.sh` under
    the strict M1–4 rules — which means the **internal code vocabulary renames
    too** (node type `'equity'` → `'reason'`, legend "Equity" → "Reasons",
    etc.): the linter scans whole lines, not just prose.

## The give/receive captions (the 14 entries — the plan's core scrub)

Arrow directions are UNCHANGED from the source pages (the giver end is what
the source called the credit); only the language changes. Draft captions,
Rick-editable at click-through:

| # | Entry | Arrow (giver → receiver) | $ | Draft caption |
|---|---|---|---|---|
| 1 | Parts restock | Cash → Parts | 1,200 | Cash gives; the Parts shelf receives its restock (June–August). |
| 2 | New tool | Cash → Tools & Equip | 400 | Cash gives; the tool stand receives one new tool. |
| 3 | Card payoff | Cash → Credit Card | 2,030 | Cash gives; the card's claim receives full settlement — the startup balance paid off. |
| 4 | Dana's repair | Repair Revenue → Cash | 120 | The work gives — Dana R. pays $120 for a drivetrain job; Cash receives. |
| 5 | 18 more repairs | (same arrow, total → 5,500) | +5,380 | The season's other eighteen repairs — the arrow's total grows; hover for the names. |
| 6 | Dana's parts | Parts → Parts Used | 10 | The shelf gives up $10 of parts for use in Dana's repair; Parts Used receives. |
| 7 | The season's parts | (same arrow, total → 1,200) | +1,190 | Parts consumed by all the other repairs — the arrow's total grows. |
| 8 | Ridgeline | Repair Revenue → Receivables | 300 | The work gives — job finished Aug 28, billed net 15; the right to collect receives. |
| 9 | Smith's frame | Repair Revenue → Customer Deposit | 220 | The work gives the delivered frame; the deposit's claim receives its settlement — no longer owed, now earned. |
| 10 | Rent | Cash → Rent | 1,950 | Cash gives $650 × 3; the season's use of the space is what it bought. |
| 11 | Depreciation — tools | Tools & Equip → Depreciation | 160 | The tools give a season of their working lives; Depreciation receives the season's share. |
| 12 | Depreciation — fixtures | Fixtures → Depreciation | 40 | Same reading, the fixtures' share. |
| 13 | Depreciation — laptop | Laptop → Depreciation | 30 | Same reading, the laptop's share. |
| 14 | The draw | Cash → Withdrawn | 600 | Cash gives; the owner's take is recorded in its own pile — Withdrawn, never an expense. |

(Ruling 8's creative case for reference wording elsewhere: when something is
bought on credit, the liability account gives its promise to an outsider.)

## The page suite (FOR RICK TO LOCK — approving this plan locks it)

Seven pages: 71-1 intro → 72-1/72-2 the forward walk → 73-1 cash → 74-1/74-2
the outsider → 75-1 the draw. The outsider's 13 source stages split at the
natural seam (statement releases | edge-building); every page lands in the
course's 4–9 step range. Titles plain and Rick-renameable.

### 71-1 Module 7 Introduction (~6 min, single view)

Built from **`Module-7-Intro-Draft.md`** — the companion artifact drafted
after this plan is approved, in the Module-5/6 intro format: the turn (the
course has built statements and read statements; this module shows the single
picture both were views of), the vocabulary introductions (node = an account's
change; arrow = give → receive; the enclosures; the walk), what the module
re-uses (identity, match-or-reason, the piles, articulation), the two-attempt
frame (build the graph forward; then infer it from statements alone), and
M7-LOs. Nav: Back → 63-6; forward → 72-1.

### 72-1 The Season as a Graph (~8 min) — bike-forward stages 0–4 re-staged, 9 steps

| Step | Source | Beat |
|---|---|---|
| 0 | st 0 | The two sheets: beginning column = June 1 (4,710 / 2,250 / 2,460, piles shown); ending column identical, titled "Where we stand"; canvas empty except three faint region enclosures. Narration: the season happens between these columns; every account walks. |
| 1 | st 3 (part) | The first match — restock: Cash and Parts nodes born; arrow Cash→Parts 1,200; both columns' lines move; identity re-ties. Both ends visible on the sheets — matched, no Reason needed. |
| 2 | st 3 (part) | The other two matches — the tool (Tools node, 400) and the card payoff (Credit Card node, 2,030 — the claim settled). Three arrows, and the REASONS region still empty: some of the season explains itself. |
| 3 | st 1 (part) | The first Reason — Dana's $120: the Generated enclosure opens inside REASONS, Repair Revenue born; arrow Revenue→Cash 120. Cash received — what gave? The work. That takes a Reason. Ending Generated line moves 0 → 120: the pile is born from the Company’s own first repair. |
| 4 | st 1 (rest) | The season at scale: the same arrow's total grows 120 → 5,500 (hover: the eighteen names); the repair pair completes — Parts Used born, Parts→Parts Used grows 10 → 1,200. Every repair is that pair: the work gives, the shelf gives. |
| 5 | st 2 | Revenue that touched no new cash: Ridgeline (Receivables born; Revenue→Receivables 300) and Smith (Revenue→Customer Deposit 220 — the deposit settled by delivery). Revenue now runs $520 ahead of collections — remember that number. |
| 6 | st 3 (rest) | Running the shop, and the owner's take: rent (Cash→Rent 1,950) and the draw (Withdrawn born; Cash→Withdrawn 600 — its own pile, never an expense). |
| 7 | st 4 | The season's share of the gear: three gives of a season's use — Tools→Depreciation 160, Fixtures→Depreciation 40, Laptop→Depreciation 30. No cash moves. The income statement will one day show one 230 line; the graph remembers the split. |
| 8 | new | The christening: all 14 entries posted; the ending column ties (4,500 − 0 = 4,500; Contributed 2,460 / Generated 2,640 / Withdrawn (600)) and is christened **Balance Sheet — August 31, 2026**. Every account's walk ties. Chain → 72-2. |

### 72-2 The Statements in the Graph (~5 min) — bike-forward stages 5–7 minus closing, 4 steps

| Step | Source | Beat |
|---|---|---|
| 0 | new | Orientation: the finished graph holds the whole season; the Generated enclosure holds exactly what the income statement summarizes — a sorting made visible, nothing moved. |
| 1 | st 6 | Income statement, filled from the graph: the student types Revenue (6,020 — the enclosure's give-arrows), Expenses (3,380), Net income (2,640). Course three-strike pacing on the inputs. |
| 2 | st 6 | The Member's Capital walk, filled from the Reasons region: 2,460 + 2,640 − 600 = 4,500, pile by pile — beginning, what came in, what went out, ending. The walk ties. |
| 3 | st 7 | One summer, one graph: the statements are readings OF the graph. Loose thread, stated plainly: over a profitable season, cash FELL 680. Chain → 73-1. |

### 73-1 Where the Cash Went (~7 min) — bike-cashflows, 5 steps

| Step | Source | Beat |
|---|---|---|
| 0 | st 0 | Profitable — and poorer in cash: NI 2,640 against Cash 1,300 → 620 on the flanking columns. |
| 1 | st 1 | Cash, in detail: the Cash node opens into a dotted enclosure of three channels — Operating, Investing, Financing (the subpart idea, applied to an asset). TASK: classify all seven cash arrows into the channels (key: repairs + restock + rent → Operating; the tool → Investing; card payoff + draw → Financing). Wrong assignments bounce with the source page's explanations, scrubbed. |
| 2 | st 2 | The shop's cash-flow statement, read off the channels: +2,350 / −400 / −2,630 = −680, tying 1,300 → 620 — with the twist stated: the card payoff and the draw sit in Financing because classification follows the claim settled, not the cash's feel. |
| 3 | st 3 | Reconcile: why operating cash ≠ net income — sub-steps with graph highlights: 2,640 + 230 (the three no-cash gives of use) − 300 (Ridgeline, earned not collected) − 220 (Smith, collected last period) = 2,350. |
| 4 | st 4 | The season fully told: one graph; the balance-sheet pair, the income statement, the capital walk, and the cash statement all read off it. Chain → 74-1: now lose the graph and keep only the statements. |

### 74-1 The Outsider's Graph (~7 min) — bike-outsider stages 0–4, 6 steps

Layout note: the releases ARE the columns arriving — both flanks start EMPTY.

| Step | Source | Beat |
|---|---|---|
| 0 | Overview | The offer: a prospective investor (no name) may buy into the shop; the owner keeps fixing bikes. You will never see the ledger — only statements, arriving in releases. Build the best lawful graph at each release; tag every arrow **fact / inference-under-assumption / open**. |
| 1 | 1 · Totals | Release 1 — three lines in each column (totals only). QUIZ: how much did the business earn? (Correct: cannot be determined — at this aggregation, earnings, contributions and draws are indistinguishable.) |
| 2 | 2 · BS | Release 2 — the full balance sheets fill both columns; ten Δ-nodes appear, all facts, already summing to zero; the capital side arrives as ONE line. QUIZ: the card fell 2,030 — did the shop USE the card this summer? (Cannot be determined — a net change merges gross flows. Held open.) |
| 3 | 3 · IS | Release 3 — the income statement panel arrives: 6,020 − 3,380 = 2,640. But the capital line moved only +2,040. QUIZ: what explains the 600 gap? (The owner moved something in or out of capital that is not income — Member's Capital's walk has more ways in and out than income alone.) |
| 4 | 4 · Capital | The owner's reply — the capital statement: the ending column's one capital line unmerges into the three pieces (Contributed +0; Generated +2,640 — the walk ties again; Withdrawn shown as **?**). INFER: Withdrawn = 600 from the capital walk (2,040 = 0 + 2,640 − ?). |
| 5 | 4 · First edge | Draw the first arrow: Cash→Withdrawn 600. QUIZ: direction, and what is still assumed? (Cash gives to the owner's pile — but no statement has said the take was CASH; tag: inference.) Chain → 74-2. |

### 74-2 The Ledger Behind the Statements (~8 min) — bike-outsider stages 5–12, 7 steps

| Step | Source | Beat |
|---|---|---|
| 0 | 5 · CFS | Release 4 — gross flows at last: collections 5,500 lands as a fact arrow into Cash; the card line reads *paid off* (step 2's open question settled: no new charges); the draw's cash-ness is confirmed — its arrow turns solid fact. Facts move the boundary. |
| 1 | 520 wedge | Revenue 6,020; cash collected 5,500. INFER: Revenue→Receivables = 300 (Receivables' walk: began 0, ended 300). Tag: inference — supported, not proven. |
| 2 | Deposit | $220 still unexplained — exactly the deposit's fall. QUIZ: earned or refunded? (Earned — a refund would show in the cash statement and does not; 5,500 + 300 + 220 = 6,020 ties.) |
| 3 | Through-flows | Four near-factual arrows: parts used 1,200 and bought 1,200 (a flow-through leaving the shelf's walk flat), rent 1,950 on both statements, the tool 400 from investing. One aggregate left: the single 230 depreciation line. |
| 4 | Reversal | Walk the Tools account to recover its share: began 1,200, bought 400, ended 1,440 — the walk only ties if depreciation took **160** (INFER). Fixtures (40) and the laptop (30) follow; 160 + 40 + 30 = 230 ✓. An aggregation reversed, using nothing but the walks. |
| 5 | Complete | Twelve arrows; every walk ties; every arrow tagged. This is the best graph an outsider can build — no release would refine it much. |
| 6 | Finale | The reveal: toggle the shop's actual ledger — the single 5,500 arrow fans into nineteen named repairs; about fifty entries stand behind the twelve arrows. **Both graphs are lawful; both produce exactly these statements; only one is what happened.** Chain → 75-1. |

### 75-1 The Draw Question (~6 min) — bike-draw, 5 steps

| Step | Source | Beat |
|---|---|---|
| 0 | st 0 | Who paid the mechanic? The shop "earned" 2,640; the only money the bike-fixing owner received is the 600 draw — which never touched the income statement. Two honest ways to draw the same summer. |
| 1 | st 1 | Predict before the arrow moves — four predictions with per-answer feedback: net income (falls to 2,040), ending capital (invariant — different doors, same room), ΔCash (invariant — reclassification moves no money), operating cash (falls to 1,750 — a wage is an operating payment). |
| 2 | st 2 | One arrow moved, two worlds: toggle D (the draw, as reported) ↔ W (a 600 owner's wage). The ENDING COLUMN re-renders per world — in W, Generated ends 2,210 and Withdrawn never appears; total capital 4,500 either way. Side-by-side statements, hover-linked to the graph. |
| 3 | st 3 | What would a mechanic actually cost? The wage becomes editable (default 3,900): at a market wage the summer runs at a loss. What the shop "really earned" depends on a choice the statements didn't have to disclose. |
| 4 | st 4 | Representation is a choice — and the reader must see through it. The module's close; terminal page (module-complete/assessment wiring out of scope). |

## Page mechanics

- **Course chrome (look ruling):** tut-header (title, "Module 7 · ~N min",
  glossary + restart), course fonts/palette, `shared.css` linked and untouched,
  step machine (`var step`, `TOTAL_STEPS`, full re-render, Back/Next, chain
  button at the last step), `window.devFill`, glossary overlay with per-page
  terms, `dev.js` last. Page-specific styles in per-page `<style>` prefixed
  `m7-`, dark-mode-safe.
- **The lab board:** the SVG canvas + rail port as a shared library —
  `graph-lab.js`, a NEW file in the repo root (factored once from the four
  pages' duplicated `BLAAccounting`/`BLARouter` + renderers; `shared.js`
  untouched). New capabilities the rulings require: the three region
  enclosures + nested Generated enclosure; the banded layout (regions aligned
  with the BS sections of the flanks — proposal in ruling 1, exercised here);
  live BS columns bound to posted entries with per-line move highlights and
  the christening state; accumulating arrow totals with hover constituents;
  appear-on-first-use nodes; fact/inference/open arrow styling (74-x);
  channel-split enclosure (73-1); world toggle (75-1); cross-highlight maps
  spanning flanks ↔ nodes ↔ arrows.
- **Internal vocabulary rename (lint):** node types become `asset` / `liab` /
  `reason` (with `sub:'generated'` for the enclosure members); every literal
  "equity," "debit," "credit," "closing," "law of motion," "retained
  earnings," "dividend," "stock," "limited partner," "Business Language
  Analytics" is gone from shipped files — prose AND code strings. 7x pages
  must pass `bash lint-language.sh` with NO new carve-out.
- **Tasks:** the source pages' quiz (options + per-distractor feedback),
  numeric-infer (input + tolerance + hint + proof), classify (channel
  assignment), predict (choice + feedback), and fill-in-the-blank statement
  mechanics all port into the course's three-strike pacing; step chips remain
  gated by task completion (course precedent: gates exist where a page asks
  for work).

## Data & verification

- One shared data file `bike-graph-data.js` (NEW): the 14 entries, node
  definitions, June-1/Aug-31 balance-sheet lines, the classification key, the
  reconciliation chain, the ledger-fan constituents (from
  `bike-repair-job-records.js` naming), and the two-world edge sets — factored
  from the four source pages, values unchanged.
- An executable check (`checks/check-m7-data.py`, Ringer-run like the M6
  data-port): entries sum to every canon figure (June-1 and Aug-31 sheets tie;
  Revenue 6,020 = 120+5,380+300+220; expenses 3,380 = 1,200+1,950+230; NI
  2,640; cash −680 = 2,350−400−2,630 by the classification key; capital walk
  2,460+2,640−600 = 4,500; per-account walks tie: Tools 1,200+400−160 = 1,440,
  Fixtures 750−40 = 710, Laptop 610−30 = 580, Parts 200+1,200−1,200 = 200,
  Receivables 0+300 = 300, Deposit 220−220 = 0, Card 2,030−2,030 = 0), plus
  the world-W assertions (NI 2,040; Generated 2,210; capital 4,500 invariant;
  CFO 1,750). The graph-teach repo's test suite is the reference.

## Build order & review gates

1. Rick approves this plan (page cut locks; titles/captions Rick-editable at
   click-through) and the companion `Module-7-Intro-Draft.md` is drafted for
   his ruling (the 71-1 source).
2. `bike-graph-data.js` + check harness (Ringer worker, verbatim output kept).
3. `graph-lab.js` factored and extended (regions, live flanks, accumulation,
   tags, channels, worlds); one dev harness page for board verification in a
   real browser (not shipped).
4. Pages one at a time, 71-1 → 75-1, each: build (worker) → static check →
   `bash lint-language.sh` (strict — no 7x carve-out) → live browser pass
   (every step, tasks exercised for real, devFill, dark scheme, chain links
   CLICKED through) → commit by name on `graph-teach-wip`; push per Rick's
   standing instruction on this branch. `Rick` branch untouched.
5. Rick's click-through, batched or per page at his preference.
6. M3/M4/M5/M6 pages untouched; both existing flow checks stay green.

## Out of scope

- The future accounting-terms module (debit, credit, roll forward,
  reconciliation, T accounts, journal entries) — repeatedly reserved.
- index.html / view.html wiring; module-complete/assessment pages; RAG docs
  (post-build, per the new corpus pattern); publishing.
- Any change to the four source pages in `Bike-Repair-Graph-Teach/` (they stay
  as the reference implementation) or to the sibling `graph-teach` repo.
