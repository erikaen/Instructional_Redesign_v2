# Progress tracking — how checkmarks & progress bars work (READ before adding activities)

Every lesson page shows a **progress bar** (under the title) and earns a **completion
checkmark** (in the page-index dropdown and the footer). Both are driven by one small
system in **`shared.js`**. If you add or change an interactive activity, you MUST update
that system, or the new page will behave wrong (see "If you skip this").

> Written for whoever edits this course next — including an AI coding assistant. Point it
> at this file first.

## The rule

- **Reading-only pages** (story / intro / overview — nothing for the student to do):
  complete **automatically when opened**. No work needed — just don't list them below.
- **Activity pages** (sort, valuation, multiple-choice, reveal, walk, etc.): complete when
  the student **finishes the activity — any answer; being *correct* is not required**.
  These MUST be registered (below).

## Checklist — adding or changing an activity page

1. **Make sure the page is in `COURSE_TUTORIALS`** (in `shared.js`). Pages not listed there
   aren't tracked at all — no bar, no checkmark.

2. **Add a `COURSE_DONE` entry** (in `shared.js`) — a function that returns `true` once the
   activity is finished:
   ```js
   'YOUR-FILE.html': function(){ return typeof someFlag !== 'undefined' && someFlag === true; },
   ```
   - Reference ONLY the page's **top-level** `var`/`function` (those become globals).
     Anything declared *inside* a function is invisible here.
   - Guard with `typeof` so it can never throw; for object-key membership use `!== undefined`
     (a stored value might legitimately be `0`).
   - Use the **correctness-free** signal — "all items placed" / "all questions answered" /
     "submitted" — **not** "answered correctly".

3. **If the activity has multiple steps AND no progress bar of its own**, add a
   `COURSE_STEPS` entry — the current step out of the total:
   ```js
   'YOUR-FILE.html': function(){ return { at: <currentStep>, total: <totalSteps> }; },
   ```
   - A whole **sort counts as ONE step** (not one per item dragged). Each distinct **phase,
     reveal, or question** is a step.
   - It MUST reach `at === total` **exactly when** the `COURSE_DONE` function turns true, so
     the bar and the checkmark agree.

4. **If the activity has a Reset button**, show it only once the student has taken an action
   (there's nothing to reset before that). Match the existing pages.
   - **Rick's M3-M5 arc pages (23-3, 24-5, 3x-x, 4x-x, 5x-x)** don't need their own button:
     the chrome injects a gated Reset row automatically (see `RESET_SCOPE` in `shared.js`)
     for any registered activity page exposing a top-level `restart()`. It appears once the
     step bar moves past 1 (or the finish condition is already true).

5. **Module 5 pages register in `course-m5.js`, not `shared.js`.** Module 5 introduces the
   corporate vocabulary (Equity, Net assets) that `lint-language.sh` bans on M1-M4 surfaces,
   and `shared.js` is lint-scanned. `course-m5.js` (loaded right after `shared.js` on every
   page) appends the M5 tutorials, COURSE_DONE/COURSE_STEPS entries, and glossary section.

## If you skip step 2

A new activity with **no `COURSE_DONE` entry** is treated as a *reading* page — its checkmark
and bar fill the instant it's opened, instead of when the student actually finishes. Not a
crash, just wrong.

## Copy from what's already there

Every current activity is already registered in `COURSE_DONE` (and every multi-step one in
`COURSE_STEPS`) inside `shared.js`, each with a one-line comment explaining its finish
condition. Find the activity most like yours and copy its shape.

---

*If this course is also embedded in the web app, the app additionally needs the new pages
listed in its own `courseData.ts` (dashboard + reader navigation) — that's covered in the
app's handoff docs, separate from this repo.*
