# Graph-Teach → a new prework module — evaluation (2026-07-21)

**Status: DRAFT — for discussion.** Rick asked for an evaluation of how the four
pages in `Bike-Repair-Graph-Teach/` might become another module of the prework.
This document evaluates the material, inventories where it fits canon and where
it collides, and proposes a module shape with the decisions marked for Rick.
Nothing here is settled except the dated rulings below.

**Branch ruling (2026-07-21):** this work develops on **`graph-teach-wip`** —
never directly on `Rick`, which the CMU team is using heavily. The
`Bike-Repair-Graph-Teach/` pages and this document live on that branch.

## What the four pages are

Four self-contained vanilla-JS/SVG pages from the Business Language Analytics
course, field-testing its directed-graph pipeline on the bike shop. Nodes are
**Δ-accounts** (the change in each account over the season); edges are entries
(from credited node to debited node, weighted by dollars); the accounting
identity appears as Σ node Δ = 0; statements are read off the graph. A shared
in-file library (`BLAAccounting`, `BLARouter`) does the account algebra and
edge routing; a chip stepper gates progress; a right rail carries the step
cards, quizzes, and statements.

1. **`bike-forward.html` — "A Summer of Repairs — Build & Close" (Page 1 of 2, 8 stages).**
   The season built forward: the June-1 balance sheet as the starting position,
   then the 14 aggregate entries posted in narrative batches (Dana's $120 repair
   and its $10 parts pair; the 18 other cash repairs; Ridgeline's receivable and
   Smith's deposit-becomes-revenue; restock/rent/tool/card-payoff/draw; the
   three depreciation entries). Closing is taught as a **graph merge** — the
   temporary nodes collapse into Generated, closing edges become self-loops and
   vanish — with a journal-entry explainer alongside. Then fill-in-the-blank
   statements are read directly off the graph.
2. **`bike-cashflows.html` — "Where Did the Cash Go?" (Page 2 of 2, 5 stages).**
   ΔCash splits into three channel nodes — CFO / CFI / CFF — and the student
   **classifies all seven cash flows** (answer key = the workbook's cash-flow
   statement: +2,350 / −400 / −2,630). Then the indirect reconciliation
   NI → CFO (2,640 + 230 − 300 − 220 = 2,350) — the same walk as the course's
   What-Cash-Missed page, now performed on the graph.
3. **`bike-outsider.html` — "The Outsider's Graph" (Backward 1 of 2, 13 stages).**
   The strongest page pedagogically. An outsider considering buying into the
   shop never sees the ledger — only **statements, released in stages** (summary
   totals → balance sheets → income statement → the owner's capital statement →
   cash flows). At each release the student builds the best lawful graph,
   tagging every edge **fact / inference-under-assumption / open**, and solving
   three numeric inferences (Withdrawn = 600 from the capital identity; revenue
   into receivables = 300; tools depreciation = 160 by reversing the aggregated
   230). Quizzes teach what each aggregation level *cannot* say (capital growth
   ≠ earnings; a net change merges gross flows). Finale: the outsider's
   twelve-edge graph against the shop's actual ledger — the single $5,500
   collections edge fans into 19 named repairs — "both graphs are lawful; both
   produce exactly these statements; only one is what happened."
4. **`bike-draw.html` — "The Draw Question" (Backward 2 of 2, 5 stages).**
   Two lawful representations of the same summer: world D (the $600 draw, as
   reported) and world W (the owner paid a $600 wage). Predict-then-verify on
   four figures (net income falls to 2,040; total capital invariant; ΔCash
   invariant; CFO falls to 1,750), side-by-side statements hover-linked to the
   graph, and a market-wage coda (an editable wage, default $3,900, under which
   the shop runs at a loss). Closing lesson: **representation is a choice** —
   and the reader must see through it.

## Fit — why this belongs in the course

