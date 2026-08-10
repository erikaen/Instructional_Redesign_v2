# This repo is RETIRED as the course authoring repo (2026-08-10)

**Authoring now happens on branches of the live repo,
`/Users/ra1/Courses-Local/Final_Accounting_Prework`** (github.com/rick50antle/Final_Accounting_Prework).
The author-then-migrate pipeline is dead: the 2026-08-09 June-1 label drift was a pure two-repo sync
failure, and this retirement is what closes that failure mode. Ruled by Rick 2026-08-09; executed
2026-08-10.

What moved (imported at this repo's `sort-things-redesign-wip` commit **`7c942d3`**):

- `Bike-Repair-Source-Workbooks/` (all 13 .xlsx) → `Final_Accounting_Prework/authoring/`
- `extract-statement-steps.py` → `Final_Accounting_Prework/authoring/`

Regeneration from the new location was verified content-identical to the deployed generated file.
**The copies here are frozen at `7c942d3` and must not be edited** — a figure changed here will never
reach the course. The live repo's `authoring/README.md` has the maintenance mechanics.

## What this repo still IS

**The graph-teach / Module 7 repo, nothing else.** The `graph-teach-wip` branch (and the CMU share at
cmu-bla/graph-teach, branch `rick/yale-module-7`) remains live and authoritative for Module 7 material
until Module 7's fate is decided. `graph-lab.js` is bidirectionally divergent with other copies —
never overwrite it. Everything else here — the M2–M5 course pages, tutorials, workbook copies — is a
historical record on stale figures: do not edit it, do not use it as a numbers reference.
