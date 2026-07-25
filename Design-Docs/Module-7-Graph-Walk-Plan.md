# Module 7 — Graph Walk — As-Built Record (7x-x)

**Status: AS BUILT — rewritten 2026-07-25 to describe the module as it ships.**
The 2026-07-21 draft plan was approved, built, and then matured through Rick's
click-throughs; the deltas are recorded as presentation rulings 12–17½ in
`Module-7-Graph-Teach-Evaluation.md`, which remains the ruling authority. This
document records what stands on `graph-teach-wip` today. (The original draft
survives in git history at this path, pre-`66b469d`.)

## The module at a glance

**Eight pages**, chained 71-1 → 71-2 → 72-1 → 72-2 → 73-1 → 74-1 → 74-2 → 75-1
(75-1 is terminal; module-complete/assessment pages remain out of scope). The
module is NOT yet wired into `index.html`/`view.html` — reachable only by
direct URL or by the chain from 63-6. Emailable single-file bundle:
`Module-7-Complete.html`, rebuilt by `build-m7-complete.py` (8 pages, ~2.3 MB).

| Page | Title (as presented) | Views/steps |
|---|---|---|
| 71-1 | Module 7 Introduction | single telling view |
| 71-2 | The Formation of the LLC | 11 formation views |
| 72-1 | The Season as a Graph | 13 event views |
| 72-2 | The Statements in the Graph | 4 readings |
| 73-1 | Where the Cash Came From and Where It Went *(filename unchanged: `73-1-Where-the-Cash-Went.html`)* | 5 readings |
| 74-1 | The Outsider's Graph | 6 releases |
| 74-2 | The Ledger Behind the Statements | 6 steps |
| 75-1 | The Draw Question | 4 questions |

## Canon (ruling 17 — June 1 is all-Contributed)

June 1: Contributed **2,460**, Generated **0** — pre-formation records were the
member's personal records; Generated's pile is born at Dana's $120 repair, the
Company's own first work. Aug 31: Contributed 2,460 / Generated 2,640 /
Withdrawn (600) → Member's Capital 4,500. World W: Generated ends **2,040**.
The old 2,290/170 split is retired everywhere; if a page shows it, that is a
bug. (The course-wide sweep landed 2026-07-22, `55bbc1c`.)

## Governing rulings — as matured

