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

**Ruled 2026-07-09: NO recast of the past season.** The closed season's statements are never
re-priced with a hypothetical salary. The salary treatment is entirely **prospective** — going
forward, salary is an expense — because **the deal rests on expectations about the future**, not
on last season. The forward-looking beat is Freddie's own back-of-envelope: *what if the
ramped-up shop does $10,000 of revenue a month?* (napkin locked; see Outside capital below).

#### Tutorial 4.2 — stage plan (approved 2026-07-09: click-hunt, the one MCQ, and the
student-computed napkin bottom line all confirmed by Rick)

**One idea:** the same hands wear two hats. Pay for the bench work is an **expense** of the
shop; a draw is an **owner move** that no amount of would change the season's income. The deal
will pay each hat separately — and what the salaried future could earn is an expectation, not
a record.

**What stays OUT of 4.2:** the $20,000, the 70/30 split, and the human-capital theme — those
are 4.3/4.4's discoveries. 4.2 ends with the napkin's $5,000/month hanging in the air.

**Page cut: two pages.**

*`42-1` — the missing wage (draw vs salary).*
1. Freddie, reading the Income Statement off the map: the season generated $2,640 — "Who did
   the repairs? … What did the shop pay for that work?" The student is invited to **click the
   expense line that covers the summer's labor** on the real Expenses view (workbook engine,
   33-1's click-the-line idiom). Every expense click answers no — that's parts / rent / the
   gear's season share. **Ruled 2026-07-10 (Rick, click-through): all five options shown
   upfront, including "There is no such line"** — no delayed reveal (supersedes the draft's
   affordance-appears-after-a-miss). **Felt absence:** the shop's biggest input cost the shop
   nothing.
2. "But I took $600 out." The bridge statement beside the Income Statement, draw highlighted:
   the draw sat in WITHDRAWN and on the bridge — never in Expenses (M3 taught this; now it
   does its work). Check question (the one MCQ of the page): *if the owner had drawn $1,200
   instead of $600, what would net income have been?* → **$2,640, unchanged.** A draw of any
   size never touches income — so a draw cannot be pay for work.
3. Name the two hats: at the bench, an **employee**; on the Operating Agreement, an **owner**.
   Part-time, one person wore both and only the owner hat was paid. A ramped-up, full-time
   shop must pay the bench like any other cost — a **salary, an expense**. Same person, two
   roles, two treatments.

*`42-2` — the napkin (expectations are not records).*
4. Freddie's proposal in dialogue: salary $2,000/month for the bench. Then his question:
   *what if the ramped-up shop does $10,000 a month?* The napkin builds line by line
   (revenue − parts 20% − rent − salary − replacement tools & equipment), and the **student
   computes the bottom line** ($5,000) themselves — typed entry, house calc-input idiom.
5. The guard rail, in Freddie's voice: he has no interest in re-pricing last season — the
   statements record what happened, and no salary happened. The napkin is an **expectation**;
   nothing on it is a recorded number; the season's statements never promised any of it.
   Close on the hook: months like that would be worth sharing — *on what terms?* (4.3/4.4.)

**Interaction notes:** the napkin is visually distinct from the workbook idiom (never xl-rows;
plain card — treatment through the usual shared-styles approval). Glossary: Salary/Wages (pay
for work — an expense), Draw (an owner move — never an expense), plus carry-forward defs.
Page files: `42-1-The-Missing-Wage.html`, `42-2-Freddies-Napkin.html` (Rick's veto open on the
latter — trivial to rename before build). Building 42-1 also gives 41-2's frontier next-card
its Continue button, resolving the dead-end flag from the 4.1 student walkthrough.

### The most important asset isn't recorded (book vs market, writ large)

What the investor is actually buying — the skill at the bench, the name on Whalley Ave, the
customer relationships — appears **nowhere** on the map the student just laid out. 35-4 posed
this; the laptop's book-below-eBay in 33-2 was the small first sighting. The investor's price
minus book Members' Capital ($4,500) *is* the gap. Frame per the pedagogy skill: the exclusion is
a **feature of the recognition convention** (an evidence test, drawn by people with interests),
never "we can't measure it" — and the gap is **path dependence**, not "the books are out of date."

### Outside capital — deal structure (ruled 2026-07-09)

