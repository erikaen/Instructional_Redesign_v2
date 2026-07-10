# Accounting Pre-Work — Prototype v2

The revised (v2) prototype of the **Accounting Pre-Work** for the Yale School of Management /
CMU METALS, by Rick Antle (William S. Beinecke Professor of Accounting).

Supersedes the original prototype
([Prework-Prototype](https://github.com/rick50antle/Prework-Prototype), frozen).

## Live (GitHub Pages)

- **Review index:** https://erikaen.github.io/Instructional_Redesign_v2/review.html
- Course welcome page: https://erikaen.github.io/Instructional_Redesign_v2/

## Structure

The pre-work will have **four modules**. Each module consists of multiple **tutorials**. 
Each tutorial is split into **standalone, single-page phase files** so they can be embedded 
one at a time (e.g., in OLI Torus iframes). Every page shares one design system (`shared.css`): 
compact `phase-title` header, segmented activities, "finished this section/module" hand-off, 
and a shared glossary.

### Module 1, Tutorial 1 — Getting Organized
1. `11-1-Getting-Started.html`
2. `11-2-A-Rough-Week.html`
3. `11-3-Sort-Your-Things.html`
4. `11-4-The-Line-You-Drew.html`
5. `11-5-Module-Complete.html`

### Module 1, Tutorial 2 — Insurance and Maria
1. `12-1-Meet-Maria.html`
2. `12-2-Marias-Form.html`
3. `12-3-The-Read-Back.html`
4. `12-4-Module-Complete.html`

### Module 1, Tutorial 3 — Anna and the Bank Statement
1. `13-1-Meet-Anna.html`
2. `13-2-The-Bank-Statement.html`
3. `13-3-The-Cash-Movement.html`
4. `13-4-The-Customer-Payments.html`
5. `13-5-The-Credit-Card-Statement.html`
6. `13-6-The-Promises.html`
7. `13-7-The-Rent-Payment.html`
8. `13-8-Naming-the-Lists.html`
9. `13-9-Module-Complete.html`

### Module 1, Tutorial 4 — Keeping the Reasons
1. `14-1-Why-Keep-the-Reasons.html`
2. `14-2-Walk-the-Reasons.html`
3. `14-3-Pairs-That-Cancel.html`
4. `14-4-The-Net-Movers.html`
5. `14-5-Module-Complete.html`

### Module 1, Tutorial 5 — Naming What You Built
1. `15-1-Bringing-It-Together.html`
2. `15-2-Find-the-Net.html`
3. `15-3-The-Accounting-Identity.html`
4. `15-4-The-Entity.html`
5. `15-5-Net-Assets.html`
6. `15-6-Double-Entry.html`
7. `15-7-Module-Complete.html`

### Module 2, Tutorial 1 — The Two You's
1. `21-1-welcome.html`
2. `21-2-exposure.html`
3. `21-3-whoSeesTwo.html`
4. `21-4-twoHats.html`
5. `21-5-complete.html`

### Module 2, Tutorial 2 — Filing for a Legal Body
1. `22-1-welcome.html`
2. `22-2-name.html`
3. `22-3-file.html`
4. `22-4-whatChanged.html`
5. `22-5-complete.html`

### Module 2, Tutorial 3 — The Rules and the Two Signatures
1. `23-1-welcome.html`
2. `23-2-agreement.html`
3. `23-3-contribution.html`
4. `23-4-wall.html`
5. `23-5-keystone.html`
6. `23-6-complete.html`

### Module 2, Tutorial 4 — The Entity's Own Number
1. `24-1-welcome.html`
2. `24-2-ein.html`
3. `24-3-account.html`
4. `24-4-statements.html`
5. `24-5-complete.html`

### Module 2, Tutorial 5 — The LLC's Balance Sheet
1. `25-1-welcome.html`
2. `25-2-capstone.html`
3. `25-3-complete.html`

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
