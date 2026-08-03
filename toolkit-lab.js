/*
 * toolkit-lab.js — Module 8 accounting artifact renderers.
 *
 * window.ToolkitLab API:
 *   renderJournalEntry(el, entry, opts)
 *   renderTAccount(el, t, opts)
 *   renderTAccountForm(el, form, opts)
 *   renderStatementTable(el, stmt)
 *   tBalance(t)
 */
(function () {
  'use strict';

  function injectStyle() {
    if (document.getElementById('tk-styles')) return;
    var style = document.createElement('style');
    style.id = 'tk-styles';
    style.textContent = `
      .tk-journal,
      .tk-t,
      .tk-tform,
      .tk-statement {
        --tk-ink: #373a44;
        --tk-muted: #6b7280;
        --tk-rule: #d1d5db;
        --tk-rule-dark: #6b7280;
        --tk-paper: rgba(255, 255, 255, .94);
        --tk-wash: rgba(240, 244, 248, .92);
        --tk-primary: #00329d;
        box-sizing: border-box;
        color: var(--tk-ink);
        font-family: 'Open Sans', Inter, system-ui, -apple-system,
          BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 15px;
        line-height: 1.55;
        max-width: 100%;
      }
      .tk-journal *,
      .tk-t *,
      .tk-tform *,
      .tk-statement * { box-sizing: border-box; }

      .tk-journal {
        background: var(--tk-paper);
        border: 1px solid var(--tk-rule);
        border-radius: 6px;
        overflow: hidden;
        width: 100%;
      }
      .tk-journal-date {
        border-bottom: 1px solid var(--tk-rule);
        color: var(--tk-primary);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: .02em;
        padding: 9px 14px 7px;
      }
      .tk-journal-head,
      .tk-journal-row,
      .tk-journal-total {
        align-items: baseline;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(60px, 88px) minmax(60px, 88px);
        column-gap: 12px;
        padding-left: 14px;
        padding-right: 14px;
      }
      .tk-journal-head {
        background: var(--tk-wash);
        border-bottom: 1px solid var(--tk-rule);
        color: var(--tk-muted);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .08em;
        padding-bottom: 6px;
        padding-top: 6px;
        text-transform: uppercase;
      }
      .tk-journal-row {
        min-height: 32px;
        padding-bottom: 4px;
        padding-top: 4px;
      }
      .tk-journal-row + .tk-journal-row { border-top: 1px solid rgba(209, 213, 219, .42); }
      .tk-journal-account { min-width: 0; }
      .tk-cr .tk-journal-account { padding-left: clamp(18px, 7%, 42px); }
      .tk-journal-amount,
      .tk-signed-amount,
      .tk-statement-number,
      .tk-t-amount {
        font-variant-numeric: tabular-nums lining-nums;
        text-align: right;
        white-space: nowrap;
      }
      .tk-journal-total {
        border-top: 1px solid var(--tk-rule-dark);
        font-weight: 700;
        margin-top: 2px;
        padding-bottom: 7px;
        padding-top: 7px;
      }
      .tk-journal-total .tk-journal-amount {
        border-bottom: 3px double currentColor;
      }
      .tk-journal-narration {
        border-top: 1px solid var(--tk-rule);
        color: var(--tk-muted);
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 14px;
        font-style: italic;
        line-height: 1.5;
        padding: 10px 14px 12px;
      }

      .tk-journal-signed,
      .tk-journal-jumbled {
        padding: 8px 14px 10px;
      }
      .tk-journal-signed .tk-journal-head,
      .tk-journal-jumbled .tk-journal-head,
      .tk-journal-signed .tk-journal-row,
      .tk-journal-jumbled .tk-journal-row,
      .tk-journal-signed .tk-journal-total {
        grid-template-columns: minmax(0, 1fr) minmax(74px, 110px);
        padding-left: 0;
        padding-right: 0;
      }
      .tk-journal-signed .tk-journal-head,
      .tk-journal-jumbled .tk-journal-head {
        background: transparent;
      }
      .tk-journal-jumbled {
        border-color: #b8bec8;
        border-radius: 0;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      }
      .tk-journal-jumbled .tk-journal-row {
        border-top: 0;
        line-height: 1.25;
        min-height: 25px;
        padding-bottom: 2px;
        padding-top: 2px;
      }

      .tk-t {
        margin: 0 auto;
        width: min(100%, 560px);
      }
      .tk-t-name {
        border-bottom: 1px solid currentColor;
        color: var(--tk-primary);
        font-weight: 700;
        line-height: 1.35;
        padding: 0 12px 8px;
        text-align: center;
      }
      .tk-t-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      }
      .tk-t-cell {
        min-height: 30px;
        padding: 4px 12px;
      }
      .tk-t-cell:nth-child(odd) { border-right: 1px solid currentColor; }
      .tk-t-head {
        color: var(--tk-muted);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .08em;
        padding-bottom: 6px;
        padding-top: 7px;
        text-align: center;
        text-transform: uppercase;
      }
      .tk-t-item {
        align-items: baseline;
        display: flex;
        gap: 8px;
        justify-content: space-between;
      }
      .tk-t-label {
        color: var(--tk-muted);
        font-size: 11px;
        line-height: 1.25;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .tk-t-amount { margin-left: auto; }
      .tk-t-empty { color: transparent; user-select: none; }
      .tk-t-balance .tk-t-item {
        border-top: 1px solid currentColor;
        font-weight: 700;
        padding-top: 4px;
      }
      .tk-t-balance .tk-t-label { color: inherit; }

      .tk-tform {
        margin: 0 auto;
        width: min(100%, 640px);
      }
      .tk-tform-meta {
        margin-bottom: 14px;
      }
      .tk-tform-classification {
        font-weight: 700;
      }
      .tk-tform-meta-label {
        display: inline-block;
        font-weight: 600;
        min-width: 112px;
      }
      .tk-tform-grid {
        display: grid;
        grid-template-columns: minmax(74px, .8fr) minmax(90px, 1fr)
          minmax(90px, 1fr) minmax(74px, .8fr);
      }
      .tk-tform-cell {
        min-height: 30px;
        padding: 4px 10px;
      }
      .tk-tform-head {
        border-bottom: 1px solid currentColor;
        font-weight: 700;
        padding-bottom: 7px;
        text-align: center;
      }
      .tk-tform-head-ref {
        color: var(--tk-muted);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .08em;
        text-transform: lowercase;
      }
      .tk-tform-head-name {
        color: var(--tk-primary);
        grid-column: span 2;
      }
      .tk-tform-ref {
        color: var(--tk-muted);
        font-size: 12px;
        white-space: nowrap;
      }
      .tk-tform-ref-left { text-align: right; }
      .tk-tform-ref-right { text-align: left; }
      .tk-tform-debit,
      .tk-tform-credit {
        font-variant-numeric: tabular-nums lining-nums;
        text-align: right;
        white-space: nowrap;
      }
      .tk-tform-credit { border-left: 1px solid currentColor; }
      .tk-t-blank { min-height: 30px; }
      .tk-tform-ending {
        border-top: 1px solid currentColor;
        font-weight: 700;
        margin-top: 3px;
        padding-top: 6px;
      }
      .tk-tform-legend {
        color: var(--tk-muted);
        font-size: 12px;
        line-height: 1.4;
        margin-top: 12px;
      }
      .tk-tform-legend-line {
        display: grid;
        gap: 8px;
        grid-template-columns: minmax(24px, auto) 1fr;
      }
      .tk-tform-legend-ref {
        font-variant-numeric: tabular-nums lining-nums;
        font-weight: 700;
        text-align: right;
      }

      .tk-statement {
        background: var(--tk-paper);
        border: 1px solid var(--tk-rule);
        border-radius: 6px;
        overflow-x: auto;
        width: 100%;
      }
      .tk-statement-table {
        border-collapse: collapse;
        min-width: 610px;
        width: 100%;
      }
      .tk-statement-caption {
        color: var(--tk-primary);
        font-size: 16px;
        font-weight: 700;
        padding: 13px 14px 8px;
        text-align: left;
      }
      .tk-statement th {
        background: var(--tk-wash);
        border-bottom: 1px solid var(--tk-rule);
        color: var(--tk-muted);
        font-size: 11px;
        letter-spacing: .055em;
        padding: 7px 10px;
        text-align: left;
        text-transform: uppercase;
      }
      .tk-statement th.tk-statement-number { text-align: right; }
      .tk-statement td {
        border-bottom: 1px solid rgba(209, 213, 219, .55);
        padding: 7px 10px;
        vertical-align: top;
      }
      .tk-statement-date { color: var(--tk-muted); white-space: nowrap; }
      .tk-statement-summary td {
        background: rgba(240, 244, 248, .5);
        font-weight: 700;
      }
      .tk-statement-ending td {
        border-bottom: 0;
        border-top: 1px solid var(--tk-rule-dark);
      }
      @media (max-width: 520px) {
        .tk-journal-head,
        .tk-journal-row,
        .tk-journal-total {
          grid-template-columns: minmax(0, 1fr) 62px 62px;
          column-gap: 7px;
          padding-left: 10px;
          padding-right: 10px;
        }
        .tk-t-cell { padding-left: 8px; padding-right: 8px; }
        .tk-tform-grid {
          grid-template-columns: minmax(62px, .75fr) minmax(76px, 1fr)
            minmax(76px, 1fr) minmax(62px, .75fr);
        }
        .tk-tform-cell { padding-left: 6px; padding-right: 6px; }
      }
    `;
    document.head.appendChild(style);
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function money(value) {
    var amount = Number(value);
    if (!isFinite(amount)) amount = 0;
    return Math.round(Math.abs(amount)).toLocaleString('en-US');
  }

  function linesOf(entry) {
    return entry && Array.isArray(entry.lines) ? entry.lines : [];
  }

  function signedAmount(line) {
    var sign = line.side === 'cr' ? '\u2212' : '';
    return sign + money(line.amt);
  }

  function journalDate(entry) {
    if (!entry || !entry.date) return '';
    return '<div class="tk-journal-date">' + escapeHtml(entry.date) + '</div>';
  }

  function formattedJournal(entry, opts) {
    var lines = linesOf(entry);
    var ordered = lines.filter(function (line) { return line.side !== 'cr'; })
      .concat(lines.filter(function (line) { return line.side === 'cr'; }));
    var debitTotal = 0;
    var creditTotal = 0;
    var html = '<div class="tk-journal tk-journal-formatted">' + journalDate(entry);

    html += '<div class="tk-journal-head">'
      + '<span>Account</span><span class="tk-journal-amount">Dr</span>'
      + '<span class="tk-journal-amount">Cr</span></div>';

    ordered.forEach(function (line) {
      var credit = line.side === 'cr';
      var amount = Number(line.amt) || 0;
      if (credit) creditTotal += amount;
      else debitTotal += amount;
      html += '<div class="tk-journal-row' + (credit ? ' tk-cr' : ' tk-dr') + '">'
        + '<span class="tk-journal-account">' + escapeHtml(line.acct) + '</span>'
        + '<span class="tk-journal-amount">' + (credit ? '' : money(amount)) + '</span>'
        + '<span class="tk-journal-amount">' + (credit ? money(amount) : '') + '</span>'
        + '</div>';
    });

    if (opts.totals) {
      html += '<div class="tk-journal-total">'
        + '<span>Totals</span>'
        + '<span class="tk-journal-amount">' + money(debitTotal) + '</span>'
        + '<span class="tk-journal-amount">' + money(creditTotal) + '</span>'
        + '</div>';
    }
    if (entry && entry.narration) {
      html += '<div class="tk-journal-narration">' + escapeHtml(entry.narration) + '</div>';
    }
    return html + '</div>';
  }

  function signedJournal(entry, jumbled) {
    var lines = linesOf(entry).slice();
    var sum = 0;
    if (jumbled) {
      lines.sort(function (a, b) {
        return String(a.acct).localeCompare(String(b.acct), 'en-US');
      });
    }
    var kind = jumbled ? 'jumbled' : 'signed';
    var html = '<div class="tk-journal tk-journal-' + kind + '">';
    if (!jumbled) html += journalDate(entry);
    html += '<div class="tk-journal-head"><span>Account</span>'
      + '<span class="tk-signed-amount">Amount</span></div>';
    lines.forEach(function (line) {
      var amount = Number(line.amt) || 0;
      sum += line.side === 'cr' ? -amount : amount;
      html += '<div class="tk-journal-row">'
        + '<span class="tk-journal-account">' + escapeHtml(line.acct) + '</span>'
        + '<span class="tk-signed-amount">' + signedAmount(line) + '</span>'
        + '</div>';
    });
    if (!jumbled) {
      html += '<div class="tk-journal-total"><span>Sum</span>'
        + '<span class="tk-signed-amount">' + (sum < 0 ? '\u2212' : '') + money(sum) + '</span></div>';
      if (entry && entry.narration) {
        html += '<div class="tk-journal-narration">' + escapeHtml(entry.narration) + '</div>';
      }
    }
    return html + '</div>';
  }

  function renderJournalEntry(el, entry, opts) {
    opts = opts || {};
    var mode = opts.mode || 'formatted';
    if (mode === 'signed') el.innerHTML = signedJournal(entry || {}, false);
    else if (mode === 'jumbled') el.innerHTML = signedJournal(entry || {}, true);
    else el.innerHTML = formattedJournal(entry || {}, opts);
  }

  function tBalance(t) {
    var net = 0;
    var beg = t && t.beg;
    var rows = t && Array.isArray(t.rows) ? t.rows : [];
    if (beg) {
      net += beg.side === 'credit' ? -(Number(beg.amt) || 0) : (Number(beg.amt) || 0);
    }
    rows.forEach(function (row) {
      net += row.side === 'credit' ? -(Number(row.amt) || 0) : (Number(row.amt) || 0);
    });
    return { amt: Math.abs(net), side: net < 0 ? 'credit' : 'debit' };
  }

  function tItem(label, amount) {
    return '<div class="tk-t-item" title="' + escapeHtml(label) + '">'
      + '<span class="tk-t-label">' + escapeHtml(label) + '</span>'
      + '<span class="tk-t-amount">' + escapeHtml(amount) + '</span></div>';
  }

  function tPair(side, label, amount, extraClass) {
    var filled = '<div class="tk-t-cell' + (extraClass ? ' ' + extraClass : '') + '">'
      + tItem(label, amount) + '</div>';
    var empty = '<div class="tk-t-cell tk-t-empty" aria-hidden="true">&nbsp;</div>';
    return side === 'credit' ? empty + filled : filled + empty;
  }

  function renderTAccount(el, t, opts) {
    t = t || {};
    opts = opts || {};
    var html = '<div class="tk-t">'
      + '<div class="tk-t-name">' + escapeHtml(t.name) + '</div>'
      + '<div class="tk-t-grid">'
      + '<div class="tk-t-cell tk-t-head">Debit</div>'
      + '<div class="tk-t-cell tk-t-head">Credit</div>';

    if (t.beg) html += tPair(t.beg.side, 'Beginning balance', money(t.beg.amt), 'tk-t-beginning');
    (Array.isArray(t.rows) ? t.rows : []).forEach(function (row) {
      html += tPair(row.side, row.label || '', money(row.amt), 'tk-t-row');
    });
    if (opts.showBalance) {
      var balance = tBalance(t);
      var shown = opts.solveFor === 'balance' ? '?' : money(balance.amt);
      html += tPair(balance.side, 'Ending balance', shown, 'tk-t-balance');
    }
    html += '</div></div>';
    el.innerHTML = html;
  }

  function formMoney(value) {
    var amount = Number(value);
    if (!isFinite(amount)) amount = 0;
    return Math.abs(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function formCell(value, className) {
    return '<div class="tk-tform-cell ' + className + '">' + escapeHtml(value) + '</div>';
  }

  function formRow(leftRef, debit, credit, rightRef, className) {
    var extra = className ? ' ' + className : '';
    return formCell(leftRef, 'tk-tform-ref tk-tform-ref-left' + extra)
      + formCell(debit, 'tk-tform-debit' + extra)
      + formCell(credit, 'tk-tform-credit' + extra)
      + formCell(rightRef, 'tk-tform-ref tk-tform-ref-right' + extra);
  }

  function renderTAccountForm(el, form, opts) {
    form = form || {};
    opts = opts || {};
    var rows = Array.isArray(form.rows) ? form.rows : [];
    var legend = Array.isArray(opts.legend) ? opts.legend : [];
    var inline = opts.refMode === 'inline';
    var labels = {};
    legend.forEach(function (item) {
      labels[String(item.ref)] = item.text;
    });

    var html = '<div class="tk-tform">'
      + '<div class="tk-tform-meta">'
      + '<div class="tk-tform-classification">' + escapeHtml(form.classification) + '</div>'
      + '<div class="tk-tform-account-type"><span class="tk-tform-meta-label">Account Type:</span> '
      + escapeHtml(form.accountType) + '</div>'
      + '<div class="tk-tform-account-name"><span class="tk-tform-meta-label">Account Name:</span> '
      + escapeHtml(form.name) + '</div></div>'
      + '<div class="tk-tform-grid">'
      + formCell('ref', 'tk-tform-head tk-tform-head-ref')
      + '<div class="tk-tform-cell tk-tform-head tk-tform-head-name">' + escapeHtml(form.name) + '</div>'
      + formCell('ref', 'tk-tform-head tk-tform-head-ref');

    if (form.beg) {
      var beginning = formMoney(form.beg.amt);
      html += form.beg.side === 'credit'
        ? formRow(form.beg.date, '-', beginning, form.beg.date, 'tk-tform-beginning')
        : formRow(form.beg.date, beginning, '-', form.beg.date, 'tk-tform-beginning');
    }

    rows.forEach(function (row) {
      var ref = inline
        ? (Object.prototype.hasOwnProperty.call(labels, String(row.ref)) ? labels[String(row.ref)] : (row.label || row.ref))
        : row.ref;
      html += row.side === 'credit'
        ? formRow('', '', formMoney(row.amt), ref, 'tk-tform-row')
        : formRow(ref, formMoney(row.amt), '', '', 'tk-tform-row');
    });

    var blankRows = opts.blankRows == null ? 3 : Math.max(0, Math.floor(Number(opts.blankRows) || 0));
    for (var i = 0; i < blankRows; i += 1) {
      html += formRow('', '', '', '', 'tk-t-blank');
    }

    var ending = form.end || tBalance(form);
    var endingAmount = Number(ending.amt) || 0;
    var endingDate = ending.date || '';
    var debitEnd = '$-';
    var creditEnd = '$-';
    if (endingAmount !== 0) {
      if (ending.side === 'credit') creditEnd = '$' + formMoney(endingAmount);
      else debitEnd = '$' + formMoney(endingAmount);
    }
    html += formRow(endingDate, debitEnd, creditEnd, endingDate, 'tk-tform-ending')
      + '</div>';

    if (legend.length && !inline) {
      html += '<div class="tk-tform-legend">';
      legend.forEach(function (item) {
        html += '<div class="tk-tform-legend-line">'
          + '<span class="tk-tform-legend-ref">' + escapeHtml(item.ref) + '</span>'
          + '<span class="tk-tform-legend-text">' + escapeHtml(item.text) + '</span></div>';
      });
      html += '</div>';
    }
    el.innerHTML = html + '</div>';
  }

  function statementAmount(value) {
    return Number(value) > 0 ? money(value) : '';
  }

  function renderStatementTable(el, stmt) {
    stmt = stmt || {};
    var rows = Array.isArray(stmt.rows) ? stmt.rows : [];
    var html = '<div class="tk-statement"><table class="tk-statement-table">'
      + '<caption class="tk-statement-caption">Account activity</caption>'
      + '<thead><tr><th>Date</th><th>Description</th>'
      + '<th class="tk-statement-number">Withdrawals</th>'
      + '<th class="tk-statement-number">Deposits</th>'
      + '<th class="tk-statement-number">Balance</th></tr></thead><tbody>'
      + '<tr class="tk-statement-summary tk-statement-beginning">'
      + '<td></td><td>Beginning balance</td><td></td><td></td>'
      + '<td class="tk-statement-number">' + money(stmt.begin) + '</td></tr>';

    rows.forEach(function (row) {
      html += '<tr class="tk-statement-row">'
        + '<td class="tk-statement-date">' + escapeHtml(row.date) + '</td>'
        + '<td class="tk-statement-description">' + escapeHtml(row.desc) + '</td>'
        + '<td class="tk-statement-number">' + statementAmount(row.w) + '</td>'
        + '<td class="tk-statement-number">' + statementAmount(row.d) + '</td>'
        + '<td class="tk-statement-number">' + money(row.bal) + '</td></tr>';
    });

    html += '<tr class="tk-statement-summary tk-statement-ending">'
      + '<td></td><td>Ending balance</td><td></td><td></td>'
      + '<td class="tk-statement-number">' + money(stmt.end) + '</td></tr>'
      + '</tbody></table></div>';
    el.innerHTML = html;
  }

  injectStyle();
  window.ToolkitLab = {
    renderJournalEntry: renderJournalEntry,
    renderTAccount: renderTAccount,
    renderTAccountForm: renderTAccountForm,
    renderStatementTable: renderStatementTable,
    tBalance: tBalance
  };
})();
