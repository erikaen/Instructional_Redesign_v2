---
name: instructional-shared-styles
description: >-
  Enforces visual consistency across Instructional_Redesign_v2 HTML pages using
  only shared.css and shared.js. Preserves colors, typography, spacing, layout,
  and dark mode. Treats shared.css and shared.js as append-only unless the user
  explicitly approves deletions or refactors. Use when creating or editing HTML,
  shared.css, shared.js, fixing inconsistent UI, or when the user mentions
  shared styles, dark mode, design consistency, or cross-page HTML consistency.
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
* Do not use emoji characters (e.g. ✅ ⚠️ 🎉) in HTML copy, button labels, feedback messages, or JavaScript strings unless the user explicitly asks for them. Plain text plus Lucide icons in copy and feedback is allowed and preferred over emojis.
* For icons, use Lucide (this repo’s static HTML setup — not Lucide React). Do not use emoji characters, decorative Unicode symbols, or other icon libraries as substitutes.

## Icons (Lucide)

This project is plain HTML/JS, not React. Use **Lucide** via the existing pattern:

```html
<button class="icon-btn" aria-label="Open glossary">
  <i data-lucide="book-open" class="licon"></i>
</button>
```

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>
  if (window.lucide) lucide.createIcons();
</script>
```

Rules:

* Pick icon names from [Lucide icons](https://lucide.dev/icons/) (`book-open`, `chevron-right`, `rotate-ccw`, etc.).
* Use `<i data-lucide="icon-name">` (optional `.licon` class to match existing pages).
* Always call `lucide.createIcons()` after adding or changing icons, including after dynamic DOM updates (e.g. feedback set via `innerHTML`).
* Style icons with shared classes (e.g. `.icon-btn`, `.licon`) — do not inline icon sizing or colors.
* Do **not** install `lucide-react` or add React — this codebase does not use React.

**Feedback with icons (allowed):**

```javascript
msg.innerHTML = '<i data-lucide="alert-triangle" class="licon"></i> “Your commuter bike” is in the tab, but it’s yours — not part of the repair work. Take it back out.';
// then: if (window.lucide) lucide.createIcons();
```

Use `alert-triangle` for warnings, `check` for success, `info` for hints — not emoji equivalents.

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

Use relative `href="shared.css"` and `src="shared.js"` from the repo root.

## Layout and component conventions

Prefer existing patterns from the activity/tutorial pages (`11-getting-organized.html`, `12-insurance-and-maria.html`, `13-anna-and-the-bank-statement.html`):

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

## Cross-page consistency (required before editing HTML)

Before creating or changing any `.html` file:

1. List or scan all HTML files in the repo (root and subfolders).
2. Open at least **two reference pages** from the canonical activity/tutorial files:
   - Start with `11-getting-organized.html` (simplest activity shell)
   - Then `12-insurance-and-maria.html` or `13-anna-and-the-bank-statement.html` for heavier patterns
   - Do **not** use `index.html` as a layout or styling reference — it is not part of the activity design system
3. Match the same **document skeleton**, wrapper classes (`.page`, `.prework-wrap`), header chrome, script load order, feedback markup, and Lucide usage — do not invent a new layout shell.
4. Before adding UI, search `shared.css` and grep other HTML files for an existing class or markup pattern.
5. After edits, compare against references: header, cards, buttons, feedback, dark-mode surfaces, icon calls.

When changing `shared.css` or `shared.js`, consider impact on **all** HTML pages that use those classes or helpers — do not optimize for one page only.

## Light and dark mode

- Dark mode is system-driven via `@media (prefers-color-scheme: dark)` in `shared.css`.
- `<meta name="color-scheme" content="light dark">` is required on every page.
- `applyConfig()` in `shared.js` applies `SITE_CONFIG` overrides in light mode only — do not override dark mode from HTML or page scripts.
- **New classes:** add light-mode rules using tokens, then append matching dark-mode rules in the existing dark-mode block(s) in `shared.css`. Do not edit existing dark-mode rules unless the user approves.
- Document/spreadsheet facsimiles (`.xlsx`, `.xlwb`, `.stmt`, `.lease`, etc.) may need additional dark rules in the facsimile section at the bottom of `shared.css`.

## Workflow

```
Task progress:
- [ ] List HTML files and read 1–2 sibling pages for the same page type
- [ ] Search shared.css for existing classes before adding new ones
- [ ] Search shared.js for existing helpers before writing new JS
- [ ] Edit HTML structure only — no local component CSS
- [ ] If new classes are required, append to shared.css (light + dark)
- [ ] If new shared behavior is required, append small functions to shared.js
- [ ] Stop and explain if an existing shared rule/function seems wrong
- [ ] Verify markup matches reference pages and both light/dark mode visually
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
| Emoji characters (✅ ⚠️ 🎉) in text | Lucide `<i data-lucide="...">` in markup or feedback HTML |
| `lucide-react` or other icon libraries | Lucide via unpkg + `data-lucide` |

## Verification checklist

- [ ] Read 1–2 activity reference pages (`11-`, `12-`, or `13-` HTML) before editing — not `index.html`
- [ ] No local CSS component styles in HTML
- [ ] Existing shared classes used wherever possible
- [ ] `shared.css` and `shared.js` linked once each
- [ ] New CSS/JS appended only — no deletions or refactors without approval
- [ ] New classes use design tokens and include dark mode
- [ ] New JS checked against `shared.js` first
- [ ] Visual style matches sibling pages in both light and dark mode
- [ ] No emoji characters in copy or feedback; Lucide icons via `data-lucide` are OK (call `lucide.createIcons()` after dynamic updates)

## Reference files

- `shared.css` — all shared styling (append-only)
- `shared.js` — all shared behavior (append-only)
- `11-getting-organized.html` — primary activity reference (simplest)
- `12-insurance-and-maria.html`, `13-anna-and-the-bank-statement.html` — heavier activity patterns