- **Freddie contributes $20,000 to the shop** (a contribution into the LLC, not a purchase of
  the owner's stake). Post-contribution books: Cash $620 + $20,000 = $20,620; total assets
  $24,500; Contributed $2,290 + $20,000 = $22,290; Generated $2,210 unchanged.
- **The Operating Agreement is redone off-stage** — a line of narration, no on-page OA scene.
- **Profit split (revised 2026-07-09, supersedes the initial 50-50):** the repair person draws
  a **salary of $2,000/month** as an employee; after salary, profits split **70/30
  owner/Freddie** — sized so Freddie takes about $1,500/month on the napkin scenario below.
- **They ramp up activity and expect revenue growth** — Freddie invests in what the shop
  becomes, not in the season the statements record.
- **The emphasis (Rick, verbatim intent):** the biggest asset of the shop from Freddie's point
  of view is the **human capital of the repair person — not on the balance sheet.** Freddie
  walks the balance sheet's asset list, line by line, thinking about what each item is and
  concluding the thing he's actually buying appears nowhere on it.
- Note the deal terms themselves do the module's teaching: the salary separates the two roles
  (4.2's payoff), and $20,000-for-30%-of-a-$4,500-book-business prices the unrecorded asset
  (4.3's payoff). How the play-out is staged across 4.2–4.4 is under discussion.

**Freddie's napkin (locked 2026-07-09)** — the forward-looking back-of-envelope, per month,
explicitly an expectation and never a statement (not rendered in the workbook idiom):

| | |
|---|--:|
| Revenue | $10,000 |
| Parts (~20% of revenue — the season's own ratio, $1,200/$6,020) | −$2,000 |
| Rent | −$650 |
| Salary | −$2,000 |
| Replacement tools & equipment | −$350 |
| **Profit** | **$5,000** |

Split: **$3,500 owner / $1,500 Freddie** (70/30 after salary). Freddie's $20,000 comes back in
about 13 such months. The replacement-tools line carries gear costs as cash, an investor's
framing — acknowledge in passing that a napkin is not a statement (nothing on it is a recorded
number; the season's statements never promised any of it).

**Implied price of what's not on the books ≈ $42,000 (locked 2026-07-09, supersedes $15,500):**
$20,000 buys 30% ⇒ the whole business is priced ≈ $66,700 ⇒ the owner's 70% ≈ $46,700, backed
by $4,500 of book ⇒ the unrecorded assets — overwhelmingly the repair person's human capital —
are implicitly priced around **$42,000, roughly nine times everything on the balance sheet.**
Discoverable from the deal's own arithmetic; never pre-told.

### The wider world's words — DROPPED (ruled 2026-07-09)

The GAAP-literacy aside is **dropped from the course entirely.** "Retained Earnings,"
"Contributed Capital," and the outside world's name for the A−L difference appear **nowhere**
in any module — this supersedes the 2026-07-07 plan (Module-2-Design.md) that had them
surviving as an M4 aside. The course's names are Members' Capital / Contributed / Generated,
full stop. 15-2's "already know some accounting?" rabbit-hole (which treats the name's
historical instability without writing the banned words) is the only nod the course gives.

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

1. **Module arc** — proposed: 4.2 owner/employee (prospective salary + Freddie's $10k/month
   napkin) → 4.3 Freddie walks the asset list / the human-capital reveal → 4.4 the deal, the
   signing, the post-contribution balance sheet, module ends. Tutorial and page counts TBD.
2. **The $10k/month illustration's parameters** — expense assumptions for Freddie's
   back-of-envelope (parts share, rent, salary $2,000; anything else?) — to be locked with Rick.

*Resolved 2026-07-09:* investor = **Freddie**, speaking character, course vocabulary; 4.1 =
**two pages** (`41-1` the ask, `41-2` the walk); closing equipment lines = **carrying amounts
only**, no depreciation sub-note. Deal structure: **$20,000 contribution** into the LLC; OA
redone off-stage; **salary $2,000/month**, then **profits 70/30 owner/Freddie**; **no recast of
the past season** (prospective only; the deal rests on future expectations); **Freddie's napkin
locked** (10,000 − 2,000 parts − 650 rent − 2,000 salary − 350 replacement tools & equipment =
5,000/month; split 3,500/1,500; ~13-month payback); **module ends at the signing** (post-deal:
Cash $20,620 · Assets $24,500 · Contributed $22,290 · Generated $2,210 — and no human-capital
line); **implied price of what's not on the books ≈ $42,000** (locked: $20,000 for 30% prices
the whole ≈ $66,700; the owner's 70% ≈ $46,700 against $4,500 of book — the unrecorded assets
dwarf the recorded ones ~9:1); **GAAP vocabulary dropped from the course entirely**.
