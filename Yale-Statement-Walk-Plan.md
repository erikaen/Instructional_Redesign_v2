# Yale Statement Walk — Conversion Plan (63-x)

**Status: DRAFT — awaiting Rick's approval. This document, once approved, is the
build contract.**

Drafted 2026-07-19. Source: `Accounting Pre-work/Module-1-Redesign/Tutorials/42-yale-bs-split.html`
(the 24-phase React/Babel walkthrough of Yale's FY2025 financial statements) plus
the **Yale FY2025 financial report** (year ended June 30, 2025) as the number
source of truth. Target: this repo's page format (vanilla JS, `shared.css`
idioms, step-based `render()`, one teaching arc per page) — the same conversion
that turned the 28-phase CVS mockup (`41-cvs-bs-split.html`) into the shipped
`53-1`…`53-6`.

**This is the Module 6 analogue of Module 5's CVS walk.** Every numbering and
page-count choice below is a **decision FOR RICK TO LOCK**, not locked. All Yale
figures are verified against the PDF and re-checked in
`M6-overnight/yale-data-port/` (see the data-file and tie-out sections).

## Decisions FOR RICK TO LOCK

1. **Module 6 page architecture (working assumption).** Mirror Module 5's shape:
   **61-1** Module 6 Introduction (telling-mode welcome, built from
   `Module-6-Intro-Draft.md`) → **62-1** a nonprofit statement map (52-1's
   three-column idiom, adapted) → **63-1…63-x** the Yale walk. This plan details
   63-x; 61-1 and 62-1 are sketched under "Sibling pages" below for Rick to lock
   alongside.
2. **Page suite for the walk — 6 pages vs 5.** Proposed: **six** pages
   (63-1…63-6), cut at the statement-arc boundaries below, per-page step counts
   in the 4–6 range Module 5 used. Alternative: fold the Statement-of-Activities
   arc (63-4 + 63-5) into a single ~10-step page → a five-page suite.
   **Recommend six** (the SoA arc is 9 phases; one page overloads).
3. **Numbering 63-x** — new Module 6 sequence after 62-1 the nonprofit map.
4. **The "What's NOT on this Statement" beat (phase 2)** — a substantial NFP
   recognition moment (collections under ASC 958-360, human capital, the Yale
   name, historical-cost buildings), with no CVS equivalent. Proposed: keep as
   **step 2 of 63-1**. Alternative: give it its own short page. **Recommend keep
   in 63-1.**
5. **Question-card inserts.** Two cards (Yale has two explanatory statements, not
   three): the **cash** card (63-2, ported ~verbatim from phase 6) and a **new
   net-assets** card (63-4), in the 53-x style — "What happened to net assets?"
   The bucketing/section beats survive as the steps right after each card.
   Draft copy below. Alternative: add a third (endowment/releases) card inside
   63-5. **Recommend two.**
6. **No morph animations.** The React original animates a 3000ms year-swap (View
   Transitions API) and CSS fades/collapses. The v2 idiom re-renders per step;
   rearrangements are *explained in the narration*, not animated. Within-step
   sequential reveals (CFS section subtotals, SoA movement rows with running
   totals, expandables) are kept. Same rule as the CVS walk.
7. **Lint carve-out for 6x NFP vocabulary** (net assets, equities/shareholders'
   equity as the for-profit bridge, with/without donor restrictions). Proposal
   below — a named-file extension of the existing Module-5 carve-out. **Do NOT
   edit `lint-language.sh` tonight.**
8. **Liquidity-footnote beat (enhancement, not in the 42 mockup).** Yale's
   required liquidity footnote (report p.25) reports **$5,029M** of financial
   assets available within one year against $59B of assets — the sharpest NFP
   lesson that *a net-assets total is not spendable money*. The 42 walkthrough
   omitted it. Proposed: an optional **"How much can Yale actually spend?"** beat
   (a card or expandable) in 63-5 or 63-6. **Recommend adding it** — flagged for
   Rick's ruling.
