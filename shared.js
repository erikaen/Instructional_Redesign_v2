// ===== SHARED JS — Accounting Prework =====
// Glossary data, navigation, progress tracking, config application.
// Loaded by index.html and all module pages.

// ===== MODULE MAP =====
var MODULES = [
  { num: 1, title: "Welcome and Orientation",       file: "index.html" },
  { num: 2, title: "Why Accounting Systems Exist",   file: "module2.html" },
  { num: 3, title: "Worth, Quantification, and Limits", file: "module3.html" },
  { num: 4, title: "The Architecture",                file: "module4.html" },
  { num: 5, title: "CVS Health: Balance Sheets",     file: "module5.html" },
  { num: 6, title: "CVS Health: Income Statement",   file: "module6.html" },
  { num: 7, title: "CVS Health: Cash Flows",         file: "module7.html" },
  { num: 8, title: "The Analyst\u2019s Toolkit",     file: "module8.html" }
];

// ===== GLOSSARY =====
var GLOSSARY = [
  { term: "Accounting system", def: "A shared information system that compresses the economic complexity of an organization into structured reports that many different people can consult for different purposes." },
  { term: "Architecture", def: "The deep structure shared by accounting systems around the world: the self-balancing identity imposed at two dates to create two balance sheets, the flow statements that decompose the difference between them, and double-entry bookkeeping as the recording method. The architecture does not vary across instances." },
  { term: "Instance", def: "A specific set of rules written by a rule-making body for a particular class of organizations. US GAAP, IFRS, and governmental accounting standards are each instances of the shared architecture." },
  { term: "Accounting identity", def: "A self-imposed balancing requirement at the center of every accounting system: Assets \u2212 Liabilities. The difference is fully determined once Assets and Liabilities are set \u2014 a computed difference, not an independent third quantity \u2014 and it has no single name; each kind of entity gives it its own, and even those names have shifted over time. Not derived or discovered \u2014 chosen, because of what imposing it makes possible." },
  { term: "Assets", def: "Present rights to economic benefits held by the entity. Not physical things \u2014 rights. A building is an asset because the entity holds the right to use, rent, or sell it. Cash is an asset because it embodies the right to acquire other things. No future benefit, no asset." },
  { term: "Liabilities", def: "Present obligations of the entity to transfer economic benefits. The entity owes something and cannot avoid the transfer. The obligation must be compelling \u2014 not optional, not merely possible." },
  { term: "Double-entry bookkeeping", def: "A recording method in which every economic event is entered in two places, maintaining the balance of the accounting identity. Evolved in medieval Italy; now used by most accounting systems worldwide." },
  { term: "Financial statements", def: "The four output channels of the accounting system: the balance sheet, income statement, statement of changes in Member's Capital, and statement of cash flows. The flow statements are not separate reports that happen to agree with the balance sheets \u2014 they are decompositions of the change between two balance sheets." },
  { term: "US GAAP", def: "Generally Accepted Accounting Principles. The instance of the accounting architecture written by FASB for US for-profit entities. The instance studied in this prework." },
  { term: "IFRS", def: "International Financial Reporting Standards. The instance written by the IASB for entities in most countries outside the United States." },
  { term: "FASB", def: "Financial Accounting Standards Board. The body that writes US GAAP \u2014 the accounting rules for US for-profit entities." },
  { term: "Instance choice", def: "A decision made by a rule-making body (FASB, IASB, GASB) that could have been made differently. Whenever a GAAP-specific rule appears in the prework, it is identified as an instance choice." },
  { term: "Tradeoff", def: "Every design choice in the accounting system gains something and loses something. There is no tradeoff-free accounting system \u2014 that would be reality itself." },
  { term: "Compression", def: "What every accounting system does: takes the vast complexity of an organization\u2019s economic activity and produces something structured enough for human minds to work with. Compression requires choices, and choices involve tradeoffs." },
  { term: "Input boundary", def: "The line that determines which economic events enter the accounting system and which do not. There is too much data to include it all. What falls outside the boundary \u2014 human capital, internally generated brands, relational assets \u2014 is invisible to the system." },
  { term: "Journal entry notation", def: "The language of debits and credits used to analyze and record transactions. The first step in accounting for any transaction is to analyze it: what changed, where do the effects land, does everything still balance?" },
  { term: "Historical cost", def: "The amount recorded at the time of an arm\u2019s-length transaction \u2014 the strongest epistemic anchor for worth, because two independent parties looked at the same thing and agreed on a price." },
  { term: "Balance sheet", def: "The financial statement that shows the accounting identity at a date: Assets \u2212 Liabilities. What the entity has recorded as resources, what it owes, and the difference between them. A snapshot of position, not an explanation of how the entity got there." },
  { term: "Income statement", def: "A decomposition of the operating portion of the change in Member's Capital between two balance sheets. Shows revenues (gross inflows of worth from the entity\u2019s activities) and expenses (resources consumed in generating those revenues). The income statement does not \u201cagree with\u201d the change in retained earnings \u2014 it is an explanation of part of that change." },
  { term: "Statement of cash flows", def: "A decomposition of the change in one particular asset \u2014 cash \u2014 between two balance sheets. Groups cash movements into operating, investing, and financing categories. Under the indirect method, it begins with net income and adjusts for everything that affected income but not cash, and vice versa." },
  { term: "Revenue", def: "The gross inflows of worth resulting from an entity\u2019s activities \u2014 selling goods, providing services, earning fees. Revenue is recognized when earned, which may be before or after cash is collected." },
  { term: "Expense", def: "The resources consumed in generating revenues. Like revenue, expenses are recognized when incurred, not necessarily when cash is paid. The conventions governing when to recognize an expense are among the most consequential in the system." },
  { term: "Accrual accounting", def: "The set of conventions that decouple recognition from cash movement. Revenue is recognized when earned, not when collected. Expenses are recognized when incurred, not when paid. This is what creates the gap between the income statement and the cash flow statement \u2014 and why both are needed." },
  { term: "Recognition", def: "The gatekeeper decision: does this event get recorded in the system at all? Recognition rules are restrictive \u2014 they typically require evidence of a transaction before something enters the books. This is why some of an entity\u2019s most important economic resources (workforce, brand, strategic position) may never appear on a balance sheet." },
  { term: "Feeder fund", def: "A fund that does not invest directly. Instead, it raises money from investors and channels it into another fund that supposedly does the actual investing. The structure adds a layer between investors and the underlying activity, which can make oversight more difficult." },
  { term: "Ponzi scheme", def: "A fraud in which returns paid to existing investors come not from any productive activity but from money put in by newer investors. No worth is created \u2014 the scheme simply redistributes money among participants while creating the appearance of investment returns. Named after Charles Ponzi, who ran a famous scheme in Boston in 1920, though the fraud itself is far older." },
  { term: "Worth", def: "The opportunity set a resource, obligation, or claim embodies \u2014 the goods, services, exchanges, and transformations it makes available. Worth is not a single number waiting to be read off an instrument. It is broader than price: a price expresses worth at a particular moment in a particular transaction, but different people may see different opportunities in the same thing and reasonably disagree about its worth. Preferred over \u201cvalue\u201d in this prework because \u201cworth\u201d carries the honest implication that the concept resists precise definition." }
];

// Sort alphabetically
GLOSSARY.sort(function(a, b) { return a.term.localeCompare(b.term); });


// ===== GLOSSARY RENDERING =====
function renderGlossary() {
  var list = document.getElementById('glossaryList');
  if (!list) return;
  list.innerHTML = '';
  GLOSSARY.forEach(function(g, i) {
    var item = document.createElement('div');
    item.className = 'glossary-item';
    item.setAttribute('data-index', i);
    item.innerHTML = '<div class="glossary-term">' + g.term + '</div><div class="glossary-def">' + g.def + '</div>';
    list.appendChild(item);
  });
}

function toggleGlossary() {
  var overlay = document.getElementById('glossaryOverlay');
  var backdrop = document.getElementById('glossaryBackdrop');
  var isOpen = overlay.classList.toggle('open');
  backdrop.classList.toggle('open', isOpen);
  if (isOpen) {
    document.getElementById('glossarySearchInput').value = '';
    filterGlossary('');
    document.getElementById('glossarySearchInput').focus();
  }
}

function filterGlossary(query) {
  var q = query.toLowerCase();
  var items = document.querySelectorAll('.glossary-item');
  items.forEach(function(item) {
    var i = parseInt(item.getAttribute('data-index'));
    var match = GLOSSARY[i].term.toLowerCase().indexOf(q) !== -1 || GLOSSARY[i].def.toLowerCase().indexOf(q) !== -1;
    item.classList.toggle('hidden', !match);
  });
}


// ===== MODULE NAV DROPDOWN =====
function toggleModuleNav() {
  document.getElementById('navModules').classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  var nav = document.getElementById('navModules');
  if (nav && !nav.contains(e.target)) nav.classList.remove('open');
});

// Build the module dropdown dynamically
function buildModuleDropdown(currentModuleNum) {
  var dropdown = document.getElementById('moduleDropdown');
  if (!dropdown) return;
  dropdown.innerHTML = '';
  var progress = getProgress();
  MODULES.forEach(function(m) {
    var a = document.createElement('a');
    a.href = m.file;
    if (m.num === currentModuleNum) {
      a.className = 'current';
    } else if (progress[m.num]) {
      a.className = 'completed';
    }
    a.innerHTML = '<span class="nav-dd-num">' + m.num + '</span> ' + m.title;
    dropdown.appendChild(a);
  });
}


// ===== PROGRESS TRACKING =====
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('prework_progress') || '{}');
  } catch(e) { return {}; }
}

function markModuleVisited(moduleNum) {
  var progress = getProgress();
  if (!progress[moduleNum]) {
    progress[moduleNum] = { visited: true, timestamp: Date.now() };
    localStorage.setItem('prework_progress', JSON.stringify(progress));
  }
  updateProgressBar();
}

function updateProgressBar() {
  var progress = getProgress();
  var visited = Object.keys(progress).length;
  var total = MODULES.length;
  var pct = Math.round((visited / total) * 100);
  var fill = document.getElementById('progressFill');
  if (fill) fill.style.width = pct + '%';
}


// ===== ACCORDION =====
function toggleAccordion(el) {
  var section = el.closest('.accordion-section');
  section.classList.toggle('open');
}

// Open all accordions by default if fewer than a threshold, or first one only
function initAccordions(openFirst) {
  var sections = document.querySelectorAll('.accordion-section');
  if (openFirst && sections.length > 0) {
    sections[0].classList.add('open');
  }
}


// ===== RABBIT HOLES =====
function toggleRabbitHole(el) {
  var rh = el.closest('.rabbit-hole');
  rh.classList.toggle('open');
}


// ===== TRANSCRIPT (index.html only) =====
function toggleTranscript() {
  var box = document.getElementById('transcriptBox');
  var btn = document.getElementById('transcriptToggle');
  if (!box || !btn) return;
  var isOpen = box.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.textContent = isOpen ? 'Hide transcript' : 'Read transcript';
}


// ===== CONFIG-DRIVEN THEMING =====
function applyConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;
  var C = SITE_CONFIG;
  var r = document.documentElement.style;
  var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (C.colors && !isDark) {
    if (C.colors.primary)      r.setProperty('--primary', C.colors.primary);
    if (C.colors.primaryLight)  r.setProperty('--primary-light', C.colors.primaryLight);
    if (C.colors.faint)         r.setProperty('--primary-faint', C.colors.faint);
    if (C.colors.accent)        r.setProperty('--accent', C.colors.accent);
  }

  var titleEl = document.getElementById('courseTitle');
  if (titleEl) titleEl.textContent = C.courseTitle || 'Accounting Pre-Work';
  document.title = (C.courseTitle || 'Accounting Pre-Work');

  var navHome = document.getElementById('navHome');
  if (navHome) navHome.textContent = C.courseTitle ? C.courseTitle.split(' ')[0] : 'Prework';

  var parts = [];
  if (C.instructor && C.instructor.name) parts.push(C.instructor.name);
  if (C.instructor && C.instructor.title) parts.push(C.instructor.title);
  var authorLine = document.getElementById('authorLine');
  if (authorLine) authorLine.textContent = parts.join(' \u00B7 ');

  var instLine = document.getElementById('institutionLine');
  if (instLine && C.institution) instLine.textContent = C.institution;

  var logoEl = document.getElementById('bannerLogo');
  if (logoEl && C.logo) {
    if (C.logo.type === 'letter' && C.logo.value) {
      logoEl.textContent = C.logo.value;
    } else if (C.logo.type === 'url' && C.logo.value) {
      logoEl.innerHTML = '<img src="' + C.logo.value + '" alt="Logo">';
    }
  }

  var wt = document.getElementById('welcomeText');
  if (wt && C.welcomeText) {
    wt.textContent = C.welcomeText;
    wt.classList.add('visible');
  }

  var mascotEl = document.getElementById('mascot');
  if (mascotEl && C.mascot) {
    document.getElementById('mascotImg').src = C.mascot;
    mascotEl.classList.add('visible');
  }
}


// ===== PAGE INITIALIZATION =====
// Call this from each page's inline script: initPage(moduleNum)
function initPage(moduleNum) {
  renderGlossary();
  markModuleVisited(moduleNum);
  buildModuleDropdown(moduleNum);
  applyConfig();

  // Set the nav breadcrumb
  var navCurrent = document.getElementById('navCurrent');
  if (navCurrent) {
    var mod = MODULES.find(function(m) { return m.num === moduleNum; });
    if (mod) navCurrent.textContent = 'Module ' + mod.num + ': ' + mod.title;
  }

  // Open first accordion by default
  initAccordions(true);
}

/* ============================================================================
 * BRW — the Bike-Repair.xlsx workbook renderer (added 2026-06-29, Rick approved).
 * One renderer, driven by a per-page "snapshot" of data, so every workbook page
 * (11-1 … 31-x) is the same widget at a different point in the story.
 * See Bike-Repair-Workbook-Design.md §7. Append-only; self-contained `BRW`.
 *
 * Page usage (page must link shared.js):
 *     BRW.mount('wbBox', snapshot);     // initial render; BRW owns tab + expand UI
 *     BRW.update('wbBox', snapshot);    // re-render with new data, keep UI state
 *
 * SNAPSHOT (all optional except `tabs`):
 *   { file, tabs:[{id,label}], assets:[line], liabilities:[line|cardLine],
 *     reasons:{ carried:[line], mode:'walk'|'sorted', rows:[reasonRow],
 *               groups:[{key,label,blurb}], seasonSub } }
 *   line      = { label, note, amount, items?:[{name,amt}] }
 *   cardLine  = { label, note, amount, detail:{charges:[{name,amt}], payments:[{name,amt}]} }
 *   reasonRow = { id, account, delta, kind:'net'|'pair', cat, reason, revealed?, crossed? }
 * ============================================================================ */
