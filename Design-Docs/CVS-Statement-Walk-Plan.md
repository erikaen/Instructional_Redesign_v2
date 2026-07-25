# CVS Statement Walk — Conversion Plan (53-x)

**Status: DRAFT — awaiting Rick's approval. This document, once approved, is the
build contract.**

Drafted 2026-07-18. Source: `Accounting Pre-work/Module-1-Redesign/Tutorials/41-cvs-bs-split.html`
(the 28-phase React/Babel walkthrough of CVS's FY2025 financial statements).
Target: this repo's page format (vanilla JS, `shared.css` idioms, step-based
`render()`, one teaching arc per page).

## Decisions locked 2026-07-18 (Rick)

1. **Page suite, not one long page** — six pages, cut at the statement-arc
   boundaries below.
2. **Numbering 53-x** — new Module 5 sequence after 52-1 The Statement Map.
3. **Question-card inserts.** The old phase 14 (bucket the equity) is *preceded*
   by a new question-card beat — beginning/ending BSes as in phase 13, highlights
   moved to the equity rows, center box in the style of the phase-5 cash card,
   question **"What happened to equity?"** The bucketing beat survives as the
   step right after it. The Income Statement arc gets the same treatment: a
   question card before the old phase 21.
4. **No morph animations.** The React original animated fades/collapses between
   phases; the v2 idiom re-renders per step. Rearrangements are *explained in
   the narration*, not animated. Within-step sequential reveals (CFS section
   subtotals, SoCE movement rows with running totals, expandables) are kept.
5. **No `index.html` links now** — like 52-1, the 53-x pages stay unlinked until
   the Module 5 design is settled.
6. **Lint carve-out for "equity."** CVS is a corporation; its 10-K's own
   vocabulary ("Total shareholders' equity") stays, same principle as Anna's
   old-job plural carve-out (another entity's document keeps its words). The
   `equit` check in `lint-language.sh` gets a named-file exemption for `53-*`
   files only. Every other check still applies to these pages.

## Standing constraints that apply

- `shared.css` / `shared.js` untouched (append-only; no edits without approval).
  All CVS-specific styling lives in per-page `<style>` blocks, as 52-1 does.
- The CVS statements do **not** go through the BRW workbook-facsimile engine.
  They are 10-K statements, not Excel workbooks; they render as statement
  panels/tables in the `acct-col` / `statement-panel` family of idioms.
- Plain descriptive titles (no-cute rule). Draft titles below are Rick-renameable
  at click-through.
- Teaching pattern: experience first, names last — preserved from the original
  (the mismatch is *noticed* before restricted cash is explained; buckets are
  built before "articulation"-style vocabulary).
- No commits or pushes without Rick's explicit permission; stage by name.

## The page suite

Layout shorthand: **3-up** = `main-grid` with beginning BS (Dec 31, 2024) left,
ending BS (Dec 31, 2025) right, center column varies. **Compact BS** = Cash /
Other current assets / Other assets / All other noncash assets / Liabilities /
Total shareholders' equity (the two "Other" rows stay visible because restricted
cash lives there). **Doc-form** = the statement as printed in the 10-K, full
width, BSes stepped aside.

### 53-1 Two Balance Sheets (~4 min) — phases 1–4, 4 steps

| Step | Original | Beat |
|---|---|---|
| 1 | ph 1 | Doc-form Consolidated Balance Sheets (page 95): one table, two date columns, ~30 rows. |
| 2 | ph 2 | Strip to totals: only Total assets / Total liabilities / Total shareholders' equity remain, with the identity check at both dates. Narration explains the non-total rows are set aside (no fade animation). |
| 3 | ph 3 | Split into snapshots: 2024 column becomes the beginning BS on the left, 2025 the ending BS on the right; a year sits between them. Narration carries the rearrangement. |
| 4 | ph 4 | Re-expand each snapshot: full line-item detail in two independent BSes, gap in the middle for the three explanatory statements. |

### 53-2 The Cash Question (~6 min) — phases 5–9, 5 steps