9. **No `index.html` links now** — like 52-1 and the 53-x pages, the 6x pages
   stay unlinked until the Module 6 design is settled.

## Standing constraints that apply

- `shared.css` / `shared.js` untouched (append-only; no edits without approval).
  All Yale-specific styling lives in per-page `<style>` blocks, as 52-1 and the
  53-x pages do.
- The Yale statements do **not** go through the BRW workbook-facsimile engine.
  They are report statements, not Excel workbooks; they render as statement
  panels/tables in the `acct-col` / `statement-panel` family of idioms, exactly
  as the CVS 53-x pages render the 10-K.
- Plain descriptive titles (no-cute rule). Draft titles below are Rick-renameable
  at click-through.
- **Telling mode.** Module 5+ leads with objectives, not discovery
  (discover-don't-tell ended with the bike shop). Within a page, experience-first
  micro-beats are still fine (the cash/net-assets mismatches are *noticed* before
  the reconciliation is shown) — but the module and page framing tells first.
- Singular **"Member's Capital"** wherever the bike shop is referenced.
  Documents, periods, and activities are not actors. "The residual" is never a
  student-facing name (attributed quotations are fine).
- No commits or pushes without Rick's explicit permission; stage by name.

## The page suite

Layout shorthand: **3-up** = `main-grid` with Beginning SFP (June 30, 2024) left,
Ending SFP (June 30, 2025) right, center column varies. **Compact SFP** = Cash /
Noncash assets (incl. investments) / Total assets / − Total liabilities / = Net
Assets bucketed (Without — with a Yale-University and a noncontrolling-interests
sub-line — and With) / = Total net assets, with the identity check. **Doc-form**
= the statement as printed in the report, full width, SFPs stepped aside. All
values render in **$ millions** (the report is in thousands; the tutorial rounds,
matching the 42 mockup — see the data-file note on exact vs rounded).

### 63-1 The Statement of Financial Position (~6 min) — phases 1–5, 5 steps

| Step | Original | Beat |
|---|---|---|
| 1 | ph 1 | Doc-form Consolidated Statements of Financial Position (report p.21): one table, two date columns (June 30, 2025 / 2024), ~22 rows. Same architecture, NFP labels — the residual is **Net Assets** because Yale is a nonprofit; A − L = NA still. |
| 2 | ph 2 | **"What's NOT on this Statement"** — the NFP recognition beat. Collections (Beinecke, Art Gallery, Peabody) at billions in fair value and **zero** on the books under ASC 958-360; human capital; the Yale name; historical-cost buildings. Each a *feature of the recognition convention, not a measurement failure.* Amber card, distinct from the statement. |
| 3 | ph 3 | Strip to totals: only Total assets / Total liabilities / Total net assets remain, with the identity check at both dates (2025: 59,043 − 9,672 = 49,371 ✓; 2024: 55,315 − 9,278 = 46,037 ✓). Non-total rows are *set aside* (no fade animation). |
| 4 | ph 4 | Split into snapshots: the 2024 column becomes the Beginning SFP on the left, 2025 the Ending SFP on the right; a fiscal year sits between them. Narration carries the rearrangement (no year-swap animation). |
| 5 | ph 5 | Re-expand each snapshot: full line-item detail in two independent SFPs, gap in the middle for the two explanatory statements. |

### 63-2 The Cash Question (~6 min) — phases 6–10, 5 steps

| Step | Original | Beat |
|---|---|---|
| 1 | ph 6 | 3-up, compact SFPs, **Net Assets bucketed** (Without — with the $5M NCI sub-line — and With, $38,609M ≈ 78% of the residual), **Cash highlighted both sides**, center = cash question card: "What happened to cash?" $1,058 → $765, down **$293 million**. Footer names the SoCF. |
| 2 | ph 7 | Doc-form SoCF (report p.23), two year-columns, **indirect method** — opens with *Change in net assets* $3,334M (not Net Income), reverses out non-cash items. NFP twist: endowment contributions are Financing, not Operating. |
| 3 | ph 8 | 2024 column dimmed and dropped; the 2025 column covers exactly the period between the two SFPs (Jul 1, 2024 → Jun 30, 2025). |
| 4 | ph 9 | Collapse to the three section subtotals + reconciliation footer: Operating (500) / Investing (602) / Financing 722 → net change (380). |
| 5 | ph 10 | Collapse to the bottom line only: cash (CFS scope) decreased by **$380 million**. |

*Note (for Rick):* phase 6 does double duty — it introduces the net-asset
buckets (a structural SFP beat) **and** poses the cash question. The buckets are
needed for the compact view, so they enter here; the net-assets *question* is
deferred to 63-4, mirroring how the CVS walk deferred equity bucketing to 53-4.

### 63-3 Read the Labels (~5 min) — phases 11–14, 4 steps

| Step | Original | Beat |
|---|---|---|
| 1 | ph 11 | Two strips, one mismatch: the SFP cash-question strip (−$293) above the CFS bottom-line strip (−$380). Different numbers, different beginning/ending balances. The student is prompted to *notice*, not told. |
| 2 | ph 12 | The solution — **Note c reconciliation** (report p.27): the SFP reports "Cash and cash equivalents" ($765 end / $1,058 beg); the CFS adds "Cash included in investments, at fair value" ($61 end / $147 beg) to reach $825 / $1,205. Add it back at both dates and the strips reconcile exactly. Read the labels — each statement explains a change defined by its own scope. |
| 3 | ph 13 | Architecture restored: 3-up, restricted-scope cash resolved, SoCF card center. The three section subtotals appear **sequentially** (timed reveal, kept) and sum to the net change. |
| 4 | ph 14 | Sections become expandable; the student clicks to see the indirect-method line items. Operating reveals Module 3.1's change-in-NA → CFO logic on real numbers: Change in net assets $3,334M, less Net endowment investment gain $(3,859)M (a huge non-cash item), less Non-operating contributions $(308)M, plus Depreciation $387M, plus working-capital changes → Net Cash Used in Operating $(500)M. |

### 63-4 The Net Assets Question (~7 min) — new card + phases 15–19, 6 steps

| Step | Original | Beat |
|---|---|---|
| 1 | **new** | 3-up exactly as 63-3 step 4 left it, but **highlights move to the Net Assets rows**; center = question card: **"What happened to net assets?"** — $46,037 → $49,371, **up $3,334 million**. Draft card copy below. Footer names the Statement of Activities. |
| 2 | ph 15 | Doc-form Statement of Activities (report p.22): four columns (Without Donor Restrictions / With Donor Restrictions / 2025 Total / 2024). This one statement does the combined work of CVS's income statement **and** its statement of changes in equity. |
| 3 | ph 16 | 2024 column dimmed and dropped — same move as the SoCF. |
| 4 | ph 17 | Bucket the columns by net-asset class: Without / With / 2025 Total, matching the buckets shown on each SFP. Every row of activity lands in one or both. |
| 5 | ph 18 | Operating section: revenues (tuition, grants, medical services, contributions, endowment-spending allocation, other) − expenses (salaries, benefits, depreciation, other) → increase from operating activities $187M Without / $159M With / $347M total. Note: expenses are entirely Without — donor-restricted dollars don't pay salaries until released. |
| 6 | ph 19 | Non-operating section: dominated by Total endowment return $4,508M ($790M Without / $3,718M With); plus new endowment contributions, less the allocation back to operations, plus pension/other → $738M Without / $2,248M With. The endowment story lives here. |

### 63-5 Releases, the Endowment, and the Architecture (~7 min) — phases 20–23, 4 steps

| Step | Original | Beat |
|---|---|---|
| 1 | ph 20 | **Net assets released from restrictions** — the distinctively NFP move. As donor time/purpose restrictions expire, net assets reclassify With → Without: $1,545M operating + $70M non-operating = $1,615M total. The With column *decreases* $1,615M; Without *increases* $1,615M; total change **zero**. No new resources — donor constraints simply lift. |
| 2 | ph 21 | Trace each bucket's change: the movement rows fire **one at a time with running totals** (timed reveal, kept), starting from the June 30, 2024 balances ($9,835M / $36,202M) and landing at June 30, 2025 ($10,762M / $38,609M). Small ($1M) gaps are rounding to millions. |
| 3 | ph 22 | Architecture restored: SoA card center, bucketed net-assets rows on both SFPs connecting to the bucket columns. |
| 4 | ph 23 | Sections expandable to the constituent movements (operating revenues/expenses/releases; non-operating endowment return/allocation/contributions/other). |

*Optional enhancement beat (decision #8):* a **"How much can Yale actually
spend?"** card or expandable, grounded in the required liquidity footnote (p.25):
$5,029M of financial assets available within one year against $59B of assets, and
$7,734M of board-designated funds the board can un-designate at will. The lesson:
a net-assets total is a classification of the residual, **not** spendable cash —
liquidity is an asset-side question. Could sit at the end of 63-5 or open 63-6.

### 63-6 The Full Architecture (~3 min) — phase 24, 1 step

Single synthesis step: 3-up with the middle column stacking **both** explanatory
statements — SoCF (the cash story) at top, Statement of Activities (all changes
in net assets) at bottom — explaining the full path between the two Statements of
Financial Position. **Two statements, not three** — the NFP architecture combines
what CVS uses three for. Tail: `insight-box` closing the arc — the architecture
from Module 3, operating at the scale of a $59-billion nonprofit that nobody owns.

## Old-phase → new-page mapping (summary)

| 42 phases | Part | 63-x page | Steps |
|---|---|---|---|
| 1–5 | I · SFP | 63-1 The Statement of Financial Position | 5 |
| 6–10 | II · SoCF | 63-2 The Cash Question | 5 (incl. phase-6 cash card) |
| 11–14 | II · SoCF | 63-3 Read the Labels | 4 |
| 15–19 | III · SoA | 63-4 The Net Assets Question | 6 (incl. new net-assets card) |
| 20–23 | III · SoA | 63-5 Releases, the Endowment, and the Architecture | 4 |
| 24 | IV · Synthesis | 63-6 The Full Architecture | 1 |

(24 source phases + 1 new card = 25 steps across 6 pages. The 42 mockup's phase 6
folds the compact-bucket beat and the cash-question card into one; here it stays
one step. Compare the CVS mapping: 28 phases + 2 new cards → 53-1…53-6.)

## Question cards — draft copy (Rick to edit at click-through)

Both share the 53-x card anatomy: kicker "The question" · bold headline · the
delta as a large mono figure · from→to line · one italic setup paragraph · footer
naming the explanatory statement. Styled as a `center-card` variant (dashed
accent border, warm background) in per-page CSS.

- **Cash (63-2):** headline "What happened to cash?"; **$293 million** decrease;
  $1,058 → $765; setup: Yale holds $59 billion in recorded assets — $49.7 billion
  of it in the endowment — yet Cash on the Statement of Financial Position moved
  only a few hundred million. Where did money come from, and where did it go?
  Footer: the Statement of Cash Flows traces what happened to cash. (Ported
  ~verbatim from phase 6.)
- **Net Assets (63-4, NEW):** headline "What happened to net assets?"; **$3,334
  million** increase; $46,037 → $49,371; setup: net assets rose $3.3 billion this
  year — but was it earned, given, or merely *released* from an old restriction?
  And who is allowed to spend it? Footer: the Statement of Activities traces every
  change in net assets, in both donor-restriction categories.

*Contrast worth preserving:* CVS's equity card asked why equity fell despite
positive net income; Yale's card asks what *drove* a large increase and how much
of it is restricted — same slot, different hook. The net-assets card highlights
the **Net Assets** rows on both SFPs (the rows the SoA explains), completing the
pattern Cash rows → Net Assets rows.

## Sibling pages (lock alongside the walk)

- **61-1 Module 6 Introduction** — telling-mode welcome, objectives-first, built
  from `Module-6-Intro-Draft.md` (companion deliverable). The Module 5 analogue
  is 51-1; same shape (the turn → what CVS confirmed → what changes with no
  owners → the bridge exercise → the Yale preview → learning objectives), with
  the optional "About the name Net Assets" expandable note.
- **62-1 A Nonprofit Statement Map** — the 52-1 three-column map, adapted: two
  Statements of Financial Position flanking the **two** explanatory statements
  (SoCF + SoA), net assets bucketed Without/With. Renders as statement panels
  (not the BRW engine), static (no walk choreography), like 52-1. This is where
  "two statements, not three" is first shown at a glance, before the walk.

## Data file: `yale-fy2025-data.js`

One shared plain-JS file, `window.YALE_FY2025 = {...}`, ported from the 42 mockup's
consts (values verified against the FY2025 report; comments preserve sign
conventions and page provenance):

| Key | Source const (42) | Drives |
|---|---|---|
| `sfp` | `yaleSFP` | 63-1 doc-form + full snapshots |
| `compactSFP` | `compactSFP` | compact SFPs + net-asset buckets, 63-2 onward |
| `socf2Year` | `yaleSoCF2Year` | 63-2 doc-form SoCF |
| `cashRecon` | `yaleCashRecon` | 63-3 Note c reconciliation |
| `soaRows` | `yaleSoARows` | 63-4 doc-form + bucketed SoA |
| `soaMovements2025` | `yaleSoAMovements2025` | 63-5 running-totals trace |
| `liquidity` | *(new — report p.25)* | optional 63-5/63-6 liquidity beat |

**Exact vs rounded.** The tutorial renders **$ millions** (matching 42). The
authoritative extraction lives in `M6-overnight/yale-data-port/` in the report's
**thousands**, where every identity ties *exactly*; the millions the pages
display carry ≤$1M rounding slack on line-item cross-foots (structural totals
still tie). The build-time `yale-fy2025-data.js` (millions) must be validated
against the data-port's thousands base before any page is built.

## Tie-out checks (verified in the data-port, before any page is built)

Identity at both dates (59,043 − 9,672 = 49,371; 55,315 − 9,278 = 46,037);
net-asset buckets cross-foot (10,762 + 38,609 = 49,371; 9,835 + 36,202 = 46,037);
Without = Yale + NCI (10,757 + 5 = 10,762; 9,832 + 3 = 9,835); SoCF sections
(−500 − 602 + 722 = −380); Note c recon in thousands (764,569 + 60,558 = 825,127;
1,058,065 + 146,776 = 1,204,841); change in net assets ties SoA ↔ SoCF (3,334)
and SoA ending net assets = SFP 2025 Total NA (49,371); SoA beginning = SFP 2024
Total NA (46,037); releases net to zero (1,615 − 1,615 = 0). Full verbatim check
output is in the data-port and the morning report.

## Page mechanics (52-1 / 53-x idiom)

- Vanilla JS: `var step`, `render()` → `renderBeats()` / `renderMainGrid()` /
  `renderTail()` / `renderControls()`, full innerHTML re-render per step; Back /
  Next `nav-buttons`; `playClick()` / `playSuccess()` helpers; glossary overlay
  with per-page NFP terms (net assets, donor restrictions, released from
  restrictions, endowment, SFP, SoA); `restart()` reloads; `devFill()` jumps to
  the last step with all reveals complete; `dev.js` included last.
- Shared idioms reused as-is: `narrative-block`, `main-grid`, `acct-col`,
  `center-card`, `insight-box`, `panel-footnote`, `tut-header`, glossary classes.
  New Yale-specific classes (doc-form statement tables, dim/collapse states,
  highlight, bucket rows, running-total row, strips) are per-page `<style>`,
  prefixed `yale-`, wide tables inside `overflow-x:auto` wraps.
- Timed sequential reveals (63-3 CFS subtotals, 63-5 SoA running totals) via
  `setTimeout` chains that set a reveal counter and re-render; `devFill()` and
  Back/Next re-entry set the counter to its max (mirroring the original's
  lock-at-max behavior).
- Expandables (63-3 step 4, 63-5 step 4) via per-page open-state objects, the
  52-1 clickable-row idiom (role=button, chevron, `hint-pulse` on first
  encounter). **No gating**: Next is never locked behind an expansion (matches
  the original; revisit at click-through if Rick wants a gate).
- Narratives port near-verbatim from the 42 `PHASES` array, with only: (a) the
  new net-assets card beat, (b) tense/wording touch-ups where a narrative
  described an animation now replaced by re-render ("fade away" → "are set
  aside", the 3000ms year-swap → "the columns move to become Beginning and
  Ending, explained in the narration").
- Header sub: "Module 6 · ~N min". No home/index link (decision #9). Dark-scheme
  support via the same `prefers-color-scheme` handling 52-1/53-x already carry.

## lint-language.sh change (PROPOSAL — do not edit tonight)

The M6 pages introduce and use the NFP residual vocabulary — **net assets**,
**equities / shareholders' equity** (only as the for-profit bridge), **with /
without donor restrictions**. The existing linter carves Module 5 out of the
`equit` and `net assets` bans via `grep -vE '^5[0-9]-'`. Extend the same
named-file mechanism to Module 6:

- In the `equit` check: change the exclusion to `grep -vE '^[56][0-9]-|^view\.html$'`
  (adds `6[0-9]-`), with a comment: Module 6 introduces the for-profit→nonprofit
  bridge on 61-1 and uses it across 62-*/63-*; same principle as the Module 5
  carve-out.
- In the `net assets` check: change the exclusion to `grep -vE '^[56][0-9]-'`
  (adds `6[0-9]-`) — "Net Assets" is Yale's own statement vocabulary and the
  spine of the module; still banned for M1–M4.
- **`residual` check:** currently carves out `51-*` only (the attributed FASB
  quote). *If* 61-1 carries an attributed "residual interest … after deducting
  its liabilities"-style quotation, add `61-*` to that carve-out. Flagged as a
  sub-decision tied to the intro's expandable note.

Every other check still applies to the 6x pages. Verify after editing: a stub
6x file containing "net assets" and "shareholders' equity" passes, while one
containing "the residual" (unattributed) or "accounting equation" still fails.

## Build order & review gates

1. Rick approves this plan (and 61-1/62-1 scope, page count, titles, cards).
2. `yale-fy2025-data.js` ported + validated against the data-port's tie-out
   (mechanical port — delegated cheap per standing rule, verified line by line
   against the source arrays and the data-port thousands base).
3. Lint carve-out edit, verified: `bash lint-language.sh` clean with a stub 6x
   file containing "net assets"/"shareholders' equity", still failing on e.g.
   "the residual".
4. Pages built **in order, one at a time**. Recommended order: 61-1 → 62-1 →
   63-1 → 63-6. After each page: browser verification (step through every beat,
   exercise expandables and timed reveals, check `devFill()`, dark scheme, and
   narrow-viewport overflow), then `bash lint-language.sh`.
5. Rick's click-through per page before the next is started (or batched, at
   Rick's preference — flagged at delivery of the first page).
6. No commits without permission; no index.html linking; publishing out of scope.

## Out of scope

- `index.html` / nav integration (Module 6 design pending).
- AI-Tutor-RAG page docs for Module 6.
- Mobile-optimized variants.
- Any change to the source React tutorials in Module-1-Redesign (41 / 42).
- The 2017–18 Yale PDFs and the YNHH statements under
  `Accounting Pre-work/Financial Statements/` — background only; not a number
  source for M6 (flagged in the morning report for Rick's ruling on whether YNHH
  belongs anywhere in the module).