var BRW = (function () {
  'use strict';

  var _reg = {};   // containerId -> { snap, ui:{tab, a:{}, l:{}, c:{}, g:{}} }
  var _hook = null; // optional page callback: _hook(type, cid, kind|id, key) on tab/expand. Default no-op.
  var _sheets = {}; // custom tab-id -> function(cid, snap) → body HTML. A page registers a renderer
                    // (built from the shared xl-* classes + BRW.dol/signed) for a tab not built into BRW.

  function dol(v) { return (v < 0 ? '−$' : '$') + Math.abs(v).toLocaleString('en-US'); }
  function signed(v) {
    var cls = v >= 0 ? 'stmt-dep' : 'stmt-with';
    return '<span class="' + cls + '">' + (v >= 0 ? '+' : '−') + '$' + Math.abs(v).toLocaleString('en-US') + '</span>';
  }

  function headRow(left, right) {
    return '<div class="xl-row xl-head"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + left + '</div><div class="xl-v">' + right + '</div></div>';
  }
  function totalRow(label, amount) {
    return '<div class="xl-row xl-total"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + dol(amount) + '</div></div>';
  }
  function flatRow(num, label, amount) {
    return '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum">' + (num || '') + '</div><div class="xl-c">' + label + '</div><div class="xl-v">' + dol(amount) + '</div></div>';
  }
  function detailRow(name, amount) {
    return '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + name + '</div><div class="xl-v">' + dol(amount) + '</div></div>';
  }
  // A ledger row: each entry shows its own amount (kind 'note' → no amount).
  function eventRow(ev) {
    var v = (ev.kind === 'note') ? '' : signed(ev.amt);
    return '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + ev.name + '</div><div class="xl-v">' + v + '</div></div>';
  }
  // Effective total of a line: sum of its event amounts (so the category total tracks its items), else its stated amount.
  function lineTotal(l) {
    if (l.events) return l.events.reduce(function (s, ev) { return s + (ev.kind === 'note' ? 0 : ev.amt); }, 0);
    return l.amount;
  }
  function catRow(cid, kind, key, num, label, amount, open) {
    return '<div class="xl-row xl-cat"><div class="xl-gutter"><button class="xl-toggle" onclick="BRW.x(\'' + cid + '\',\'' + kind + '\',\'' + key + '\')" aria-expanded="' + open + '">' + (open ? '−' : '+') + '</button></div>'
      + '<div class="xl-rownum">' + (num || '') + '</div><div class="xl-c">' + label + '</div><div class="xl-v">' + dol(amount) + '</div></div>';
  }

  function listSheet(cid, kind, lines, headLeft, totalLabel) {
    var ex = _reg[cid].ui[kind];
    var total = lines.reduce(function (s, l) { return s + lineTotal(l); }, 0);
    var html = headRow(headLeft, 'Value');
    lines.forEach(function (l, i) {
      var open = !!ex[i];
      if (l.detail) {
        html += catRow(cid, kind, i, i + 1, l.label + ' &mdash; ' + l.note, l.amount, open);
        if (open) {
          (l.detail.charges || []).forEach(function (it) { html += detailRow('Charged: ' + it.name, it.amt); });
          (l.detail.payments || []).forEach(function (it) { html += detailRow(it.name, it.amt); });
        }
      } else if (l.items) {
        html += catRow(cid, kind, i, i + 1, l.label + ' &mdash; ' + l.note, l.amount, open);
        if (open) l.items.forEach(function (it) { html += detailRow(it.name, it.amt); });
      } else if (l.events) {
        html += catRow(cid, kind, i, i + 1, l.label + (l.note ? ' &mdash; ' + l.note : ''), lineTotal(l), open);
        if (open) l.events.forEach(function (ev) { html += eventRow(ev); });
      } else {
        html += flatRow(i + 1, l.label + ' &mdash; ' + l.note, l.amount);
      }
    });
    html += totalRow(totalLabel, total);
    return html;
  }

  function sub(title, caption) {
    return '<div class="cash-sheet-head"><div class="cash-sheet-title">' + title + '</div><div class="cash-sheet-sub">' + caption + '</div></div>';
  }
  function reasonsSheet(cid, r) {
    var html = '';
    if (r.carried && r.carried.length) {
      html += sub('Carried in &mdash; members&rsquo; capital', 'the reasons from before, already settled. Open a line to see what settled into it.');
      var ex = _reg[cid].ui.c, ctot = 0;
      r.carried.forEach(function (l, i) {
        ctot += l.amount;
        var open = !!ex[i];
        if (l.items) {
          html += catRow(cid, 'c', i, i + 1, l.label + ' &mdash; ' + l.note, l.amount, open);
          if (open) l.items.forEach(function (it) { html += detailRow(it.name, it.amt); });
        } else { html += flatRow(i + 1, l.label + ' &mdash; ' + l.note, l.amount); }
      });
      html += totalRow('Member&rsquo;s Capital', ctot);
    }
    if (r.mode === 'sorted') {
      html += sub(r.pilesTitle || 'This season&rsquo;s reasons', r.pilesSub || 'sorted into your familiar piles &mdash; in full, and not folded into capital yet');
      var net = r.rows.filter(function (x) { return x.kind === 'net'; });
      var gex = _reg[cid].ui.g;
      (r.groups || []).forEach(function (g) {
        var rowsIn = net.filter(function (x) { return x.cat === g.key; });
        var subt = rowsIn.reduce(function (s, x) { return s + x.delta; }, 0);
        var open = gex[g.key] !== false;
        html += '<div class="xl-row xl-cat"><div class="xl-gutter"><button class="xl-toggle" onclick="BRW.x(\'' + cid + '\',\'g\',\'' + g.key + '\')" aria-expanded="' + open + '">' + (open ? '−' : '+') + '</button></div><div class="xl-rownum"></div><div class="xl-c">' + g.label + ' (' + rowsIn.length + ') &mdash; ' + g.blurb + '</div><div class="xl-v">' + signed(subt) + '</div></div>';
        if (open) {
          if (!rowsIn.length) html += '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c"><em>none this season</em></div><div class="xl-v"></div></div>';
          else rowsIn.forEach(function (x) { html += '<div class="xl-row xl-item"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + x.account + ' &mdash; ' + x.reason + '</div><div class="xl-v">' + signed(x.delta) + '</div></div>'; });
        }
      });
    } else {
      var shown = r.rows.filter(function (x) { return x.revealed; });
      html += sub('This season&rsquo;s reasons', r.seasonSub || (shown.length + ' rows so far'));
      if (!shown.length) { html += '<div class="bs-empty-msg">No reasons recorded yet &mdash; walk the season.</div>'; return html; }
      html += '<div class="xl-row xl-reasons xl-head"><div class="xl-gutter"></div><div class="xl-c">ACCOUNT</div><div class="xl-v"></div><div class="xl-c">REASON</div></div>';
      shown.forEach(function (x) {
        var strike = x.crossed ? ' eliminated' : '';
        html += '<div class="xl-row xl-reasons xl-item' + strike + '"><div class="xl-gutter"></div><div class="xl-c">' + x.account + '</div><div class="xl-v">' + signed(x.delta) + '</div><div class="xl-c">' + x.reason + '</div></div>';
      });
    }
    return html;
  }

  function shell(cid, snap, activeLabel, body) {
    var tabs = snap.tabs.map(function (t) {
      return '<button class="xlwb-tab' + (t.kind ? ' tk-' + t.kind : '') + (t.id === _reg[cid].ui.tab ? ' active' : '') + '" onclick="BRW.tab(\'' + cid + '\',\'' + t.id + '\')">' + t.label + '</button>';
    }).join('');
    return '<div class="xlwb">'
      + '<div class="xlwb-bar"><span class="xlwb-bar-title"><i data-lucide="file-spreadsheet" class="licon"></i> <span class="mono">' + (snap.file || 'Bike-Repair.xlsx') + '</span></span><span class="xlwb-bar-sheet">' + activeLabel + ' sheet</span></div>'
      + '<div>' + body + '</div>'
      + '<div class="xlwb-tabs">' + tabs + '<span class="xlwb-tab-add"><i data-lucide="plus" class="licon"></i></span></div></div>';
  }

  function render(cid) {
    var e = _reg[cid]; if (!e) return;
    var snap = e.snap, tab = e.ui.tab;
    if (!snap.tabs.some(function (t) { return t.id === tab; })) tab = e.ui.tab = snap.tabs[0].id;
    var body, label = (snap.tabs.filter(function (t) { return t.id === tab; })[0] || {}).label || '';
    if (tab === 'assets') body = listSheet(cid, 'a', snap.assets || [], 'Assets', 'Total Assets &mdash; what the records show');
    else if (tab === 'liabilities') body = listSheet(cid, 'l', snap.liabilities || [], 'Liabilities', 'Total Liabilities &mdash; what the records show');
    else if (tab === 'reasons') body = reasonsSheet(cid, snap.reasons || { rows: [] });
    else if (_sheets[tab]) body = _sheets[tab](cid, snap);
    else body = '';
    document.getElementById(cid).innerHTML = shell(cid, snap, label, body);
    if (window.lucide) lucide.createIcons();
  }

  return {
    dol: dol, signed: signed,
    mount: function (cid, snap) { _reg[cid] = { snap: snap, ui: { tab: (snap.tabs[0] || {}).id, a: {}, l: {}, c: {}, g: {} } }; render(cid); },
    update: function (cid, snap) { if (!_reg[cid]) return this.mount(cid, snap); _reg[cid].snap = snap; render(cid); },
    tab: function (cid, id) { if (window.playClick) playClick(); _reg[cid].ui.tab = id; render(cid); if (_hook) _hook('tab', cid, id); },
    x: function (cid, kind, key) { if (window.playClick) playClick(); var m = _reg[cid].ui[kind]; m[key] = (kind === 'g') ? (m[key] === false) : !m[key]; render(cid); if (_hook) _hook('expand', cid, kind, key); },
    setHook: function (fn) { _hook = fn; },
    // Register a renderer for a custom tab id (e.g. 'income'); BRW draws it inside its normal
    // shell (titlebar + tab strip). fn(cid, snap) returns body HTML built from the shared xl-* classes.
    registerSheet: function (id, fn) { _sheets[id] = fn; },
    // Return a registered custom sheet's body HTML without the workbook shell, so a page can
    // show a canonical statement as a free-standing panel (approved addition 2026-07-09; the
    // statement renderers ignore cid, so passing null is safe). Single source of truth: pages
    // must call this rather than hand-copying statement rows.
    sheetHTML: function (id, snap) { return _sheets[id] ? _sheets[id](null, snap) : ''; }
  };
})();

/* ===== Module 1 tutorial glossary (pages 11-x .. 15-x) =====
   Single source of truth. Progressive: a page shows only terms earned at or
   before its own position, so the glossary never hands out a name before the
   student earns it. Each page calls m1GlossaryOpen('<its page id>') from its
   own openGlossary() wrapper; `earned` is the page id where the term lands. */
var M1_GLOSSARY = [
  { module:'Module 2: Insurance and Maria', terms:[
    { earned:'12-1', term:'Property Policy', def:'Insurance that pays out if covered things are damaged or destroyed. Doesn&rsquo;t cover cash, or things you don&rsquo;t own (like the rented space).' },
    { earned:'12-2', term:'Market Value', def:'What it would fetch &mdash; what a comparable one sells for today (e.g. recent used &ldquo;eBay comp&rdquo; prices); the basis used to value the pre-owned laptop. One way to arrive at an asset&rsquo;s value &mdash; a choice, not the only one.' }
  ] },
  { module:'Module 3: Anna and the Bank Statement', terms:[
    { earned:'13-8', term:'Asset', def:'A present right to an economic benefit, recorded on the repair-work side of the line (the gear, the parts, the prepaid month, cash). &ldquo;Right to,&rdquo; not &ldquo;owns&rdquo;: a leased item is an asset.' },
    { earned:'13-8', term:'Noncash Asset', def:'An asset that isn&rsquo;t cash: equipment, parts on the shelf, fixtures, or a future right like prepaid rent.' },
    { earned:'13-8', term:'Liability', def:'A present obligation to transfer an economic benefit later, recorded against the repair work (the card balance; Smith&rsquo;s deposit, where what&rsquo;s owed is the frame, not money).' },
    { earned:'13-7', term:'Prepaid Rent', def:'Rent already paid for a future month; a present right (an asset) until the month is used, then it becomes a cost.' },
    { earned:'13-4', term:'Promise', def:'Something still to be done or paid because of the repair work &mdash; a promise made in the course of it. The plain word used before the term &ldquo;Liability.&rdquo;' },
    { earned:'13-4', term:'Deposit', def:'Money paid in advance for something not yet received. For the receiver it&rsquo;s a liability &mdash; the goods, the work, or the money back is still owed &mdash; not earnings yet.' }
  ] },
  { module:'Module 4: Keeping the Reasons', terms:[
    { earned:'14-1', term:'Reason', def:'The why you write down for a change in an Asset or a Liability that has <em>no match</em> &mdash; nothing else moved with it. The reasons are the changes that move the difference between Assets and Liabilities.' },
    { earned:'14-2', term:'Match', def:'The other line that moved with a change &mdash; same transaction, same amount: an Asset with a Liability, or one Asset with another. A matched pair explains itself, and the difference between Assets and Liabilities does not move. Every change gets either a match or a reason.' },
    { earned:'14-2', term:'Receipt', def:'The evidence for a purchase &mdash; vendor, date, amount, and how it was paid. The clue for each reason.' },
    { earned:'14-2', term:'Brought from home', def:'Gear you already owned and moved into the repair work &mdash; no purchase, valued by what a comparable one sells for.' },
    { earned:'14-4', term:'Contributed', def:'Resources put into the repair work from outside it (the cash you covered, the laptop and gear from home).' },
    { earned:'14-4', term:'Generated', def:'What the repair work produced, net of its costs (from running the repair work).' },
    { earned:'14-2', term:'Cost of Repairs Done', def:'The value of parts/resources consumed in finished customer jobs; a reason that makes parts-on-the-shelf go down.' }
  ] },
  { module:'Module 5: Naming What You Built', terms:[
    { earned:'15-3', term:'Entity', def:'A perspective you adopt by deciding what counts as &ldquo;in&rdquo; (your repair work) vs. &ldquo;out&rdquo; (your personal life), for a purpose. The line is drawn, not found.' },
    { earned:'15-2', term:'Accounting Identity', def:'Assets &minus; Liabilities. The difference is fully determined once Assets and Liabilities are set; it has no single name &mdash; each kind of entity gives it its own, and even those names have shifted over time. An identity, not an equation; it holds by definition for every entity.' }
  ] }
];
function m1PageKey(p){ var m = /^(\d+)-(\d+)/.exec(String(p||'')); return m ? (parseInt(m[1],10)*100 + parseInt(m[2],10)) : 0; }
function m1GlossaryOpen(pageId){
  var cur = m1PageKey(pageId);
  var html = '';
  M1_GLOSSARY.forEach(function(grp){
    var earned = grp.terms.filter(function(t){ return m1PageKey(t.earned) <= cur; });
    if(!earned.length) return;
    html += '<div class="glossary-group"><div class="glossary-module">'+grp.module+'</div>'+earned.map(function(g){
      return '<div class="glossary-entry"><div class="glossary-entry-term">'+g.term+'</div><div class="glossary-entry-def">'+g.def+'</div></div>';
    }).join('')+'</div>';
  });
  if(!html) html = '<div class="glossary-entry"><div class="glossary-entry-def">Nothing here yet &mdash; terms land in the glossary as the lists earn their names.</div></div>';
  document.getElementById('glossaryList').innerHTML = html;
  document.getElementById('glossaryOverlay').classList.add('open');
}
function m1GlossaryClose(){ document.getElementById('glossaryOverlay').classList.remove('open'); }

/* ============================================================================
 * Bike-Repair source data & workbook snapshot (consolidated 2026-07-10).
 * Formerly separate files: bike-repair-job-records.js, -parts-purchases.js,
 * -bank-statements.js, -card-statements.js, bike-repair-workbook.js.
 * Order matters: BR_JOBS / BR_PURCHASES before BR_WB. BRW is defined above.
 * ========================================================================== */

/* Bike Repair, LLC — job records for the summer quarter (Jun–Aug 2026).
   Auto-generated; ties to the locked totals (revenue 6,020 · COGS 1,200 · A/R 300).
   `hours` = labor time spent on the job. Part-time shop (day job + evenings/weekends)
   over ~13 weeks; the 21 jobs total 55.25 hrs of wrenching (~4–5 hrs/week billable).
   Reusable across Module 3 pages (31-2 detail, 3.4 cash flow, recognition beats). */
var BR_JOBS = window.BR_JOBS || [
  {
    "id": "J-0001",
    "date": "Jun 3",
    "customer": "Dana R.",
    "work": "Flat fix + new tube",
    "parts": "Inner tube",
    "partsCost": 10,
    "charge": 120,
    "hours": 0.75,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0002",
    "date": "Jun 5",
    "customer": "Marcus T.",
    "work": "Brake adjustment",
    "parts": "— labor only",
    "partsCost": 0,
    "charge": 150,
    "hours": 1.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0003",
    "date": "Jun 8",
    "customer": "Priya S.",
    "work": "Full tune-up",
    "parts": "Cables, chain lube",
    "partsCost": 25,
    "charge": 270,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0004",
    "date": "Jun 12",
    "customer": "Liam O.",
    "work": "New chain + cassette",
    "parts": "Chain, 11-spd cassette",
    "partsCost": 95,
    "charge": 300,
    "hours": 1.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0005",
    "date": "Jun 16",
    "customer": "Sofia M.",
    "work": "Wheel true (pair)",
    "parts": "— labor only",
    "partsCost": 0,
    "charge": 150,
    "hours": 1.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0006",
    "date": "Jun 20",
    "customer": "Jamal W.",
    "work": "Drivetrain overhaul",
    "parts": "Chain, chainring, jockey wheels",
    "partsCost": 60,
    "charge": 360,
    "hours": 3.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0007",
    "date": "Jun 24",
    "customer": "Erin K.",
    "work": "Brake pads + hydraulic bleed",
    "parts": "Brake pads, bleed fluid",
    "partsCost": 40,
    "charge": 225,
    "hours": 2.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0008",
    "date": "Jun 28",
    "customer": "Noah B.",
    "work": "Tubeless conversion (pair)",
    "parts": "Valves, sealant, tape",
    "partsCost": 65,
    "charge": 210,
    "hours": 1.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0009",
    "date": "Jul 1",
    "customer": "Grace L.",
    "work": "Bottom-bracket service",
    "parts": "Bottom bracket",
    "partsCost": 35,
    "charge": 240,
    "hours": 2.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0010",
    "date": "Jul 5",
    "customer": "Theo H.",
    "work": "Tune-up",
    "parts": "Cables, chain lube",
    "partsCost": 25,
    "charge": 240,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0011",
    "date": "Jul 9",
    "customer": "Maya P.",
    "work": "Rear wheel build",
    "parts": "Rim, spokes, nipples",
    "partsCost": 125,
    "charge": 450,
    "hours": 3.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0012",
    "date": "Jul 14",
    "customer": "Owen C.",
    "work": "Suspension fork service",
    "parts": "Seals, fork oil",
    "partsCost": 55,
    "charge": 360,
    "hours": 3.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0013",
    "date": "Jul 19",
    "customer": "Ava D.",
    "work": "Shifting overhaul",
    "parts": "Shift cables + housing",
    "partsCost": 45,
    "charge": 270,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0014",
    "date": "Jul 24",
    "customer": "Leo F.",
    "work": "New tires (pair)",
    "parts": "2 tires, 2 tubes",
    "partsCost": 100,
    "charge": 240,
    "hours": 1.0,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0015",
    "date": "Jul 29",
    "customer": "Nina V.",
    "work": "Singlespeed conversion",
    "parts": "SS kit + tensioner",
    "partsCost": 80,
    "charge": 300,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0016",
    "date": "Aug 4",
    "customer": "Caleb G.",
    "work": "Full tune-up",
    "parts": "Cables, chain lube",
    "partsCost": 25,
    "charge": 240,
    "hours": 2.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0017",
    "date": "Aug 11",
    "customer": "Ruth A.",
    "work": "Wheelset rebuild",
    "parts": "2 rims, spokes, nipples",
    "partsCost": 129,
    "charge": 485,
    "hours": 4.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0018",
    "date": "Aug 18",
    "customer": "Sam Q.",
    "work": "Commuter overhaul",
    "parts": "Chain, pads, cables",
    "partsCost": 70,
    "charge": 390,
    "hours": 3.5,
    "pay": "Venmo",
    "collected": true
  },
  {
    "id": "J-0019",
    "date": "Aug 25",
    "customer": "Westville Bike Share",
    "work": "Shop fleet service",
    "parts": "Chains, pads, cables (fleet)",
    "partsCost": 105,
    "charge": 500,
    "hours": 5.0,
    "pay": "On account · net 15",
    "collected": true
  },
  {
    "id": "J-0020",
    "date": "Aug 28",
    "customer": "Ridgeline Trail Crew",
    "work": "Trail-team tune",
    "parts": "Cables, sealant, pads",
    "partsCost": 75,
    "charge": 300,
    "hours": 3.0,
    "pay": "On account · net 15",
    "collected": false
  },
  {
    "id": "J-0021",
    "date": "Aug 30",
    "customer": "J. Smith",
    "work": "Smith's custom frame — finished",
    "parts": "Frame tubing, dropouts, braze rod",
    "partsCost": 36,
    "charge": 220,
    "hours": 6.0,
    "pay": "Deposit applied ($220 prepaid last period)",
    "collected": true,
    "note": "Custom frame completed — earns the $220 advance taken in Module 2."
  }
];

/* Bike Repair, LLC — parts purchase records (source docs) for the summer quarter.
   The season's parts restock: three supplier orders from Quality Bicycle Products (QBP),
   totaling $1,200 in cash — matching the $1,200 of parts consumed across the 21 jobs, so
   the Parts inventory nets back to its $200 opening. Reusable across Module 3 pages. */
var BR_PURCHASES = window.BR_PURCHASES || [
  {
    "id": "PO-2601",
    "date": "Jun 1",
    "supplier": "Quality Bicycle Products (QBP)",
    "total": 500,
    "items": [
      { "name": "Chains ×10", "cost": 150 },
      { "name": "11-spd cassettes ×4", "cost": 160 },
      { "name": "Brake pad sets ×12", "cost": 90 },
      { "name": "Cables + housing (assorted)", "cost": 60 },
      { "name": "Tubes ×10", "cost": 40 }
    ]
  },
  {
    "id": "PO-2602",
    "date": "Jul 1",
    "supplier": "Quality Bicycle Products (QBP)",
    "total": 400,
    "items": [
      { "name": "Chainrings + jockey wheels", "cost": 120 },
      { "name": "Bottom brackets ×3", "cost": 105 },
      { "name": "Shift cables + housing", "cost": 75 },
      { "name": "Tubeless sealant + valves", "cost": 60 },
      { "name": "Spokes + nipples", "cost": 40 }
    ]
  },
  {
    "id": "PO-2603",
    "date": "Aug 1",
    "supplier": "Quality Bicycle Products (QBP)",
    "total": 300,
    "items": [
      { "name": "Tires ×4", "cost": 130 },
      { "name": "Brake pads (assorted)", "cost": 70 },
      { "name": "Cables + housing", "cost": 50 },
      { "name": "Tubes ×8", "cost": 30 },
      { "name": "Small parts (bolts, tape)", "cost": 20 }
    ]
  }
];

/* Bike Repair, LLC — bank statements (source docs) for the business checking account.
   The account opened June 1, 2026 with a $1,300 deposit; three monthly statements run to
   an Aug 31 closing balance of $620. Deposits are the collected repairs (BR_JOBS);
   withdrawals are rent, the QBP parts orders (BR_PURCHASES), a new tool, the credit-card
   payoff, and the owner's draw. Loads after bike-repair-job-records.js. */
var BR_BANK = window.BR_BANK || (function () {
  function depositsFor(mon) {
    return BR_JOBS
      .filter(function (j) { return j.collected && j.pay.indexOf('Deposit') < 0 && j.date.slice(0, 3) === mon; })
      .map(function (j) { return { desc: 'Deposit — ' + j.customer, amt: j.charge }; });
  }
  var june = [{ desc: 'Opening deposit — LLC funding', amt: 1300 }]
    .concat(depositsFor('Jun'))
    .concat([{ desc: 'Rent — June', amt: -650 }, { desc: 'QBP parts order (PO-2601)', amt: -500 }]);
  var july = depositsFor('Jul')
    .concat([{ desc: 'Rent — July', amt: -650 }, { desc: 'QBP parts order (PO-2602)', amt: -400 }, { desc: 'Equipment — new repair tool', amt: -400 }]);
  var august = depositsFor('Aug')
    .concat([{ desc: 'Rent — August', amt: -650 }, { desc: 'QBP parts order (PO-2603)', amt: -300 }, { desc: 'Credit-card payment', amt: -2030 }, { desc: 'Owner draw — transfer', amt: -600 }]);
  function sum(a) { return a.reduce(function (s, t) { return s + t.amt; }, 0); }
  var c1 = sum(june), c2 = c1 + sum(july), c3 = c2 + sum(august);
  var head = 'Elm City Bank & Trust — Business Checking ••4471';
  return [
    { title: head, sub: 'Statement period: June 1–30, 2026 · Bike Repair, LLC', opening: 0, txns: june, closing: c1 },
    { title: head, sub: 'Statement period: July 1–31, 2026 · Bike Repair, LLC', opening: c1, txns: july, closing: c2 },
    { title: head, sub: 'Statement period: August 1–31, 2026 · Bike Repair, LLC', opening: c2, txns: august, closing: c3 }
  ];
})();

/* Bike Repair, LLC — credit card statements (source docs) for the business card.
   The card carried the startup equipment purchases. Two statements: the setup period
   (charges, nothing paid down → $2,030 carried into the LLC at June 1) and the summer
   (paid off in full → $0). 0% intro APR, so no interest accrues. */
var BR_CARD = window.BR_CARD || (function () {
  var setup = [
    { desc: 'Purchase — hand tools', amt: 300 },
    { desc: 'Purchase — air compressor', amt: 180 },
    { desc: 'Purchase — parts washer', amt: 130 },
    { desc: 'Purchase — wheel-truing stand', amt: 170 },
    { desc: 'Purchase — fixtures (desk, shelving, racks)', amt: 750 },
    { desc: 'Purchase — parts (QBP opening order)', amt: 500 }
  ];
  var summer = [
    { desc: 'Interest charged (0% intro APR)', amt: 0, note: true },
    { desc: 'Payment — paid in full', amt: -2030 }
  ];
  function sum(a) { return a.reduce(function (s, t) { return s + (t.amt || 0); }, 0); }
  var head = 'Summit Rewards Visa — Business ••8102';
  return [
    { title: head, sub: 'Setup period · through May 31, 2026 · Bike Repair, LLC', opening: 0, txns: setup, closing: sum(setup) },
    { title: head, sub: 'Statement period: June 1–August 31, 2026 · Bike Repair, LLC', opening: 2030, txns: summer, closing: 0 }
  ];
})();

/* ============================================================================
 * bike-repair-workbook.js — the shared Aug-31 snapshot of Bike-Repair.xlsx.
 * Rebuilds the exact novice-kept state shipped in 31-2 (three tabs; every line's
 * full history) so every Module 3 page mounts the SAME workbook via BRW, instead
 * of re-pasting the snapshot. Depends on BR_JOBS (job-records) and BR_PURCHASES
 * (parts-purchases); load those first.
 *
 *   BR_WB.snapshot(opts)     -> the SNAP object for BRW.mount / BRW.update
 *       opts.withReceivable  -> add Ridgeline's $300 A/R (asset + matching reason),
 *                               books stay balanced (assets 4,430 -> 4,730)
 *       opts.flowGroups      -> show the SEASON's reasons regrouped into
 *                               DELIVERED / USED UP tallies (the 32-2 sort result) with
 *                               WITHDRAWN below; May's rows stay in their original piles
 *       opts.tabbed          -> the 32-4 graduation state: the season's DELIVERED / USED UP
 *                               rows leave Reasons for their own PERIOD tabs, Revenue and
 *                               Expenses (they exist to separate reasons by the period they
 *                               answer for). Pages mounting a tabbed snapshot must call
 *                               BR_WB.registerSeasonSheets() once, after shared.js loads.
 *       opts.withDepreciation-> the 33-2 state: the season's wear recorded — two depreciation
 *                               rows land on Expenses ($200 tools, equipment & fixtures;
 *                               $30 laptop), the asset ledgers carry the wear split $160/$40
 *                               (Tools 1,600 -> 1,440; Fixtures 750 -> 710; Laptop 610 -> 580);
 *                               the "one more kind of used-up" placeholder goes away.
 *       opts.closed          -> the 35-2 state: the FIRST-EVER CLOSE. Requires tabbed (and
 *                               normally withDepreciation). Revenue and Expenses empty out —
 *                               their rows fold into GENERATED as ONE period row each ("May
 *                               (pre-LLC) +$170", "Summer 2026 +$2,640"); May's individual
 *                               pre-season rows in GENERATED are replaced by that same May
 *                               period row (the same gesture files both periods at once).
 *                               WITHDRAWN is untouched. Revenue/Expenses tabs render an
 *                               emptied "closed into GENERATED, ready for next season" state.
 *   BR_WB.setupRows()        -> the pre-season (May + formation) reasons — the Reasons
 *                               list is one CONTINUOUS list, never settled or reset
 *   BR_WB.generatedRows()    -> the GENERATED reasons, each tagged flow:'in'|'up'
 *   BR_WB.monthName          -> { Jun:'June', ... }
 * ========================================================================== */
var BR_WB = window.BR_WB || (function () {
  'use strict';

  var monthName = { Jun: 'June', Jul: 'July', Aug: 'August' };

  // Cash — the complete ledger, first entry to today (pre-LLC → founding → the season).
  function cashEvents() {
    var pre = [
      { name: 'Rent paid in advance (the lease)', amt: -1300 },
      { name: 'Park Tool repair stand', amt: -200 },
      { name: 'Repair, customer paid', amt: 340 },
      { name: 'Repair, customer paid', amt: 180 },
      { name: 'Repair, customer paid', amt: 80 },
      { name: 'Repair, customer paid', amt: 140 },
      { name: 'Repair, customer paid', amt: 130 },
      { name: 'Smith&rsquo;s deposit received', amt: 220 },
      { name: 'Repair, customer paid', amt: 100 },
      { name: 'Repair, customer paid', amt: 150 },
      { name: 'Covered from your personal funds', amt: 160 },
      { name: 'Deposited to open the LLC bank account', amt: 1300 }
    ];
    var repairs = BR_JOBS.filter(function (j) { return j.collected && j.pay.indexOf('Deposit') < 0; })
      .map(function (j) { return { name: 'Repair collected &mdash; ' + j.customer, amt: j.charge }; });
    var buys = BR_PURCHASES.map(function (p) { return { name: 'Parts bought &mdash; ' + monthName[p.date.slice(0, 3)], amt: -p.total }; });
    var costs = buys.concat([
      { name: 'Rent paid &mdash; June', amt: -650 },
      { name: 'Rent paid &mdash; July', amt: -650 },
      { name: 'Rent paid &mdash; August', amt: -650 },
      { name: 'New repair tool', amt: -400 },
      { name: 'Credit card paid off', amt: -2030 },
      { name: 'Money taken out for personal use', amt: -600 }
    ]);
    return pre.concat(repairs, costs);
  }

  // Parts asset ledger — opening shelf, then the three restocks item by item (matching
  // the same PO that hit Cash as one payment &mdash; the match lives at the transaction,
  // same as Fixtures back in Module 1), then each job's parts used.
  function partsEvents() {
    var shelf = [
      { name: 'Chains', amt: 50 }, { name: 'Brake pads', amt: 40 }, { name: 'Derailleur cables', amt: 20 },
      { name: 'Cassettes', amt: 40 }, { name: 'Bottom brackets', amt: 20 }, { name: 'Spokes', amt: 20 }, { name: 'Tubes', amt: 10 }
    ];
    var buys = [];
    BR_PURCHASES.forEach(function (p) {
      var m = monthName[p.date.slice(0, 3)];
      p.items.forEach(function (it) { buys.push({ name: it.name + ' (' + m + ')', amt: it.cost }); });
    });
    var used = BR_JOBS.filter(function (j) { return j.partsCost > 0; })
      .map(function (j) { return { name: 'Parts used &mdash; ' + j.customer, amt: -j.partsCost }; });
    return shelf.concat(buys, used);
  }

  // The pre-season reasons — May's work and the two formation contributions, exactly as
  // first jotted. The list is CONTINUOUS: nothing is settled or reset at June 1. The piles'
  // running subtotals ARE the residual story (CONTRIBUTED 2,290 / GENERATED 170 at June 1);
  // the first-ever close is Tutorial 3.5's discovery, not a fait accompli.
  function setupRows() {
    return [
      { kind: 'net', cat: 'contributed', pre: true, account: 'Cash', reason: 'covered from your personal funds (May)', delta: 160 },
      { kind: 'net', cat: 'contributed', pre: true, account: 'Laptop', reason: 'brought from home (May)', delta: 610 },
      { kind: 'net', cat: 'contributed', pre: true, account: 'Equipment', reason: 'gear from home &mdash; grinder, headset press, shop vacuum (May)', delta: 220 },
      { kind: 'net', cat: 'contributed', pre: true, account: 'Cash', reason: 'deposited to open the LLC bank account (June 1)', delta: 1300 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 340 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 180 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 80 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 140 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 130 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 100 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'in', account: 'Repair collected', reason: 'customer paid (May)', delta: 150 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'up', account: 'Parts used', reason: 'customer jobs (May)', delta: -300 },
      { kind: 'net', cat: 'generated', pre: true, flow: 'up', account: 'Rent used', reason: 'May', delta: -650 }
    ];
  }

  // GENERATED reasons — the novice's mess, job by job. flow:'in' = the work delivered
  // (a repair collected, the frame handed over), flow:'up' = something got used up
  // delivering. kind:'net' is what BRW's sorted mode reads.
  function generatedRows() {
    var rows = [], rentPaid = {};
    BR_JOBS.forEach(function (j) {
      var m = j.date.slice(0, 3);
      if (!rentPaid[m]) { rows.push({ kind: 'net', cat: 'generated', flow: 'up', account: 'Rent used', reason: monthName[m], delta: -650 }); rentPaid[m] = true; }
      if (j.pay.indexOf('Deposit') >= 0) rows.push({ kind: 'net', cat: 'generated', flow: 'in', account: 'Frame delivered', reason: j.customer, delta: j.charge });
      else if (j.collected) rows.push({ kind: 'net', cat: 'generated', flow: 'in', account: 'Repair collected', reason: j.customer, delta: j.charge });
      if (j.partsCost > 0) rows.push({ kind: 'net', cat: 'generated', flow: 'up', account: 'Parts used', reason: j.customer, delta: -j.partsCost });
    });
    return rows;
  }

  // Ridgeline's discovered receivable — the revenue reason the novice never jotted (no cash came).
  var ridgelineReason = { kind: 'net', cat: 'generated', flow: 'in', account: 'Repair delivered', reason: 'Ridgeline Trail Crew &mdash; billed, net 15 (unpaid)', delta: 300 };
  var drawReason = { kind: 'net', cat: 'drawn', account: 'Owner&rsquo;s draw', reason: 'money taken out for personal use', delta: -600 };

  function snapshot(opts) {
    opts = opts || {};
    var assets = [
      { label: 'Cash', amount: 620, events: cashEvents() },
      { label: 'Right of Use', amount: 650, events: [
        { name: 'Last month&rsquo;s rent, paid in advance (on deposit)', amt: 650 }
      ] },
      { label: 'Parts', amount: 200, events: partsEvents() },
      { label: 'Tools &amp; Repair Equipment', amount: 1600, events: [
        { name: 'Repair stand', amt: 200 }, { name: 'Air compressor', amt: 180 }, { name: 'Parts washer', amt: 130 },
        { name: 'Wheel-truing stand', amt: 170 }, { name: 'Cone wrench set', amt: 65 }, { name: 'Torque wrench', amt: 95 },
        { name: 'Hex/Allen set', amt: 45 }, { name: 'Cable cutters', amt: 40 }, { name: 'Chain breaker', amt: 35 },
        { name: 'Tire levers', amt: 20 }, { name: 'Bench grinder', amt: 90 }, { name: 'Headset press', amt: 70 },
        { name: 'Shop vacuum', amt: 60 }, { name: 'New repair tool bought this season', amt: 400 }
      ].concat(opts.withDepreciation ? [ { name: 'Depreciation &mdash; Summer 2026 (the season&rsquo;s share of the cost)', amt: -160 } ] : []) },
      { label: 'Fixtures', amount: 750, events: [
        { name: 'Desk', amt: 250 }, { name: 'Shelving units', amt: 200 }, { name: 'Display rack', amt: 180 }, { name: 'Pegboard + hooks', amt: 120 }
      ].concat(opts.withDepreciation ? [ { name: 'Depreciation &mdash; Summer 2026 (the season&rsquo;s share of the cost)', amt: -40 } ] : []) },
      { label: 'Laptop', amount: 610, events: [
        { name: 'Laptop (from home)', amt: 610 }
      ].concat(opts.withDepreciation ? [ { name: 'Depreciation &mdash; Summer 2026 (the season&rsquo;s share of the cost)', amt: -30 } ] : []) }
    ];
    if (opts.withReceivable) {
      assets.splice(1, 0, { label: 'Accounts Receivable <span class="xl-new-tag">new</span>', note: 'Ridgeline&rsquo;s unpaid promise', amount: 300, events: [
        { name: 'Ridgeline Trail Crew &mdash; finished Aug 28, net 15 (unpaid)', amt: 300 }
      ] });
    }

    var setup = setupRows();
    var gen = generatedRows();
    if (opts.withReceivable) gen.push(ridgelineReason);
    // In flowGroups mode the SEASON's generated reasons are filed under their flow (in/up) —
    // the state after the student sorts them in 32-2. May's rows keep their original piles:
    // the period line the student drew stays visible in the workbook.
    // In tabbed mode (the 32-4 graduation) the season's rows leave Reasons entirely —
    // they live on their own period tabs, Revenue and Expenses.
    // opts.closed (the 35-2 first-ever close): May's individual generated rows AND the
    // season's generated rows both file into GENERATED as ONE period row apiece — the same
    // gesture rules on both periods at once. Nothing here changes non-closed rendering.
    var MAY_PERIOD_ROW = { kind: 'net', cat: 'generated', account: 'May (pre-LLC)', reason: 'the work before the LLC, filed as a closed period', delta: 170 };
    var SEASON_PERIOD_ROW = { kind: 'net', cat: 'generated', account: 'Summer 2026', reason: 'net income for the season, closed into Generated', delta: 2640 };
    var rows = opts.closed
      ? setup.filter(function (r) { return r.cat !== 'generated'; }).concat([ MAY_PERIOD_ROW, SEASON_PERIOD_ROW ])
      : (opts.tabbed
        ? setup.slice()
        : (opts.flowGroups
          ? setup.concat(gen.map(function (r) { return { kind: 'net', cat: r.flow, flow: r.flow, account: r.account, reason: r.reason, delta: r.delta }; }))
          : setup.concat(gen)));
    rows.push(drawReason);

    var groups = opts.closed
      ? [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'what you put in' },
          { key: 'generated', label: 'GENERATED &mdash; closed periods', blurb: 'an archive of finished periods, one row per close' },
          { key: 'drawn', label: 'WITHDRAWN', blurb: 'an owner move &mdash; dated to the season, but not part of how the work did' } ]
      : opts.tabbed
      ? [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'what you put in' },
          { key: 'generated', label: 'GENERATED &mdash; through May 31', blurb: 'the work before the season, left where it was' },
          { key: 'drawn', label: 'WITHDRAWN', blurb: 'an owner move &mdash; dated to the season, but not part of how the work did' } ]
      : opts.flowGroups
      ? [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'what you put in' },
          { key: 'generated', label: 'GENERATED &mdash; through May 31', blurb: 'the work before the season, left where it was' },
          { key: 'in', label: 'DELIVERED', blurb: 'reasons the work delivered to a customer' },
          { key: 'up', label: 'USED UP', blurb: 'reasons things got used up' },
          { key: 'drawn', label: 'WITHDRAWN', blurb: 'what you took for yourself' } ]
      : [ { key: 'contributed', label: 'CONTRIBUTED', blurb: 'what you put in' },
          { key: 'generated',   label: 'GENERATED',   blurb: 'what the work produced' },
          { key: 'drawn',       label: 'WITHDRAWN',   blurb: 'what you took for yourself' } ];

    var snap = {
      file: 'Bike-Repair.xlsx',
      tabs: opts.tabbed
        ? [ { id: 'assets', label: 'Assets' }, { id: 'liabilities', label: 'Liabilities' },
            { id: 'revenue', label: 'Revenue' }, { id: 'expenses', label: 'Expenses' },
            { id: 'reasons', label: 'Reasons' } ]
        : [ { id: 'assets', label: 'Assets' }, { id: 'liabilities', label: 'Liabilities' }, { id: 'reasons', label: 'Reasons' } ],
      assets: assets,
      liabilities: [
        { label: 'Credit Card', amount: 0, events: [
          { name: 'Charged &mdash; hand tools', amt: 300 }, { name: 'Charged &mdash; air compressor', amt: 180 },
          { name: 'Charged &mdash; parts washer', amt: 130 }, { name: 'Charged &mdash; wheel-truing stand', amt: 170 },
          { name: 'Charged &mdash; fixtures', amt: 750 }, { name: 'Charged &mdash; parts (QBP order)', amt: 500 },
          { name: 'Paid off in full this season', amt: -2030 }
        ] },
        { label: 'Customer Deposit', amount: 0, events: [
          { name: 'Smith&rsquo;s advance for a custom frame', amt: 220 },
          { name: 'Built and delivered Smith&rsquo;s frame &mdash; no longer owed', amt: -220 }
        ] }
      ],
      reasons: {
        pilesTitle: 'The Reasons piles &mdash; May 1 to today',
        pilesSub: opts.closed
          ? 'the season closed into GENERATED as a period row; May&rsquo;s rows filed the same way &mdash; the archive of finished periods'
          : opts.tabbed
          ? 'the season&rsquo;s rows now live on their own tabs &mdash; Revenue and Expenses; they come back when the season closes'
          : opts.flowGroups
          ? 'the season&rsquo;s rows sorted into tallies; May&rsquo;s rows left where they were'
          : 'one continuous list &mdash; every reason since the first May jot; nothing settled, nothing reset',
        mode: 'sorted',
        groups: groups,
        rows: rows
      }
    };
    if (opts.tabbed) {
      snap.revenueRows = gen.filter(function (r) { return r.flow === 'in'; });
      snap.expenseRows = gen.filter(function (r) { return r.flow === 'up'; });
      if (opts.withDepreciation) {
        snap.expenseRows = snap.expenseRows.concat([
          { account: 'Depreciation', reason: 'tools, equipment &amp; fixtures, Summer 2026 <span class="xl-new-tag">new</span>', delta: -200 },
          { account: 'Depreciation', reason: 'laptop, Summer 2026 <span class="xl-new-tag">new</span>', delta: -30 }
        ]);
      } else {
        snap.expensesNote = '&hellip; one more kind of used-up, still to come <span class="xl-new-tag">next tutorial</span>';
      }
      // opts.closed: the close empties both period tabs — their rows just filed into
      // GENERATED (see SEASON_PERIOD_ROW above). The tabs stay, ready for next season at $0.
      if (opts.closed) {
        snap.revenueRows = [];
        snap.expenseRows = [];
        snap.expensesNote = null;
        snap.revenueClosed = true;
        snap.expensesClosed = true;
      }
    }
    return snap;
  }

  /* ===== the two period tabs (Revenue · Expenses) as custom BRW sheets =====
     A period tab exists to separate reasons by the period they answer for: it fills
     for one season, answers that season's question, then closes and starts the next
     at zero. Pages mounting a tabbed snapshot call this once, after shared.js loads. */
  function xr(cls, label, val) {
    return '<div class="xl-row ' + cls + '"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + val + '</div></div>';
  }
  function seasonSheet(title, rows, note, totalLabel, closed) {
    var h = '<div class="cash-sheet-head"><div class="cash-sheet-title">' + title + '</div><div class="cash-sheet-sub">a period tally &mdash; it answers for this season only, then closes</div></div>';
    if (closed) {
      h += xr('xl-item', '<em>closed into GENERATED &middot; ready for next season</em>', '');
      h += xr('xl-total', totalLabel, BRW.dol(0));
      return h;
    }
    var tot = 0;
    rows.forEach(function (r) { tot += r.delta; h += xr('xl-item', r.account + ' &mdash; ' + r.reason, BRW.signed(r.delta)); });
    if (note) h += xr('xl-item', '<em>' + note + '</em>', '?');
    h += xr('xl-total', totalLabel, BRW.dol(Math.abs(tot)));
    return h;
  }
  function registerSeasonSheets() {
    BRW.registerSheet('revenue', function (cid, snap) {
      return seasonSheet('Revenue &mdash; Summer 2026', snap.revenueRows || [], null, 'Revenue &mdash; the work delivered this season', snap.revenueClosed);
    });
    BRW.registerSheet('expenses', function (cid, snap) {
      return seasonSheet('Expenses &mdash; Summer 2026', snap.expenseRows || [], snap.expensesNote, 'Expenses &mdash; so far', snap.expensesClosed);
    });
  }

  return { snapshot: snapshot, generatedRows: generatedRows, setupRows: setupRows, monthName: monthName, registerSeasonSheets: registerSeasonSheets };
})();