| Step | Original | Beat |
|---|---|---|
| 1 | ph 5 | 3-up, compact BSes, **Cash highlighted both sides**, center = question card: "What happened to cash?" — $8,586 → $8,453, down **$133 million**, against ~$402B of revenue. Footer names the CFS as the explanatory statement. |
| 2 | ph 6 | Doc-form CFS (page 96), three year-columns, direct-method line items. |
| 3 | ph 7 | 2024/2023 columns dimmed and dropped; the 2025 column covers exactly the period between the two BSes. |
| 4 | ph 8 | Collapse to the three section subtotals + reconciliation footer: Operating 10,639 / Investing (5,871) / Financing (4,940) → net change (172). |
| 5 | ph 9 | Collapse to the bottom line only: cash, cash equivalents and restricted cash decreased by $172 million. |

### 53-3 Read the Labels (~5 min) — phases 10–13, 4 steps

| Step | Original | Beat |
|---|---|---|
| 1 | ph 10 | Two strips, one mismatch: BS cash question strip (−$133) above the CFS bottom-line strip (−$172). The student is prompted to notice, not told. |
| 2 | ph 11 | The solution: BS reports "Cash and cash equivalents"; CFS reconciles the broader "Cash, cash equivalents and restricted cash." Restricted cash sits inside Other current assets (95→59) and Other assets (203→200). Add back at both dates: 8,884 → 8,712 reconciles exactly. Lesson: read the labels — each statement explains a change defined by its own scope. |
| 3 | ph 12 | Architecture restored: 3-up, restricted-cash-bearing rows highlighted, CFS card center. The three section subtotals appear **sequentially** (timed reveal, kept) and sum to the net change. |
| 4 | ph 13 | Sections become expandable; the student clicks to see the direct-method line items. Note kept: CVS's direct method is unusual (~98% of US public companies use indirect). |

### 53-4 The Equity Question (~8 min) — new card + phases 14–20, 8 steps

| Step | Original | Beat |
|---|---|---|
| 1 | **new** | 3-up exactly as 53-3 step 4 left it (compact BSes, CFS card center collapses away), but **highlights move to the Total shareholders' equity rows**; center = question card: **"What happened to equity?"** — $75,730 → $75,382, down **$348 million**. Draft card copy below. Footer names the SoCE as the explanatory statement. |
| 2 | ph 14 | Bucket the equity on both BSes: Total shareholders' equity expands into Contributed (Common Stock & Capital Surplus net of Treasury), Earned & Retained (RE + AOCI), Noncontrolling Interests. Contributed +769, Earned & Retained −1,115, NCI −2 — summing to the −348 on the card. The SoCE explains all three. ("Now turn to equity" opener drops — the card did that.) |
| 3 | ph 15 | Doc-form SoCE (page 98): three years, nine columns; every change in equity flows through this statement. |
| 4 | ph 16 | 2023/2024 year-bands dimmed and dropped; what remains is Dec 31, 2024 balance → 2025 activity → Dec 31, 2025 balance. |
| 5 | ph 17 | Bucket the columns into Contributed / Earned & Retained / NCI + Total — the same three buckets as the BSes (step 2 makes this line true again). |
| 6 | ph 18 | Trace each bucket's change: the four aggregated 2025 movement rows fire **one at a time with running totals** (timed reveal, kept). NI → E&R $1,768 and NCI −$40 (flagged for the IS page); OCI → E&R; options+ESPP → Contributed; dividends pull E&R down. Bottom lines equal the BS deltas. |
| 7 | ph 19 | Architecture restored: SoCE card center, bucketed equity rows on both BSes connecting to the bucket columns. |
| 8 | ph 20 | Buckets expandable to the original 10-K columns (Contributed → Common Stock & Capital Surplus + Treasury; E&R → RE + AOCI). |

### 53-5 Where Net Income Comes From (~8 min) — new card + phases 21–27, 8 steps

