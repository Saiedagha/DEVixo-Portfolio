/* CMS dashboard concept interactions (nothing is persisted) */
(function () {
  'use strict';
  var views = document.querySelectorAll('[data-view]');
  var links = document.querySelectorAll('[data-view-link]');
  var toastEl = document.querySelector('[data-toast-el]');
  var tt;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.hidden = false;
    clearTimeout(tt); tt = setTimeout(function () { toastEl.hidden = true; }, 2400);
  }
  function show(id) {
    if (!document.querySelector('[data-view="' + id + '"]')) id = 'overview';
    views.forEach(function (v) { v.hidden = v.getAttribute('data-view') !== id; });
    links.forEach(function (l) { if (l.getAttribute('data-view-link') === id) l.setAttribute('aria-current', 'page'); else l.removeAttribute('aria-current'); });
    if (id === 'inquiries') {
      var ld = document.querySelector('[data-loading]'), ok = document.querySelector('[data-loaded]');
      ld.hidden = false; ok.hidden = true;
      setTimeout(function () { ld.hidden = true; ok.hidden = false; }, 900);
    }
  }
  window.addEventListener('hashchange', function () { show(location.hash.slice(1)); });
  show(location.hash.slice(1) || 'overview');

  // Table search + status filter
  document.querySelectorAll('.adm-view').forEach(function (view) {
    var input = view.querySelector('[data-adm-search]');
    var status = view.querySelector('[data-adm-status]');
    var table = view.querySelector('[data-adm-table]');
    if (!table) return;
    var rows = table.querySelectorAll('tbody tr:not(.adm-noresults)');
    var none = table.querySelector('.adm-noresults');
    function apply() {
      var q = input ? input.value.trim().toLowerCase() : '';
      var s = status ? status.value : '';
      var n = 0;
      rows.forEach(function (r) {
        var ok = (!q || r.getAttribute('data-text').indexOf(q) > -1) && (!s || r.getAttribute('data-status') === s);
        r.hidden = !ok; if (ok) n++;
      });
      if (none) none.hidden = n !== 0;
    }
    input && input.addEventListener('input', apply);
    status && status.addEventListener('change', apply);
  });

  // Dialogs
  document.addEventListener('click', function (e) {
    var opener = e.target.closest('[data-open-dialog]');
    if (opener) {
      var d = document.getElementById(opener.getAttribute('data-open-dialog'));
      var name = opener.getAttribute('data-edit-name');
      d.querySelectorAll('[data-dialog-name]').forEach(function (n) { n.textContent = name || 'new item'; });
      var inp = d.querySelector('[data-dialog-input]'); if (inp) inp.value = name || '';
      if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
      return;
    }
    var tb = e.target.closest('[data-toast]');
    if (tb) setTimeout(function () { toast(tb.getAttribute('data-toast')); }, 50);
    var tab = e.target.closest('[data-tab]');
    if (tab) {
      var list = tab.parentElement;
      list.querySelectorAll('[data-tab]').forEach(function (b) {
        var on = b === tab; b.setAttribute('aria-selected', String(on));
        document.getElementById(b.getAttribute('data-tab')).hidden = !on;
      });
    }
  });
})();
