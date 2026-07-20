---
name: instructional-activity-formats
description: The canonical activity formats for the bike-repair prework (MCQ, sorting, excel sheets, fill-ins, resets, backs, progress). Use whenever building or redesigning a tutorial page so every activity of a kind looks and behaves identically. Started 2026-07-19; add new conventions here as they are ruled.
---

# Activity formats — one look per kind of activity

Every activity of the same kind must look and behave **identically** on every page.
The shared implementations live in `shared.js` / `shared.css` — use them; never
hand-roll a variant. When a new convention is ruled, add a section here.

## 1. Multiple-choice questions (MCQ)

**Component: `BRW.mountMCQ(containerId, opts)`** in shared.js.

The one format:
- **The question lives INSIDE the white card** (`.mc-q` as the card's first
  child) — never floating on the page background above it.
- Options are letter chips (`.mc-opt` + `.mc-letter` A/B/C…), full-width rows.
- Click selects (highlight); **Submit** is disabled until a choice is made.
- Submit locks the options and shows the verdict **on the card**:
  green `feedback ok` "You are correct. …" or red `feedback err`
  "Not quite. …" with the option's explanation (`fb`).
- **Reset appears after any submit** (right or wrong) and re-arms the question.
- **Never auto-advance on a correct answer.** The verdict stays visible; a
  separate Continue button (rendered by the caller via `onRight`) moves on.
- Optional 3-strike reveal: `revealAfter: 3` + `revealMsg` — the third wrong
  submit shows the red verdict with the answer and unlocks Continue anyway.

```js
BRW.mountMCQ('quizBox', {
  question: 'Where is the wage recorded?',
  options: [
    { id:'parts', label:'Parts used — $1,200', fb:'That records parts, not labor.' },
    { id:'none',  label:'There is no wage line.', fb:'No wage expense appears.', correct:true }
  ],
  onRight: function(){ /* render your Continue button */ }
});
```

Pages with bespoke render loops may inline the same state machine
(see 31-2 `answerButtons`/`mcSubmit`) — the behavior spec above is what matters.

## 2. Sorting activities

**Component: `BRW.mountCanonSort(containerId, pickSheet, opts)`** in shared.js —
it reads a statement-pipeline Pick sheet (labels in column B, answer tokens in
column C, amounts in D).

The one format (the "bank statement" model):
- A document of rows: **chevron** at the far left expands a row; classify
  **inline** under it (`Classify: [cat] [cat]`); the chosen tag pill and a
  colored stripe land on the row.
- A **sort-progress card** above the document: per-category counts + Unsorted,
  with **"Sort the rest"** (unlocks as you go; auto-sorts the remainder) and
  **"Check my sort"** (validation happens at check time, not on placement).
- Wrong rows get a red stripe + **"Try Again"** pill; correct get a green ✓.
- **After the first check, grading goes LIVE:** the Check button disappears,
  and reclassifying a marked row re-grades it instantly — the moment the last
  row turns correct, completion fires on its own. Never require a second
  "Check my sort". (Implemented in `BRW.mountCanonSort`; the M1 statement
  sorts are the reference.)
- **Reset is visible for the whole activity** and clears only the sort.
- No "TO SORT" banner; no drag-and-drop targets; no separate pick panels.

## 3. Excel sheets (Bike-Repair.xlsx facsimiles)

**One look, any implementation.** There are several kinds of sheet — classic
`.xl-row` sheets, the M3+ facsimile engine, interactive sheets with openable
outline groups, and static display-only snapshots. Different code paths are
fine; **they must all look like the same workbook**: the `.xlwb` shell (title
bar + bottom tabs), a 22px gutter (toggles live there, empty when the sheet
is display-only), a 34px gray row-number column, green category rows, mono
right-aligned amounts.

**Continuity rule:** every depiction of the workbook looks like the last one
shown in the course sequence.

- Classic sheets use the `.xl-row` idiom (gutter toggle, row number, label,
  mono value; `.xl-cat` green category rows).
- The M3+ facsimile engine (`BRW.renderGrid`/`mountGrid`) emits the SAME
  classes the M1/M2 sheets use — `.xl-head` / `.xl-cat` / `.xl-item` /
  `.xl-total` rows, `.xl-gutter` (outline toggles live there), `.xl-rownum`,
  `.xl-toggle` — so ONE stylesheet styles every sheet; never re-approximate
  the look with parallel CSS. Section-header rows echo their section's
  current balance in the Value column (green, like a classic category row);
  the header band gets a synthesized "Value" label; visible rows number
  sequentially (detail rows inside collapsed groups are unnumbered).
- **Outline toggles sit on the balance (summary) line**, and the expanded
  detail rows render **directly BELOW the line that carries the toggle** —
  click a line, its detail opens under it, like the classic category rows.
  Never let an expansion open above the clicked line. Page beats may key off
  the toggles' `data-brw-row` positions — don't relocate them.
- Statement snapshots (no pick column) must pass `layout:'standard'` to
  `BRW.mountGrid` — otherwise the sorter's pick layout leaves a dead gap.
  Unused trailing columns are trimmed automatically (`brw-trim-*`).
- Balance sheets render as the classic two-column statement (centered entity
  name, `Balance Sheet · date`, `.acct-col` Assets | Liabilities & Member's
  Capital) **inside** the workbook shell — see 23-3 and 31-1.
