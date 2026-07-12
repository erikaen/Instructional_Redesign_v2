/* ============================================================================
 * dev.js — gated dev-walkthrough harness, loaded on every tutorial page.
 * Completely inert for real users. Activate with either:
 *   • ?dev in the URL           → activate + AUTO-FILL each page on load (walk mode)
 *   • localStorage.__dev === '1' → activate, no auto-fill (manual: press f)
 * When active it shows a small DEV pill and binds keys:
 *   n = go to the NEXT page in the fixed order below (carrying ?dev)
 *   f = fill / complete THIS page (if it defines window.devFill)
 * Navigation uses the fixed order, so it works even on platform-nav pages that
 * have no in-page Next button. A page opts into auto-fill by defining
 * window.devFill() (usually 1–3 lines calling its own finishers).
 * ========================================================================== */
(function () {
  'use strict';

  var ORDER = [
    '11-1-Getting-Started', '11-2-A-Rough-Week', '11-3-Sort-Your-Things', '11-4-The-Line-You-Drew', '11-5-Module-Complete',
    '12-1-Meet-Maria', '12-2-Marias-Form', '12-3-The-Read-Back', '12-4-Module-Complete',
    '13-1-Meet-Anna', '13-2-The-Bank-Statement', '13-3-The-Cash-Movement', '13-4-The-Customer-Payments', '13-5-The-Credit-Card-Statement', '13-6-The-Promises', '13-7-The-Rent-Payment', '13-8-Naming-the-Lists', '13-9-Module-Complete',
    '14-1-Why-Keep-the-Reasons', '14-2-Walk-the-Reasons', '14-3-Pairs-That-Cancel', '14-4-What-Moves-the-Difference', '14-5-Module-Complete',
    '15-1-Find-the-Difference', '15-2-The-Accounting-Identity', '15-3-The-Entity', '15-4-Double-Entry', '15-5-Module-Complete',
    '21-1-welcome', '21-2-exposure', '21-3-whoSeesTwo', '21-4-twoHats', '21-5-complete',
    '22-1-welcome', '22-2-name', '22-3-file', '22-4-whatChanged', '22-5-complete',
    '23-1-welcome', '23-2-agreement', '23-3-contribution', '23-4-wall', '23-5-keystone', '23-6-complete',
    '24-1-welcome', '24-2-ein', '24-3-account', '24-4-statements', '24-5-complete',
    '25-1-welcome', '25-2-capstone', '25-3-complete',
    '31-1-welcome', '31-2-work-the-season',
    '32-1-the-income-statement', '32-2-two-kinds', '32-3-revenue-follows-the-work', '32-4-name-the-income-statement', '32-5-what-the-season-kept',
    '33-1-Two-Kinds-of-Used-Up', '33-2-The-Third-Kind', '33-3', '33-4',
    '41-1', '42-1',
    '43-1', '43-2',
    '44-1', '44-2', '44-3',
    '45-1', '46-1', '46-2',
    '47-1'
  ];

  var URLS = {
    '33-3': '33-3-The-Bottom-Line',
    '33-4': '33-4-Module-Complete',
    '41-1': '41-1-The-Investor-Asks',
    '42-1': '42-1-The-Missing-Wage',
    '43-1': '43-1-The-Capital-Bridge',
    '43-2': '43-2-The-First-Close',
    '44-1': '44-1-The-Cash-Puzzle',
    '44-2': '44-2-Three-Buckets',
    '44-3': '44-3-The-Cash-Flow-Statement',
    '45-1': '45-1-What-Cash-Missed',
    '46-1': '46-1-The-Statements-Tie-Out',
    '46-2': '46-2-The-Statement-Map',
    '47-1': '47-1-Freddies-Napkin'
  };

  function urlDev() { return /[?&]dev(=|&|$)/.test(location.search); }
  function active() { try { return urlDev() || localStorage.getItem('__dev') === '1'; } catch (e) { return urlDev(); } }
  if (!active()) return;
  var autoFill = urlDev();

  function curFile() {
    var stem = (location.pathname.split('/').pop() || '').replace(/\.html$/, '');
    if (ORDER.indexOf(stem) >= 0) return stem;
    var m = stem.match(/^(\d\d-\d+)/);
    return (m && ORDER.indexOf(m[1]) >= 0) ? m[1] : stem;
  }
  function nextFile() { var i = ORDER.indexOf(curFile()); return (i >= 0 && i < ORDER.length - 1) ? ORDER[i + 1] : null; }
  function go(f) { if (f) location.href = (URLS[f] || f) + '.html?dev'; }
  function fill() { try { if (typeof window.devFill === 'function') window.devFill(); } catch (e) { console.warn('[dev] devFill error:', e); } }
  function next() { var f = nextFile(); if (f) go(f); else console.info('[dev] end of sequence (' + curFile() + ')'); }

  function boot() {
    // bonus: carry ?dev through any in-page nav() the page defines
    if (typeof window.nav === 'function') {
      var _nav = window.nav;
      window.nav = function (u) { if (u && !/[?&]dev(=|&|$)/.test(u)) u = u + (u.indexOf('?') < 0 ? '?dev' : '&dev'); return _nav(u); };
    }

    var bar = document.createElement('div');
    bar.setAttribute('data-dev-bar', '');
    bar.style.cssText = 'position:fixed;left:10px;bottom:10px;z-index:99999;display:flex;gap:6px;align-items:center;'
      + 'background:#111;color:#fff;font:700 12px/1 Inter,system-ui,sans-serif;padding:6px 8px;border-radius:8px;opacity:.85;box-shadow:0 2px 8px rgba(0,0,0,.3)';
    function mkBtn(label, fn) {
      var b = document.createElement('button');
      b.textContent = label;
      b.style.cssText = 'font:700 12px/1 Inter,system-ui,sans-serif;color:#111;background:#fff;border:0;border-radius:5px;padding:5px 8px;cursor:pointer';
      b.onclick = fn; return b;
    }
    bar.appendChild(document.createTextNode('DEV'));
    bar.appendChild(mkBtn('Fill · f', fill));
    bar.appendChild(mkBtn('Next · n', next));
    document.body.appendChild(bar);

    document.addEventListener('keydown', function (e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target, tag = t && t.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (t && t.isContentEditable)) return;
      if (e.key === 'n') { e.preventDefault(); next(); }
      else if (e.key === 'f') { e.preventDefault(); fill(); }
    });

    if (autoFill) setTimeout(fill, 70);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
