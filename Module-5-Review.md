# Module 5 — content, flow & ease-of-use review (2026-07-19)

Reviewer: build session (claude-opus-4-8). Scope: every built Module-5 file —
`51-1` Introduction, `52-1` The Statement Map, `53-1…53-6` the CVS Statement
Walk — plus the settled design docs (`Module-5-Intro-Draft.md`,
`CVS-Statement-Walk-Plan.md`). Every page was stepped through in a browser
(render, interactions, dark scheme, narrow viewport); figures were checked
against `cvs-10k-data.js` (116 tie-outs pass).

Bottom line: **the content is strong and the pieces are individually excellent;
the module does not yet hold together as a traversable whole.** The single most
important gap is navigation — after 51-1 the pages are islands. Details below,
with a prioritized fix list at the end.

---

## 1. The arc (what a student is meant to experience)

`51-1` (welcome / vocabulary turn) → `52-1` (review the bike-shop statement map)
→ `53-1…53-6` (apply the map to CVS Health's real 10-K). Estimated time from the
headers: 51-1 ~7, 52-1 ~8, 53-1 ~4, 53-2 ~6, 53-3 ~5, 53-4 ~8, 53-5 ~8, 53-6 ~3
= **~49 minutes**. That is a coherent, well-paced spine.

The intro's promises line up with what the walk delivers, which is the arc's
biggest content strength:

| 51-1 sets up | Delivered by |
|---|---|
| Point 4: statement of changes in shareholders' equity | 53-4 (SoCE) |
| Point 5: income statement, Gains/Losses | 53-5 (IS) |
| Point 6: cash flow statement | 53-2 / 53-3 (CFS) |
| Preview: "what exactly is labeled Cash" | 53-2 / 53-3 (restricted cash) |
| Preview: noncontrolling interests | 53-4 / 53-5 (NCI bucket + split) |
| Preview: two net incomes | 53-5 (NI vs comprehensive income) |

## 2. Content — accurate and faithful

- **Numbers tie out end to end.** The shared data file is verified (identity at
  both dates, CFS/SoCE/IS/CI chains, the 1,768+526=2,294 bridge). The pages read
  those values at runtime rather than hardcoding, so page and data can't drift.
- **51-1 is faithful to the settled draft** — the eight points keep every number
  anchor; the Equities note carries the attributed "residual interest" quote and
  the Apple/McDonald's figures near-verbatim; LO1–LO6 are verbatim.
- **The bike-shop → corporate mapping is consistent**: Member's Capital (singular)
  stays the bike-shop term; Equities / shareholders' equity / net assets are
  introduced as the corporate vocabulary, each with its antecedent named.
- **Pedagogy shift is handled well.** 51-1 explicitly announces the move from
  discover-don't-tell to objectives-first; the 53-x walk keeps "experience first,
  names last" *within* each page (notice the −$133/−$172 mismatch before the
  restricted-cash resolution; build buckets before naming articulation).

## 3. Flow — the module does NOT yet connect (highest priority)

**Pages are islands after 51-1.** Concretely:

- `51-1` → back `48-2`, forward `52-1`. ✓ (the only working forward hop)
- `52-1` → **no forward link to 53-1.** Its bridge/statement-map arc ends and
  offers no way into the CVS walk it was setting up.
- `53-1 → 53-2 → … → 53-6` → **no inter-page navigation at all.** Each 53-x page's
  Back/Next only moves between its own steps; at the last step Next simply
  disappears and the student dead-ends.
- `53-x` are **not registered in `view.html`** and are marked "coming soon" in the
  `index.html` roadmap, so the shell Index/Next can't reach them either.

Net effect: a student can currently reach 51-1 and 52-1 from the course map, but
**cannot get to the CVS walk, or move through it, without hand-typing URLs.**
This is expected (the 53-x plan deferred linking until "Module 5 design settles"),
but it is the one thing that makes the module unusable as a sequence today.

Secondary flow gaps:
- **No "Module 5 Complete" page.** 53-6 is a strong synthesis capstone but it
  dead-ends — there's no module-close/recap (the counterpart to 48-2 for M4) and
  no return-to-map. The draft rules in assessments (per-tutorial quizzes + a
  module assessment); none are built yet.
- **52-1 doesn't reference the CVS walk it introduces.** The 51-1 bridge sends the
  student to 52-1 to review the map, but 52-1 then has no "now apply it to CVS →"
  handoff.

## 4. Ease of use

**Good:**
- Consistent chrome across all pages (tut-header, glossary, sound, dark-mode),
  and the CVS pages share one visual system (compact BS, cards, statement tables)
  so they read as one suite.
