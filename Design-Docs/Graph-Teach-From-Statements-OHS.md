# Graph-Teach from a real statement set — OHS feasibility + the general recipe

**Status: EXPLORATION — for Rick's read (2026-07-26).** Question asked: can we
produce a Graph-Teach document (the M7 board: Δ-nodes, give→receive arrows,
fact/inference/open tags) from the OHS financial statements — and, using OHS
as the starting point, what is the general approach for turning ANY statement
set into a Graph-Teach sequence? Direction given: start at a high level of
aggregation and drill down.

**Verdict up front: feasible, and unusually good.** Levels 0–2 below are pure
statement-face facts (already in the tied canon,
`Accounting Pre-work/M6-ohs-build/data/ohs-map-data.json`). Level 3 yields
roughly fourteen fact arrows, a half-dozen clean walk-tie inferences — two of
them spectacular — and a small set of genuine judgment calls that need course
rulings before any build. One deep difference from M7 is worth savoring: in
74-x the student reconstructed a world we secretly knew (the shop's ledger
existed). Here NOBODY holds the ground truth — the graph the student builds
is the best lawful picture *anyone* can build from these statements. That is
the outsider's condition, for real.

## The drill-down ladder (OHS numbers, all verified)

### Level 0 — three nodes (maximum aggregation; pure fact)

ΔAssets +985,579 · ΔLiabilities +162,201 · ΔNet Assets +823,378.
The identity of changes ties: 985,579 − 162,201 = 823,378. One board, three
numbers, and the whole year is already lawful. (This is the map's two
snapshot columns collapsed to a single Δ each.)

### Level 1 — eighteen Δ-nodes (74-1's release-2 move; pure fact)

Every balance-sheet line becomes a Δ-node: Cash +2,082,341, Receivables
−300,616, Contributions receivable −291,766, Bequests receivable +519,144,
Note receivable −41,330, Prepaid −107,015, Investments +472,141, Trusts
+162,785, Property −1,510,105; the five liability Δs; the pile Δs. All
eighteen sum to zero against the identity. Nodes are what changed; arrows —
who gave and who received — are still entirely unknown.

### Level 2 — the piles walk, and a NEW arrow type (fact)

The activities statement's two columns are the two piles' walks: without
87,289,882 − 1,658,897 = 85,630,985; with 19,098,855 + 2,482,275 =
21,581,130. The releases line is an arrow the bike shop never needed:
**a pile-to-pile transfer** — with → without, 6,189,517, zero-sum, no asset
or liability end. (Appropriations are a second, subtler transfer of the same
kind.)

**A drill-down floor appears already at this level, and it teaches**: the
balance sheet splits the without-pile into THREE rows at both dates (facts),
but no statement walks those three rows — board designations and the
capital-asset fence move internally without an explaining statement. The
statements walk the two piles, not the five rows. Judgment beat, not defect.

### Level 3 — arrow reconstruction (fact / inference / open)

**Fact arrows** (stated gross somewhere): the investing trio (sales of
investments → Cash 8,811,390; Cash → Investments 4,720,415; Cash → Property
874,182); the financing four (two restricted-gift arrows into Cash, annuity
proceeds 80,737, annuity payouts 192,476); depreciation Property →
Depreciation 2,588,332 (the functional-expense statement states it); the
releases transfer; salaries/rent-class expense totals per the FE rows.

