# Bike-Repair.xlsx — Workbook Design (locked)

**Status:** Locked 2026-06-29. **Re-based 2026-07-02** to the revised pre-LLC setup: no May card paydowns, personal cover **$160**, LLC deposit **$1,300**, card carried **$2,030** (opening $4,710 / $2,250 / $2,460). **§5 and §6.7 patched 2026-07-01** to the built novice state
(GENERATED +$2,570 itemized job-by-job, residual $4,430, recognition gaps visible). The reference
design for the in-tutorial **Bike-Repair.xlsx** facsimile, as built and approved in
`31-2-work-the-season.html`. Every Module 3 page that shows the workbook (`31-3` onward) inherits
this structure, these numbers, and these rules. Pedagogy defers to `accounting-pedagogy`; page/style
rules to `instructional-shared-styles`.

This document locks the **opening (June 1, 2026) snapshot** — Module 2's close carried into the
operating season. Numbers are the locked figures in
`Accounting Pre-work/Module-1-Redesign/Bike-Repair-2-Transactions-Jun-Aug-2026.txt` (Courses repo).

---

## 1. Shape

A workbook with **three tabs**: **Assets · Liabilities · Reasons.** There is **no Cash tab** —
cash is folded into Assets as a line. Tabs are static (the "before" snapshot); only the Reasons tab
grows as a page's activity runs.

> **This is the post-discovery (Module 3) state.** Both the folding-in of Cash *and the Reasons tab
> itself* are **discovered in Module 1 beats** — they are not starting assumptions (see §7c). By
> Module 3 the workbook is already past those beats, so it opens with Cash folded in and the Reasons
> tab present. Earlier pages must show the **pre-beat** structure.

**Every line drills down.** Assets, Liabilities, and the carried-in equity balances on the Reasons
tab all carry a `+`/`−` toggle that opens to the detail that makes up the total. Single-item lines
expand too (for parallelism). This is the defining feature: totals up top, the receipts underneath.

---

## 2. Build conventions (hard rules)

- **Vanilla HTML/JS**, no React/Babel. Render the workbook by building HTML strings and assigning
  `innerHTML`; re-render on every toggle.
- **Shared classes only** (`shared.css`, append-only, no additions without approval; no inline
  component styles): `.xlwb`, `.xlwb-bar`, `.xlwb-tab`, `.xl-row`, `.xl-head`, `.xl-cat`,
  `.xl-toggle`, `.xl-item`, `.xl-total`, `.xl-gutter`, `.xl-rownum`, `.xl-c`, `.xl-v`,
  `.cash-sheet-head` / `-title` / `-sub`. Reasons piles reuse `.xl-cat`/`.xl-item`.
- **Expandable category markup:** an `.xl-cat` row whose gutter holds an `.xl-toggle` button
  (`onclick="toggle…(i)"`, `+`/`−`), then `.xl-item` rows below when open. A flat line is an
  `.xl-item` with a numbered `.xl-rownum`; nested detail items leave `.xl-rownum` blank.
- **Expand state is index-keyed** maps (`assetsExpanded`, `liabExpanded`, `carriedExpanded`),
  toggled by `toggle…(i)` handlers that re-render the active container. Reasons piles use a
  keyed-by-group map (`reasonGroupOpen`).
- **Formatters:** `dol(v)` → unsigned dollars with a leading `−` for negatives (balances and
  detail lines). `signedDollars(v)` → explicit `+`/`−` with `.stmt-dep`/`.stmt-with` color (reason
  deltas).
- **Lucide** icons only (`data-lucide`), no emoji. `lucide.createIcons()` after every re-render.

---

## 3. Assets tab — opening June 1 (total **$4,710**)

Cash folded in as a **position** (the balance), expandable to its **full ledger** — the ledger ends
with the two contributions that built the opening balance. Every other category expands to its
items.