| Step | Original | Beat |
|---|---|---|
| 1 | **new** | 3-up as 53-4 left it (bucketed equity rows on both BSes), **highlights on the Earned & Retained rows**; center = question card: **"Where did Net Income come from?"** — the SoCE recorded Net income of $1,768 as a single movement row; behind it sits a $402-billion year of operations. Draft card copy below. Footer names the Income Statement as the explanatory statement. |
| 2 | ph 21 | Doc-form Consolidated Statements of Operations (page 93): Revenue $402B at top down to Net income, split between CVS shareholders and NCI. Three years. |
| 3 | ph 22 | 2024/2023 columns dimmed and dropped — same move as the CFS and SoCE. |
| 4 | ph 23 | Collapse to the skeleton: Total revenues → Total operating costs → Operating income → non-operating → pre-tax → tax → Net income → NCI line → NI attributable to CVS Health. |
| 5 | ph 24 | Collapse to the bottom line + NCI split: 1,728 / +40 / 1,768. The $40 flagged on the SoCE lives here formally. |
| 6 | ph 25 | OCI from the Comprehensive Income statement (page 94): five items → $526 OCI; NI + OCI = Comprehensive income $2,254. The $526 is what landed in AOCI. |
| 7 | ph 26 | IS strip → SoCE buckets: $1,768 + $526 = $2,294 into Earned & Retained (= comprehensive income attributable to CVS Health); −$40 into NCI. The IS connects to the SoCE. |
| 8 | ph 27 | Architecture restored: IS card center (Revenue → NI attributable + OCI), bucketed BSes either side; CFS and SoCE still belong in the middle. |

### 53-6 The Full Architecture (~3 min) — phase 28, 1 step

Single synthesis step: 3-up with the middle column stacking all three explanatory
statements — IS (where Net Income comes from), SoCE (where NI + OCI + owner
transactions flow), CFS (the cash story) — explaining the full path between the
two Balance Sheets. Tail: `insight-box` closing the arc — the architecture from
Module 3, operating at the scale of a $400-billion company.

## Question cards — draft copy (Rick to edit at click-through)

All three share the phase-5 card anatomy: kicker "The question" · bold headline ·
the delta as a large mono figure · from→to line · one italic setup paragraph ·
footer naming the explanatory statement. Styled as a `center-card` variant
(dashed accent border, warm background) in per-page CSS.

- **Cash (53-2):** headline "What happened to cash?"; **$133 million** decrease;
  $8,586 → $8,453; setup: CVS earned roughly $400 billion in revenue this year,
  and cash on the Balance Sheet barely moved — where did money come from, and
  where did it go? Footer: the Cash Flow Statement traces what happened to cash.
  (Ported verbatim from phase 5.)
- **Equity (53-4):** headline "What happened to equity?"; **$348 million**
  decrease; $75,730 → $75,382; setup: CVS reported Net income of about $1.7
  billion this year — yet total shareholders' equity went *down*. What moved it?
  Footer: the Statement of Shareholders' Equity traces every change in equity,
  from any source.
- **Income (53-5):** headline "Where did Net Income come from?"; **$1,768
  million** into Earned & Retained; setup: on the SoCE, Net income was a single
  movement row. Behind that one number sits a $402-billion year of operations.
  Footer: the Income Statement traces how revenues and costs produced Net income.

Proposal embedded above for Rick's veto: the income card highlights the
**Earned & Retained** rows on both BSes (the bucket NI lands in), completing the
pattern Cash rows → Equity rows → E&R rows.

## Data file: `cvs-10k-data.js`

One shared plain-JS file, `window.CVS_10K = {...}`, ported **verbatim** from the
React file's consts (values unchanged, comments preserved where they explain
sign conventions):

| Key | Source const | Drives |
|---|---|---|
| `bs` | `cvsBS` | 53-1 doc-form + full snapshots |
| `compactBS` | `compactBS` | compact BSes + equity buckets, 53-2 onward |
| `cfs3Year` | `cvsCFS3Year` | 53-2 doc-form CFS |
| `cfs2025` | `cvsCFS` | CFS card, single-year views |
| `cashRecon` | `cashRecon` | 53-3 restricted-cash resolution |
| `soce3Year` | `cvsSoCE3Year` (incl. column→bucket map) | 53-4 doc-form + bucketed SoCE |
| `soce2025Aggregated` | `cvsSoCE2025Aggregated` | 53-4 trace step |
| `is3Year` | `cvsIS3Year` | 53-5 doc-form + collapsed IS |
| `ci3Year` | `cvsCI3Year` | 53-5 OCI step |

