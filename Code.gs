/**
 * Sapience Experience Playbook: Google Sheets backend
 *
 * This script turns the Google Sheet it is attached to into the playbook's database.
 *
 * Setup (once):
 *   1. Change SECRET below to a long phrase only you know.
 *   2. Save, then run the function `setup` (Run ▸ setup) and allow access when Google asks.
 *   3. Deploy ▸ New deployment ▸ type "Web app".
 *      Execute as: Me.  Who has access: Anyone.
 *   4. Copy the Web app URL (it ends in /exec). In the dashboard, open "Connect Google Sheet" and paste the URL and your SECRET.
 *
 * Check it works: open  <Web app URL>?key=<your SECRET>  in a browser tab. You should see {"ok":true,"data":{...}}.
 *
 * After changing this code, use Deploy ▸ Manage deployments ▸ Edit ▸ Version: New version, so the URL stays the same.
 */

const SECRET = 'CHANGE-ME-to-a-long-private-phrase';

// Each collection the dashboard saves, the tab it lives in, and its columns.
// Column types: s = text, n = number, d = date (yyyy-mm-dd), b = yes/no, j = data kept by the app (don't edit).
const SCHEMA = {
  deployments: { tab: 'Customers', cols: [
    ['id', 'ID', 's'], ['customer', 'Customer', 's'], ['devices', 'Devices', 'n'],
    ['value', 'Contract value (₹ lakh)', 'n'], ['nps', 'Latest NPS (0-10)', 'n'],
    ['stage', 'Stage (1-11)', 'n'], ['since', 'In this stage since', 'd'],
    ['golive', 'Target start date', 'd'], ['status', 'Status (on / risk / blocked / done)', 's'],
    ['note', 'Note or blocker', 's'], ['liveAt', 'Started using on', 'd'], ['closedAt', 'Closed on', 'd'],
    ['history', 'Stage history (kept by the app)', 'j'], ['at', 'Last updated', 's']]},
  decisions: { tab: 'Decisions', cols: [
    ['id', 'ID', 's'], ['title', 'Decision', 's'], ['context', 'Context', 's'], ['owner', 'Owner (team key)', 's'],
    ['due', 'Decide by', 'd'], ['status', 'Status (open / decided)', 's'], ['outcome', 'Outcome', 's'], ['at', 'Last updated', 's']]},
  plan: { tab: 'Targets', cols: [
    ['id', 'ID', 's'], ['label', 'Period', 's'], ['deviceTarget', 'Devices in use target', 'n'],
    ['accountTarget', 'Customers target', 'n'], ['at', 'Last updated', 's']]},
  stages: { tab: 'Playbook', cols: [
    ['id', 'ID', 's'], ['stage', 'Stage', 'n'], ['confirmed', 'Confirmed', 'b'], ['mot', 'Moment of truth', 'b'],
    ['promise', 'Experience promise', 's'], ['moment', 'Customer moment', 's'], ['kpi', 'Proof it worked', 's'],
    ['comms', 'What we tell the customer', 's'], ['entry', 'Start when', 's'], ['exit', 'Done when', 's'],
    ['sla', 'SLA target', 's'], ['days', 'Late after (business days)', 'n'], ['to', 'Hands off to', 's'],
    ['handoff', 'What is handed over', 's'], ['docs', 'Documents and systems', 's'], ['esc', 'Escalation', 's'],
    ['at', 'Last updated', 's']]},
  cells: { tab: 'RACI', cols: [
    ['id', 'ID', 's'], ['role', 'Team key', 's'], ['stage', 'Stage', 'n'], ['v', 'Role (A / R / C / I)', 's'],
    ['t', 'What they do', 's'], ['at', 'Last updated', 's']]},
  contacts: { tab: 'Contacts', cols: [
    ['id', 'ID', 's'], ['role', 'Team key', 's'], ['name', 'Name', 's'], ['contact', 'Phone or email', 's'],
    ['at', 'Last updated', 's']]}
};

/** Run once to create the tabs. Safe to run again: it never deletes data. */
function setup() {
  const ss = SpreadsheetApp.getActive();
  Object.keys(SCHEMA).forEach(function (coll) { sheetFor_(SCHEMA[coll]); });
  const blank = ss.getSheetByName('Sheet1');
  if (blank && blank.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(blank);
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  const cb = /^[A-Za-z_$][\w$]{0,60}$/.test(p.callback || '') ? p.callback : '';
  try {
    checkKey_(p.key);
    if (p.action === 'load' || !p.action) return out_({ ok: true, data: readAll_() }, cb);
    // Writes can also arrive as a GET (used when the browser can't send a POST to Google).
    if (p.action === 'write') return out_(applyOps_(JSON.parse(p.ops || '[]')), cb);
    return out_({ ok: false, error: 'Unknown action.' }, cb);
  } catch (err) {
    return out_({ ok: false, error: String(err.message || err) }, cb);
  }
}

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    checkKey_(body.key);
    return out_(applyOps_(body.ops), '');
  } catch (err) {
    return out_({ ok: false, error: String(err.message || err) }, '');
  }
}

