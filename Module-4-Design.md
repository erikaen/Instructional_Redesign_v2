# Module 4 — Design: *The Angel Investor*

**Status:** Draft v1 (2026-07-09) — 4.1 (the statement map) agreed in design discussion with Rick;
4.2 onward is a sketch carried over from Module-3-Design.md's "Module 4 bridge" section, **not yet
discussed**. A planning doc, not an embedded page. Built in `Instructional_Redesign_v2` (branch
`Rick`) in v2 conventions. Pedagogy defers to the **`accounting-pedagogy`** skill; page/style rules
to **`instructional-shared-styles`**.

**Where it sits.** The pre-work's final module. **M1** the foundations, **M2** the LLC, **M3** the
first operating season and the articulated statement set. **M4 = the angel investor**: an outside
reader arrives, and the same statements the student built from the inside get read from the
outside — first as a connected map (4.1), then for what they leave out (pricing → limited
recognition → outside capital).

**Opens on M3's close** — nothing re-derived:

> August 31, 2026: Assets **$4,500** − Liabilities **$0** = Members' Capital **$4,500**
> (Contributed $2,290 + Generated $2,210). The season's four statements tie out; the books are
> closed. 35-4's hand-off has already posed the question: *would an outside reader see the whole
> picture?*

**File naming (v2).** `4X-Y-Title.html` = Module 4, Tutorial X, Page Y (parallel to `31-`…`35-`).

---

## The hook (why an outside reader changes things)

An **angel investor**, impressed by the season, wants the shop to go full-time — and to invest,
must price the business. The first thing the investor asks for is exactly what any outside reader
asks for: **the financial statements.**

That request forces a shift of chair. In M3 the student built the statements *from the books
outward* — every number traceable to a workbook tab they made themselves. The investor never sees
the workbook. **An outside reader receives only the statement set** — no Reasons trail, no
drill-downs into the parts shelf, no dated cash ledger. What the reader *does* get is the
statements' structure: two snapshots, and the statements that carry the story between them.

So M4 opens by laying the statements out **in that reader's format**: the map (4.1). Everything
after — what the map shows an investor, and what it structurally cannot show — builds on having
seen the set whole.

---

## Tutorial 4.1 — The Statement Map  (`41-`)  ★ agreed 2026-07-09

**One idea:** the four statements are one connected picture. The accounting identity fixes two
snapshots in time; the other statements explain the path of change for lines on those snapshots.
The student saw this stated in 35-3 (articulation, three matching questions beside the workbook);
here they finally **see it laid out as a picture** — the "different format."

**Interaction-design source:** `Instructional-Redesign/Module-3/06-structure-activity.html`
(the team's other repo) — **pattern only**. Two balance sheets stand as left/right columns; the
explaining statement appears between them on the highlighted line's path; the income statement
nests inside the bridge statement's Net income row. Rebuilt as a v2 vanilla stepped page (no
React/Babel), Bike-Repair numbers, v2 vocabulary.

**Rulings locked 2026-07-09 (Rick):**

1. **Pattern from 06, everything else from here.** Terminology is v2's; numbers are Bike-Repair's.
2. **Just the map — no quizzing.** 06's MCQ gates drop out; 35-3 already did the "which statement
   explains it?" matching. 4.1 is a guided walk, Next-driven.
3. **Statement detail as constructed in Bike-Repair.** The income, cash-flow, and bridge statements
   appear with the exact line items `BR_WB.registerStatementSheets()` renders (see contract below).
   The balance sheets show the **real workbook line items** — do not adapt 06's Cash/Non-Cash
   aggregation.
4. **Opening snapshot is June 1, 2026** (MC $2,460) — the season the statements bridge.
5. **Three paths, as in 06:** Cash, Members' Capital, Net income. Other changes (the liabilities'
   fall to zero, the receivable appearing) stay visible on the sheets and get a pointing note —
   their stories were told in M3 — but no fourth path is walked. (Confirmed 2026-07-09: the
   liability movement needs no special handling — "just a credit card bill that got paid.")
6. **The investor speaks** — a dialogue character (boxes like Anna's), not a mere framing device.
   And the investor **uses the course's vocabulary** (Members' Capital, Contributed, Generated) —
   they do not arrive speaking outside terms.

### Terminology port (06 → v2)