- **It is the course's own data.** Every figure ties to Bike-Repair-End.xlsx
  canon exactly (June-1 4,710 / 2,250 / 2,460 with Contributed 2,290 and
  Generated 170; revenue 6,020 = 120 + 5,380 + 300 + 220; parts 1,200; rent
  1,950; depreciation 230 = 160 + 40 + 30; NI 2,640; cash −680; CFS
  2,350 / −400 / −2,630; capital → 4,500). Even the customer names in the
  ledger-fan finale (Dana R., Marcus T., Westville Bike Share) come from the
  course's `bike-repair-job-records.js`. Withdrawn is correctly modeled as
  permanent — never closed — matching the piles. The graph-teach repo carries
  tests asserting the numbers against the workbook.
- **It deepens the course's keystone ideas rather than adding new topics.**
  Double-entry becomes *visible* (every edge has two ends — a match and a
  reason are one arrow); articulation becomes *mechanical* (three statements
  read off one graph); the aggregation lessons (what a net change hides; what
  each release adds) are the deep version of M5/M6's "read the labels";
  the draw/wage recast executes the exact question 42-1 posed ("who did the
  repairs?") and 47-1 priced (the napkin salary).
- **The outsider stance completes the arc.** Modules 1–4: build the records
  from inside. Modules 5–6: read other entities' statements from outside.
  This material: return to the shop as an outsider and discover precisely what
  statements can and cannot tell you — the course's two halves meeting on its
  home example. The finale ("only one is what happened") is the honest
  epistemology of everything M5/M6 practiced.
- **Telling-mode native.** Locked-step progression, predict-then-verify,
  classification and numeric-inference tasks with per-distractor feedback —
  exactly the M5+ assessment posture, and stronger interaction than anything
  in 53-x/63-x.

## Collisions with canon — the honest inventory

1. **Debits and credits.** Dr/Cr vocabulary and "debit-nature" logic appear
   throughout (~20 uses per page). The prework has deliberately never
   introduced journal-entry vocabulary ("describe effects, not entries";
   double-entry is named but Dr/Cr never are). Two options: (a) make this the
   module's vocabulary turn — the prework's last formal names, taught through
   the graph (an edge runs from the credited account to the debited account —
   direction first, names second); (b) strip Dr/Cr and speak only of edge
   direction ("value flows from → to"), which the graph makes natural. **Rick
   rules.** (a) is defensible as the bridge to any later accounting course;
   (b) keeps the prework's purity.
2. **Closing.** The standing ruling is that closing is never mentioned in the
   prework, and the course's own story is that Revenue/Expenses are a *sorting*
   of Generated's rows — the Reasons tab never resets. `bike-forward` teaches
   closing outright (temporary accounts, closing entries in the explainer,
   reset-to-zero language). The merge framing is genuinely elegant — closing as
   collapsing temporary nodes into Generated, self-loops vanishing — and is the
   best candidate the course has ever had for introducing closing *honestly*.
   But it is a ruling reversal, module-scoped at minimum. Alternative: reframe
   the merge as "the season's rows gather into Generated" (a *view* operation —
   matching the sort-not-move story) and never say "close." **Rick rules; this
   is the biggest canon decision in the material.**
3. **"The three laws" / "law of motion."** The BLA course's framework, used
   ~5–8 times per page (the capital identity and beginning + inflows − outflows
   = ending are called laws of motion). The prework's counterparts are the
   accounting identity and match-or-reason. The law-of-motion idea is
   load-bearing for the outsider inferences (Withdrawn, the depreciation
   reversal) and worth keeping *as an idea*; the "three laws" branding is
   another course's voice. Options: adopt as new M7 vocabulary with the
   bike-shop antecedents named, or reword to course language ("every account's
   walk: beginning + what came in − what went out = ending"). **Rick rules.**
4. **The outsider's identity.** The pages frame a "limited partner"
   due-diligence and a "partnership-style" LLC. The course already *has* the
   outsider: **Freddie**, whose offer ended Module 4 under consideration, whose
   standing questions were the missing wage and the walk, and whose napkin
   priced the owner's labor. Recasting `bike-outsider` as Freddie's due
   diligence and `bike-draw` as Freddie's recast turns the collision into the
   course's best continuity move — the deal thread left open in M4 becomes the
   engine of the new module. One reconciliation needed: the market-wage coda
   defaults to $3,900/season while Freddie's napkin used $2,000/month
   ($6,000/season); pick one figure or stage the difference deliberately.
   **Recommend: Freddie, and reconcile the wage.**
5. **Corporate stray vocabulary.** "Retained earnings," "dividends," "stock"
   appear in generic explainer text (the pages themselves note the LLC
   difference — "no stock and no retained earnings … three equity nodes
   instead of two"). A pass to scrub or antecedent-tag every instance to
   course vocabulary is needed either way. "Equity" as the node-type label is
   fine post-M5 but needs the 7x lint carve-out extension.
6. **Mode and voice.** No Anna, no glossary overlay, no tut-header; the voice
   is the BLA course's ("Business Language Analytics · Field Example"), with
   second-person analyst framing. The eyebrows/branding must go; the analyst
   voice is actually right for the Freddie recast.
7. **Look and feel.** A complete design system of its own (B612/IBM Plex,
   parchment palette, SVG canvas + right rail + chip stepper) — nothing shares
   shared.css. The SVG graph engine and router are the asset; porting them into
   the v2 idiom wholesale would be expensive and pointless. Recommendation:
   keep the graph board + rail as the module's "lab bench" (precedent: the
   workbook facsimile engine is also its own idiom inside course pages), and
   reskin only the chrome — tut-header, fonts/colors to the course palette,
   glossary overlay, Module 7 header sub, course nav buttons. Factor the
   duplicated in-file library into one shared `bla-graph.js` (a new file —
   shared.css/js stay untouched).

## Presentation rulings (2026-07-21, Rick)

Settled in discussion; these govern the module's pages and supersede the
corresponding open items in the ruling list below.

1. **Layout — flanking balance sheets.** The beginning balance sheet renders in
   a column to the LEFT of the directed graph; the ending balance sheet in a
   column to the RIGHT. This is the course's 3-up statement-map grammar with
   the graph in the explaining position. (Proposal noted, not yet ruled: align
   the graph's regions horizontally with the corresponding BS sections so a
   line of sight reads beginning value → what happened → ending value.)
2. **The ending balance sheet is LIVE.** It starts at the June-1 values and its
   lines and totals change as items are recognized, converging on the
   August-31 statement; the identity re-checks throughout. Purpose: this first
   page shows what happens *going forward* in the accounting process. A second
   page follows later in which the student is GIVEN the statements and must
   guess the edges (the backward/outsider walk).
3. **No closing — anywhere.** Nothing merges, nothing resets, "closing" is
   never said. The Generated balance on the ending balance sheet simply
   changes as revenue and expense edges post; the accumulation is implicit and
   visible. (This retires the biggest canon collision; the course's
   no-closing ruling stands intact.)
4. **Member's Capital shows in three separate pieces** on the ending balance
   sheet: Contributed / Generated / Withdrawn, per canon presentation.
5. **Dotted enclosures for subpart structure.** Revenue and Expenses render as
   separate nodes enclosed by a dotted line marking them as subparts of
   Generated. The same enclosure idea groups the whole graph by the prework's
   categories: **Assets, Liabilities, Reasons**. (Refinement proposed, not yet
   ruled: Generated as a region rather than a node, with a running total badge
   on the enclosure border; Contributed and Withdrawn as sibling nodes inside
   Reasons.)
6. **Transaction ordering — matches first, then Reasons.** The walk starts
   with transactions that touch only assets and liabilities (the parts
   restock, the tool, the card payoff — three entries whose arrows never leave
   the A/L regions), then moves to the ones that need Reasons. The
   match-or-reason rule becomes a visible property of the picture.
7. **Accumulating arrows.** Posting a piece of an aggregate (one cash sale,
   then the rest) updates the TOTAL on the existing arrow — never a second
   arrow between the same pair. Exactly two pairs accumulate (Revenue→Cash
   120 → 5,500; Parts→Parts Used 10 → 1,200); hover shows the constituents by
   name from the job records.
8. **Edge-direction language — give and receive.** Arrows read from the
   account that GAVE to the account that RECEIVED. The Parts reading is the
   model — the Parts asset account gives up parts for use as Parts Used. The
   language always works but may take creativity: buying on credit, the
   liability account "gives" a promise to an outsider. (Instructor-side
   grounding: the receiving end is what the profession calls a debit, the
   giving end a credit.)
   **Ruled 2026-07-21: the words "debit" and "credit" do NOT appear in this
   module.** The walk speaks give/receive only. A separate future module will
   cover the profession's terms — debit, credit, roll forward, reconciliation,
   T accounts, journal entries, and the like — so this module strips every
   Dr/Cr trace from the ported prose, including the journal-entry explainers
   (whose content is likewise reserved for the terms module).
9. **Cross-highlighting extends to the flanks.** Hovering an ending-BS line
   highlights its node and edges (and the beginning-BS line); the existing
   statement↔graph highlight maps extend to both balance-sheet columns.
10. **Nodes appear when they are needed.** No node renders before its first
    use — Receivables at Ridgeline's billing, Withdrawn at the draw, the
    Revenue/Expense nodes at the first recognition that needs them — matching
    the course's piles-born-when-first-used canon.
11. **"Law of motion" is retired; the course word is the WALK.** (Ruled
    2026-07-21.) Every account walks — beginning, plus what came in, minus
    what went out, ending — and the requirement that accounts add up is said
    the course's way: **the identity ties the sheet; the walk ties each
    account.** No new coinage, no umbrella "laws" branding: the BLA "three
    laws" bundle maps to three names the course already owns — the accounting
    identity, double-entry/match-or-reason, and the walk. Scrub guide for the
    ported prose:
    - "Use Tools' own law of motion to recover its share" → "Walk the Tools
      account: began 1,200, bought 400, ended 1,440 — the walk only ties if
      depreciation took 160."
    - "capital's law of motion has more terms than income" → "Member's
      Capital's walk has more ways in and out than income alone."
    - "Generated +2,640 — your law of motion restored" → "Generated +2,640 —
      the walk ties again."
    - "the three laws don't care" → drop the branding; where needed: "the
      identity holds and every walk ties — regardless of the entity's
      clothes."
    ("Roll-forward," the profession's term, is reserved for the future
    accounting-terms module — see ruling 8.)

## Proposed module shape (working proposal — every choice Rick's to lock)

Working assumption: **Module 7**, after Module 6 — the course comes home to
the shop with reader's eyes. (Alternative placement between M4 and M5 keeps
all bike-shop material contiguous, but the outsider pedagogy presumes the
statement fluency M5/M6 build, and the Freddie-due-diligence recast lands
best *after* the reading modules. Recommend after M6.)

| Page | Source | Content |
|---|---|---|
| 71-1 Module 7 Introduction | new | Telling-mode welcome: the two views of one summer (builder's graph / reader's graph); the vocabulary turn (nodes, edges, Δ-accounts; Dr/Cr if ruled in; "law of motion" if ruled in); M7-LOs |
| 72-1 The Season as a Graph | bike-forward stages 0–4 | June-1 position; the 14 entries posted in batches; every entry an edge with two ends |
| 72-2 The Season Gathers into Generated | bike-forward stages 5–7 | The merge (named "closing" only if ruled in); statements filled in off the graph |
| 73-1 Where the Cash Went | bike-cashflows | Split ΔCash; classify the seven flows; reconcile NI → CFO |
| 74-1 Freddie's Graph | bike-outsider | The releases; fact/inference/open; the three inferences; the ledger-fan finale |
| 74-2 The Draw Question | bike-draw | Two lawful worlds; predict-then-verify; the market wage; representation is a choice |

Assessment per the M5/M6 pattern. Titles plain and Rick-renameable. Page
grouping is elastic (72-1/72-2 could merge; the walk could run 71→74 as five
pages).

## Decisions for Rick (the ruling list)

1. ~~**Debits/credits**~~ — **RESOLVED 2026-07-21** (presentation ruling 8):
   give/receive is the edge-direction language, and the words debit/credit do
   not appear in this module at all — the profession's terms (debit, credit,
   roll forward, reconciliation, T accounts, journal entries, …) are reserved
   for a separate future terms module.