function applyOps_(ops) {
  ops = Array.isArray(ops) ? ops : [];
  if (ops.length > 100) throw new Error('Too many changes in one request.');
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    ops.forEach(function (op) {
      const sc = SCHEMA[op.coll];
      if (!sc) throw new Error('Unknown collection: ' + op.coll);
      const id = String(op.id || '');
      if (!id) throw new Error('A change arrived without an ID.');
      if (op.op === 'put') upsert_(sc, id, op.obj || {});
      else if (op.op === 'del') remove_(sc, id);
      else throw new Error('Unknown change type: ' + op.op);
    });
    return { ok: true, applied: ops.length };
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

/* ---------- internals ---------- */

function checkKey_(key) {
  if (SECRET === 'CHANGE-ME-to-a-long-private-phrase' || SECRET.length < 8) {
    throw new Error('Set SECRET in Code.gs to your own phrase (8 characters or more), then deploy a new version.');
  }
  if (key !== SECRET) throw new Error('The secret key does not match the one in Code.gs.');
}

function out_(o, cb) {
  if (cb) return ContentService.createTextOutput(cb + '(' + JSON.stringify(o) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function sheetFor_(sc) {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(sc.tab);
  const labels = sc.cols.map(function (c) { return c[1]; });
  if (!sh) sh = ss.insertSheet(sc.tab);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, labels.length).setValues([labels]).setFontWeight('bold');
    sh.setFrozenRows(1);
  } else {
    // Add any column this version expects but the sheet doesn't have yet.
    const head = headers_(sh);
    labels.forEach(function (l) {
      if (head.indexOf(l) < 0) {
        const col = sh.getLastColumn() + 1;
        sh.getRange(1, col).setValue(l).setFontWeight('bold');
        head.push(l);
      }
    });
  }
  // Plain text everywhere, so Sheets never turns dates or IDs into something else.
  sh.getRange(1, 1, sh.getMaxRows(), Math.max(sh.getLastColumn(), labels.length)).setNumberFormat('@');
  return sh;
}

function headers_(sh) {
  const n = sh.getLastColumn();
  if (!n) return [];
  return sh.getRange(1, 1, 1, n).getValues()[0].map(function (h) { return String(h).trim(); });
}

function readAll_() {
  const ss = SpreadsheetApp.getActive();
  const tz = ss.getSpreadsheetTimeZone();
  const out = {};
  Object.keys(SCHEMA).forEach(function (coll) {
    const sc = SCHEMA[coll];
    out[coll] = {};
    const sh = ss.getSheetByName(sc.tab);
    if (!sh || sh.getLastRow() < 2) return;
    const vals = sh.getDataRange().getValues();
    const head = vals[0].map(function (h) { return String(h).trim(); });
    const idx = sc.cols.map(function (c) { return head.indexOf(c[1]); });
    for (let r = 1; r < vals.length; r++) {
      const row = vals[r];
      const idCol = idx[0];
      const id = idCol >= 0 ? String(isDate_(row[idCol]) ? '' : row[idCol]).trim() : '';
      if (!id) continue;
      const o = {};
      sc.cols.forEach(function (c, i) {
        if (i === 0 || idx[i] < 0) return;
        o[c[0]] = decode_(row[idx[i]], c[2], tz);
      });
      out[coll][id] = o;
    }
  });
  return out;
}

function isDate_(v) { return Object.prototype.toString.call(v) === '[object Date]'; }

function decode_(v, type, tz) {
  if (isDate_(v)) v = Utilities.formatDate(v, tz, 'yyyy-MM-dd');
  if (v === '' || v === null || v === undefined) return type === 'b' ? false : '';
  if (type === 'n') { const n = Number(v); return isNaN(n) ? '' : n; }
  if (type === 'b') { const s = String(v).trim().toLowerCase(); return v === true || s === 'true' || s === 'yes'; }
  if (type === 'j') { try { return JSON.parse(v); } catch (x) { return ''; } }
  return String(v);
}

function encode_(v, type) {
  if (v === null || v === undefined) return '';
  if (type === 'j') return JSON.stringify(v);
  if (type === 'b') return v ? 'TRUE' : 'FALSE';
  return String(v);
}

function findRow_(sh, head, id) {
  const idCol = head.indexOf('ID');
  const last = sh.getLastRow();
  if (idCol < 0 || last < 2) return 0;
  const ids = sh.getRange(2, idCol + 1, last - 1, 1).getValues();
  for (let i = 0; i < ids.length; i++) if (String(ids[i][0]).trim() === id) return i + 2;
  return 0;
}

function upsert_(sc, id, obj) {
  const sh = sheetFor_(sc);
  const head = headers_(sh);
  const r = findRow_(sh, head, id);
  const existing = r ? sh.getRange(r, 1, 1, head.length).getValues()[0] : head.map(function () { return ''; });
  const row = head.map(function (h, i) {
    const c = sc.cols.filter(function (c) { return c[1] === h; })[0];
    if (!c) return existing[i];            // keep any column you added yourself
    if (c[0] === 'id') return id;
    return encode_(obj[c[0]], c[2]);
  });
  let target = r;
  if (!target) {
    target = sh.getLastRow() + 1;
    if (target > sh.getMaxRows()) sh.insertRowsAfter(sh.getMaxRows(), 50);
  }
  sh.getRange(target, 1, 1, row.length).setNumberFormat('@').setValues([row]);
}

function remove_(sc, id) {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName(sc.tab);
  if (!sh) return;
  const r = findRow_(sh, headers_(sh), id);
  if (r) sh.deleteRow(r);
}