- Interactions are accessible: expandables are real buttons with `aria-expanded`
  and hidden panels; timed reveals lock to their final state on Back/`devFill`
  re-entry (no re-animation trap).
- Dark scheme and narrow viewport are solid on every page — no horizontal page
  overflow; wide statement tables scroll inside their own containers; grids stack.

**Rough edges:**
- **No progress indicator on multi-step pages.** 53-4 and 53-5 are **8 steps**
  each with only Back/Next — the student never sees "step 3 of 8." On the longest
  pages that's where it's most wanted. (52-1/53-x have `TOTAL_STEPS`; a small
  "N / M" in the controls or header would be cheap.)
- **53-4 and 53-5 are long** (8 steps, ~8 min). The CVS-walk plan flagged the
  one-arc-one-page vs. split question; worth revisiting after seeing them live.
  Natural cut points exist (e.g. 53-4: the SoCE document-form/bucketing half vs.
  the trace/architecture half).
- **Timed reveals require the Next path.** The section/movement reveals in 53-3
  step 3 and 53-4 step 6 only animate when entered via Next (correct for students,
  but note it if anyone drives pages programmatically).
- **51-1 is long and text-dense** for a welcome page (eight full point-cards +
  four vocab cards + two big expandables). It reads well, but consider collapsing
  the eight points themselves (not just the bridge manifestations) so the page
  opens lighter and the student expands what they want.

## 5. Vocabulary consistency — one tension to resolve

51-1's Equities note says *"these materials write it in the plural, **Equities**"*
— but the 53-x pages (correctly, quoting CVS's 10-K) write the singular **"Total
shareholders' equity."** Both are defensible (the note is the course's own label;
53-x reproduces CVS's document under the lint carve-out), but a careful student
will notice the course promising "Equities, plural" and then the CVS pages saying
"shareholders' equity." Worth one bridging sentence (either in 51-1's note or at
first use on 53-4) so the shift reads as intentional, not inconsistent.

## 6. Learning-objective coverage (content gap vs. the stated LOs)

Mapping the six ruled LOs to built pages:

| LO | Covered by a built page? |
|---|---|
| LO2 — locate the four statements, map onto the architecture | **Yes**, strongly (53-1…53-6) |
| LO3 — what CVS labels as Cash & why it matters | **Yes** (53-2 / 53-3) |
| LO4 — noncontrolling interests | **Yes** (53-4 / 53-5) |
| LO5 — awareness of OCI-type complications | **Partial** (53-5 introduces OCI/comprehensive income; "awareness of the standard-setting process" is not a page) |
| LO1 — identify the accounting entity / consolidation | **Previewed only** (51-1); no page makes the consolidation concrete |
| LO6 — restrictive recognition applied to CVS (things its statements don't recognize) | **Previewed only** (51-1 point 8); the walk is mechanical and never returns to it |

LO1 and LO6 are promised in the intro but not yet delivered by any activity —
the walk teaches the *architecture* thoroughly but not the *entity boundary* or
*restrictive-recognition* payoff at CVS scale. Expected for work in progress;
flagged so the module's assessment isn't written against uncovered ground.

## 7. Prioritized recommendations

**Must-fix before Module 5 is usable as a sequence:**
1. **Wire the walk.** Give 53-1…53-6 inter-page nav (each page's last step, or a
   footer, links to the next), add a 52-1 → 53-1 handoff, and register 53-x in
   `view.html` (and flip index.html's 5.3 from "coming soon"). This is the gating
   item — until it's done the CVS walk is unreachable.
2. **Decide the 48-2 → 51-1 link** (already flagged in the morning report) so the
   module has an entry from Module 4's close, not only from the course map.

**Should-fix (quality):**
3. **Add a "Module 5 Complete" close** after 53-6 (recap + whatever assessment
   entry you want), mirroring 48-2.
4. **Add a step counter** ("N / M") to the multi-step pages, most importantly the
   8-step 53-4/53-5.
5. **Resolve the Equities/"shareholders' equity" wording** with one bridging line.

**Consider:**
6. Revisit splitting 53-4 and 53-5 (natural mid-arc cut points exist).
7. Collapse 51-1's eight point-cards to lighten the opening view.
8. Plan pages/beats for LO1 (consolidation/entity) and LO6 (restrictive
   recognition at CVS) so every stated objective has an activity behind it.

**Strengths worth keeping as-is:** the data-driven statement rendering, the
one-visual-system consistency across the CVS pages, the accessible expandables
and lock-at-max reveals, the dark/narrow robustness, and 51-1's faithful,
well-sequenced treatment of the vocabulary turn.