2. ~~**Closing**~~ — **RESOLVED 2026-07-21** (presentation ruling 3): avoided
   entirely; the live Generated balance carries it implicitly. The course's
   no-closing ruling stands; no carve-out needed.
3. ~~**Freddie as the outsider**~~ — **RULED 2026-07-21: no Freddie at this
   point.** The outsider stays a generic prospective investor; the
   "limited partner" framing still needs rewording to course language, and the
   market-wage coda stands on its own (no napkin reconciliation required for
   now).
4. ~~**"Laws of motion"**~~ — **RESOLVED 2026-07-21** (presentation ruling 11):
   the course word is the **walk** ("every account walks, and the walk ties");
   "law of motion" / "three laws" branding is retired, with the scrub guide in
   ruling 11.
5. ~~**Placement**~~ — **RULED 2026-07-21: Module 7, for now.** The module
   follows M6; numbering is 7x-x. ("For now" noted: the slot may move if the
   course grows — e.g., the future accounting-terms module.)
6. ~~**Look**~~ — **RULED 2026-07-21: course chrome + lab board.** The page
   frame rebuilds in course idiom (tut-header with glossary/restart, course
   fonts/colors, course nav, step machine); the SVG graph board and its rail
   stay as the module's distinctive lab bench, lightly recolored to the course
   palette. Precedent: the workbook facsimile engine as its own idiom inside
   course pages. (The flanking-BS layout of ruling 1 is a new build either
   way; the hub-centered layout and its router clearances are superseded.)