**Tie-out checks (verified after the port, before any page is built):**
identity at both dates (253,538 − 178,156 = 75,382; 253,215 − 177,485 = 75,730);
CFS sections 10,639 − 5,871 − 4,940 = −172; recon 8,586+95+203 = 8,884 and
8,453+59+200 = 8,712; SoCE bucket deltas +769 / −1,115 / −2 sum to −348;
NI 1,728 + 40 = 1,768; NI + OCI = 2,254; 1,768 + 526 = 2,294 comprehensive
attributable to CVS Health.

## Page mechanics (52-1 idiom)

- Vanilla JS: `var step`, `render()` → `renderBeats()` / `renderGrid()` /
  `renderTail()` / `renderControls()`, full innerHTML re-render per step; Back /
  Next `nav-buttons`; `playClick()` / `playSuccess()` sound helpers; glossary
  overlay with per-page terms; `restart()` reloads; `window.devFill()` jumps to
  the last step with all reveals complete; `dev.js` included last.
- Shared idioms reused as-is: `narrative-block`, `main-grid`, `acct-col`,
  `center-card`, `insight-box`, `panel-footnote`, `tut-header`, glossary
  classes. New CVS-specific classes (doc-form statement tables, dim/collapse
  states, highlight, bucket rows, running-total row, strips) are per-page
  `<style>`, prefixed `cvs-`, wide tables inside `overflow-x:auto` wraps.
- Timed sequential reveals (53-3 step 3, 53-4 step 6) via `setTimeout` chains
  that set a reveal counter and re-render; `devFill()` and Back/Next re-entry
  set the counter to its max, mirroring the original's lock-at-max behavior.
- Expandables (53-3 step 4, 53-4 step 8) via per-page open-state objects, the
  52-1 clickable-row idiom (role=button, chevron, `hint-pulse` on first
  encounter). **No gating**: Next is never locked behind an expansion (matches
  the original; revisit at click-through if Rick wants a gate).
- Narratives port near-verbatim from the `PHASES` array, with only: (a) the two
  new card beats, (b) old-14's opener trimmed, (c) tense/wording touch-ups where
  a narrative described an animation now replaced by re-render ("fade away" →
  "are set aside", etc.).
- Header sub: "Module 5 · ~N min". No home/index link (decision 5).

## lint-language.sh change

In the `equit` check only, exclude `53-*.html` by name (mechanism mirrors the
existing 23-1/23-2 plural-capital carve-out), with a comment: CVS's 10-K is
another entity's document; a corporation's statements keep their own vocabulary
("Total shareholders' equity"). All other checks continue to scan 53-x pages.

## Build order & review gates

1. Rick approves this plan (and edits draft copy/titles as desired).
2. `cvs-10k-data.js` ported + tie-out checks run. (Mechanical port — delegated
   cheap per standing rule, verified against the source arrays line by line.)
3. Lint carve-out edit, verified: `bash lint-language.sh` clean with a stub
   53-x file containing "shareholders' equity", still failing on e.g. "residual".
4. Pages built **in order, one at a time**: 53-1 → 53-6. After each page:
   browser verification (step through every beat, exercise expandables and
   timed reveals, check `devFill()`, dark scheme, and narrow-viewport overflow),
   then `bash lint-language.sh`.
5. Rick's click-through per page before the next is started (or batched, at
   Rick's preference — flagged at delivery of 53-1).
6. No commits without permission; no index.html linking; publishing out of scope.

## Out of scope

- `index.html` / nav integration (Module 5 design pending).
- AI-Tutor-RAG page docs for Module 5.
- Mobile-optimized variants.
- Any change to the source React tutorial in Module-1-Redesign.