| Line (category) | Balance | Expands to |
|---|--:|---|
| **Cash** | **$1,300** | the first-month ledger (below), netting to $1,300 |
| **Right of Use** | **$650** | Right to occupy the space — the lease's last month, paid in advance ($650) |
| **Parts** | **$200** | chains 50 · brake pads 40 · derailleur cables 20 · cassettes 40 · bottom brackets 20 · spokes 20 · tubes 10 |
| **Tools & Repair Equipment** | **$1,200** | stand 200 · air compressor 180 · parts washer 130 · wheel-truing stand 170 · cone wrench set 65 · torque wrench 95 · hex/Allen set 45 · cable cutters 40 · chain breaker 35 · tire levers 20 · bench grinder 90 · headset press 70 · shop vacuum 60 |
| **Fixtures** | **$750** | desk 250 · shelving units 200 · display rack 180 · pegboard + hooks 120 |
| **Office Equipment** | **$610** | Laptop 610 |
| **Total Assets** | **$4,710** | |

**Cash ledger** (expands under Cash; signed flows, nets to $1,300). The **last two entries are
locked**: the implicit personal-funds contribution, then the LLC deposit.

| Entry | Amount |
|---|--:|
| May 1 — Rent paid in advance | −$1,300 |
| May 3 — Park Tool stand | −$200 |
| May 7 / 10 / 12 / 14 — Repairs, customer paid | +$340 / +$180 / +$80 / +$140 |
| May 19 — Repair, customer paid | +$130 |
| May 22 — Smith deposit | +$220 |
| May 23 / 27 — Repairs, customer paid | +$100 / +$150 |
| **Covered from your personal funds — what the work had quietly drawn down** | **+$160** |
| **Deposited to open the LLC's bank account** | **+$1,300** |
| **Cash on hand, June 1** | **$1,300** |

---

## 4. Liabilities tab — opening June 1 (total **$2,250**)

The card carries a charges/payments breakdown (it reconstructs M1's real history — the charges are
the very assets across the aisle). Unearned Revenue expands to its single advance.

| Line | Balance | Expands to |
|---|--:|---|
| **Credit Card** | **$2,030** | **Charged** (= $2,030): hand tools 300 · air compressor 180 · parts washer 130 · wheel-truing stand 170 · fixtures 750 · parts (QBP order) 500. **Nothing paid down before June** — the whole $2,030 rides into the season. |
| **Unearned Revenue** | **$220** | Smith — paid $220 up front for a custom frame, not yet built |
| **Total Liabilities** | **$2,250** | |

So **A − L = $4,710 − $2,250 = $2,460** opening members' capital.

---

## 5. Reasons tab — carried in + this season

The Reasons tab is **continuous** from Module 1 (Module 2 had no workbook; the last place the
student saw it was the end of Module 1). It opens carrying the prior result as **two named balances**,
each expandable to what settled into it. The season's new reasons accumulate below.

### Carried in — members' capital, June 1 (the prior reasons, already settled)

| Balance | Amount | Expands to |
|---|--:|---|
| **Contributed Capital** | **$2,290** | cash to get the work going 160 · laptop from home 610 · gear from home 220 · cash contributed forming the LLC 1,300 |
| **Retained Earnings** | **$170** | repairs earned 1,120 · parts used −300 · space used (rent) −650 |
| **Members' capital, June 1** | **$2,460** | |

> Opening Retained Earnings expands to *repairs earned − what the work used up* — a quiet foreshadow
> of the income statement and closing, **without naming either**.

### This season's reasons (kept in full detail — **not** closed, **not** bucketed)