**Marquee inference #1 — the Property walk closes to the dollar.**
62,804,618 + additions − 2,588,332 = 61,294,513 ⇒ additions = 1,078,227. The
cash statement shows only 874,182 purchased with cash — but the supplemental
disclosure ("purchases of property and equipment recorded in accounts
payable, $204,045") supplies the rest: 874,182 + 204,045 = 1,078,227.
Exactly. A walk, an apparent contradiction, and a footnote that resolves it —
74-2's Tools reversal, upgraded to a real audit document.

**Marquee inference #2 — the Investments walk closes through the CFS
adjustments.** 36,981,295 + 4,720,415 − 8,811,390 + 670,087 (realized) +
3,893,029 (unrealized) = 37,453,436. Exactly. The indirect method's
"adjustments" section turns out to be **the wedge inventory**: every
adjustment line names a walk that must tie. (Same trick: Receivables
−300,616 = CFS change +216,333 plus the 84,283 allowance — exact.) This is
the doc's core insight: *the indirect cash-flow statement is a machine for
generating 74-x inferences.*

**A genuine indeterminacy (open — and provably so).** The NPV-discount
adjustment (546,046) spans two receivables (contributions and bequests), and
the statements do not allocate it: bequests receivable's walk misses by
exactly the unallocated residue (≈589 against the naive split). No release
of statements resolves it — the aggregation floor is real, reachable, and
demonstrable to a student.

**Judgment calls needing course rulings before any build** (the registry):
1. **Remeasurement arrows.** Unrealized gains have no giver — nothing was
   exchanged; held things were re-priced. The give/receive grammar needs a
   ruling: (a) a Reasons node "Investment return, net" gives into
   Investments (consistent with revenue arrows; my recommendation), or (b) a
   new *remeasurement badge* on the node — a value change is a new KIND of
   walk step, not an arrow. This is the biggest grammar decision.
2. **Netted lines.** Investment return is net of 99,807 of fees (notes give
   the gross); special events revenue is net of donor benefits. Un-net when
   notes allow, or teach the net as the floor?
3. **In-kind pathways.** 1,402,144 of recognized gifts that never touch
   cash — arrows from a contribution Reason directly into expenses (and
   vehicle donations that become sale proceeds). Recognized because
   priceable; the volunteers (≈200 FTEs) stay off the board entirely — the
   recognition line drawn in ink.
4. **ERTC.** 2,913,362 of one-time government money — received or
   receivable? The statements alone don't split it; tag open or chase.
5. **The two-pile Reasons region.** The board's REASONS region needs the
   with/without partition and transfer arrows — engine work (below).

## The general recipe (any statement set → a Graph-Teach sequence)

A. **Port and tie.** Transcribe the statement faces into a data canon; run
   an internal tie suite (identity at both dates, every subtotal, every
   cross-statement agreement). Nothing proceeds until the canon closes.
   Document wrinkles (OHS's $1 note-17 discrepancy) get recorded, not fixed.
B. **Level 0.** Three Δ-nodes; the identity of changes. One beat.
C. **Level 1.** Explode into per-line Δ-nodes; they sum to zero. Nodes are
   what changed; arrows are unknown.
D. **Level 2.** Walk the residual's piles from their explaining statement;
   introduce transfer arrows (releases, appropriations) where the entity has
   them.
E. **Level 3.** Reconstruct arrows line by line under the tag discipline:
   - each explainer-statement line proposes candidate arrows;
   - each balance-sheet account gets a walk attempt — one unknown solves to
     an INFERENCE, two unknowns is OPEN unless a note supplies more;
   - the indirect CFS's adjustment lines are the standing wedge inventory;
   - supplemental/noncash disclosures close specific walks.
F. **The registry.** Every judgment call (remeasurements, netted lines,
   boundary items, allocation ambiguities) is enumerated for an explicit
   instructor ruling — never silently resolved by the builder.
G. **Sequence the pedagogy on the ladder itself**: one page per level, then
   a closing page on floors and judgment — "the best graph these statements
   support," 74-2's finale generalized to a world with no hidden ledger.
H. **Engine deltas** (graph-lab.js): pile-to-pile transfer arrows; the
   two-pile Reasons region; a remeasurement affordance (pending ruling 1);
   drill-down — a node that explodes into its sub-nodes (the 73-1 channel
   enclosure, generalized to any aggregate).

## Fit with the module plan

This sequence is NOT part of the M6 walk (the walk plan stands). It is a
candidate follow-on — plausibly the missing 7x capstone (the eval doc's
"apply the outsider's method to a real organization"), buildable after the
M6 OHS walk ships, reusing the same data canon. Ordering intuition: the M6
walk teaches READING these statements; the Graph-Teach sequence teaches
RECONSTRUCTING the year from them. Numbering, scope, and whether it happens
at all are Rick's calls, after the five registry rulings above.