- Excel facsimiles are exempt from the global 16px type floor — they keep
  their small sheet type.

## 4. Fill-in-the-blank checks

- Markup: `<div class="btn-row fillin-row">` containing the `.calc-input`,
  a **Check** button, and a **Reset** button on the same line
  (`display:none` until the first Check).
- Verdicts: correct → green `feedback ok` "You are correct — <the arithmetic> = **answer**.";
  third wrong attempt reveals with red `feedback err`
  "Not quite — the answer is **X**: <the arithmetic>." Never reveal silently.
- Reset clears the input, feedback, and any revealed content, and re-hides itself.
- Reference implementations: 15-1 (`netInput`), 31-1 (`bsInput`), 43-1 (`gateInput`).

## 5. Reset buttons — when a page gets one (decision rule)

Ask: **does the page have a real activity** — something the student can get
wrong or fill in (a sort, an MCQ, a fill-in, a form)?

- **No activity (walk / confirm / reveal pages): NO Reset anywhere.** Clicking
  through beats isn't resettable work — the step ← Back covers revisiting.
  Examples: 32-1/32-2/32-3, 33-1, 33-3, 34-1, 44-3.
- **Module/Tutorial Complete (Overview) pages NEVER have a Reset** — nothing
  on a recap page is resettable, and "Reset this page" there reads as
  resetting the module. Delete any such button on sight.
- **Activity with its own inline Reset** (MCQ card, sort card, fill-in row):
  that is the only Reset — no page-level duplicate.
- **Activity but no inline Reset practical** (whole-page activities like the
  22-4 drag sort or 24-5's Schedule A): the chrome-injected gated Reset via
  `RESET_SCOPE` + a top-level `restart()` — currently ONLY those pages.

And in all cases:
- A Reset resets only the current activity's state **in place, on the current
  page** — never `location.reload()` (a reload wipes every step, scrolls to
  top, and re-runs page init). Restore the state variables and re-render.
- Reset is **inline** — it renders inside the activity's own card/row (MCQ
  btn-row, sort-progress card, fillin-row), not floating elsewhere.
- It appears only when there is something to reset: sorts show it for the
  whole activity; MCQs and fill-ins show it after the first submit/check.

## 6. Step Backs and page navigation

**Step-control layout (one look everywhere):** the forward button is a
full-width blue bar (`btn-continue btn-block` / `.brw-step-advance`) with its
label centered; the **← Back sits BELOW it**, left-aligned, as a small
`btn-reset` with the `arrow-left` lucide icon. Never side-by-side, never Back
above the forward button. (`.nav-buttons` stacks this way via shared.css.)

- **Every page registered in `COURSE_STEPS` is multi-step and MUST have an
  in-page ← Back at every step past the first** (btn-reset with the
  `arrow-left` lucide icon). Step 0's Back is a no-op or hidden —
  **page-level** navigation lives ONLY in the course footer.
- Backing into a completed step shows its **completed state** (locked-green
  MCQ, revealed insight, painted sheet) — never force re-answering.
- The statement-build pipeline (`BR_WB.mountStatementBuild`) renders its own
  ← Back between extracted steps; pages using it get that for free.
- **Pipeline layout:** the step strip (Data copied in / Pick / Sort …) stays at
  the TOP of the sheet, inside the workbook shell; the Back/Next step controls
  render BELOW the shell — give the page a `<containerId>-controls` div right
  after the shell (and hide/show it together with the build container).
- No in-page "Next page" / "Continue to <page>" buttons — the footer's titled
  Back/Next pills are the only page nav.
- **Scroll on advance: a new step displays from the TOP** — `window.scrollTo(0,0)`
  after every step/beat transition (forward or back), never
  `scrollTo(0, document.body.scrollHeight)`. Exceptions: an MCQ/fill-in verdict
  renders where the student already is (no scroll at all), and a within-step
  progressive reveal (e.g. the napkin adding a line) may follow its new content.

## 7. Progress + completion

Follow **PROGRESS.md** (repo root): register every activity page in
`COURSE_DONE` (correctness-free finish signal) and multi-step pages in
`COURSE_STEPS` (bar must hit full exactly when the finish condition fires).
Reading pages complete on visit. Module 5 registers in `course-m5.js`, not
shared.js (lint carve-out).

- **The bar always tracks the student's LIVE position** — going Back or
  Resetting moves the bar down; completion is remembered by the green
  checkmark (index + footer), never by pinning the bar full.
- **Count the REAL states, not the phases you remember.** A pipeline page's
  step count = its extracted build steps (count the step-strip chips, plus any
  intro state before the pipeline mounts) — e.g. Sort the Rows is 5, not 3.
  Recount whenever a page's flow changes.
- After changing an activity, verify bar/DONE consistency: run the page's
  `devFill()` and check `COURSE_STEPS[f]()` reads total/total exactly when
  `COURSE_DONE[f]()` turns true. Keep `devFill` (and any dev helpers it uses)
  working when you change an activity's DOM — it is the QA path.

## 8. Dialog cards

Framed speech cards (blue frame, filled name band, white body). **No quotation
marks** wrapping the speech — the card already marks it as dialogue.

## 9. Language

Run `bash lint-language.sh` after touching any student-facing file; it must
print `lint-language: clean`. Never edit the linter to make it pass — if a
legitimate flag appears, stop and ask Rick.