7. ~~**Numbering and page count**~~ — **RULED 2026-07-21: deferred to the
   walk-plan pass.** Numbering is 7x-x (Module 7). The page cut is decided in
   the walk plan (the Module 5/6 pipeline's next artifact): a full beat-table
   pass cuts pages at natural arc boundaries under the presentation rulings,
   and Rick locks the count there. Working assumption: intro · forward walk ·
   cash · outsider (possibly split at the releases/inference seam) · draw —
   five to seven pages. Presentation ruling 2 confirms the two-attempt arc.
8. ~~**Lint carve-out**~~ — **RULED 2026-07-21: none.** 7x pages obey the
   strict M1–4 language rules — no equity/equities, no net assets, no
   residual. The module speaks pure course language (Member's Capital, the
   piles, give/receive, the walk); the graph vocabulary (node, edge, the walk)
   needs no linter change. If a later beat needs M5/M6 vocabulary, it returns
   for an express authorization then. `lint-language.sh` is untouched.
9. ~~**Scrub list**~~ — **RULED 2026-07-21: full scrub.** Every stray outside
   term converts silently to course language — the piles, not retained
   earnings; the draw, not dividends; Reasons, not equity (including the
   node-type legend); a generic prospective investor, not a limited partner;
   course headers, not "Business Language Analytics" branding. No contrast
   asides — translation to the profession's terms belongs to the future
   accounting-terms module. Consistent with ruling 8 (no 7x carve-out).

## Build implications (if approved)

Mechanical port cost is moderate: the pages are already vanilla single-file JS
(no React/Babel — v2-compatible from birth), gated steppers map onto the
course's step idiom, and the shared library factors out cleanly. The work is
(a) the ruled vocabulary/voice pass through every stage body, (b) chrome
reskin + glossary, (c) the Freddie recast of the two backward pages, (d) a
71-1 intro draft in the Module-5/6 intro format, (e) tests or a check harness
asserting every figure against the workbook extraction (the graph-teach repo's
test suite is the template), and (f) RAG docs per the new corpus pattern. The
familiar pipeline — intro draft + walk plan for ruling, then the build — fits
this material exactly.