| 06-structure says | This build says |
|---|---|
| Equity / Total Equity | **Members' Capital** |
| Retained Earnings | **Generated** |
| Contributed Capital | **Contributed** |
| Statement of Changes in Equity | **Statement of Changes in Members' Capital** |
| Distributions to owners | **Owner's draw** |
| A − L = Equity identity bar | **A − L = Members' Capital**, shown holding at both dates |

("Equity"/"equities", "Net Assets", "the residual" as a label, "accounting equation" — all remain
banned student-facing; see repo `CLAUDE.md`.)

### The three paths (all numbers locked — never re-derive)

- **Cash:** $1,300 → $620, **down $680** — explained by the **Statement of Cash Flows**:
  Operating **+$320** · Investing **−$400** · Financing **−$600**.
- **Members' Capital:** $2,460 → $4,500, **up $2,040** — explained by the **Statement of Changes
  in Members' Capital**: 2,460 + 2,640 − 600 = 4,500. Contributed ($2,290) never moves — the
  whole path runs through Generated (170 → 2,210).
- **Net income:** **$2,640** — the bridge statement's biggest line, explained by the **Income
  Statement**: 6,020 − 3,380, opened *from* the Net income row so the nesting is seen, with the
  same "two distinct statements in actual reporting" clarification 06 carries.

### Stage plan (indicative; Next-driven, no gates)

1. **The ask.** The investor asks for the statements. The set is handed over in reading format:
   the two balance sheets stand side by side — June 1 and August 31 — with A − L = Members'
   Capital holding at both dates. The snapshots differ; the sheets alone don't say how or why.
2. **The Cash path.** Cash highlighted on both sheets (other lines faded, 06's idiom); the
   Statement of Cash Flows appears between them.
3. **The Members' Capital path.** MC highlighted; the bridge statement between the sheets.
4. **The Net income path.** The Income Statement opens from the bridge's Net income row.
5. **The whole map.** Everything at once: two snapshots, three explaining statements, each hung on
   the line it explains. Articulation re-named from 35-3, now *seen*. A pointing note covers the
   rest: every other line that moved (Credit Card → $0, Customer Deposit → $0, the receivable
   appearing) has its story in these same statements — the map walks three paths, not because the
   others can't be walked.

*Pages (ruled 2026-07-09):* **two.** `41-1` — the ask: Freddie's request, the hand-over, the two
snapshots standing side by side with the identity holding at both dates. `41-2` — the walk: the
three paths, then the whole map; one continuous interaction, unfragmented.

### Balance-sheet line items on the map (from the closed workbook — M3 labels, look-continuity)

| | June 1, 2026 | August 31, 2026 |
|---|--:|--:|
| Cash | 1,300 | 620 |
| Accounts Receivable | — | 300 |
| Right of Use | 650 | 650 |
| Parts | 200 | 200 |
| Tools & Repair Equipment | 1,200 | 1,440 |
| Fixtures | 750 | 710 |
| Laptop | 610 | 580 |
| **Total Assets** | **4,710** | **4,500** |
| Credit Card | 2,030 | 0 |
| Customer Deposit | 220 | 0 |
| **Total Liabilities** | **2,250** | **0** |
| Contributed | 2,290 | 2,290 |
| Generated | 170 | 2,210 |
| **Members' Capital** | **2,460** | **4,500** |

Closing equipment lines are carrying amounts after the season's depreciation (1,600+400−160 /
750−40 / 610−30) — matching the closed workbook the student left in 35-4. **Carrying amounts
only** (ruled 2026-07-09): no "after this season's depreciation" sub-note on the equipment lines.
Category labels are the M3 workbook's (per look-and-feel continuity, the reference is the **last
depiction shown**, which is now M3's closed workbook).

### Statement line items (as `registerStatementSheets()` renders them — reuse, don't redraw)

- **Income Statement · June–August 2026:** Revenue 6,020 · Parts used 1,200 · Rent used 1,950 ·
  Depreciation — tools, equipment & fixtures 200 · Depreciation — laptop 30 · Total expenses
  3,380 · **Net income 2,640**.
