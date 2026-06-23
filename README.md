# Accounting Pre-Work — Prototype v2

The revised (v2) prototype of the **Accounting Pre-Work** for the Yale School of Management /
CMU METALS, by Rick Antle (William S. Beinecke Professor of Accounting).

Supersedes the original prototype
([Prework-Prototype](https://github.com/rick50antle/Prework-Prototype), frozen).

## Live (GitHub Pages)

- **Review index:** https://erikaen.github.io/Instructional_Redesign_v2/review.html
- Course welcome page: https://erikaen.github.io/Instructional_Redesign_v2/

## Structure

The pre-work is **five modules**. Each module is split into standalone, single-page
**phase files** so they can be embedded one at a time (e.g. in OLI Torus iframes). Every page
shares one design system (`shared.css`) — compact `phase-title` header, segmented activities,
"finished this section/module" hand-off, and a shared glossary.

### Module 1 — Getting Organized
1. `1-1-Getting-Started.html`
2. `1-2-A-Rough-Week.html`
3. `1-3-Sort-Your-Things.html`
4. `1-4-The-Line-You-Drew.html`
5. `1-5-Module-Complete.html`

### Module 2 — Insurance and Maria
1. `2-1-Meet-Maria.html`
2. `2-2-Marias-Form.html`
3. `2-3-The-Read-Back.html`
4. `2-4-Module-Complete.html`

### Module 3 — Anna and the Bank Statement
1. `3-1-Meet-Anna.html`
2. `3-2-The-Bank-Statement.html`
3. `3-3-The-Cash-Movement.html`
4. `3-4-The-Customer-Payments.html`
5. `3-5-The-Credit-Card-Statement.html`
6. `3-6-The-Promises.html`
7. `3-7-The-Rent-Payment.html`
8. `3-8-Naming-the-Lists.html`
9. `3-9-Module-Complete.html`

### Module 4 — Keeping the Reasons
1. `4-1-Why-Keep-the-Reasons.html`
2. `4-2-Walk-the-Reasons.html`
3. `4-3-Pairs-That-Cancel.html`
4. `4-4-The-Net-Movers.html`
5. `4-5-Module-Complete.html`

### Module 5 — Naming What You Built
1. `5-1-Bringing-It-Together.html`
2. `5-2-Find-the-Net.html`
3. `5-3-The-Accounting-Identity.html`
4. `5-4-The-Entity.html`
5. `5-5-Net-Assets.html`
6. `5-6-Double-Entry.html`
7. `5-7-Module-Complete.html`

## Review tools

- **`review.html`** — a simple index of every module and page.
- **`view.html`** — wraps any page in an iframe with a "Module N: …" title bar, **Back/Next**
  (and ← / → arrow-key) navigation across all 30 pages in order, and an **Index** dropdown to
  jump anywhere. Review chrome only — the module files are untouched.

## Glossary

Every module page shares one glossary, grouped by module (`Module 2:` … `Module 5:`), opened
from the book icon in the header.

## Shared assets

- `shared.css` — the design system (typography, colors, components, dark mode). Kept
  **byte-identical across all branches**.
- `index.html` — course welcome page (Rick's intro + roadmap).

## Running locally

Static site, no build step — plain HTML/CSS/JS, Lucide icons via CDN. Open `review.html`
in a browser, or serve the folder:

```bash
python3 -m http.server
```

## Branches

Modules are authored on per-author branches and consolidated here on `main`:

| Branch | Modules |
|---|---|
| `Sarah` | 1 & 3 |
| `Teresa` | 2 & 4 |
| `Gaode` | 5 |
| `main` | all modules + monolithic originals + review tools |

`shared.css` is kept identical across every branch.

---

*Source of truth: the course's private redesign repo; this repo is the publishable copy.*