Rulings 1–11 (2026-07-21) stand as drafted: flanking balance-sheet columns
with the live, christened ending column; no closing anywhere; Member's Capital
in three pieces; dotted enclosures (Generated inside REASONS; the three
regions); matches first, then Reasons; accumulating arrows with hover
constituents; give/receive language only (no debit/credit anywhere);
cross-highlighting spanning flanks ↔ nodes ↔ arrows; nodes appear on first
use; the WALK vocabulary ("the identity ties the sheet; the walk ties each
account"); no Freddie; strict lint with no 7x carve-out.

The click-through rulings that reshaped the build (full text in the eval doc):

12. **Recognition, not posting; focus graying; one event per beat.** "Posted"
    never appears student-facing; each beat lights only its involved accounts
    and arrows, everything else grays softly. One-event-per-beat splits:
    tool ≠ card payoff, collections ≠ parts consumed, Ridgeline ≠ Smith,
    rent ≠ draw. The three depreciation entries stay one beat (ruled OK).
13. **The recognition ritual** — per-beat buttons Recognize? → Accounts
    Involved → Amounts, Next locked until all three fire. Accounts Involved
    puts the involved accounts on the board *before any amount is known* (new
    nodes wear a `?` badge; both columns outline the lines that will change);
    Amounts lands the arrows and flashes the moved lines.
14. **The cash statement runs both directions** — 73-1's presented title is
    "Where the Cash Came From and Where It Went."
15. **The outsider never sees the ledger** — 74-2's nineteen-repair fan reveal
    is CUT; the reconstruction is built UNCOLLAPSED (real accounts inside
    Generated); the unseen-ledger lesson is prose only.
16. **No market-wage what-if** — 75-1 teaches only the draw-vs-wage
    relabeling; the editable-wage panel is gone.
17. **June 1 is all-Contributed** (canon above).
17½. **The formation opens the module** — the formation exploration graduated
    from mockup to course page 71-2, the module's first board page, where the
    graph format itself is introduced. On 71-2, **Recognize? is a Yes/No
    decision** with corrective chips: Yes is correct on the eight formation
    beats; No is correct on the skill beat, which comes LAST — the refusal
    closes the formation. (The Yes/No form has been offered for 72-1's season
    ritual but is not yet ruled — 72-1 still runs the confirm-style ritual of
    ruling 13.)

## The board format (module-wide, from the formation mockup — `7ad4e71`)

- The graph canvas is labeled **Δ ASSETS / Δ LIABILITIES / Δ REASONS** with
  identity glyphs between the regions (the − and the rotated ‖): the canvas
  reads as the identity's change form.
- Flanking balance-sheet columns; the **beginning column omits Receivables**
  (`renderColumn`'s `omit:['ar']`) so every season page's June-1 column is
  row-for-row the formation page's ending sheet.
- The ending column is live ("Where we stand") and is christened with the
  statement's dated name only at the final view.
- Focus graying, appear-on-first-use nodes with `?` badges during Accounts
  Involved, accumulating arrow totals with hover constituents, fact/inference/
  open arrow styling (74-x), channel enclosure (73-1), world toggle (75-1).

## The give/receive captions (as built, in `bike-graph-data.js`)

| # | id | Arrow (giver → receiver) | $ | Caption |
|---|---|---|---|---|
| 1 | pbuy | Cash → Parts | 1,200 | Cash gives; the Parts shelf receives its restock (June–August). |
| 2 | tool | Cash → Tools & Equip | 400 | Cash gives; the tool stand receives one new tool. |
| 3 | ccpay | Cash → Credit Card | 2,030 | Cash gives; the card's claim receives full settlement — the startup balance paid off. |
| 4 | dana | Repair Revenue → Cash | 120 | The work gives — Dana R. pays $120 for a drivetrain job; Cash receives. |
| 5 | rest | (same arrow, total → 5,500) | +5,380 | The season's other eighteen repairs — the arrow's total grows; hover for the names. |
| 6 | danaP | Parts → Parts Used | 10 | The shelf gives up $10 of parts for use in Dana's repair; Parts Used receives. |
| 7 | restP | (same arrow, total → 1,200) | +1,190 | Parts consumed by all the other repairs — the arrow's total grows. |
| 8 | ridge | Repair Revenue → Receivables | 300 | The work gives — job finished Aug 28, billed net 15; the right to collect receives. |
| 9 | smith | Repair Revenue → Customer Deposit | 220 | The work gives the delivered frame; the deposit's claim receives its settlement — no longer owed, now earned. |
| 10 | rentx | Cash → Rent | 1,950 | Cash gives $650 × 3; the season's use of the space is what it bought. |
| 11 | deprT | Tools & Equip → Depreciation | 160 | The tools give a season of their working lives; Depreciation receives the season's share. |
| 12 | deprF | Fixtures → Depreciation | 40 | The fixtures give a season of their working lives; Depreciation receives their share. |
| 13 | deprL | Laptop → Depreciation | 30 | The laptop gives a season of its working life; Depreciation receives its share. |
| 14 | draw | Cash → Withdrawn | 600 | Cash gives; the owner's take is recorded in its own pile — Withdrawn, never an expense. |
| 15 | wagex | Cash → Owner's Wage | 600 | World W recasts the same $600: Cash gives and Owner's Wage receives. *(75-1 only)* |

The formation's eight entries live inline in 71-2 (see its page section);
their giver on the asset side is Contributed, and the two assumed claims give
INTO Contributed.

## Page-by-page, as built

### 71-1 Module 7 Introduction — single telling view

The turn (the course has built statements and read statements; this module
shows the single picture both were views of), the vocabulary introductions,
what the module re-uses, the two-attempt frame, M7-LOs. Nav: Back → 63-6;
forward → 71-2 ("The Formation of the LLC").

### 71-2 The Formation of the LLC — 11 views (`66b469d`)

The module's first board page: the graph format is introduced by watching the
June 1 balance sheet be born. Both columns start EMPTY (an all-zero company).
Every beat runs the Yes/No ritual (ruling 17½): Recognize? Yes/No →
Accounts Involved → Amounts; wrong answers get corrective chips; Next gated.

| View | Beat | Contributed runs to |
|---|---|---|
| 0 | Opening — the papers are signed; a Company exists and owns nothing yet | — |
| 1 | The member seeds the account: Cash $1,300 in (Cash, Contributed born) | 1,300 |
| 2 | The parts on the shelf, contributed at book: $200 | 1,500 |
| 3 | The repair tools, contributed at book: $1,200 | 2,700 |
| 4 | The laptop from home, contributed at book: $610 | 3,310 |
| 5 | Desk, shelving, rack — Fixtures, contributed at book: $750 | 4,060 |
| 6 | The Right of Use of the space, contributed at book: $650 | 4,710 |
| 7 | The card's claim, ASSUMED: $2,030 — arrow runs INTO Contributed; the member's net put-in shrinks | 2,680 |
| 8 | Smith's deposit, assumed: $220 owed as work | 2,460 |
| 9 | **The skill (LAST — the refusal closes the formation):** Recognize? **No** — the skill is real, but no exchange ever priced it; its own button strip (Recognize? / What would be the purpose? / What amount?) | 2,460 |
| 10 | Christening: **Balance Sheet — June 1, 2026** — 4,710 − 2,250 = 2,460, all Contributed, Generated $0 | 2,460 |

Chain → 72-1 ("Work the season →").

### 72-1 The Season as a Graph — 13 event views

The confirm-style ritual of ruling 13 on every event view (1–11), Next gated
until the beat's three phases complete. One event per beat (ruling 12 splits
applied). The beginning column is row-for-row 71-2's ending sheet.

| View | Beat |
|---|---|
| 0 | The two sheets: June-1 column (4,710 / 2,250 / 2,460); ending column identical, titled "Where we stand"; canvas empty but for the faint Δ regions |
| 1 | The first match — restock: Cash→Parts 1,200; no Reason needed |
| 2 | The second match — the tool: Cash→Tools & Equip 400 |
| 3 | The third match — the card payoff: Cash→Credit Card 2,030 (the claim settled) |
| 4 | The first Reason — Dana's $120: Generated enclosure opens, Repair Revenue born; ending Generated 0 → 120 — **the pile is born from the Company's own first repair** |
| 5 | The season at scale: the same arrow accumulates 120 → 5,500; the fan of the eighteen names shows (insiders may see their own ledger) |
| 6 | The parts those repairs consumed: Parts→Parts Used 10 → 1,200 |
| 7 | Ridgeline: Receivables born; Revenue→Receivables 300 |
| 8 | Smith's frame: Revenue→Customer Deposit 220 — the deposit settled by delivery |
| 9 | Rent: Cash→Rent 1,950 |
| 10 | The owner's take: Withdrawn born; Cash→Withdrawn 600 — its own pile, never an expense |
| 11 | The season's share of the gear (one beat): Tools→Depreciation 160, Fixtures→Depreciation 40, Laptop→Depreciation 30 — no cash moves |
| 12 | The christening: ending column ties (4,500; 2,460 / 2,640 / (600)) and becomes **Balance Sheet — August 31, 2026** |

Chain → 72-2.

### 72-2 The Statements in the Graph — 4 readings

0 orientation (the Generated enclosure holds exactly what the income statement
summarizes — a sorting made visible); 1 income statement filled off the graph
(6,020 / 3,380 / 2,640 — typed inputs, three-strike pacing with hints);
2 the Member's Capital walk filled pile by pile (2,460 + 2,640 − 600 = 4,500);
3 close — one summer, one graph, and the loose thread stated plainly: over a
profitable season, Cash FELL from 1,300 to 620. Chain → 73-1.

### 73-1 Where the Cash Came From and Where It Went — 5 readings

0 profitable — and poorer in cash (NI 2,640; Cash 1,300 → 620); 1 TASK —
classify the seven cash arrows into the three channels (the Cash node opens
into its channel enclosure as you go; wrong picks bounce with explanations);
2 the cash statement off the channels: +2,350 / −400 / −2,630 = −680, with the
twist said out loud — the card payoff and the take sit in Financing because
classification follows the claim being settled; 3 reconcile NI → operating
cash: 2,640 + 230 − 300 − 220 = 2,350, row-click highlights; 4 the season
fully told — all four statements are readings off one picture. Chain → 74-1.

### 74-1 The Outsider's Graph — 6 releases

Both flanks start EMPTY; the releases ARE the columns arriving. Every arrow
tagged fact / inference-under-assumption / open.

| Step | Release / beat |
|---|---|
| 0 | The offer: a prospective investor may buy in; the owner keeps fixing bikes. You will never see the ledger — only statements |
| 1 | Release 1 — summary totals, three lines per date. QUIZ: how much did the business earn? (Cannot be determined) |
| 2 | Release 2 — the balance sheets: ten Δ-node facts, already summing to zero; capital arrives as ONE line. Arrows still unknown |
| 3 | Release 3 — the income statement: 6,020 − 3,380 = 2,640. But capital moved only +2,040. QUIZ: the gap |
| 4 | The owner's reply — the capital statement: Contributed began 2,460, no changes; Generated +2,640 (the walk ties again); Withdrawn shown as **?** — INFER 600 from the walk |
| 5 | Draw the first arrow: Cash→Withdrawn 600. What is still assumed? (No statement has said the take was CASH — tag: inference) |

Chain (gated on the last quiz) → 74-2.

### 74-2 The Ledger Behind the Statements — 6 steps, UNCOLLAPSED (ruling 15)

The income statement names the Generated members, so Repair Revenue, Parts
Used, Rent, and Depreciation appear as real accounts and every arrow runs
between real accounts. No fan, no ledger reveal.

| Step | Beat |
|---|---|
| 0 | Release 4 — the cash statement, GROSS flows: collections 5,500 (fact arrow into Cash); the card line reads *paid off* (release 2's open question settled — no new charges); the draw's cash-ness confirmed. Facts move the boundary |
| 1 | The 520 wedge: Revenue 6,020, cash collected 5,500 — INFER Revenue→Receivables 300 (Receivables' walk: began 0, ended 300) |
| 2 | $220 still unexplained — exactly the deposit's fall. QUIZ: earned or refunded? (Earned; 5,500 + 300 + 220 = 6,020 ties) |
| 3 | The through-flows: parts used 1,200 and bought 1,200 (flow-through, the shelf's walk flat), rent 1,950 on both statements, the tool 400 from investing. One aggregate left: the single 230 line |
| 4 | Reversing an aggregation: walk the Tools account — began 1,200, bought 400, ended 1,440 — the walk only ties if depreciation took **160** (INFER) |
| 5 | Fixtures 40 and the Laptop 30 complete the split (160 + 40 + 30 = 230). Twelve arrows; every walk ties; every arrow tagged. Closing prose: behind this sit dozens of entries you will never see; many ledgers could produce these statements — **the graph you built is the summary the statements can support** |

Chain → 75-1.

### 75-1 The Draw Question — 4 questions (ruling 16: no market-wage what-if)

| Step | Beat |
|---|---|
| 0 | Who paid the mechanic? The shop "earned" 2,640; the only money the bike-fixing owner received is the 600 take, which never touched the income statement. Another lawful way: call the same $600 an owner's wage |
| 1 | Predict before the arrow moves — four predictions with per-answer feedback: net income (falls to 2,040), ending Member's Capital (invariant — different doors, same room), ΔCash (invariant — a relabeling moves no money), operating cash (falls to 1,750 — a wage is an operating payment) |
| 2 | One arrow moved, two worlds: toggle D (the take) ↔ W (the wage). In W the arrow lands inside Generated as Owner's Wage, Withdrawn never appears, Generated ends **2,040**; Member's Capital 4,500 either way. Side-by-side statement table, columns following the active world |
| 3 | Representation is a choice — even inside an honest boundary, with every walk tying, the same summer supports many lawful pictures. Module close; terminal page |

## Engine & data (as built)

- **`graph-lab.js`** (repo root, shared library). Board API:
  `GraphLab.createBoard(svg, data, opts)` with `setRecognized`, `setFocus`
  (focus graying), `setForceNodes` (forced nodes / `?` badges), `setFan`
  (constituent fan on an arrow), `setTags` (fact/infer/open), `setWorld`
  (D/W), `clearHighlight`; `GraphLab.renderColumn(el, data, board, {side,
  omit, title, sub, christened, highlightAccts})` renders the flanking
  balance-sheet columns. Regions + nested Generated enclosure, Δ labels and
  identity glyphs, accumulating totals, cross-highlight maps.
- **`bike-graph-data.js`** — `window.M7_GRAPH`: 17 nodes (Owner's Wage
  included for world W), the 15 entries above, June-1/Aug-31 `bs` (June 1:
  4,710 / 2,250 / Contributed 2,460 · Generated 0), the channel key, `cfs`
  {2,350 / −400 / −2,630 / −680}, the reconciliation chain, the fan
  constituents (nineteen named repairs from the job records), and `worldW`
  {ni 2,040, gen 2,040, cfo 1,750, netCash −680}.
- 71-2 carries its own inline **formation dataset** (nodes incl. Right of Use
  and the never-recognized Repair Skill; the eight formation entries; all-zero
  beginning column).

## Verification stack (`Accounting Pre-work/M7-graph-build/`)

- `checks/check-m7-data.py` — 148 tie-outs on `bike-graph-data.js` (every
  canon figure, per-account walks, world-W assertions).
- `checks/check-m7-page.py` — parametric static page check with the M7
  vocabulary guard (includes `\bclose\b` — overlays use aria-label
  "Dismiss").
- `checks/check-graph-lab.py` — engine check.
- `harness.html` — 50/50 in-browser assertions; serve the harness dir on port
  8766. The course itself serves via `python3 serve.py` (no-cache, port 8765)
  from the v2 root.
- `build-m7-complete.py` (v2 root) rebuilds `Module-7-Complete.html`; it
  strips the lint-tripping `shared.css` lines. Rebuild after ANY 7x change.
- `bash lint-language.sh` — strict, no 7x carve-out — before finishing.

## Open items (not yet built or ruled)

- **index/view wiring** — placement after M6 recommended in the eval doc;
  numbering and roadmap grouping are Rick's call.
- **Yes/No Recognize on 72-1** — offered, awaiting Rick's ruling (71-2 has it;
  72-1 still confirm-style).
- **M7 RAG docs** — none yet; write after the module stabilizes.
- **Module-complete/assessment pages** — out of scope for the build.
- **CMU share refresh** — `graph-teach` branch `rick/yale-module-7` is stale
  (pre-formation-page); refresh copies the current set + runs their npm test.

## Out of scope (unchanged from the draft)

- The future accounting-terms module (the profession's vocabulary — reserved).
- Any change to the four source pages in `Bike-Repair-Graph-Teach/` (they stay
  the reference implementation) or to the sibling `graph-teach` repo's main.