- **Statement of Cash Flows:** Operating +320 (Repairs collected +5,500 · Parts bought −1,200 ·
  Rent paid −1,950 · Credit-card payoff −2,030) · Investing −400 (New repair tool) · Financing
  −600 (Owner's draw) · Net change −680 · Cash, June 1 1,300 · **Cash, August 31 620**.
- **Statement of Changes in Members' Capital:** Opening 2,460 · + Net income 2,640 · − Owner's
  draw 600 · **Closing 4,500**.

---

## Tutorials 4.2+ — sketch only (carried from Module-3-Design.md's bridge; NOT yet discussed)

Both threads below were **seeded in M3** and must not be re-derived — only surfaced.

### Owner vs employee (the draw becomes a salary)

Part-time, the owner takes **draws** and his labor is unpaid, so the season's $2,640 *overstates*
what the business earns on its own. Full-time (the investor's proposal), he'd draw a **salary** —
an **expense** where the draw was a distribution. *Same person, two roles, two treatments*: the
payoff of M3's "a draw is not an expense," extending M2's person-vs-operation split to
**owner vs employee**. Going on payroll finally puts a number on the labor that built the shop.

### The most important asset isn't recorded (book vs market, writ large)

What the investor is actually buying — the skill at the bench, the name on Whalley Ave, the
customer relationships — appears **nowhere** on the map the student just laid out. 35-4 posed
this; the laptop's book-below-eBay in 33-2 was the small first sighting. The investor's price
minus book Members' Capital ($4,500) *is* the gap. Frame per the pedagogy skill: the exclusion is
a **feature of the recognition convention** (an evidence test, drawn by people with interests),
never "we can't measure it" — and the gap is **path dependence**, not "the books are out of date."

### Outside capital

What it means for Contributed / Generated when outside money comes in; pricing; the deal.
**Investor numbers are deferred** — set in conversation with Rick, anchored so the arithmetic
stays part-time-scale readable.

### The wider world's words (GAAP-literacy aside — vehicle ruled out; existence open)

"Retained Earnings," "Contributed Capital," and the outside world's name for the A−L difference
were slated to survive **only** as an M4 aside (locked 2026-07-07, see Module-2-Design.md).
**Ruled 2026-07-09: the investor is NOT the vehicle** — the investor speaks the course's
vocabulary throughout. Whether the aside still happens somewhere in M4 (and in what form), or is
dropped entirely, is an open question. Note 15-2's "already know some accounting?" rabbit-hole
already treats the name's historical instability without writing the banned words.

---

## Cast

- **You** — the protagonist, continuous from M1–M3.
- **Anna** — City Cycle's former bookkeeper, the guide since M2.
- **Freddie** — the angel investor, new, M4's entrance. **A speaking character** (dialogue boxes,
  like Anna's), ruled 2026-07-09; speaks the course's vocabulary, never outside terms.

---

## Build conventions (v2)

Plain **HTML/JS — no React, no Babel** (06-structure is a React page; the pattern is ported, not
the code). **Lucide** icons, no emoji. The `.page` › `.prework-wrap` › `.phase-title` shell;
`shared.css`/`shared.js` from repo root. **`shared.css` / `shared.js` / `bike-repair-workbook.js`
are append-only** — the map layout will need new CSS (two balance-sheet columns, line
highlighting/fading, the between-columns statement panel, the nested income statement); propose a
**numbered additions plan** (light + dark) for approval per `instructional-shared-styles` before
touching any of them. Statement rendering should **reuse the existing `xl-row` statement sheets**
(look-continuity: the statements must look like the tabs the student built in M3), repositioned
inside the map's panels rather than redrawn in a new idiom. `bash lint-language.sh` must print
clean before any session ends.

---

## Open questions

1. **Module arc** — is it 4.1 map → 4.2 owner/employee → 4.3 unrecorded asset & book-vs-market →
   4.4 outside capital/pricing, or a different cut? Tutorial and page counts TBD.
2. **Investor numbers** — the price, the stake, the deal mechanics (deferred; Rick conversation).
3. **Does the GAAP-vocabulary aside still happen at all** (the investor as vehicle is ruled out;
   the 2026-07-07 lock had "Retained Earnings"/"Contributed Capital" surviving only as an M4
   aside — dropped, or relocated?).

*Resolved 2026-07-09:* investor = **Freddie**, speaking character, course vocabulary; 4.1 =
**two pages** (`41-1` the ask, `41-2` the walk); closing equipment lines = **carrying amounts
only**, no depreciation sub-note.