Recorded via the page's walk, then dropped into the familiar Module 1 piles (M3 adds a third). The
GENERATED pile is **the mess** — jumbled **job by job** (each repair collected sitting next to its
own parts used, each month's rent dropped in when paid), **not** sorted into revenue-then-expense.
This unsorted pile is what motivates the income statement in 3.2; it must **not** be pre-bucketed.

| Pile | Subtotal | Rows (itemized, job-by-job order) |
|---|--:|---|
| **CONTRIBUTED** | — | *(nothing new put in this season; Contributed Capital is the carried balance above)* |
| **GENERATED** | **+$2,570** | one row per event, jumbled: `Repair collected — {customer}` (+charge) · `Frame delivered — J. Smith` (+220) · `Parts used — {customer}` (−partsCost) · `Rent used — {month}` (−650 ×3). Nets: repairs collected + Smith's frame = **Sales $5,720**; parts used **−$1,200**; rent used **−$1,950** → **+$2,570**. |
| **TAKEN OUT** | **−$600** | owner's draw −600 |

**Residual close:** carried members' capital $2,460 + GENERATED $2,570 − draw $600 = **$4,430** =
Assets $4,430 − Liabilities $0. (The card is paid off to $0; Smith's Unearned earns out to $0.)

**Recognition gaps left visible in the raw data (deliberate — they seed 3.2/3.3):**
- **Ridgeline Trail Crew** — trail-team tune finished Aug 28, **on account (uncollected)**. The novice
  records `Parts used — Ridgeline −$75` but **no collection**, so the **$300** earned is nowhere in
  the books. This is the **A/R** discovery of 3.2 ("revenue follows the work, not the cash").
- **Depreciation** — none taken. Tools and the laptop are still carried at full cost; the season's
  **$230** of wear ($200 tools + $30 laptop) never touched the reasons. This is the discovery of 3.3.

So the novice books close at **$4,430**, exactly **$70** short of the true **$4,500**: +$300 uncollected
receivable − $230 untaken depreciation. Both gaps sit in plain sight in the data, unnamed.

Pairs that cancel (revealed, then crossed out during the walk; they don't move net): buy parts for
cash, collect a billed repair, pay the rent, buy a new tool, pay off the card.

---

## 6. Locked design decisions (the "why", so they don't drift)

1. **Three tabs; cash folded into Assets, no Cash tab** — the *post-fold* (M3) state; the fold itself
   is a Module 1 beat (§7c), and the Reasons tab arrives at its own beat. Matches the house model (`15-2`).
2. **Uniform drill-down.** Every line expands — Assets, both Liabilities, both carried equity
   balances. Single-item lines expand too, for parallelism.
3. **Cash = position, not a flow statement.** The Cash line shows the balance and expands to its
   *history*; it is **not** a cash-flow statement (operating/investing/financing) — that is
   Tutorial 3.4's to build. The ledger's **last two entries are locked**: +$160 implicit
   contribution, +$1,300 LLC deposit.
4. **Carried balances are expandable** to the detail that settled into them — continuity made
   visible, not opaque opening numbers.
5. **Account naming: "Right of Use"** (not "Prepaid Rent") — the Module 1 convention. The
   transactions answer-key `.txt` was reconciled to match. The **YALEiE check workbook** must use
   the same term. The laptop sits under an **"Office Equipment"** category.
6. **Preserve detail; discover later.** The season's reasons are kept itemized and **un-closed** —
   no folding into Retained Earnings, no revenue/expense buckets, no grand "season total" line.
   Temporary accounts, the income statement, and closing are the **discoveries** of Tutorials
   3.2–3.5. The transactions file's "Close the temporary accounts" step is answer-key bookkeeping
   for the YALEiE check workbook only — **not** a script for the HTML.
7. **The novice's recognition gaps (not recorded in `31-2`):** Ridgeline's completed-but-uncollected
   **$300** (no cash, no record → the **A/R** discovery of Tutorial 3.2) and **depreciation** ($200
   tools + $30 laptop = **$230** → Tutorial 3.3). Neither is recorded as a season event, so the
   novice books close at members' capital **$4,430** (Assets $4,430 − Liabilities $0) — exactly **$70**
   short of the true **$4,500**. The reconciliation: **+$300** uncollected receivable − **$230**
   untaken depreciation = **+$70**, surfacing in 3.2 and 3.3.
   *(Smith's $220 advance **does** earn out in `31-2`: his custom frame is finished and delivered in
   the season, so Unearned Revenue closes to $0 and "Frame delivered — J. Smith +$220" sits in the
   GENERATED pile. It is recorded in both the novice and the true books, so it is **not** part of the
   $70 gap. The visible net-movers thus move capital by **+$1,970** — GENERATED +$2,570 less the −$600
   draw — carrying opening $2,460 to the novice close $4,430.)*

---

## 7. Building forward to this design (from Tutorial 11-1)

Every page that shows the workbook — all the way back to `11-1` — is **the same Bike-Repair.xlsx at
an earlier snapshot**, not a different widget. Redoing those pages should mean *supplying the right
snapshot*, not rebuilding the UI. Three things make that true; hold them on every page and the work
converges here with no late retrofit.

> **⚠ Careful — the workbook's *structure* is itself discovered, not assumed.** At least two
> structural features are explicit pedagogical **beats**, earned on screen: **(1)** folding **Cash**
> into the asset list (discovered from Maria's *insurable-property* list — cash isn't insurable, but
> it's still the work's), and **(2)** the **Reasons tab** being born (when the student first needs to
> record *why* a balance moved). Before each beat the workbook does **not** have that feature.
> **Never render a later structure on an earlier page** — converging on this design means arriving at
> it *through* the beats, not importing it whole.

### 7a. One schema, one renderer (the highest-leverage move)

Build the workbook **once** and drive it with data. Use these exact shapes everywhere:

```
// Assets / Liabilities / carried equity — a line, optionally expandable:
{ key:'tools', label:'Tools & Repair Equipment', amount:1200, note:'…', items:[ {name, amt}, … ] }
//   items omitted/null  → flat line;  items present → expandable category (xl-cat + xl-toggle)
// Credit Card uses { detail:{ charges:[…], payments:[…] } } instead of items.

// Reasons — one row per side of a change:
{ id:'use_rent', key:'rightOfUse', delta:-1950, kind:'net'|'pair', cat:'generated'|'drawn'|'contributed', reason:'…' }
```

Renderer behavior is fixed (see §2): expandable categories, `dol()` for balances/detail,
`signedDollars()` for reason deltas, totals, index-keyed expand state.

> **Strong recommendation:** lift the renderer + formatters into **`shared.js`** (one
> `renderBikeRepairWorkbook(snapshot, state)` helper) so every page *calls* it instead of
> re-pasting ~120 lines. Then a page rebuild is pure data. This is an addition to `shared.js`, which
> is **append-only and needs Rick's approval** (`instructional-shared-styles`) — post the plan
> first. Until then, copy the `31-2` renderer block verbatim; do not fork it.

### 7b. Stable keys, evolving labels (names-last, by design)

Convergence is **not** "use the formal names everywhere" — that would break experience-first. Each
account keeps a **stable `key`** for its whole life; only its **display label** matures from plain
→ formal at the page where the concept is named. Build with the key; choose the label by where the
page sits.

| key | plain label (early M1, names-last) | formal label (canonical, by M3) | named at |
|---|---|---|---|
| `cash` | Cash | Cash | 1.1 |
| `rightOfUse` | the right to use the space (prepaid month) | **Right of Use** | ~1.3 |
| `parts` | parts on the shelf | **Parts** | ~1.3 |
| `tools` | the repair gear / tools | **Tools & Repair Equipment** | ~1.3 |
| `fixtures` | fixtures (desk, shelving…) | **Fixtures** | ~1.3 |
| `officeEquip` | the laptop | **Office Equipment** | ~1.3 |
| `creditCard` | what you owe on the card | **Credit Card** | ~1.3 |
| `unearned` | what you owe Smith (his deposit) | **Unearned Revenue** | M3 (3.4 earns it out) |
| `contributedCapital` | what you put in (*Contributed*) | **Contributed Capital** | 1.5 |
| `retainedEarnings` | what the work generated (*Generated*) | **Retained Earnings** | 1.5 |

The current M1 pages use other plain labels (`EQUIPMENT`, `COMPUTER EQUIPMENT`, `SUPPLIES`) — migrate
them to the keys above; pick the plain or formal label per the page's place in the arc.

### 7c. What's fixed vs. what's discovered

**Discovered — earned in a beat, absent before it** (see the §7 callout): **folding Cash into the
asset list** (off Maria's insurable-property list) and **the Reasons tab itself**. A page's snapshot
declares which structural features exist yet; **never show a post-beat structure pre-beat.** Once a
feature is earned it stays (the Reasons tab is **continuous** after its beat).

**Fixed on every workbook page (invariants):**

1. **Schema + renderer** (§7a): shared `xl-*` classes, `dol()` / `signedDollars`, index-keyed expand
   state, no inline styles.
2. **Every line drills down** to its detail (single-item lines included). Same `xl-cat`/`xl-toggle`
   idiom; no inline styles; shared classes only.
3. **Cash is a position** that expands to its ledger — never a cash-flow statement (that's 3.4).
4. **Numbers tie to the period's manifest** at every snapshot; `A − L = members' capital` holds.
5. **Preserve detail; name and fold later.** No pre-closing, no revenue/expense buckets, no
   premature formal terms. Discovery (identity 1.5; temporary accounts / income statement / closing
   / cash-flow / articulation in M3) is the payoff, never front-run.

### 7d. The workbook's growth timeline (each page = a frame of this)

| Milestone | Workbook holds |
|---|---|
| **1.1 Getting Organized** | The entity line drawn; things sorted (the work's vs personal). Asset / owe lists begin, plain labels. **Cash is its own thing — not yet in the Assets list;** no Reasons tab. |
| **1.2 Insurance and Maria** | Assets framed as **insurable property** (Maria's form). Cash is deliberately *not* on it — not insurable. |
| **1.3 Anna and the Bank Statement** | The bank statement brings **cash** into view as its own list — **not yet folded into Assets.** |
| **1.4 Keeping the Reasons** *(CMU team title: "Why Keep the Reasons")* | ★★ **Two beats, both here.** **(a) Cash-fold** — Cash is folded into the Assets list, decided off the insurable-property framing ("is cash a right to future benefits?" — it's not insurable, but it's still the work's). **(b) Reasons tab is *born*** — log net-movers, cross the pairs, sort into *Contributed* / *Generated* (plain). |
| **1.5 Naming What You Built** | Names land: `A − L = Equities`; *Contributed* → **Contributed Capital**, *Generated* → **Retained Earnings**. |
| **Module 2 (no workbook on screen)** | Off-screen events still move it: **+$1,300 contributed** (Contributed Capital 990 → **2,290**), LLC formed, bank account opened. M3 must open consistent with this. |
| **Module 3 — 3.1 (`31-x`)** | **This locked snapshot.** Opening Assets $4,710 / Liabilities $2,250; Reasons tab carries **Contributed Capital $2,290 + Retained Earnings $170**, season's reasons accumulate (un-closed). |
| **Module 3 — 3.2–3.5** | Discoveries build *on top of* this snapshot: income statement, depreciation, cash-flow, the articulated set. |

> **★ Rebuild gap — Tutorial 1.4.** Both structural beats live here, but the **CMU team's 1.4
> ("Why Keep the Reasons") does not fold Cash in** — cash stays a separate list/tab through Module 1
> in their version. Rick's design ("Keeping the Reasons") folds it in *during 1.4*, off the
> insurable-property framing. The rebuild must **add the cash-fold beat to 1.4** and carry the fold
> forward from there. (Reference: `Module-1-Redesign/Tutorials-v2/14-keeping-reasons-2pane.html` —
> the fold is "born in the welcome via the *is cash a right to future benefits?* choice.")

### 7e. Rebuild checklist (per page)

- [ ] Reuse the shared schema + renderer (don't re-invent the workbook UI).
- [ ] Supply this page's **snapshot**: which accounts exist yet, their balances, their `items`, and
      each label chosen **plain or formal** per §7b.
- [ ] **Past the cash-fold beat?** If yes: Cash folded into Assets as a position, expandable to its
      ledger. If no: cash sits outside the asset list (pre-beat). Same question for the Reasons tab.
- [ ] Every line expandable; totals present; `A − L` ties to the period manifest.
- [ ] If the Reasons tab is live: carry prior **named balances** forward; keep this period's reasons
      **itemized and un-closed**.
- [ ] No formal term or fold-up earlier than its named-at page (§7b, §7d).

---

## 8. Source-of-truth pointers

- **Numbers / answer-key:** `Accounting Pre-work/Module-1-Redesign/Bike-Repair-2-Transactions-Jun-Aug-2026.txt` (Courses repo).
- **Check workbook (Rick's):** `…/Bike-Repair-2-YALEiE-v12.2.xlsx` — must share account names (Right of Use, etc.).
- **Reference implementation:** `31-2-work-the-season.html` (this repo).
- **Module plot/pedagogy:** `Module-3-Design.md`.
- **Carried-in M1 detail** (where the $2,290 / $170 come from): Module 1 Tutorial 4/5 reasons
  (`14-*` / `15-2`).
