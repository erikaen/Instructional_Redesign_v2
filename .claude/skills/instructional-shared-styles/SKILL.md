---
name: instructional-shared-styles
description: >-
  Enforces visual consistency across Instructional_Redesign_v2 HTML pages using
  only shared.css and shared.js. Preserves colors, typography, spacing, layout,
  and dark mode. Treats shared.css and shared.js as append-only unless the user
  explicitly approves deletions or refactors. Use when creating or editing HTML,
  shared.css, shared.js, fixing inconsistent UI, or when the user mentions
  shared styles, dark mode, or design consistency.
---

# Instructional Shared Styles

Keep every HTML page visually consistent by routing shared presentation through `shared.css` and shared behavior through `shared.js`. HTML holds structure and page-specific logic only.

## Important design-system rules

* Do not define local CSS component styles inside the individual HTML file.
* Use existing classes from shared.css wherever possible.
* Preserve the established visual style, including colors, typography, spacing, buttons, cards, page layout, activity layout, and dark mode behavior.
* If a genuinely new activity type requires new classes, add those classes to shared.css, not locally in the HTML file.
* Any new classes must inherit the shared design tokens from shared.css, such as var(--primary), var(--accent), var(--primary-faint), the established font family, and existing font size patterns.
* Any new classes must also include appropriate dark mode rules in shared.css.
* Before creating new JavaScript, check shared.js to see whether reusable behavior or helper functions already exist.

## Very important shared-file editing rules

* When editing shared.css, treat it as append-only unless I explicitly approve a deletion.
* Do not remove, rename, reorganize, overwrite, or simplify any existing CSS rules in shared.css.
* It is okay to add new CSS rules to shared.css if they are genuinely needed for this page and cannot be handled using existing classes.
* If you think an existing CSS rule should be changed, removed, renamed, or reorganized, stop and explain why instead of making the change.
* Apply the same caution to shared.js: do not delete, rename, reorganize, or overwrite existing shared JavaScript logic or configuration unless I explicitly approve it.
* If new JavaScript is needed, prefer adding small, clearly named reusable functions rather than modifying existing shared behavior.
* If an existing function or configuration seems incorrect or insufficient, explain the issue before changing it.

## Required page skeleton

Every HTML page must include:

```html
<head>
  <meta charset="UTF-8">
  <meta name="color-scheme" content="light dark">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><!-- page title --></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="shared.css">
</head>
```

Before `</body>`:

```html
<script src="shared.js"></script>
<script src="https://unpkg.com/lucide@latest"></script>
<script>
  if (window.lucide) lucide.createIcons();
  // page-specific logic only — check shared.js first
</script>
```

Use relative `href="shared.css"` and `src="shared.js"` from the repo root (same folder as `index.html`).

## Layout and component conventions

Prefer existing patterns from sibling pages (`index.html`, `11-getting-organized.html`, etc.):

| Need | Start here in shared.css |
|------|--------------------------|
| Body copy | `.prose`, `.narrative-block` |
| Sections | `.section-card`, `.section-tag`, `.section-title` |
| Actions | `.btn-continue`, `.btn-primary`, `.btn-outline`, `.btn-hint` |
| MCQ | `.mcq-opt` / `.mc-opt`, `.mcq-fb` / `.feedback` |
| Activity shell | `.page`, `.prework-wrap`, `.tut-header`, `.phase`, `.progress-track` |
| Shared chrome | glossary overlay, module nav — match existing markup + shared.js helpers |

**Fonts:** Open Sans for body/prose; Inter for cards, callouts, UI chrome.

**Tokens:** `--primary`, `--primary-light`, `--primary-faint`, `--accent`, `--page-bg`, `--border`, `--border-strong`, `--success-*`, `--error-*`, `--warn-*`, `--font-xlg` through `--font-xs`.

## Light and dark mode

- Dark mode is system-driven via `@media (prefers-color-scheme: dark)` in `shared.css`.
- `<meta name="color-scheme" content="light dark">` is required on every page.
- `applyConfig()` in `shared.js` applies `SITE_CONFIG` overrides in light mode only — do not override dark mode from HTML or page scripts.
- **New classes:** add light-mode rules using tokens, then append matching dark-mode rules in the existing dark-mode block(s) in `shared.css`. Do not edit existing dark-mode rules unless the user approves.
- Document/spreadsheet facsimiles (`.xlsx`, `.xlwb`, `.stmt`, `.lease`, etc.) may need additional dark rules in the facsimile section at the bottom of `shared.css`.

## Workflow

```
Task progress:
- [ ] Search shared.css for existing classes before adding new ones
- [ ] Search shared.js for existing helpers before writing new JS
- [ ] Edit HTML structure only — no local component CSS
- [ ] If new classes are required, append to shared.css (light + dark)
- [ ] If new shared behavior is required, append small functions to shared.js
- [ ] Stop and explain if an existing shared rule/function seems wrong
- [ ] Verify light and dark mode visually
```

## Page-specific JS boundaries

**Inline `<script>`:** phase/state machines, answer keys, activity-specific DOM updates, dev shortcuts.

**`shared.js`:** glossary, module nav, progress, accordions, rabbit holes, `applyConfig()`, `initPage()`, and other cross-page behavior.

Do not duplicate data or logic that already lives in `shared.js`.

## Anti-patterns

| Reject | Do instead |
|--------|------------|
| `<style>` or inline `style=""` for components | Existing or new classes in `shared.css` |
| Editing/removing existing shared.css rules | Append new rules; ask before changing old ones |
| Modifying existing shared.js functions | Add new helper; explain issue first |
| Raw hex in HTML | Token-based classes in `shared.css` |
| Light-mode-only new component | Light rules + dark `@media` rules appended to `shared.css` |

## Verification checklist

- [ ] No local CSS component styles in HTML
- [ ] Existing shared classes used wherever possible
- [ ] `shared.css` and `shared.js` linked once each
- [ ] New CSS/JS appended only — no deletions or refactors without approval
- [ ] New classes use design tokens and include dark mode
- [ ] New JS checked against `shared.js` first
- [ ] Visual style matches sibling pages in both light and dark mode

## Reference files

- `shared.css` — all shared styling (append-only)
- `shared.js` — all shared behavior (append-only)
- `index.html` — welcome page pattern
- `11-getting-organized.html`, `12-insurance-and-maria.html`, `13-anna-and-the-bank-statement.html` — activity patterns