/* ============================================================================
 * Statement sheets — approved additions (2026-07-07).
 * The workbook is the student's anchor: statements are ADDED as tabs beside the
 * tabs they already know, never mounted as a replacement workbook. One canonical
 * renderer per statement, built from the locked numbers, drawn with the shared
 * xl-* row classes.
 *
 *   BR_WB.registerStatementSheets() -> registers 'income', 'cashflows', 'bridge',
 *       'balance' as BRW custom sheets. Call once, after shared.js loads.
 *       The income sheet shows a "complete" tag when snap.incomeNew is set
 *       (33-3's payoff moment); later pages leave it unset.
 *   BR_WB.statementTabs(ids)        -> tab-strip entries for the requested
 *       statements, e.g. snap.tabs = snap.tabs.concat(BR_WB.statementTabs(['income']));
 * ========================================================================== */
(function () {
  'use strict';
  function xr(cls, label, val) {
    return '<div class="xl-row ' + cls + '"><div class="xl-gutter"></div><div class="xl-rownum"></div><div class="xl-c">' + label + '</div><div class="xl-v">' + val + '</div></div>';
  }
  var STMT_LABELS = { income: 'Income', cashflows: 'Cash Flows', bridge: 'Changes in Capital', balance: 'Balance Sheet' };

  BR_WB.statementTabs = function (ids) {
    return ids.map(function (id) { return { id: id, label: STMT_LABELS[id] }; });
  };

  BR_WB.registerStatementSheets = function () {
    BRW.registerSheet('income', function (cid, snap) {
      var h = xr('xl-head', 'Income Statement &middot; June&ndash;August 2026', 'Amount');
      h += xr('xl-cat', '<strong>Revenue</strong> &mdash; the work delivered this season', BRW.dol(6020));
      h += xr('xl-item', '<strong>Expenses</strong> &mdash; used up delivering it', '');
      h += xr('xl-item', 'Parts used', BRW.dol(1200));
      h += xr('xl-item', 'Rent used', BRW.dol(1950));
      h += xr('xl-item', 'Depreciation &mdash; tools, equipment &amp; fixtures', BRW.dol(200));
      h += xr('xl-item', 'Depreciation &mdash; laptop', BRW.dol(30));
      h += xr('xl-cat', 'Total expenses', BRW.dol(3380));
      h += xr('xl-total', '<strong>Net income</strong> &mdash; Revenue &minus; Expenses' + (snap.incomeNew ? ' <span class="xl-new-tag">complete</span>' : ''), BRW.dol(2640));
      return h;
    });
    BRW.registerSheet('cashflows', function (cid, snap) {
      var h = xr('xl-head', 'Statement of Cash Flows &middot; June&ndash;August 2026', 'Amount');
      h += xr('xl-cat', '<strong>Operating</strong> &mdash; running the season', BRW.signed(320));
      h += xr('xl-item', 'Repairs collected', BRW.signed(5500));
      h += xr('xl-item', 'Parts bought', BRW.signed(-1200));
      h += xr('xl-item', 'Rent paid', BRW.signed(-1950));
      h += xr('xl-item', 'Credit-card payoff', BRW.signed(-2030));
      h += xr('xl-cat', '<strong>Investing</strong> &mdash; long-lived gear', BRW.signed(-400));
      h += xr('xl-item', 'New repair tool', BRW.signed(-400));
      h += xr('xl-cat', '<strong>Financing</strong> &mdash; owner moves', BRW.signed(-600));
      h += xr('xl-item', 'Owner&rsquo;s draw', BRW.signed(-600));
      h += xr('xl-total', '<strong>Net change in cash</strong>', BRW.signed(-680));
      h += xr('xl-item', 'Cash, June 1', BRW.dol(1300));
      h += xr('xl-total', '<strong>Cash, August 31</strong> <span class="xl-new-tag">ties to Assets</span>', BRW.dol(620));
      return h;
    });
    BRW.registerSheet('bridge', function (cid, snap) {
      var h = xr('xl-head', 'Statement of Changes in Members&rsquo; Capital &middot; June&ndash;August 2026', 'Amount');
      h += xr('xl-item', 'Opening Members&rsquo; Capital &mdash; June 1', BRW.dol(2460));
      h += xr('xl-item', '+ Net income &mdash; the season&rsquo;s work', BRW.signed(2640));
      h += xr('xl-item', '&minus; Owner&rsquo;s draw', BRW.signed(-600));
      h += xr('xl-total', '<strong>Closing Members&rsquo; Capital &mdash; August 31</strong> <span class="xl-new-tag">ties to the balance sheet</span>', BRW.dol(4500));
      return h;
    });
    BRW.registerSheet('balance', function (cid, snap) {
      var h = xr('xl-head', 'Balance Sheet &middot; August 31, 2026', 'Amount');
      h += xr('xl-item', 'Assets', BRW.dol(4500));
      h += xr('xl-item', 'Liabilities', BRW.dol(0));
      h += xr('xl-cat', '<strong>Members&rsquo; Capital</strong>', BRW.dol(4500));
      h += xr('xl-item', 'Contributed', BRW.dol(2290));
      h += xr('xl-item', 'Generated (170 + 2,640 &minus; 600)', BRW.dol(2210));
      h += xr('xl-total', '<strong>Total Members&rsquo; Capital</strong>', BRW.dol(4500));
      return h;
    });
  };
})();


/* ===== Segmented step progress (added 2026-07-10) =====
   Renders a "k of n" meta row plus one pill per step into #elId.
   Pages call it from their render function on every state change. */
function renderStepProgress(elId, at, total, label) {
  var el = document.getElementById(elId);
  if (!el) return;
  var h = '<div class="progress-meta"><span>' + (label || 'Progress') + '</span><span>' + at + ' of ' + total + '</span></div>';
  h += '<div class="progress-segs">';
  for (var i = 0; i < total; i++) h += '<div class="progress-seg' + (i < at ? ' done' : '') + '"></div>';
  h += '</div>';
  el.innerHTML = h;
}



/* ============================================================================
 * Course chrome (added 2026-07-14): on every tutorial page,
 *   - a sticky top banner: "Back Tutorial: <prev>" · index dropdown ·
 *     "Next Tutorial: <next>" — the tutorial buttons carry a green checkmark
 *     when that tutorial is complete (its last page reached);
 *   - the index dropdown lists Module > Tutorial > pages, with a checkmark on
 *     every page already visited and the current page highlighted;
 *   - the page title fills the page's .phase-title slot when it is empty;
 *   - a footer Back/Next row — page-level navigation within the course order.
 * final.html builds its contents list from the same COURSE_TUTORIALS data.
 * ========================================================================== */
var COURSE_TUTORIALS = [
  { id:'m1t1', module:'Module 1 · The Journey', num:'Tutorial 1', name:'Getting Organized', title:'1.1 Getting Organized', pages:[
    {f:'11-1-Getting-Started.html', t:'Getting Started'}, {f:'11-2-A-Rough-Week.html', t:'A Rough Week'}, {f:'11-3-Sort-Your-Things.html', t:'Sort Your Things'}, {f:'11-4-The-Line-You-Drew.html', t:'The Line You Drew'}, {f:'11-5-Module-Complete.html', t:'Overview'} ] },
  { id:'m1t2', module:'Module 1 · The Journey', num:'Tutorial 2', name:'Insurance and Maria', title:'1.2 Insurance and Maria', pages:[
    {f:'12-1-Meet-Maria.html', t:'Meet Maria'}, {f:'12-2-Marias-Form.html', t:'Maria&rsquo;s Form'}, {f:'12-3-The-Read-Back.html', t:'The Read-Back'}, {f:'12-4-Module-Complete.html', t:'Overview'} ] },
  { id:'m1t3', module:'Module 1 · The Journey', num:'Tutorial 3', name:'Anna and the Bank Statement', title:'1.3 Anna and the Bank Statement', pages:[
    {f:'13-1-Meet-Anna.html', t:'Meet Anna'}, {f:'13-2-The-Bank-Statement.html', t:'The Bank Statement'}, {f:'13-3-The-Cash-Movement.html', t:'The Cash Movement'}, {f:'13-4-The-Customer-Payments.html', t:'The Customer Payments'}, {f:'13-5-The-Credit-Card-Statement.html', t:'The Credit Card Statement'}, {f:'13-6-The-Promises.html', t:'The Promises'}, {f:'13-7-The-Rent-Payment.html', t:'The Rent Payment'}, {f:'13-8-Naming-the-Lists.html', t:'Naming the Lists'}, {f:'13-9-Module-Complete.html', t:'Overview'} ] },
  { id:'m1t4', module:'Module 1 · The Journey', num:'Tutorial 4', name:'Keeping the Reasons', title:'1.4 Keeping the Reasons', pages:[
    {f:'14-1-Why-Keep-the-Reasons.html', t:'Why Keep the Reasons'}, {f:'14-2-Walk-the-Reasons.html', t:'Walk the Changes'}, {f:'14-4-What-Moves-the-Difference.html', t:'What Moves the Difference'}, {f:'14-5-Module-Complete.html', t:'Overview'} ] },
  { id:'m1t5', module:'Module 1 · The Journey', num:'Tutorial 5', name:'Naming What You Built', title:'1.5 Naming What You Built', pages:[
    {f:'15-1-Find-the-Difference.html', t:'Find the Difference'}, {f:'15-2-The-Accounting-Identity.html', t:'The Accounting Identity'}, {f:'15-3-The-Entity.html', t:'The Entity'}, {f:'15-4-Double-Entry.html', t:'Double-Entry'}, {f:'15-5-Module-Complete.html', t:'Overview'} ] },
  { id:'m2t1', module:'Module 2 · Getting Formal', num:'Tutorial 1', name:'The Two Yous', title:'2.1 The Two Yous', pages:[
    {f:'21-1-welcome.html', t:'The Call from Maria'}, {f:'21-2-exposure.html', t:'Follow the Claim'}, {f:'21-3-whoSeesTwo.html', t:'Who Sees Two?'}, {f:'21-4-twoHats.html', t:'Same Head, Two Hats'}, {f:'21-5-complete.html', t:'Complete'} ] },
  { id:'m2t2', module:'Module 2 · Getting Formal', num:'Tutorial 2', name:'Filing for a Legal Body', title:'2.2 Filing for a Legal Body', pages:[
    {f:'22-1-welcome.html', t:'Anna&rsquo;s Advice'}, {f:'22-2-name.html', t:'Name the LLC'}, {f:'22-3-file.html', t:'File the Certificate'}, {f:'22-4-whatChanged.html', t:'What Changed?'}, {f:'22-5-complete.html', t:'Complete'} ] },
  { id:'m2t3', module:'Module 2 · Getting Formal', num:'Tutorial 3', name:'The Rules', title:'2.3 The Rules', pages:[
    {f:'23-1-welcome.html', t:'The Operating Agreement'}, {f:'23-2-agreement.html', t:'Drafting the Agreement'}, {f:'23-3-contribution.html', t:'What You Put In'}, {f:'23-4-wall.html', t:'The Wall'}, {f:'23-5-keystone.html', t:'When Did It Become Real?'}, {f:'23-6-complete.html', t:'Complete'} ] },
  { id:'m2t4', module:'Module 2 · Getting Formal', num:'Tutorial 4', name:'The Entity&rsquo;s Own Number', title:'2.4 The Entity&rsquo;s Own Number', pages:[
    {f:'24-1-welcome.html', t:'An Identity of Its Own'}, {f:'24-2-ein.html', t:'Form SS-4'}, {f:'24-3-account.html', t:'Opening the Account'}, {f:'24-4-statements.html', t:'The Statements'}, {f:'24-5-schedule-a.html', t:'Complete Schedule A'}, {f:'24-6-complete.html', t:'Module 2 Complete'} ] },
  { id:'m3t1', module:'Module 3 · The Story Between the Snapshots', num:'Tutorial 1', name:'Run the Season', title:'3.1 Run the Season', pages:[
    {f:'31-1-welcome.html', t:'A Season Goes By'}, {f:'31-2-work-the-season.html', t:'Read the Books'} ] },
  { id:'m3t2', module:'Module 3 · The Story Between the Snapshots', num:'Tutorial 2', name:'Complete the Records', title:'3.2 Complete the Records', pages:[
    {f:'32-1-check-the-records.html', t:'Check the Records'}, {f:'32-2-record-the-receivable.html', t:'Record the Receivable'}, {f:'32-3-the-third-kind.html', t:'The Third Kind'} ] },
  { id:'m3t3', module:'Module 3 · The Story Between the Snapshots', num:'Tutorial 3', name:'Build the Statement', title:'3.3 Build the Statement', pages:[
    {f:'33-1-copy-the-rows.html', t:'Copy the Rows'}, {f:'33-2-sort-the-rows.html', t:'Sort the Rows'}, {f:'33-3-format-the-statement.html', t:'Format the Statement'} ] },
  { id:'m3t4', module:'Module 3 · The Story Between the Snapshots', num:'Tutorial 4', name:'The Season in Cash', title:'3.4 The Season in Cash', pages:[
    {f:'34-1-what-cash-missed.html', t:'What Cash Missed'}, {f:'34-2-module-complete.html', t:'The Story Between the Snapshots'} ] },
  { id:'m4t1', module:'Module 4 · The Angel Investor', num:'Tutorial 1', name:'The Investor Asks', title:'4.1 The Investor Asks', pages:[
    {f:'41-1-The-Investor-Asks.html', t:'The Investor Asks'} ] },
  { id:'m4t2', module:'Module 4 · The Angel Investor', num:'Tutorial 2', name:'The Missing Wage', title:'4.2 The Missing Wage', pages:[
    {f:'42-1-The-Missing-Wage.html', t:'The Missing Wage'} ] },
  { id:'m4t3', module:'Module 4 · The Angel Investor', num:'Tutorial 3', name:'The Change in Member&rsquo;s Capital', title:'4.3 The Change in Member&rsquo;s Capital', pages:[
    {f:'43-1-The-Capital-Bridge.html', t:'The Capital Bridge'} ] },
  { id:'m4t4', module:'Module 4 · The Angel Investor', num:'Tutorial 4', name:'The Cash-Flow Statement', title:'4.4 The Cash-Flow Statement', pages:[
    {f:'44-1-The-Cash-Puzzle.html', t:'The Cash Puzzle'}, {f:'44-2-Three-Buckets.html', t:'Three Buckets'}, {f:'44-3-The-Cash-Flow-Statement.html', t:'Laying It Out'} ] },
  { id:'m4t6', module:'Module 4 · The Angel Investor', num:'Tutorial 6', name:'The Statements Tie Out', title:'4.6 The Statements Tie Out', pages:[
    {f:'46-1-The-Statements-Tie-Out.html', t:'The Statements Tie Out'} ] },
  { id:'m4t7', module:'Module 4 · The Angel Investor', num:'Tutorial 7', name:'Freddie&rsquo;s Napkin', title:'4.7 Freddie&rsquo;s Napkin', pages:[
    {f:'47-1-Freddies-Napkin.html', t:'Freddie&rsquo;s Napkin'} ] },
  { id:'m4t8', module:'Module 4 · The Angel Investor', num:'Tutorial 8', name:'The Deal', title:'4.8 The Deal', pages:[
    {f:'48-1-The-Deal.html', t:'The Deal'}, {f:'48-2-Module-Complete.html', t:'Module 4 Complete'} ] }

];
function courseFlatPages(){ var a=[]; COURSE_TUTORIALS.forEach(function(t){ t.pages.forEach(function(p){ a.push(p.f); }); }); return a; }
function courseTutorialOf(file){ for(var i=0;i<COURSE_TUTORIALS.length;i++) for(var j=0;j<COURSE_TUTORIALS[i].pages.length;j++) if(COURSE_TUTORIALS[i].pages[j].f===file) return i; return -1; }
function courseTutDone(id){ try{ return localStorage.getItem('tutdone2:'+id)==='1'; }catch(e){ return false; } }
function courseMarkTutDone(id){ try{ localStorage.setItem('tutdone2:'+id,'1'); }catch(e){} }
function courseCheck(id){ return courseTutDone(id) ? ' <span class="course-done-check">&#10003;</span>' : ''; }
function coursePageDone(f){ try{ return localStorage.getItem('pagedone2:'+f)==='1'; }catch(e){ return false; } }
function courseMarkPageDone(f){ try{ localStorage.setItem('pagedone2:'+f,'1'); }catch(e){} }
function coursePageCheck(f){ return coursePageDone(f) ? ' <span class="course-done-check">&#10003;</span>' : ''; }

/* ===== PAGE COMPLETION (activity-aware) ======================================
 * Reading pages complete on VISIT; activity pages complete when the activity is
 * FINISHED (any answer — correctness NOT required). "done" persists as localStorage
 * 'pagedone2:' (coursePageDone). On completion we fill the page's fallback progress
 * bar and post a 'page_complete' event (server-side progress). The per-page activity
 * predicates live in COURSE_DONE (defined near the end of this file).
 * Runs in the reader iframe AND standalone. ================================= */
/* Fallback progress bar (the single bar initCourseChrome injects; pages with their
 * OWN multi-step bar manage it and are left untouched). For a multi-step activity
 * listed in COURSE_STEPS the bar shows its current step; a single-step activity is
 * empty→full; reading/finished pages are full. */
function courseBarState(f){
  if (typeof COURSE_STEPS !== 'undefined' && COURSE_STEPS[f]) {
    var s; try { s = COURSE_STEPS[f](); } catch(e){ s = null; }
    s = s || { at: 0, total: 1 };
    if (!(s.total > 0)) s.total = 1;
    if (s.at < 0) s.at = 0; if (s.at > s.total) s.at = s.total;
    return s;   /* the bar always tracks LIVE state — completion is remembered by the checkmark, not the bar (ruling 2026-07-19) */
  }
  if (coursePageDone(f)) return { at: 1, total: 1 };                   // finished single-step / reading → full
  if (typeof COURSE_DONE !== 'undefined' && COURSE_DONE[f]) return { at: 0, total: 1 };  // unfinished single-step activity → empty
  return { at: 1, total: 1 };                                         // reading → full on visit
}
var _courseBarKey = '';
function courseRenderBar(f){
  var el = document.getElementById('stepProg');
  if (!el || el.getAttribute('data-fallback') !== '1' || typeof renderStepProgress !== 'function') return;  // own bars manage themselves
  var s = courseBarState(f);
  var key = s.at + '/' + s.total;
  if (key === _courseBarKey) return;                                  // unchanged → skip redraw
  _courseBarKey = key;
  renderStepProgress('stepProg', s.at, s.total);
}
function courseMarkComplete(f){
  var already = coursePageDone(f);
  courseMarkPageDone(f);                         // persist (localStorage) — v2 checkmarks + the bar
  _courseBarKey = '';                            // force the bar to redraw to full
  courseRenderBar(f);
  if (!already && typeof window.CourseTrack === 'function') window.CourseTrack('page_complete', { activityId: f });
}

function initCourseChrome(){
  if (window.self !== window.top) return;              /* not inside the old view.html iframe */
  var file = location.pathname.split('/').pop() || '';
  var ti = courseTutorialOf(file);
  if (ti < 0) return;
  var tut = COURSE_TUTORIALS[ti];
  /* completion is decided by the COURSE_DONE poller below (PROGRESS.md):
     reading pages complete on visit, activity pages when finished. */

  /* --- one glossary everywhere: the full course glossary replaces each page's local one --- */
  if (typeof courseGlossaryOpen === 'function' && document.getElementById('glossaryOverlay')) {
    window.openGlossary = courseGlossaryOpen;
  }
  if (file === tut.pages[tut.pages.length-1].f) courseMarkTutDone(tut.id);    /* reaching the last page completes the tutorial */

  /* --- page title at the top: numbered within its tutorial (1. Getting Started) --- */
  var pageObj = null, pageNum = 0;
  tut.pages.forEach(function(p, i){ if(p.f===file){ pageObj = p; pageNum = i+1; } });
  var pt = document.querySelector('.phase-title');
  if (pt && pageObj) pt.innerHTML = pageNum+'. '+pageObj.t;

  /* --- top banner: the index dropdown alone, on the left --- */
  var menuHtml = '', lastMod = '';
  COURSE_TUTORIALS.forEach(function(t){
    var mod = t.module;
    if (mod !== lastMod){ menuHtml += '<div class="gh">'+mod+'</div>'; lastMod = mod; }
    menuHtml += '<div class="mh">'+t.num+': '+t.name+'</div>';
    t.pages.forEach(function(p, i){
      menuHtml += '<a href="'+p.f+'"'+(p.f===file?' class="cur"':'')+'>'+(i+1)+'. '+p.t+coursePageCheck(p.f)+'</a>';
    });
  });
  var bar = document.createElement('div');
  bar.className = 'course-banner';
  bar.innerHTML =
    '<div class="course-banner-mid"><button class="course-index-pill" id="courseIndexBtn"><span class="cip-tut">'+tut.title+'</span>'+(pageObj ? ' <span class="cip-dot">&middot;</span> <span class="cip-page">'+pageObj.t+'</span>' : '')+' <i data-lucide="chevron-down" class="licon cip-chev"></i></button>'+
      '<div class="course-index-menu" id="courseIndexMenu" hidden>'+menuHtml+'</div></div>';
  document.body.insertBefore(bar, document.body.firstChild);
  var iBtn = document.getElementById('courseIndexBtn'), iMenu = document.getElementById('courseIndexMenu');
  iBtn.addEventListener('click', function(e){
    e.stopPropagation();
    iMenu.hidden = !iMenu.hidden;
    if (!iMenu.hidden){ var cur = iMenu.querySelector('a.cur'); if (cur) cur.scrollIntoView({ block:'center' }); }
  });
  document.addEventListener('click', function(){ iMenu.hidden = true; });

  /* --- every page shows a progress bar: pages without their own get a full single-step bar --- */
  if (!document.getElementById('stepProg')) {
    var pt2 = document.querySelector('.phase-title-row');
    if (pt2) {
      var sp = document.createElement('div');
      sp.id = 'stepProg';
      sp.setAttribute('data-fallback', '1');
      pt2.parentNode.insertBefore(sp, pt2.nextSibling);
      if (typeof courseRenderBar === 'function') courseRenderBar(location.pathname.split('/').pop() || '');
    }
  }

  /* --- footer controller: fixed bottom bar with page-level Back / Next --- */
  var flat = courseFlatPages();
  var pi = flat.indexOf(file);
  var titles = {};
  COURSE_TUTORIALS.forEach(function(t){ t.pages.forEach(function(p){ titles[p.f] = p.t; }); });
  var foot = document.createElement('div');
  foot.className = 'course-page-footer';
  foot.innerHTML =
    (pi > 0 ? '<button class="course-foot-btn" onclick="location.href=\''+flat[pi-1]+'\'"><i data-lucide="chevron-left" class="licon"></i> '+titles[flat[pi-1]]+coursePageCheck(flat[pi-1])+'</button>' : '') +
    (pi < flat.length-1 ? '<button class="course-foot-btn" style="margin-left:auto;" onclick="location.href=\''+flat[pi+1]+'\'">'+titles[flat[pi+1]]+coursePageCheck(flat[pi+1])+' <i data-lucide="chevron-right" class="licon"></i></button>' : '');
  document.body.appendChild(foot);
  document.body.classList.add('has-course-footer');
  if (window.lucide && lucide.createIcons) lucide.createIcons();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCourseChrome);
else initCourseChrome();

var COURSE_DONE = {
  // 11-2: revealed (scenario counter) + scenarios[] — both top-level vars
  '11-2-A-Rough-Week.html': function(){ return typeof revealed !== 'undefined' && Array.isArray(window.scenarios) && revealed >= scenarios.length; },
  // 11-3: sortDone — set true by doTheRest()
  '11-3-Sort-Your-Things.html': function(){ return typeof sortDone !== 'undefined' && sortDone === true; },
  // 11-4: q1Submitted
  '11-4-The-Line-You-Drew.html': function(){ return typeof q1Submitted !== 'undefined' && q1Submitted === true; },
  // 12-2: formDone
  '12-2-Marias-Form.html': function(){ return typeof formDone !== 'undefined' && formDone === true; },
  // 13-2: every bank row classified — txns[] + classifications{} (correctness-free)
  '13-2-The-Bank-Statement.html': function(){ return Array.isArray(window.txns) && typeof classifications !== 'undefined' && txns.every(function(t){ return classifications[t.id] !== undefined; }); },
  // 13-3: cashSubmitted
  '13-3-The-Cash-Movement.html': function(){ return typeof cashSubmitted !== 'undefined' && cashSubmitted === true; },
  // 13-4: every deposit answered — deposits[] + depositAnswers{} (correctness-free)
  '13-4-The-Customer-Payments.html': function(){ return Array.isArray(window.deposits) && typeof depositAnswers !== 'undefined' && deposits.every(function(d){ return depositAnswers[d.id] !== undefined; }); },
  // 13-5: cardMCQSubmitted
  '13-5-The-Credit-Card-Statement.html': function(){ return typeof cardMCQSubmitted !== 'undefined' && cardMCQSubmitted === true; },
  // 13-7: q1Submitted
  '13-7-The-Rent-Payment.html': function(){ return typeof q1Submitted !== 'undefined' && q1Submitted === true; },
  // 13-8: liabilitiesNamed
  '13-8-Naming-the-Lists.html': function(){ return typeof liabilitiesNamed !== 'undefined' && liabilitiesNamed === true; },
  // 14-2: beatIndex reached last beat — beatIndex + BEATS[] (correctness-free; NOT coverFound)
  '14-2-Walk-the-Reasons.html': function(){ return typeof beatIndex !== 'undefined' && Array.isArray(window.BEATS) && beatIndex >= BEATS.length - 1; },
  // 14-4: moversDone
  '14-4-What-Moves-the-Difference.html': function(){ return typeof moversDone !== 'undefined' && moversDone === true; },
  // 15-1: netDone (set on answer OR after 3 attempts — correctness-free)
  '15-1-Find-the-Difference.html': function(){ return typeof netDone !== 'undefined' && netDone === true; },
  // 15-2: idStage reached final stage (max 4)
  '15-2-The-Accounting-Identity.html': function(){ return typeof idStage !== 'undefined' && idStage >= 4; },
  // 15-3: every candidate submitted — CANDIDATES[] + submitted{} by index (correctness-free; NOT allCorrect())
  '15-3-The-Entity.html': function(){ return Array.isArray(window.CANDIDATES) && typeof submitted !== 'undefined' && CANDIDATES.every(function(c, i){ return submitted[i] !== undefined; }); },
  // 21-2: claimRun
  '21-2-exposure.html': function(){ return typeof claimRun !== 'undefined' && claimRun === true; },
  // 21-3: every observer placed — observers[] + placed{}
  '21-3-whoSeesTwo.html': function(){ return Array.isArray(window.observers) && typeof placed !== 'undefined' && observers.every(function(o){ return placed[o.id] !== undefined; }); },
  // 21-4: wantRevealed
  '21-4-twoHats.html': function(){ return typeof wantRevealed !== 'undefined' && wantRevealed === true; },
  // 22-2: nameConfirmed
  '22-2-name.html': function(){ return typeof nameConfirmed !== 'undefined' && nameConfirmed === true; },
  // 22-3: filed
  '22-3-file.html': function(){ return typeof filed !== 'undefined' && filed === true; },
  // 22-4: every card placed AND figStage final — movedItems[], placed{}, figStage
  '22-4-whatChanged.html': function(){ return Array.isArray(window.movedItems) && typeof placed !== 'undefined' && typeof figStage !== 'undefined' && movedItems.every(function(m){ return placed[m.id] !== undefined; }) && figStage >= 2; },
  // 23-2: generated
  '23-2-agreement.html': function(){ return typeof generated !== 'undefined' && generated === true; },
  // 23-3: contributed (=== step 2)
  '23-3-contribution.html': function(){ return typeof contributed !== 'undefined' && contributed === true; },
  // 23-4: claimRun
  '23-4-wall.html': function(){ return typeof claimRun !== 'undefined' && claimRun === true; },
  // 23-5: submitted
  '23-5-keystone.html': function(){ return typeof submitted !== 'undefined' && submitted === true; },
  // 24-2: einFiled
  '24-2-ein.html': function(){ return typeof einFiled !== 'undefined' && einFiled === true; },
  // 24-3: step reached final move (capped at 3)
  '24-3-account.html': function(){ return typeof step !== 'undefined' && step >= 3; },
  // 24-5: allEntered() AND both signatures
  '24-5-schedule-a.html': function(){ return typeof allEntered === 'function' && typeof signedCompany !== 'undefined' && typeof signedMember !== 'undefined' && allEntered() && signedCompany === true && signedMember === true; },
  // 31-1: bsDone (set on answer OR after 3 attempts — correctness-free)
  '31-1-welcome.html': function(){ return typeof bsDone !== 'undefined' && bsDone === true; },
  // 31-2: step reached end of walk — step + WALK[]
  '31-2-work-the-season.html': function(){ return typeof stage !== 'undefined' && stage >= 7; },
  // ---- Rick's new M3 arc (2026-07-19) ----
  // 32-1: the missing-job check is confirmed (setStep(1))
  '32-1-check-the-records.html': function(){ return typeof step !== 'undefined' && step >= 1; },
  // 32-2: the receivable row is recorded
  '32-2-record-the-receivable.html': function(){ return typeof step !== 'undefined' && step >= 1; },
  // 32-3: the wear rows are written to Reasons
  '32-3-the-third-kind.html': function(){ return typeof recorded !== 'undefined' && recorded === true; },
  // 33-1: season rows selected then pasted to the Working Tab
  '33-1-copy-the-rows.html': function(){ return typeof pasted !== 'undefined' && pasted === true; },
  // 33-2: the walk reaches the grouped result (order 4) — both sorts done
  '33-2-sort-the-rows.html': function(){ return typeof activeOrder !== 'undefined' && activeOrder >= 4; },
  // 33-3: the statement is christened
  '33-3-format-the-statement.html': function(){ return typeof completed !== 'undefined' && completed === true; },
  // 34-1: the bridge walk reached its last beat
  '34-1-what-cash-missed.html': function(){ return typeof walkStep !== 'undefined' && Array.isArray(window.STEPS) && walkStep >= STEPS.length; },
  // ---- Rick's M4 Angel Investor arc ----
  // 41-1: the reading walk reached its last beat
  '41-1-The-Investor-Asks.html': function(){ return typeof step !== 'undefined' && step >= 2; },
  // 42-1: hunt + MCQ answered, walk closed
  '42-1-The-Missing-Wage.html': function(){ return typeof step !== 'undefined' && step >= 2; },
  // 43-1: the Member's-Capital statement build completed (christen)
  '43-1-The-Capital-Bridge.html': function(){ return typeof completed !== 'undefined' && completed === true; },
  // 44-1: the profit-vs-cash MCQ submitted (any answer)
  '44-1-The-Cash-Puzzle.html': function(){ return typeof mcqSubmitted !== 'undefined' && mcqSubmitted === true; },
  // 44-2: the sorted view is reached (order 2 active after the sort completes)
  '44-2-Three-Buckets.html': function(){
    if (typeof sortComplete === 'undefined' || !sortComplete) return false;
    var st = document.querySelector('#statementBuild .brw-step.is-active');
    return !!st && Number(st.getAttribute('data-step-order')) >= 2; },
  // 44-3: the cash-flow statement christened
  '44-3-The-Cash-Flow-Statement.html': function(){ return typeof completed !== 'undefined' && completed === true; },
  // 46-1 / 47-1 / 48-1 / 52-1 / 53-x: Rick's uniform step walk — done at the last step
  '46-1-The-Statements-Tie-Out.html': function(){ return typeof step !== 'undefined' && step >= 4; },
  '47-1-Freddies-Napkin.html': function(){ return typeof step !== 'undefined' && step >= 4; },
  '48-1-The-Deal.html': function(){ return typeof step !== 'undefined' && step >= 3; }
};

/* Multi-step activity pages that lacked their own step bar and were stuck on the flat
 * "1 of 1" fallback. Each returns {at,total} for the CURRENT step, using the page's
 * own top-level globals; reaches at===total exactly when its COURSE_DONE finish-
 * condition fires, so the bar and checkmark agree. (Single-step activities and pages
 * that ship their own step bar are NOT listed.) */
/* Convention (2026-07-21): at = COMPLETED steps (0 on open), total = number of steps, so every
 * activity bar opens EMPTY and reaches full only when the page is done (at === total exactly when
 * COURSE_DONE fires). Read-only pages are NOT listed — courseBarState renders them full-on-visit. */
var COURSE_STEPS = {
  // 12-2: categorize → value → done  (2 actions; the sort is ONE stage)
  '12-2-Marias-Form.html': function(){ var done = (typeof formDone !== 'undefined' && formDone); var val = (typeof formPhase !== 'undefined' && formPhase === 'valuate'); return { at: done ? 2 : (val ? 1 : 0), total: 2 }; },
  // 13-2: all rows classified  (1 action; the sort is ONE stage)
  '13-2-The-Bank-Statement.html': function(){ var all = Array.isArray(window.txns) && typeof classifications !== 'undefined' && txns.every(function(t){ return classifications[t.id] !== undefined; }); return { at: all ? 1 : 0, total: 1 }; },
  // 13-4: deposits answered / total  (already completed-count)
  '13-4-The-Customer-Payments.html': function(){ var n = (typeof depositAnswers !== 'undefined') ? Object.keys(depositAnswers).length : 0; return { at: n, total: (Array.isArray(window.deposits) ? deposits.length : 1) }; },
  // 13-5: MCQ answered  (1 action; the sort is ONE stage)
  '13-5-The-Credit-Card-Statement.html': function(){ return { at: (typeof cardMCQSubmitted !== 'undefined' && cardMCQSubmitted) ? 1 : 0, total: 1 }; },
  // 15-3: candidates answered / total  (already completed-count)
  '15-3-The-Entity.html': function(){ var n = (typeof submitted !== 'undefined') ? Object.keys(submitted).length : 0; return { at: n, total: (Array.isArray(window.CANDIDATES) ? CANDIDATES.length : 1) }; },
  // 22-4: sort the cards → figure → done  (2 actions; the sort is ONE stage)
  '22-4-whatChanged.html': function(){ var mi = Array.isArray(window.movedItems) ? window.movedItems : []; var allPlaced = mi.length > 0 && typeof placed !== 'undefined' && mi.every(function(m){ return placed[m.id] !== undefined; }); var fs = (typeof figStage !== 'undefined') ? figStage : 0; return { at: allPlaced ? (fs >= 2 ? 2 : 1) : 0, total: 2 }; },
  // 24-5: fill the schedule → signing → both signed / done  (2 actions; the fill is ONE stage)
  '24-5-schedule-a.html': function(){ var allEnt = (typeof allEntered === 'function') ? allEntered() : false; var both = (typeof signedCompany !== 'undefined' && signedCompany) && (typeof signedMember !== 'undefined' && signedMember); return { at: allEnt ? (both ? 2 : 1) : 0, total: 2 }; },
  // 23-3 (Rick's statement-pipeline rebuild): step 0..6, contributed at step 6
  '23-3-contribution.html': function(){ return { at: Math.min(((typeof step !== 'undefined') ? step : 0), 6), total: 6 }; },
  // ---- Rick's M3/M4/M5 arc: at = completed steps (0 on open); each page caps step at
  //      TOTAL_STEPS, so at hits total exactly when COURSE_DONE fires. ----
  '31-1-welcome.html': function(){ return { at: (typeof bsDone !== 'undefined' && bsDone) ? 1 : 0, total: 1 }; },
  '31-2-work-the-season.html': function(){ return { at: Math.min(((typeof stage !== 'undefined') ? stage : 0), 7), total: 7 }; },
  '32-1-check-the-records.html': function(){ return { at: (typeof step !== 'undefined' && step >= 1) ? 1 : 0, total: 1 }; },
  '32-2-record-the-receivable.html': function(){ return { at: (typeof step !== 'undefined' && step >= 1) ? 1 : 0, total: 1 }; },
  '32-3-the-third-kind.html': function(){ var w = (typeof walkStep !== 'undefined') ? walkStep : 0; var rec = (typeof recorded !== 'undefined' && recorded); return { at: rec ? 3 : Math.min(w, 2), total: 3 }; },
  '33-1-copy-the-rows.html': function(){ var sel = (typeof selected !== 'undefined' && selected), pas = (typeof pasted !== 'undefined' && pasted); return { at: pas ? 2 : (sel ? 1 : 0), total: 2 }; },
  '33-2-sort-the-rows.html': function(){ return { at: Math.min(((typeof activeOrder !== 'undefined') ? activeOrder : 0), 4), total: 4 }; },
  '33-3-format-the-statement.html': function(){ return { at: (typeof completed !== 'undefined' && completed) ? 1 : 0, total: 1 }; },
  '34-1-what-cash-missed.html': function(){
    var n = Array.isArray(window.STEPS) ? STEPS.length : 6;
    var av = (typeof assetsVisited !== 'undefined' && assetsVisited);
    var intro = (typeof introDone !== 'undefined' && introDone);
    var w = (typeof walkStep !== 'undefined') ? walkStep : 0;
    /* not-observed(0) → observed(1) → walk steps + close(2..n+2) */
    return { at: !av ? 0 : (!intro ? 1 : Math.min(w + 2, n + 2)), total: n + 2 }; },
  '41-1-The-Investor-Asks.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 2 }; },
  '42-1-The-Missing-Wage.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 2 }; },
  '43-1-The-Capital-Bridge.html': function(){ var comp = (typeof completed !== 'undefined' && completed), gate = (typeof gateDone !== 'undefined' && gateDone), mcq = (typeof mcqAnswered !== 'undefined' && mcqAnswered), srt = (typeof sortConfirmed !== 'undefined' && sortConfirmed) || (typeof beginningConfirmed !== 'undefined' && beginningConfirmed) || (typeof sourceConfirmed !== 'undefined' && sourceConfirmed); return { at: comp ? 4 : (gate ? 3 : (mcq ? 2 : (srt ? 1 : 0))), total: 4 }; },
  '44-1-The-Cash-Puzzle.html': function(){ return { at: (typeof mcqSubmitted !== 'undefined' && mcqSubmitted) ? 1 : 0, total: 1 }; },
  '44-2-Three-Buckets.html': function(){
    var cp = (typeof copied !== 'undefined' && copied);
    var sc = (typeof sortComplete !== 'undefined' && sortComplete);
    var ord = 0;
    if (cp) { var st = document.querySelector('#statementBuild .brw-step.is-active'); ord = st ? Number(st.getAttribute('data-step-order')) : 0; }
    /* intro(0) → copied-in(1) → pick(2) → sorted(3) */
    return { at: !cp ? 0 : (ord >= 2 ? 3 : (ord >= 1 ? 2 : 1)), total: 3 }; },
  '44-3-The-Cash-Flow-Statement.html': function(){ return { at: (typeof completed !== 'undefined' && completed) ? 1 : 0, total: 1 }; },
  '46-1-The-Statements-Tie-Out.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 4 }; },
  '46-2-The-Statement-Map.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 4 }; },
  '47-1-Freddies-Napkin.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 4 }; },
  '48-1-The-Deal.html': function(){ return { at: ((typeof step !== 'undefined') ? step : 0), total: 3 }; }
};

(function(){
  /* Gated Reset (2026-07-19): activity pages that expose a top-level restart()
     get a Reset row injected below the content, shown only once the student has
     taken an action (step bar past 1, or the finish condition already true) —
     PROGRESS.md rule 4, applied in one place for Rick's M3-M5 pages. */
  /* Chrome-injected Reset ONLY where the page has a real activity but no
     in-activity Reset of its own. Walk/confirm/reveal pages get NO Reset at
     all — Back covers them (ruling 2026-07-19). */
  var RESET_SCOPE = /^(22-4-|24-5-)/;
  function resetRow(f){
    if (!RESET_SCOPE.test(f)) return null;
    if (typeof window.restart !== 'function') return null;
    if (document.getElementById('courseResetRow')) return document.getElementById('courseResetRow');
    var wrap = document.querySelector('.prework-wrap');
    if (!wrap) return null;
    var row = document.createElement('div');
    row.className = 'btn-row'; row.id = 'courseResetRow';
    row.style.cssText = 'justify-content:flex-end; margin-top:14px; display:none;';
    row.innerHTML = '<button class="btn-reset" onclick="restart()">Reset</button>';
    wrap.appendChild(row);
    return row;
  }
  function courseStarted(f, cond){
    try {
      if (typeof COURSE_STEPS !== 'undefined' && COURSE_STEPS[f]) { var s = COURSE_STEPS[f](); if (s && s.at > 1) return true; }
      if (cond && cond()) return true;
    } catch(e){}
    return false;
  }
  function run(){
    var f = location.pathname.split('/').pop() || '';
    if (typeof courseTutorialOf === 'function' && courseTutorialOf(f) < 0) return;   // not a tracked lesson page
    var cond = (typeof COURSE_DONE !== 'undefined') ? COURSE_DONE[f] : null;
    if (!cond) { courseMarkComplete(f); return; }              // reading page → complete on visit
    var row = resetRow(f);
    var wasDone = coursePageDone(f);
    if (wasDone && row) row.style.display = '';
    courseRenderBar(f);                                        // initial bar (live state)
    var t = setInterval(function(){
      courseRenderBar(f);                                      // the bar tracks the student's live state
      if (row && row.style.display === 'none' && courseStarted(f, cond)) row.style.display = '';
      var done = false; try { done = !!cond(); } catch(e){ done = false; }
      if (done && !wasDone) { wasDone = true; courseMarkComplete(f); if (row) row.style.display = ''; }
    }, 300);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();


/* ============================================================================
 * COURSE_GLOSSARY (added 2026-07-15): every term from every module, in one
 * card. Auto-merged from M1_GLOSSARY and the per-page glossaryTerms lists;
 * duplicates deduped, first definition wins. courseGlossaryOpen() renders it
 * and initCourseChrome() overrides each page's local openGlossary with it,
 * so every page shows the same full glossary.
 * ========================================================================== */
var COURSE_GLOSSARY = [
  { module:'Module 1 · The Journey', tutorial:'', terms:[
    { term:'Entity', def:'A perspective you adopt by deciding what counts as &ldquo;in&rdquo; (your repair work) vs. &ldquo;out&rdquo; (your personal life), for a purpose. The line is drawn, not found. (Named in 1.5; the formal/legal entity is Module 2.)' },
    { term:'Asset', def:'Something you HAVE &mdash; a present right to an economic benefit (the gear, the parts, the prepaid month, cash). &ldquo;Right to,&rdquo; not &ldquo;owns&rdquo;: a leased item is an asset. (The word &ldquo;Asset&rdquo; arrives in 1.3; at 1.2 you work with &ldquo;insurable property.&rdquo;)' },
    { term:'Noncash Asset', def:'An asset that isn&rsquo;t cash: equipment, parts on the shelf, fixtures, or a future right like prepaid rent.' },
    { term:'Prepaid Rent', def:'Rent already paid for a future month; a present right (an asset) until the month is used, then it becomes a cost.' },
    { term:'Liability', def:'Something you OWE &mdash; a present obligation to transfer an economic benefit later (the card balance; Smith&rsquo;s deposit, where what&rsquo;s owed is the work, not money).' },
    { term:'Accounting Identity', def:'Assets &minus; Liabilities &mdash; a difference fully determined by the two lists. An identity, not an equation; it holds by definition for every entity.' },
    { term:'Contributed', def:'Resources that came into the entity from outside its own repair work (owner cash, equipment, items from home). Formal name later: Contributed Capital.' },
    { term:'Generated', def:'What the repair work produced, net of its costs (&ldquo;from running the repair work&rdquo;). Formal name later: Retained Earnings.' },
    { term:'Cost of Repairs Done', def:'The value of parts/resources consumed in finished customer jobs; a reason that makes parts-on-the-shelf go down.' },
    { term:'Market Value (what it would fetch)', def:'What a comparable one sells for today (e.g. recent used &ldquo;eBay comp&rdquo; prices); the basis used to value the pre-owned laptop. One way to arrive at an asset&rsquo;s value &mdash; a choice, not the only one.' },
  ] },
  { module:'Module 2 · Getting Formal', tutorial:'Tutorial 1 · The Two Yous', terms:[
    { term:"Liability (legal)", def:"Being legally responsible for harm. Here it means a claim that can reach your personal savings, car, and earnings &mdash; not just the tools and parts in the repair work." },
    { term:"Personal assets", def:"What you own as a person &mdash; your savings, your car, your earnings (you rent your apartment, so there&rsquo;s no house at stake) &mdash; separate from anything recorded for the repair work." },
    { term:"LLC", def:"Limited Liability Company &mdash; a legal form that can hold the operation and stand as a wall between a claim and your personal life. Maria names it here; you form one next." },
  ] },
  { module:'Module 2 · Getting Formal', tutorial:'Tutorial 2 · Filing for a Legal Body', terms:[
    { term:"Certificate of Organization", def:"In Connecticut, the one-page filing that brings a limited liability company (LLC) into legal existence. (Delaware calls its version a &ldquo;Certificate of Formation.&rdquo;)" },
    { term:"Legal entity", def:"A &ldquo;person&rdquo; in the eyes of the law that can own things, owe debts, sign contracts, and be sued &mdash; separate from the human beings behind it. An LLC is one." },
    { term:"Registered agent", def:"The person or office an LLC names to receive legal mail at a real in-state address. A small owner often serves as their own." },
  ] },
  { module:'Module 2 · Getting Formal', tutorial:'Tutorial 3 · The Rules', terms:[
    { term:"Operating Agreement", def:"An LLC&rsquo;s internal rulebook &mdash; who the members are, how it&rsquo;s managed, what was contributed, who bears its liabilities. Every LLC has one; you write your own." },
    { term:"Sole Member", def:"The single owner of a one-member LLC. Here, that&rsquo;s you &mdash; in your owner capacity." },
    { term:"Capital contribution", def:"What an owner puts into the company. Here it&rsquo;s the whole repair business, transferred at its existing book amounts &mdash; no revaluation, no new number." },
    { term:"Members&rsquo; Capital", def:"The LLC&rsquo;s name for the difference Assets &minus; Liabilities. A definitional difference, not &ldquo;what&rsquo;s left for the owner.&rdquo; The contributed slice ($990) and the generated slice ($170) are kept separate." },
    { term:"Limited liability", def:"A legal fact: the member is not personally on the hook for the Company&rsquo;s debts. It changes who can be pursued &mdash; not what the records show." },
    { term:"Accounting entity", def:"The boundary you draw for information &mdash; the thing your books are about. It can exist with or without any legal body, and it came first here (1.1)." },
  ] },
  { module:'Module 2 · Getting Formal', tutorial:'Tutorial 4 · The Entity&rsquo;s Own Number', terms:[
    { term:"EIN", def:"Employer Identification Number &mdash; the entity&rsquo;s own tax ID with the IRS, like a Social Security number for a business. The bank needs it to open an account in the LLC&rsquo;s name." },
    { term:"Co-mingling", def:"Running business and personal money through the same account, so they have to be sorted apart by hand. Opening the LLC&rsquo;s own account ends it." },
    { term:"Disregarded entity", def:"For federal income tax, a single-member LLC is &ldquo;looked through&rdquo; to its owner &mdash; even though it holds its own EIN for every other purpose. Different lines drawn for different purposes." },
    { term:"Counterparty", def:"The other party to a transaction or contract. With its own EIN and accounts, the LLC is a counterparty in its own right &mdash; it deals with banks, customers, and the IRS in its own name, and can owe and be owed (even sue and be sued) as itself, not as you." },
    { term:"Schedule A", def:"The Operating Agreement&rsquo;s list of what the member contributes &mdash; assets, liabilities assumed, and the difference. You complete it from the Company&rsquo;s books, after the contributing is done." },
    { term:"Execute (a document)", def:"To sign it and make it operative. You execute the Operating Agreement here &mdash; after Schedule A is complete, because the schedule attests to facts." },
  ] },
  { module:'Module 3 · The Story Between the Snapshots', tutorial:'', terms:[
    { term:'Member&rsquo;s capital', def:'The LLC&rsquo;s name for Assets &minus; Liabilities. A definitional difference, not &ldquo;what&rsquo;s left for the owner.&rdquo; Here, $4,710 &minus; $2,250 = $2,460.' },
    { term:'Reason', def:'The short note you jot beside a change in the books to record <em>why</em> it happened. You started the practice earlier; over a whole season the Reasons pile up.' },
    { term:'Balance sheet', def:'A single snapshot of what the records show the entity holds and owes at one moment &mdash; assets, liabilities, and the difference between them. It says where things stand, not how they got there.' },
    { term:'Dated subtotal', def:'A ruled line you add at one of the dates of interest. Excel sums the entries through that date so you can read where an account stood.' },
    { term:'On account', def:'Billed, to be paid later (here, net 15 &mdash; within 15 days). The work is done, so the delivery counts now; the cash follows on its own schedule.' },
    { term:'Job log', def:'The shop&rsquo;s list of finished repair jobs, including the customer, completion date, hours, parts used, charge, and payment status.' },
    { term:'Accounts Receivable', def:'A right to be paid later for work already done &mdash; an asset. Ridgeline Trail Crew owes $300 for a finished job; the line remains in Assets until payment.' },
    { term:'Customer Deposit', def:'Cash received before the work is done. The delivery is recorded once the work is finished &mdash; which is why J. Smith&rsquo;s frame is recorded this summer, not last period.' },
    { term:'Depreciation', def:'A reason written when wear or obsolescence reduces an asset&rsquo;s recorded amount and no sale, bill, or other transaction recorded that change.' },
    { term:'Working Tab', def:'A temporary working sheet. The statement is built on it, and the tab is renamed when the statement is finished.' },
    { term:'Revenue', def:'The value of work delivered during a period. It is recorded when the work is delivered, whether cash comes before, after, or at the same time.' },
    { term:'Expense', def:'Value used up while delivering the period&rsquo;s work. The row records the using-up, not the paying.' },
    { term:'Parts Used', def:'The cost of parts used on completed jobs. The shelf records that use job by job.' },
    { term:'Rent', def:'The cost of the workspace right used as each month passed.' },
    { term:'Income Statement', def:'A report that summarizes Revenue and Expenses between chosen dates. Here, it formats the season&rsquo;s GENERATED rows on the Income Statement tab.' },
    { term:'Net income', def:'Revenue minus Expenses between the chosen dates: $6,020 minus $3,380 = $2,640.' },
    { term:'Draw', def:'Money the owner takes out for personal use. A draw is written in WITHDRAWN, never as an expense.' },
    { term:'Carrying value', def:'Cost minus depreciation recorded so far &mdash; a path in the records, not what a buyer will pay.' },
  ] },
  { module:'Module 4 · The Angel Investor', tutorial:'', terms:[
    { term:'Salary / wages', def:'Pay for work. The records treat it as an expense when the work is done.' },
    { term:'Two roles', def:'One person can work at the bench and also be an owner. Salary and a draw are recorded differently.' },
    { term:'Statement of Member&rsquo;s Capital', def:'A report with each pile&rsquo;s Beginning, Change, and Ending. Here CONTRIBUTED, GENERATED, and WITHDRAWN walk the total from $2,460 on June 1 to $4,500 on August 31.' },
    { term:'Distribution (draw)', def:'Cash withdrawn by an owner for personal use and recorded in WITHDRAWN. It reduces Member&rsquo;s Capital but is not an expense. Here it is ($600), shown in parentheses.' },
    { term:'Cash', def:'Money held by the shop. On the Assets tab, Cash is $1,300 on June 1 and $620 on August 31, a decrease of $680.' },
    { term:'Season slice', def:'The Cash ledger rows between Balance, June 1, 2026 and Balance, August 31, 2026. These rows are the raw material for the Cash Flow Statement.' },
    { term:'Operating', def:'Cash collected and paid while running the shop: repairs collected, parts bought, and rent paid. Net cash from operating activities is $2,350.' },
    { term:'Investing', def:'Cash used to buy tools and equipment. The new repair tool is a $400 investing outflow.' },
    { term:'Financing', def:'Cash moving between the shop and its funders. The $2,030 card payoff settled a liability, and the $600 owner&rsquo;s draw moved cash to the owner. Net financing cash flow is negative $2,630.' },
    { term:'Cash Flow Statement', def:'A statement that groups cash flows into Operating, Investing, and Financing activities and reconciles the period&rsquo;s net change to ending Cash.' },
    { term:'Operating activities', def:'Cash from running the shop. Here, repairs collected minus parts bought and rent paid equals $2,350.' },
    { term:'Net change in cash', def:'Operating $2,350 minus Investing $400 minus Financing $2,630 equals negative $680. Cash moves from $1,300 to $620.' },
    { term:'Articulation', def:'The statements tie to each other where their figures meet. Cash has the Cash Flow Statement, and Member&rsquo;s Capital has the Statement of Member&rsquo;s Capital. Changes in other lines are explained by the ledgers&rsquo; dated entries.' },
    { term:'Withdrawal', def:'An owner move &mdash; money taken by the owner. It is not an expense and does not enter net income.' },
    { term:'Expectation vs record', def:'A napkin sketch of the future is not a statement. Statements record what happened.' },
    { term:'Replacement tools &amp; equipment', def:'An investor&rsquo;s cash sketch of gear wearing out and being replaced.' },
    { term:'Free cash flow', def:'Cash the Company could pay out while keeping the operation going. On Freddie&rsquo;s napkin it is an expectation, never a record.' },
    { term:'Future cash flows', def:'Cash the operation is expected to produce in future periods. Freddie&rsquo;s napkin estimates about $5,000 a season.' },
    { term:'Recognition conventions', def:'The rules that determine what the records carry and when. Skill and returning customers can help produce cash without appearing as balance-sheet lines.' },
    { term:'Ownership share', def:'A stated portion of the LLC. Freddie proposes $20,000 for 30%, leaving 70% with the current owner.' },
  ] }

];
function courseGlossaryOpen(){
  var byModule = {}, order = [];
  COURSE_GLOSSARY.forEach(function(sec){
    if (!byModule[sec.module]){ byModule[sec.module] = []; order.push(sec.module); }
    byModule[sec.module] = byModule[sec.module].concat(sec.terms);
  });
  var html = '<input type="text" class="glossary-search" placeholder="Search the glossary&hellip;" oninput="courseGlossaryFilter(this.value)">';
  order.forEach(function(mod){
    html += '<div class="glossary-group" data-gg><div class="glossary-module">'+mod+'</div>'+byModule[mod].map(function(g){
      return '<div class="glossary-entry"><div class="glossary-entry-term">'+g.term+'</div><div class="glossary-entry-def">'+g.def+'</div></div>';
    }).join('')+'</div>';
  });
  var list = document.getElementById('glossaryList');
  var overlay = document.getElementById('glossaryOverlay');
  if (!list || !overlay) return;
  list.innerHTML = html;
  overlay.classList.add('open');
  var s = list.querySelector('.glossary-search');
  if (s) s.focus();
}
function courseGlossaryFilter(q){
  q = (q || '').toLowerCase();
  var list = document.getElementById('glossaryList');
  list.querySelectorAll('.glossary-entry').forEach(function(e){
    e.style.display = (e.textContent.toLowerCase().indexOf(q) >= 0) ? '' : 'none';
  });
  list.querySelectorAll('[data-gg]').forEach(function(g){
    var any = Array.prototype.some.call(g.querySelectorAll('.glossary-entry'), function(e){ return e.style.display !== 'none'; });
    g.style.display = any ? '' : 'none';
  });
}

/* ============================================================================
 * MERGED FROM RICK'S BRANCH (2026-07-19): statement-facsimile engine —
 * BRW.tagger / BRW.fmt / BRW.renderGrid / BRW sorter / curated sorter list.
 * ========================================================================== */

/* ===== BRW.tagger — per-row category tagger (approved addition 2026-07-13) =====
   Shared by the income-statement sort (32-x) and the cash-flow activity sort (44-2).
   BRW.tagger(containerId, {
     rows:       [{ id, label, amt, cat }],   // cat = the CORRECT category key
     categories: [{ key, label }],
     sortLabel:  'Sort the rows &rarr;',      // optional
     onSorted:   function(){}                 // fires once the sorted view renders
   })
   Every row starts untagged; picking a pill tags it. The Sort button appears once
   all rows are tagged. On Sort, wrong tags flash .miss and revert to untagged
   (retry until clean — forgiving, never punitive). When every tag is right, the
   list re-renders as category bands with subtotals and onSorted fires. */
BRW.tagger = function (cid, opts) {
  var el = document.getElementById(cid);
  var tags = {}, missed = {}, sorted = false;

  function fmt(n) { return n < 0 ? '(' + BRW.dol(-n) + ')' : BRW.dol(n); }

  function render() {
    var h = '';
    if (!sorted) {
      opts.rows.forEach(function (r) {
        h += '<div class="tagger-row"><div class="tagger-label">' + r.label + '</div>'
           + '<div class="tagger-amt">' + BRW.signed(r.amt) + '</div>'
           + '<div class="tagger-choices">' + opts.categories.map(function (c) {
               var cls = 'tagger-choice' + (tags[r.id] === c.key ? ' on' : '') + (missed[r.id] ? ' miss' : '');
               return '<button class="' + cls + '" onclick="BRW._tagPick(\'' + cid + '\',\'' + r.id + '\',\'' + c.key + '\')">' + c.label + '</button>';
             }).join('') + '</div></div>';
      });
      var all = opts.rows.every(function (r) { return tags[r.id]; });
      if (all) h += '<div class="tagger-actions"><button class="btn-continue" onclick="BRW._tagSort(\'' + cid + '\')">' + (opts.sortLabel || 'Sort the rows &rarr;') + '</button></div>';
    } else {
      opts.categories.forEach(function (c) {
        var rows = opts.rows.filter(function (r) { return r.cat === c.key; });
        var sub = rows.reduce(function (s, r) { return s + r.amt; }, 0);
        h += '<div class="tagger-band"><span>' + c.label + '</span></div>';
        rows.forEach(function (r) {
          h += '<div class="tagger-row"><div class="tagger-label">' + r.label + '</div><div class="tagger-amt">' + BRW.signed(r.amt) + '</div><div></div></div>';
        });
        h += '<div class="tagger-subtotal"><div>' + c.label + ' subtotal</div><div class="tagger-amt">' + fmt(sub) + '</div><div></div></div>';
      });
    }
    el.innerHTML = h;
  }

  BRW._taggers = BRW._taggers || {};
  BRW._taggers[cid] = {
    pick: function (rid, key) { tags[rid] = key; delete missed[rid]; if (window.playClick) playClick(); render(); },
    sort: function () {
      var wrong = opts.rows.filter(function (r) { return tags[r.id] !== r.cat; });
      if (wrong.length) {
        wrong.forEach(function (r) { missed[r.id] = true; delete tags[r.id]; });
        if (window.playSoftNope) playSoftNope(); else if (window.playClick) playClick();
        render();
        if (opts.onMiss) opts.onMiss(wrong);
      } else {
        sorted = true;
        if (window.playSuccess) playSuccess();
        render();
        if (opts.onSorted) opts.onSorted();
      }
    }
  };
  render();
};
BRW._tagPick = function (cid, rid, key) { BRW._taggers[cid].pick(rid, key); };
BRW._tagSort = function (cid) { BRW._taggers[cid].sort(); };

/* ===== BRW.fmt — Excel number-format renderer (approved engine plan, Part 2) ===== */
BRW.fmt = function (value, numFmt) {
  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  if (typeof value === 'string') return escapeHTML(value);
  if (!numFmt || numFmt === 'General') return escapeHTML(String(value));

  var sections = String(numFmt).split(';').slice(0, 4);
  var section = value > 0 ? sections[0]
    : value < 0 ? (sections.length > 1 ? sections[1] : sections[0])
    : (sections.length > 2 ? sections[2] : sections[0]);

  var rendered = section
    .replace(/_./g, '')
    .replace(/\*./g, '')
    .replace(/\?\?/g, '')
    .replace(/\\/g, '')
    .replace(/"/g, '');
  var absoluteInteger = Math.abs(Math.trunc(Number(value))).toLocaleString('en-US');
  rendered = rendered.replace(/[#0][#,0]*/, absoluteInteger);

  return escapeHTML(rendered.trim());
};

/* ===== BRW.renderGrid (PART 3) =====
   Generic renderer for the extracted Excel-facsimile sheet objects. renderGrid
   is deliberately DOM-free; mountGrid owns the small amount of UI state used
   by outline expand/collapse controls. */
BRW.renderGrid = function (sheetObj, opts) {
  opts = opts || {};
  sheetObj = sheetObj || {};

  var rows = sheetObj.rows || [];
  var cols = sheetObj.cols || [];
  var cells = sheetObj.cells || [];
  var gridId = opts.gridId === undefined ? 'g' : String(opts.gridId);
  var hidden = {};
  var byRow = {};
  var byRef = {};
  var covered = {};
  var anchors = {};
  var groups = [];
  var summaryGroups = {};
  var detailGroups = {};
  var maxRow = rows.length;
  var i;

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeJSString(text) {
    return String(text)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\r/g, '\\r')
      .replace(/\n/g, '\\n')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
  }

  function colLetters(number) {
    var out = '';
    while (number > 0) {
      number--;
      out = String.fromCharCode(65 + (number % 26)) + out;
      number = Math.floor(number / 26);
    }
    return out;
  }

  function colNumber(letters) {
    var out = 0;
    letters = String(letters).toUpperCase();
    for (var n = 0; n < letters.length; n++) out = out * 26 + letters.charCodeAt(n) - 64;
    return out;
  }

  function cellRef(cell) {
    return colLetters(cell.c) + cell.r;
  }

  function parseMerge(range) {
    if (!range) return null;
    var match = /^\$?([A-Z]+)\$?(\d+):\$?([A-Z]+)\$?(\d+)$/i.exec(String(range));
    if (!match) return null;
    return {
      c1: colNumber(match[1]), r1: parseInt(match[2], 10),
      c2: colNumber(match[3]), r2: parseInt(match[4], 10)
    };
  }

  function widthBucket(width) {
    width = Number(width) || 0;
    if (width <= 3.5) return 'xs';
    if (width <= 9.5) return 'sm';
    if (width <= 17) return 'md';
    if (width <= 36) return 'lg';
    return 'xl';
  }

  function columnWidth(columnNumber) {
    return cols[columnNumber - 1] && cols[columnNumber - 1].width;
  }

  function rowMeta(rowNumber) {
    return rows[rowNumber - 1] || {};
  }

  function rowHasRenderableCell(rowNumber) {
    var rowCells = byRow[rowNumber] || [];
    for (var n = 0; n < rowCells.length; n++) {
      var cell = rowCells[n];
      if (cell.c < 2 || cell.c > 6 || covered[cellRef(cell)]) continue;
      if (cell.value !== null && cell.value !== undefined && cell.value !== '') return true;
      if (cell.ruleTop || cell.ruleBottom) return true;
    }
    return false;
  }

  function sourceRow(ref) {
    var match = /\$?[A-Z]+\$?(\d+)$/i.exec(String(ref));
    return match ? parseInt(match[1], 10) : 0;
  }

  function displayedValue(cell) {
    var sources = cell.sumSources || [];
    var recalculate = false;
    var total = 0;
    var n;

    if ((cell.ruleTop || cell.ruleBottom) && sources.length) {
      for (n = 0; n < sources.length; n++) {
        if (hidden[sourceRow(sources[n])]) { recalculate = true; break; }
      }
      if (recalculate) {
        for (n = 0; n < sources.length; n++) {
          var ref = String(sources[n]).replace(/\$/g, '').toUpperCase();
          if (hidden[sourceRow(ref)]) continue;
          var source = byRef[ref];
          if (source && typeof source.value === 'number' && isFinite(source.value)) total += source.value;
        }
        return total;
      }
    }
    return cell.value;
  }

  function renderValue(cell) {
    var value = displayedValue(cell);
    if (value === null || value === undefined) return '';
    if (typeof value === 'number') return BRW.fmt(value, cell.numFmt);
    return escapeHTML(value);
  }

  for (i = 0; i < (opts.hiddenRows || []).length; i++) {
    hidden[parseInt(opts.hiddenRows[i], 10)] = true;
  }

  for (i = 0; i < cells.length; i++) {
    var indexedCell = cells[i];
    if (indexedCell.r > maxRow) maxRow = indexedCell.r;
    (byRow[indexedCell.r] = byRow[indexedCell.r] || []).push(indexedCell);
    byRef[cellRef(indexedCell).toUpperCase()] = indexedCell;
  }

  /* Mark the non-anchor coordinates of every merge before deciding whether a
     row has content. That keeps merged-away values out of both markup and the
     row-presence test. */
  for (i = 0; i < cells.length; i++) {
    var merge = parseMerge(cells[i].merge);
    if (!merge) continue;
    anchors[cellRef(cells[i])] = merge;
    for (var mr = merge.r1; mr <= merge.r2; mr++) {
      for (var mc = merge.c1; mc <= merge.c2; mc++) {
        if (mr !== cells[i].r || mc !== cells[i].c) covered[colLetters(mc) + mr] = true;
      }
    }
  }

  /* A group is a contiguous outline-level-1 run and the first level-0 row
     after it. Group ids follow sheet order, so markup remains deterministic. */
  i = 1;
  while (i <= maxRow) {
    if (Number(rowMeta(i).outlineLevel) !== 1) { i++; continue; }
    var start = i;
    while (i <= maxRow && Number(rowMeta(i).outlineLevel) === 1) i++;
    if (i <= maxRow) {
      var group = { id: 'og-' + (groups.length + 1), start: start, end: i - 1, summary: i };
      groups.push(group);
      summaryGroups[group.summary] = group;
      for (var gr = group.start; gr <= group.end; gr++) detailGroups[gr] = group;
    }
  }

  var cWidth = Number(columnWidth(3)) || 0;
  var fWidth = Number(columnWidth(6)) || 0;
  var layout = opts.layout || (cWidth >= 12 && fWidth >= 24 ? 'pick-note'
    : cWidth >= 12 ? 'pick'
    : fWidth >= 24 ? 'note'
    : 'standard');
  /* format fix (2026-07-19): unused trailing columns E/F left a dead zone on the
     right of statement snapshots — trim them so the sheet fills its shell. */
  var maxUsedCol = 2;
  for (i = 0; i < cells.length; i++) {
    var cc = cells[i];
    if (cc && cc.value !== null && cc.value !== undefined && cc.value !== '' && Number(cc.c) > maxUsedCol) maxUsedCol = Number(cc.c);
  }
  var trim = '';
  if ((layout === 'standard' || layout === 'pick') && maxUsedCol <= 4) trim = ' brw-trim-2';
  else if ((layout === 'standard' || layout === 'pick') && maxUsedCol <= 5) trim = ' brw-trim-1';
  var html = '<div class="brw-grid brw-layout-' + layout + trim + '" data-brw-grid="' + escapeAttr(gridId) + '">';

  /* M1/M2-standard look: emit the SAME classes Meet Anna's sheets use
     (.xl-head/.xl-cat/.xl-item/.xl-total, .xl-gutter/.xl-rownum/.xl-toggle),
     so one stylesheet styles every sheet in the course. A section header
     (lone bold label) echoes the LAST balance amount found in its section. */
  function rowCellInfo(r){
    var cs = byRow[r] || [];
    var info = { boldB:false, amount:null, other:false, ruleTop:false };
    for (var q = 0; q < cs.length; q++) {
      var cq = cs[q];
      if (cq.c === 2 && cq.bold) info.boldB = true;
      if (cq.c === 4 && cq.value !== null && cq.value !== undefined && cq.value !== '') { info.amount = cq; if (cq.ruleTop) info.ruleTop = true; }
      else if (cq.c !== 2 && cq.c !== 4 && cq.value !== null && cq.value !== undefined && cq.value !== '') info.other = true;
    }
    return info;
  }
  function isSectionHeader(r){
    var inf = rowCellInfo(r);
    return inf.boldB && !inf.amount && !inf.other;
  }
  var sectionAmount = {};
  (function(){
    var currentHeader = null;
    for (var r = 1; r <= maxRow; r++) {
      if (hidden[r] || !rowHasRenderableCell(r)) continue;
      if (isSectionHeader(r)) { currentHeader = (r === 1 ? null : r); continue; }
      if (!currentHeader) continue;
      var inf2 = rowCellInfo(r);
      if (inf2.amount && typeof inf2.amount.value === 'number') sectionAmount[currentHeader] = inf2.amount;
    }
  })();
  var gridHasAmounts = false, firstRendered = 0;
  for (var rr = 1; rr <= maxRow; rr++) {
    if (hidden[rr] || !rowHasRenderableCell(rr)) continue;
    if (!firstRendered) firstRendered = rr;
    if (rowCellInfo(rr).amount) gridHasAmounts = true;
  }

  /* Display order (ruling 2026-07-19): a group's detail rows render BELOW the
     line that carries their toggle (the balance/summary line), everywhere —
     click a line, the detail opens under it, like the classic category rows. */
  var displayOrder = [];
  for (var dr = 1; dr <= maxRow; dr++) {
    if (hidden[dr] || !rowHasRenderableCell(dr)) continue;
    if (detailGroups[dr]) continue;                      /* emitted after their summary */
    displayOrder.push(dr);
    if (summaryGroups[dr]) {
      var dg = summaryGroups[dr];
      for (var di = dg.start; di <= dg.end; di++) {
        if (!hidden[di] && rowHasRenderableCell(di)) displayOrder.push(di);
      }
    }
  }

  var visibleRowIndex = 0;
  for (var oi = 0; oi < displayOrder.length; oi++) {
    var rowNumber = displayOrder[oi];

    var detailGroup = detailGroups[rowNumber];
    var summaryGroup = summaryGroups[rowNumber];
    var toggleGroup = summaryGroup;   /* the +/− lives on the balance (summary) line */
    var inf = rowCellInfo(rowNumber);
    var kind;
    if (rowNumber === firstRendered && inf.boldB && !inf.amount) kind = 'xl-head';
    else if (isSectionHeader(rowNumber)) kind = 'xl-cat';
    else if (inf.boldB && inf.amount && inf.ruleTop) kind = 'xl-total';
    else if (inf.boldB && inf.amount && !inf.other) kind = 'xl-cat';
    else kind = 'xl-item';

    var rowClasses = 'xl-row brw-row ' + kind;
    if (detailGroup) rowClasses += ' brw-og-row is-collapsed';
    if (summaryGroup) rowClasses += ' brw-og-summary';
    /* a ruled total line paints once on the whole row — per-cell borders leave
       hairline seams at empty middle columns (fix 2026-07-20) */
    var rowCellsForRule = byRow[rowNumber] || [];
    if (rowCellsForRule.some(function (rc) { return rc.ruleTop; })) rowClasses += ' brw-rowrule-top';
    if (rowCellsForRule.some(function (rc) { return rc.ruleBottom; })) rowClasses += ' brw-rowrule-bottom';
    html += '<div class="' + rowClasses + '" data-brw-row="' + rowNumber + '"';
    if (detailGroup) html += ' data-brw-group="' + detailGroup.id + '"';
    if (summaryGroup) html += ' data-brw-group="' + summaryGroup.id + '"';
    html += '>';

    /* classic chrome: gutter (outline toggle lives here) + row number */
    html += '<div class="xl-gutter">';
    if (toggleGroup) {
      var gutterClick = "BRW._gridToggle('" + escapeJSString(gridId) + "','" + toggleGroup.id + "')";
      html += '<button class="xl-toggle brw-og-toggle" type="button" data-brw-grid="' + escapeAttr(gridId)
        + '" data-brw-group="' + toggleGroup.id + '" aria-expanded="false" onclick="'
        + escapeAttr(gutterClick) + '">+</button>';
    }
    html += '</div>';
    if (detailGroup) { html += '<div class="xl-rownum brw-rownum"></div>'; }
    else if (kind === 'xl-head' || kind === 'xl-total') { html += '<div class="xl-rownum brw-rownum"></div>'; }
    else { visibleRowIndex++; html += '<div class="xl-rownum brw-rownum">' + visibleRowIndex + '</div>'; }

    var rowCells = (byRow[rowNumber] || []).slice().sort(function (a, b) { return a.c - b.c; });
    for (var cellIndex = 0; cellIndex < rowCells.length; cellIndex++) {
      var cell = rowCells[cellIndex];
      var ref = cellRef(cell);
      if (cell.c < 2 || cell.c > 6 || covered[ref]) continue;

      var classes = 'brw-cell brw-col-' + colLetters(cell.c).toLowerCase()
        + ' brw-w-' + widthBucket(columnWidth(cell.c));
      if (cell.c === 2) classes += ' xl-c brw-label';
      if (cell.c === 3) classes += ' brw-hint';
      if (cell.c === 4) classes += ' xl-v brw-amount';
      if (cell.bold) classes += ' brw-bold';
      if (cell.italic) classes += ' brw-italic';
      if (cell.indent) classes += ' brw-ind-' + Math.max(0, Math.min(8, parseInt(cell.indent, 10) || 0));
      if (cell.ruleTop) classes += ' brw-rule-top';
      if (cell.ruleBottom) classes += ' brw-rule-bottom';

      var anchorMerge = anchors[ref];
      if (anchorMerge) {
        var span = Math.max(1, Math.min(5, anchorMerge.c2 - anchorMerge.c1 + 1));
        classes += ' brw-span-' + span;
      }

      html += '<div class="' + classes + '" data-brw-cell="' + ref + '">';
      html += renderValue(cell) + '</div>';
    }
    if (kind === 'xl-head' && gridHasAmounts) {
      html += '<div class="brw-cell xl-v brw-col-d brw-amount">Value</div>';
    }
    if (sectionAmount[rowNumber]) {
      var secCell = sectionAmount[rowNumber];
      html += '<div class="brw-cell xl-v brw-col-d brw-amount brw-sec-amount">' + BRW.fmt(secCell.value, secCell.numFmt) + '</div>';
    }
    html += '</div>';
  }

  return html + '</div>';
};

BRW._grids = BRW._grids || {};

BRW.mountGrid = function (containerId, sheetObj, opts) {
  opts = opts || {};
  var gridId = opts.gridId === undefined ? 'g' : String(opts.gridId);
  var renderOpts = {};
  for (var key in opts) if (Object.prototype.hasOwnProperty.call(opts, key)) renderOpts[key] = opts[key];
  renderOpts.gridId = gridId;

  var container = document.getElementById(containerId);
  if (!container) return '';
  BRW._grids[gridId] = { containerId: containerId };
  var html = BRW.renderGrid(sheetObj, renderOpts);
  container.innerHTML = html;
  return html;
};

BRW._gridToggle = function (gridId, groupId) {
  var mounted = BRW._grids[String(gridId)];
  if (!mounted) return;
  var container = document.getElementById(mounted.containerId);
  if (!container) return;

  var toggles = container.getElementsByClassName('brw-og-toggle');
  var rows = container.getElementsByClassName('brw-og-row');
  var expanded = false;
  var i;
  for (i = 0; i < toggles.length; i++) {
    if (toggles[i].getAttribute('data-brw-group') === String(groupId)) {
      expanded = toggles[i].getAttribute('aria-expanded') !== 'true';
      toggles[i].setAttribute('aria-expanded', expanded ? 'true' : 'false');
      toggles[i].textContent = expanded ? '−' : '+';
    }
  }
  for (i = 0; i < rows.length; i++) {
    if (rows[i].getAttribute('data-brw-group') !== String(groupId)) continue;
    if (expanded) rows[i].classList.remove('is-collapsed');
    else rows[i].classList.add('is-collapsed');
  }
  if (typeof window !== 'undefined' && window.playClick) window.playClick();
};

/* ===== BRW sorter (PART 5) =====
   The sorter is the thinking surface; renderGridWithPick is the live record.
   The render helpers below are deliberately DOM-free. mountSorter owns the
   event wiring and the small amount of selected-item UI state. */
BRW.sorterConfigFromPick = function (sheet, opts) {
  sheet = sheet || {};
  opts = opts || {};

  var labelColumn = Number(opts.labelColumn) || 2;
  var answerColumn = Number(opts.answerColumn) || 3;
  var amountColumn = Number(opts.amountColumn) || 4;
  var guidanceColumn = Number(opts.guidanceColumn) || 6;
  var byRow = {};
  var cells = sheet.cells || [];
  var items = [];
  var categories = [];
  var guidance = [];
  var seenCategories = {};
  var i;

  function present(value) {
    return value !== null && value !== undefined && String(value).trim() !== '';
  }

  for (i = 0; i < cells.length; i++) {
    var cell = cells[i];
    if (!byRow[cell.r]) byRow[cell.r] = {};
    byRow[cell.r][cell.c] = cell;
  }

  var rowNumbers = Object.keys(byRow).map(function (row) {
    return parseInt(row, 10);
  }).sort(function (a, b) { return a - b; });

  for (i = 0; i < rowNumbers.length; i++) {
    var row = rowNumbers[i];
    var rowCells = byRow[row];
    var labelCell = rowCells[labelColumn];
    var answerCell = rowCells[answerColumn];
    var amountCell = rowCells[amountColumn];
    var guidanceCell = rowCells[guidanceColumn];

    /* Pick answers are workbook rows, not headings such as C6 "Kind". The
       companion label and amount are part of the documented Pick-row shape. */
    if (answerCell && present(answerCell.value)
        && labelCell && present(labelCell.value)
        && amountCell && present(amountCell.value)) {
      var answer = String(answerCell.value).trim();
      items.push({
        row: row,
        label: String(labelCell.value),
        amount: amountCell.value,
        numFmt: amountCell.numFmt || 'General',
        answer: answer
      });
      if (!seenCategories[answer]) {
        seenCategories[answer] = true;
        categories.push(answer);
      }
    }

    if (guidanceCell && present(guidanceCell.value)) {
      guidance.push({ row: row, text: String(guidanceCell.value) });
    }
  }

  /* categoryOrder option added under Rick's one-time append-only exception, 2026-07-16 (point 3: Revenue above Expenses). */
  if (Array.isArray(opts.categoryOrder) && opts.categoryOrder.length) {
    var orderedCategories = [];
    var remainingCategories = categories.slice();
    for (i = 0; i < opts.categoryOrder.length; i++) {
      var categoryIndex = remainingCategories.indexOf(opts.categoryOrder[i]);
      if (categoryIndex !== -1) {
        orderedCategories.push(remainingCategories.splice(categoryIndex, 1)[0]);
      }
    }
    categories = orderedCategories.concat(remainingCategories);
  }

  return { items: items, categories: categories, guidance: guidance };
};

BRW.makeSorter = function (config) {
  config = config || {};
  var items = (config.items || []).map(function (item) {
    return {
      row: Number(item.row),
      label: item.label,
      amount: item.amount,
      numFmt: item.numFmt,
      answer: String(item.answer)
    };
  });
  var categories = (config.categories || []).map(function (category) {
    return String(category);
  });
  var diagnosticRows = (config.diagnosticRows || []).map(function (row) {
    return Number(row);
  });
  var minPerCategory = config.minPerCategory === undefined
    ? 1 : Math.max(0, Math.floor(Number(config.minPerCategory) || 0));
  var byRow = {};
  var categorySet = {};
  var placed = {};
  var handPlaced = {};
  var attempts = {};
  var i;

  for (i = 0; i < items.length; i++) byRow[String(items[i].row)] = items[i];
  for (i = 0; i < categories.length; i++) categorySet[categories[i]] = true;

  function handCount(category) {
    var count = 0;
    for (var row in handPlaced) {
      if (Object.prototype.hasOwnProperty.call(handPlaced, row)
          && placed[row] === category) count++;
    }
    return count;
  }

  var sorter = {
    items: items,
    categories: categories,

    attempt: function (row, category) {
      var key = String(Number(row));
      category = String(category);
      var item = byRow[key];
      if (!item || !categorySet[category]) return { correct: false };
      if (placed[key] !== undefined) return { correct: placed[key] === category };

      attempts[key] = (attempts[key] || 0) + 1;
      if (item.answer !== category) return { correct: false };
      placed[key] = category;
      handPlaced[key] = true;
      return { correct: true };
    },

    attemptsFor: function (row) {
      return attempts[String(Number(row))] || 0;
    },

    placedCount: function () {
      return Object.keys(placed).length;
    },

    isPlaced: function (row) {
      return placed[String(Number(row))] !== undefined;
    },

    placedCategory: function (row) {
      return placed[String(Number(row))];
    },

    placedItems: function (category) {
      return items.filter(function (item) {
        return placed[String(item.row)] === String(category);
      });
    },

    wasHandSorted: function (row) {
      return !!handPlaced[String(Number(row))];
    },

    restUnlocked: function () {
      for (var c = 0; c < categories.length; c++) {
        if (handCount(categories[c]) < minPerCategory) return false;
      }
      if (diagnosticRows.length) {
        var diagnosticMet = false;
        for (var d = 0; d < diagnosticRows.length; d++) {
          if (handPlaced[String(diagnosticRows[d])]) diagnosticMet = true;
        }
        if (!diagnosticMet) return false;
      }
      return true;
    },

    sortRest: function () {
      if (!sorter.restUnlocked()) return [];
      var rows = [];
      for (var n = 0; n < items.length; n++) {
        var item = items[n];
        var key = String(item.row);
        if (placed[key] !== undefined) continue;
        placed[key] = item.answer;
        rows.push(item.row);
      }
      return rows;
    },

    done: function () {
      return sorter.placedCount() === items.length;
    }
  };

  return sorter;
};

BRW.renderSortPanel = function (sorter, opts) {
  opts = opts || {};
  var selectedRow = opts.selectedRow === undefined || opts.selectedRow === null
    ? null : Number(opts.selectedRow);
  var guidance = opts.guidance || [];

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(text) {
    return escapeHTML(text).replace(/`/g, '&#96;');
  }

  function itemMarkup(item, placedItem) {
    var classes = placedItem ? 'brw-sort-placed-item' : 'brw-sort-item';
    if (!placedItem && selectedRow === item.row) classes += ' brw-sort-selected';
    var html = '<div class="' + classes + '" data-row="' + item.row + '"';
    if (!placedItem) {
      html += ' data-brw-sort-row="' + item.row + '" draggable="true" tabindex="0" role="button"'
        + ' aria-pressed="' + (selectedRow === item.row ? 'true' : 'false') + '"';
    }
    html += '><span class="brw-sort-item-label">' + escapeHTML(item.label) + '</span>';
    if (item.amount !== null && item.amount !== undefined && item.amount !== '') {
      html += '<span class="brw-sort-item-amount">' + BRW.fmt(item.amount, item.numFmt) + '</span>';
    }
    return html + '</div>';
  }

  var doneClass = sorter.done() ? ' brw-sort-done' : '';
  var html = '<section class="brw-sort-panel' + doneClass + '" aria-label="Sort workbook rows">'
    + '<p class="brw-sort-instruction">'
    + escapeHTML(opts.instruction || 'Drag each row to its category, or select a row and then select a category.')
    + '</p><div class="brw-sort-layout"><div class="brw-sort-source">'
    + '<h3 class="brw-sort-heading">Rows to sort</h3><div class="brw-sort-items">';

  for (var i = 0; i < sorter.items.length; i++) {
    if (!sorter.isPlaced(sorter.items[i].row)) html += itemMarkup(sorter.items[i], false);
  }
  if (sorter.placedCount() === sorter.items.length) {
    html += '<p class="brw-sort-empty">All rows are sorted.</p>';
  }
  html += '</div></div><div class="brw-sort-targets"><h3 class="brw-sort-heading">Categories</h3>';

  for (var c = 0; c < sorter.categories.length; c++) {
    var category = sorter.categories[c];
    var seated = sorter.placedItems(category);
    html += '<section class="brw-sort-category"><h4 class="brw-sort-category-label">'
      + escapeHTML(category) + '</h4><div class="brw-sort-zone' + (seated.length ? ' brw-sort-zone-filled' : '')
      + '" data-cat="' + escapeAttr(category) + '" tabindex="0" role="button" aria-label="Place selected row in '
      + escapeAttr(category) + '">';
    if (!seated.length) html += '<span class="brw-sort-zone-empty">Drop or click to place</span>';
    for (var p = 0; p < seated.length; p++) html += itemMarkup(seated[p], true);
    html += '</div></section>';
  }

  html += '</div></div><div class="brw-sort-actions"><button type="button" class="brw-sort-rest"'
    + (sorter.restUnlocked() ? '' : ' disabled') + '>Sort the rest</button></div>';

  if (guidance.length) {
    html += '<aside class="brw-sort-guidance" aria-label="Workbook guidance"><h3 class="brw-sort-guidance-title">Guidance</h3>';
    for (var g = 0; g < guidance.length; g++) {
      html += '<p class="brw-sort-guidance-text" data-row="' + Number(guidance[g].row) + '">'
        + escapeHTML(guidance[g].text) + '</p>';
    }
    html += '</aside>';
  }

  return html + '</section>';
};

BRW.renderGridWithPick = function (sheet, opts) {
  sheet = sheet || {};
  opts = opts || {};
  var reveal = {};
  var flash = {};
  var i;
  for (i = 0; i < (opts.revealRows || []).length; i++) {
    reveal[String(Number(opts.revealRows[i]))] = true;
  }
  if (opts.flashRow !== undefined && opts.flashRow !== null) {
    flash[String(Number(opts.flashRow))] = true;
  }
  for (i = 0; i < (opts.flashRows || []).length; i++) {
    flash[String(Number(opts.flashRows[i]))] = true;
  }

  var answerRows = {};
  var config = BRW.sorterConfigFromPick(sheet, opts);
  for (i = 0; i < config.items.length; i++) answerRows[String(config.items[i].row)] = true;

  var clone = {};
  for (var key in sheet) {
    if (Object.prototype.hasOwnProperty.call(sheet, key) && key !== 'cells') clone[key] = sheet[key];
  }
  clone.cells = (sheet.cells || []).map(function (cell) {
    var copy = {};
    for (var cellKey in cell) {
      if (!Object.prototype.hasOwnProperty.call(cell, cellKey)) continue;
      var value = cell[cellKey];
      copy[cellKey] = Object.prototype.toString.call(value) === '[object Array]' ? value.slice() : value;
    }
    if (copy.c === 3 && answerRows[String(copy.r)] && !reveal[String(copy.r)]) copy.value = null;
    return copy;
  });

  var html = BRW.renderGrid(clone, opts);
  for (var row in flash) {
    if (!Object.prototype.hasOwnProperty.call(flash, row) || !reveal[row]) continue;
    var pattern = new RegExp('(<div class=")([^"]*)(" data-brw-cell="C' + row + '")');
    html = html.replace(pattern, '$1$2 brw-c-flash$3');
  }
  return html;
};

BRW.mountSorter = function (containerId, gridContainerId, sheet, opts) {
  opts = opts || {};
  var container = document.getElementById(containerId);
  var gridContainer = document.getElementById(gridContainerId);
  if (!container || !gridContainer) return null;

  var config = BRW.sorterConfigFromPick(sheet, opts);
  var sorter = BRW.makeSorter({
    items: config.items,
    categories: config.categories,
    diagnosticRows: opts.diagnosticRows || [],
    minPerCategory: opts.minPerCategory
  });
  var selectedRow = null;
  var completed = false;

  function revealedRows() {
    return sorter.items.filter(function (item) {
      return sorter.isPlaced(item.row);
    }).map(function (item) { return item.row; });
  }

  function addDoneClass() {
    if (container.classList && container.classList.add) container.classList.add('brw-sort-done');
    else if ((' ' + (container.className || '') + ' ').indexOf(' brw-sort-done ') < 0) {
      container.className = ((container.className || '') + ' brw-sort-done').replace(/^\s+/, '');
    }
  }

  function finishIfDone() {
    if (!sorter.done()) return;
    addDoneClass();
    if (!completed) {
      completed = true;
      if (typeof opts.onComplete === 'function') opts.onComplete();
    }
  }

  function renderGrid(flashRow, flashRows) {
    var gridOpts = {};
    for (var key in opts) if (Object.prototype.hasOwnProperty.call(opts, key)) gridOpts[key] = opts[key];
    gridOpts.revealRows = revealedRows();
    if (flashRow !== undefined && flashRow !== null) gridOpts.flashRow = flashRow;
    if (flashRows) gridOpts.flashRows = flashRows;
    gridContainer.innerHTML = BRW.renderGridWithPick(sheet, gridOpts);
  }

  function act(row, category) {
    var result = sorter.attempt(row, category);
    var count = sorter.attemptsFor(row);
    if (typeof opts.onAttempt === 'function') opts.onAttempt(row, category, result.correct, count);
    if (!result.correct) {
      if (typeof window !== 'undefined' && window.playSoftNope) window.playSoftNope();
      if (typeof opts.onWrong === 'function') opts.onWrong(row, category, count);
      return;
    }
    selectedRow = null;
    renderGrid(row);
    if (typeof window !== 'undefined' && window.playSuccess) window.playSuccess();
    renderPanel();
    finishIfDone();
  }

  function renderPanel() {
    var panelOpts = {};
    for (var key in opts) if (Object.prototype.hasOwnProperty.call(opts, key)) panelOpts[key] = opts[key];
    panelOpts.guidance = config.guidance;
    panelOpts.selectedRow = selectedRow;
    container.innerHTML = BRW.renderSortPanel(sorter, panelOpts);

    var items = container.querySelectorAll('[data-brw-sort-row]');
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function () {
        var row = Number(this.getAttribute('data-brw-sort-row'));
        selectedRow = selectedRow === row ? null : row;
        renderPanel();
      });
      items[i].addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        var row = Number(this.getAttribute('data-brw-sort-row'));
        selectedRow = selectedRow === row ? null : row;
        renderPanel();
      });
      items[i].addEventListener('dragstart', function (event) {
        selectedRow = null;
        event.dataTransfer.setData('text/plain', this.getAttribute('data-brw-sort-row'));
        event.dataTransfer.effectAllowed = 'move';
      });
    }

    var zones = container.querySelectorAll('.brw-sort-zone');
    for (var z = 0; z < zones.length; z++) {
      zones[z].addEventListener('dragover', function (event) {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
      });
      zones[z].addEventListener('drop', function (event) {
        event.preventDefault();
        var row = Number(event.dataTransfer.getData('text/plain'));
        if (row) act(row, this.getAttribute('data-cat'));
      });
      zones[z].addEventListener('click', function () {
        if (selectedRow !== null) act(selectedRow, this.getAttribute('data-cat'));
      });
      zones[z].addEventListener('keydown', function (event) {
        if ((event.key !== 'Enter' && event.key !== ' ') || selectedRow === null) return;
        event.preventDefault();
        act(selectedRow, this.getAttribute('data-cat'));
      });
    }

    var rest = container.querySelector('.brw-sort-rest');
    if (rest) rest.addEventListener('click', function () {
      if (!sorter.restUnlocked()) return;
      var rows = sorter.sortRest();
      selectedRow = null;
      renderGrid(null, rows);
      if (typeof window !== 'undefined' && window.playSuccess) window.playSuccess();
      renderPanel();
      finishIfDone();
    });
  }

  renderGrid();
  renderPanel();
  finishIfDone();
  return sorter;
};

/* ===== Curated BRW sorter source list — approved amendment (2026-07-14) =====
   mountSorter already copies every caller option into panelOpts on each render,
   so showRows reaches this renderer without changing the sorter state machine. */
BRW.renderSortPanel = function (sorter, opts) {
  opts = opts || {};
  var selectedRow = opts.selectedRow === undefined || opts.selectedRow === null
    ? null : Number(opts.selectedRow);
  var guidance = opts.guidance || [];
  var curate = Object.prototype.toString.call(opts.showRows) === '[object Array]';
  var featured = {};
  var categoryFeatured = {};
  var itemByRow = {};
  var i;

  function escapeHTML(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(text) {
    return escapeHTML(text).replace(/`/g, '&#96;');
  }

  function featureRow(row) {
    var key = String(Number(row));
    var item = itemByRow[key];
    if (!item) return;
    featured[key] = true;
    categoryFeatured[String(item.answer)] = true;
  }

  function itemMarkup(item, placedItem) {
    var classes = placedItem ? 'brw-sort-placed-item' : 'brw-sort-item';
    if (!placedItem && selectedRow === item.row) classes += ' brw-sort-selected';
    var html = '<div class="' + classes + '" data-row="' + item.row + '"';
    if (!placedItem) {
      html += ' data-brw-sort-row="' + item.row + '" draggable="true" tabindex="0" role="button"'
        + ' aria-pressed="' + (selectedRow === item.row ? 'true' : 'false') + '"';
    }
    html += '><span class="brw-sort-item-label">' + escapeHTML(item.label) + '</span>';
    if (item.amount !== null && item.amount !== undefined && item.amount !== '') {
      html += '<span class="brw-sort-item-amount">' + BRW.fmt(item.amount, item.numFmt) + '</span>';
    }
    return html + '</div>';
  }

  for (i = 0; i < sorter.items.length; i++) {
    itemByRow[String(sorter.items[i].row)] = sorter.items[i];
  }
  if (curate) {
    for (i = 0; i < opts.showRows.length; i++) featureRow(opts.showRows[i]);

    /* Every named diagnostic stays hand-sortable, even if a page accidentally
       leaves it out of showRows. */
    for (i = 0; i < (opts.diagnosticRows || []).length; i++) {
      featureRow(opts.diagnosticRows[i]);
    }

    /* Ensure the unchanged per-category coverage gate can always be reached. */
    for (var c0 = 0; c0 < sorter.categories.length; c0++) {
      var neededCategory = String(sorter.categories[c0]);
      if (categoryFeatured[neededCategory]) continue;
      for (i = 0; i < sorter.items.length; i++) {
        if (String(sorter.items[i].answer) === neededCategory) {
          featureRow(sorter.items[i].row);
          break;
        }
      }
    }
  }

  var doneClass = sorter.done() ? ' brw-sort-done' : '';
  var html = '<section class="brw-sort-panel' + doneClass + '" aria-label="Sort workbook rows">'
    + '<p class="brw-sort-instruction">'
    + escapeHTML(opts.instruction || 'Drag each row to its category, or select a row and then select a category.')
    + '</p><div class="brw-sort-layout"><div class="brw-sort-source">'
    + '<h3 class="brw-sort-heading">Rows to sort</h3><div class="brw-sort-items">';
  var hiddenUnplaced = 0;

  for (i = 0; i < sorter.items.length; i++) {
    var sourceItem = sorter.items[i];
    if (sorter.isPlaced(sourceItem.row)) continue;
    if (!curate || featured[String(sourceItem.row)]) html += itemMarkup(sourceItem, false);
    else hiddenUnplaced++;
  }
  if (curate && hiddenUnplaced > 0) {
    html += '<div class="brw-sort-more">+' + hiddenUnplaced + ' others to be sorted</div>';
  }
  if (sorter.placedCount() === sorter.items.length) {
    html += '<p class="brw-sort-empty">All rows are sorted.</p>';
  }
  html += '</div></div><div class="brw-sort-targets"><h3 class="brw-sort-heading">Categories</h3>';

  for (var c = 0; c < sorter.categories.length; c++) {
    var category = sorter.categories[c];
    var seated = sorter.placedItems(category);
    html += '<section class="brw-sort-category"><h4 class="brw-sort-category-label">'
      + escapeHTML(category) + '</h4><div class="brw-sort-zone' + (seated.length ? ' brw-sort-zone-filled' : '')
      + '" data-cat="' + escapeAttr(category) + '" tabindex="0" role="button" aria-label="Place selected row in '
      + escapeAttr(category) + '">';
    if (!seated.length) html += '<span class="brw-sort-zone-empty">Drop or click to place</span>';
    for (var p = 0; p < seated.length; p++) html += itemMarkup(seated[p], true);
    html += '</div></section>';
  }

  html += '</div></div><div class="brw-sort-actions"><button type="button" class="brw-sort-rest"'
    + (sorter.restUnlocked() ? '' : ' disabled') + '>Sort the rest</button></div>';

  if (guidance.length) {
    html += '<aside class="brw-sort-guidance" aria-label="Workbook guidance"><h3 class="brw-sort-guidance-title">Guidance</h3>';
    for (var g = 0; g < guidance.length; g++) {
      html += '<p class="brw-sort-guidance-text" data-row="' + Number(guidance[g].row) + '">'
        + escapeHTML(guidance[g].text) + '</p>';
    }
    html += '</aside>';
  }

  return html + '</section>';
};

/* Dated balance lines are blue by rule (Rick 2026-07-16): after mounting a grid, mark every row whose label cell reads 'Balance, ...' — including group-summary rows whose label starts with the +/− toggle. */
BRW.markDatedRows = function (containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var rows = container.querySelectorAll('[data-brw-row]');
  for (var i = 0; i < rows.length; i++) {
    var label = rows[i].querySelector('.brw-col-b');
    if (!label) continue;
    var text = label.textContent.replace(/^[+\u2212-]\s*/, '').trim();
    if (text.indexOf('Balance,') === 0) rows[i].classList.add('brw-dated');
  }
};

/* ============================================================================
 * BRW.mountCanonSort (2026-07-19): the ONE sorting-activity format, applied to
 * the statement-pipeline pick sheets. Renders the canonical sort document —
 * chevron expands a row, classify inline, tag pill + stripe land on the row,
 * "Sort the rest" unlocks once every shown row is placed, "Check my sort"
 * validates (wrong rows get Try Again), Reset clears the sort. Rows not shown
 * follow automatically, like every other sorting activity in the course.
 * ========================================================================== */
BRW.mountCanonSort = function (containerId, sheet, opts) {
  opts = opts || {};
  var host = document.getElementById(containerId);
  if (!host) return null;
  var cats = opts.categoryOrder || [];
  var catCls = ['shop', 'personal', 'repair'];
  var byRow = {};
  (sheet.cells || []).forEach(function (c) {
    if (!byRow[c.r]) byRow[c.r] = {};
    byRow[c.r][c.c] = c;
  });
  var items = [];
  Object.keys(byRow).forEach(function (r) {
    var row = byRow[r];
    if (row[2] && row[3] && cats.indexOf(String(row[3].value)) >= 0) {
      items.push({ row: Number(r), label: String(row[2].value), answer: String(row[3].value),
                   amount: row[4] ? row[4].value : null, numFmt: row[4] ? row[4].numFmt : null });
    }
  });
  var shownSet = {};
  (opts.showRows || []).forEach(function (r) { shownSet[Number(r)] = true; });
  var shown = items.filter(function (it) { return shownSet[it.row]; });
  if (!shown.length) shown = items;
  var hiddenCount = items.length - shown.length;

  var store = opts.persist || {};
  var placed = store.placed || (store.placed = {});
  var expanded = null;
  var checked = !!store.checked, autoDone = !!store.autoDone, hintSeen = !!store.hintSeen;
  function save(){ store.checked = checked; store.autoDone = autoDone; store.hintSeen = hintSeen; store.complete = api.complete; }
  /* live sheet sync: the visible workbook mirrors every placement instantly */
  function syncSheet(){
    if (!opts.sheetSync) return;
    items.forEach(function (it) {
      var cell = document.querySelector('#' + opts.sheetSync + ' [data-brw-row="' + it.row + '"] .brw-col-c');
      if (!cell) return;
      var val = placed[it.row] || (autoDone ? it.answer : '');
      cell.textContent = val;
      cell.classList.toggle('brw-placed', !!val);
    });
  }
  function counts() {
    var perCat = {}, placedN = 0, correct = 0;
    cats.forEach(function (c) { perCat[c] = 0; });
    shown.forEach(function (it) {
      var a = placed[it.row];
      if (!a) return;
      placedN++; perCat[a]++;
      if (a === it.answer) correct++;
    });
    return { perCat: perCat, placedN: placedN, correct: correct, unsorted: shown.length - placedN };
  }
  function catIdx(c) { return cats.indexOf(c); }
  function rowHTML(it, i) {
    var a = placed[it.row];
    var right = checked && a && a === it.answer;
    var wrong = checked && a && a !== it.answer;
    var open = expanded === it.row;
    var stripe = wrong ? 'wrong' : (a ? catCls[catIdx(a) % catCls.length] : '');
    var tag = '';
    if (a) tag = '<span class="stmt-tag ' + catCls[catIdx(a) % catCls.length] + '">' + a + '</span>';
    if (wrong) tag += '<span class="stmt-tag rethink">Try Again</span>';
    if (right) tag += '<span style="color:#16a34a;font-weight:600;font-size:16px;margin-left:4px;">&#10003; Correct</span>';
    var h = '<div class="stmt-row stmt-grid-sort' + (i % 2 ? ' alt' : '') + '">' +
      '<button class="stmt-info-btn' + (open ? ' open' : '') + (i === 0 && !hintSeen ? ' hint-pulse' : '') + '" data-canon-toggle="' + it.row + '" aria-label="' + (open ? 'Collapse' : 'Expand') + '"><i data-lucide="' + (open ? 'chevron-up' : 'chevron-down') + '" class="licon"></i></button>' +
      '<div class="stmt-stripe ' + stripe + '"></div>' +
      '<span>' + it.label + tag + '</span>' +
      '<span class="stmt-num">' + (it.amount === null ? '' : BRW.fmt(it.amount, it.numFmt || '$#,##0')) + '</span></div>';
    if (open) {
      h += '<div class="stmt-expand"><div class="classify-row"><span class="classify-label">Classify:</span>' +
        cats.map(function (c, ci) {
          var active = a === c ? (' active-' + (catCls[ci % catCls.length] === 'shop' ? 'shop' : 'personal')) : '';
          return '<button class="classify-btn' + active + '"' + (right ? ' disabled' : ' data-canon-classify="' + it.row + '|' + ci + '"') + '>' + c + '</button>';
        }).join('') + '</div></div>';
    }
    return h;
  }
  function progHTML() {
    var s = counts();
    var gateMet = s.unsorted === 0 && !autoDone && hiddenCount > 0;
    var btn;
    if (hiddenCount > 0 && !autoDone) {
      btn = '<button class="btn-continue btn-block"' + (gateMet ? ' data-canon-rest="1"' : ' disabled') + '>Sort the rest</button>';
    } else if (!checked) {
      btn = (s.unsorted === 0 ? '<button class="btn-continue btn-block" data-canon-check="1">Check my sort</button>' : '<button class="btn-continue btn-block" disabled>Check my sort</button>');
    } else { btn = ''; }
    var boxes = cats.map(function (c, ci) {
      return '<div class="sortprog-box ' + (catCls[ci % catCls.length] === 'shop' ? 'shop' : 'personal') + '"><div class="sortprog-label">' + c + '</div><div class="sortprog-num">' + s.perCat[c] + '</div></div>';
    }).join('');
    return '<div class="sortprog"><div class="sortprog-title">' + (opts.title || 'Sort the rows') + '</div>' +
      '<p class="sortprog-hint">' + (opts.instruction || ('Click the chevron beside a row, then choose its group.' + (hiddenCount > 0 ? ' The remaining ' + hiddenCount + ' rows follow the same patterns once these are sorted.' : ''))) + '</p>' +
      '<div class="sortprog-grid' + (cats.length > 2 ? ' four' : '') + '">' + boxes +
      '<div class="sortprog-box' + (s.unsorted === 0 ? ' done' : '') + '"><div class="sortprog-label">Unsorted</div><div class="sortprog-num">' + s.unsorted + '</div></div>' +
      '</div>' + btn + '</div>';
  }
  /* Reset sits BELOW the sort rows (bottom of the activity), not in the top
     progress card — see the "sort Reset placement" note in the
     instructional-activity-formats skill. */
  function resetHTML() {
    return '<div class="btn-row" style="justify-content:flex-end;margin-top:12px;"><button class="btn-reset" data-canon-reset="1">Reset</button></div>';
  }
  function docHTML() {
    var h = '<div class="stmt-colhead stmt-grid-sort"><span></span><span></span><span>Row</span><span class="stmt-num">Amount</span></div>';
    shown.forEach(function (it, i) { h += rowHTML(it, i); });
    if (hiddenCount > 0) h += '<div class="stmt-row stmt-grid-sort alt"><span></span><div class="stmt-stripe"></div><span><em>+ ' + hiddenCount + ' more rows like these' + (autoDone ? ', sorted' : ', still to sort') + '</em></span><span></span></div>';
    return h;
  }
  /* remount-safe: replace any previous sorter's listener on this host */
  if (host._canonSortHandler) host.removeEventListener('click', host._canonSortHandler);
  var api = { complete: !!(opts.persist && opts.persist.complete) };
  function fireComplete() {
    if (api.complete) return;
    api.complete = true;
    save();
    if (typeof opts.onComplete === 'function') opts.onComplete();
  }
  function render() {
    var s = counts();
    var warn = (checked && s.correct < shown.length) ? '<div class="sort-msg warn">Not all of these look right yet &mdash; the marked rows need another look. Try again.</div>' : '';
    host.hidden = false;
    host.innerHTML = progHTML() + '<div class="stmt">' + docHTML() + '</div>' + warn + resetHTML();
    syncSheet();
    save();
    if (window.lucide && lucide.createIcons) lucide.createIcons();
  }
  api.sync = syncSheet;
  host._canonSortHandler = function (e) {
    var t = e.target.closest('[data-canon-toggle],[data-canon-classify],[data-canon-rest],[data-canon-check],[data-canon-reset]');
    if (!t) return;
    if (t.hasAttribute('data-canon-toggle')) {
      hintSeen = true;
      var r = Number(t.getAttribute('data-canon-toggle'));
      expanded = (expanded === r) ? null : r;
    } else if (t.hasAttribute('data-canon-classify')) {
      var parts = t.getAttribute('data-canon-classify').split('|');
      placed[Number(parts[0])] = cats[Number(parts[1])];
      expanded = null;
      /* after a check, corrections re-grade LIVE (M1 reference behavior):
         checked stays true, verdicts recompute on render, and completion
         fires the moment the last row turns correct — no second check. */
      if (checked) {
        var sNow = counts();
        if (sNow.unsorted === 0 && sNow.correct === shown.length) {
          if (window.playSuccess) playSuccess();
          render(); fireComplete(); return;
        }
      }
    } else if (t.hasAttribute('data-canon-rest')) {
      autoDone = true;
    } else if (t.hasAttribute('data-canon-check')) {
      checked = true;
      var s2 = counts();
      if (s2.correct === shown.length) { render(); fireComplete(); return; }
      if (typeof opts.onWrong === 'function') {
        var firstWrong = null;
        shown.some(function (it) { if (placed[it.row] && placed[it.row] !== it.answer) { firstWrong = it.row; return true; } return false; });
        if (firstWrong !== null) opts.onWrong(firstWrong);
      }
    } else if (t.hasAttribute('data-canon-reset')) {
      placed = {}; expanded = null; checked = false; autoDone = false; api.complete = false;
    }
    render();
  };
  host.addEventListener('click', host._canonSortHandler);
  render();
  return api;
};

/* ============================================================================
 * BRW.mountMCQ (2026-07-19): the ONE multiple-choice format. Letter chips,
 * select → Submit (disabled until a choice) → green "Right" / red "Not quite"
 * verdict with the option's feedback → Reset after any submit. Never advances
 * on its own: pass onRight to enable the caller's Continue path.
 *   BRW.mountMCQ('containerId', {
 *     question: 'Prompt?',
 *     options: [{ id:'a', label:'…', fb:'why', correct:true }, …],
 *     revealAfter: 3,            // optional: Nth wrong submit reveals (red verdict, revealMsg)
 *     revealMsg: '…',
 *     onRight: function(){},     // fires on correct submit (or reveal) — render your Continue
 *     onChange: function(api){}  // fires after every state change
 *   }) → api { right, submitted, revealed, reset() }
 * ========================================================================== */
BRW.mountMCQ = function (containerId, opts) {
  opts = opts || {};
  var host = document.getElementById(containerId);
  if (!host) return null;
  var options = opts.options || [];
  var sel = null, submitted = false, right = false, revealed = false, attempts = 0;
  var api = {
    get right(){ return right; }, get submitted(){ return submitted; }, get revealed(){ return revealed; },
    reset: function(){ sel = null; submitted = false; right = false; revealed = false; render(); if (opts.onChange) opts.onChange(api); }
  };
  function chosen(){ return options.filter(function(o){ return o.id === sel; })[0]; }
  function render(){
    var h = '<div class="mc-card">' + (opts.question ? '<div class="mc-q">' + opts.question + '</div>' : '') + '<div class="mc-opts">';
    options.forEach(function(o, i){
      var cls = 'mc-opt'
        + (!submitted && sel === o.id ? ' selected' : '')
        + (submitted && sel === o.id ? (o.correct ? ' correct' : ' wrong') : '')
        + (submitted ? ' locked' : '');
      h += '<div class="' + cls + '"' + (submitted ? '' : ' data-mcq-pick="' + o.id + '"') + '><div class="mc-letter">' + String.fromCharCode(65 + i) + '</div><div>' + o.label + '</div></div>';
    });
    h += '</div>';
    if (submitted) {
      var c = chosen();
      var msg = revealed ? (opts.revealMsg || (c && c.fb) || '') : ((c && c.fb) || '');
      h += '<div class="feedback ' + (right && !revealed ? 'ok' : 'err') + ' show">' + (right && !revealed ? 'You are correct. ' : 'Not quite. ') + msg + '</div>';
    }
    h += '<div class="btn-row">' + (submitted
      ? '<button class="btn-reset" data-mcq-reset="1" style="margin-left:auto;">Reset</button>'
      : '<button class="btn-continue" data-mcq-submit="1"' + (sel === null ? ' disabled' : '') + '>Submit</button>') + '</div></div>';
    host.innerHTML = h;
    if (window.lucide && lucide.createIcons) lucide.createIcons();
  }
  host.addEventListener('click', function (e) {
    var t = e.target.closest('[data-mcq-pick],[data-mcq-submit],[data-mcq-reset]');
    if (!t) return;
    if (t.hasAttribute('data-mcq-pick')) {
      if (submitted) return;
      sel = t.getAttribute('data-mcq-pick');
    } else if (t.hasAttribute('data-mcq-submit')) {
      if (sel === null || submitted) return;
      submitted = true;
      var c = chosen();
      if (c && c.correct) { right = true; if (window.playSuccess) playSuccess(); if (opts.onRight) opts.onRight(); }
      else {
        attempts++;
        if (window.playNope) playNope(); else if (window.playSoftNope) playSoftNope();
        if (opts.revealAfter && attempts >= opts.revealAfter) { revealed = true; right = true; if (opts.onRight) opts.onRight(); }
      }
    } else if (t.hasAttribute('data-mcq-reset')) {
      sel = null; submitted = false;
      if (!revealed) right = false;
    }
    render();
    if (opts.onChange) opts.onChange(api);
  });
  render();
  return api;
};

