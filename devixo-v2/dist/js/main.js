/* DEVixo — progressive enhancement. Every page works without this file. */
(function () {
  'use strict';
  var doc = document.documentElement;
  var isAr = doc.lang === 'ar';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Sticky header shadow */
  var header = document.querySelector('[data-header]');
  var onScroll = function () { header && header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Services dropdown */
  document.querySelectorAll('[data-dropdown]').forEach(function (item) {
    var btn = item.querySelector('button');
    var panel = item.querySelector('.mega');
    var timer, hoverAt = 0;
    var open = function (v) {
      btn.setAttribute('aria-expanded', String(v));
      panel.hidden = !v;
    };
    btn.addEventListener('click', function () {
      if (Date.now() - hoverAt < 400) return open(true);
      open(btn.getAttribute('aria-expanded') !== 'true');
    });
    if (window.matchMedia('(hover: hover)').matches) {
      item.addEventListener('mouseenter', function () { clearTimeout(timer); if (panel.hidden) hoverAt = Date.now(); open(true); });
      item.addEventListener('mouseleave', function () { timer = setTimeout(function () { open(false); }, 160); });
    }
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { open(false); btn.focus(); }
    });
    document.addEventListener('click', function (e) { if (!item.contains(e.target)) open(false); });
    item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) open(false); });
  });

  /* Mobile drawer */
  var drawer = document.querySelector('[data-drawer]');
  var backdrop = document.querySelector('[data-drawer-backdrop]');
  var opener = document.querySelector('[data-menu-open]');
  var lastFocus;
  function setDrawer(v) {
    if (!drawer) return;
    if (v) {
      lastFocus = document.activeElement;
      drawer.hidden = false; backdrop.hidden = false;
      requestAnimationFrame(function () { drawer.classList.add('is-open'); backdrop.classList.add('is-open'); });
      document.body.classList.add('drawer-open');
      opener.setAttribute('aria-expanded', 'true');
      var first = drawer.querySelector('a, button'); first && first.focus();
    } else {
      drawer.classList.remove('is-open'); backdrop.classList.remove('is-open');
      document.body.classList.remove('drawer-open');
      opener.setAttribute('aria-expanded', 'false');
      setTimeout(function () { drawer.hidden = true; backdrop.hidden = true; }, reduce ? 0 : 280);
      lastFocus && lastFocus.focus();
    }
  }
  opener && opener.addEventListener('click', function () { setDrawer(true); });
  document.querySelectorAll('[data-menu-close]').forEach(function (b) { b.addEventListener('click', function () { setDrawer(false); }); });
  backdrop && backdrop.addEventListener('click', function () { setDrawer(false); });
  drawer && drawer.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
    if (e.key === 'Tab') {
      var f = drawer.querySelectorAll('a[href], button, summary, input');
      f = Array.prototype.filter.call(f, function (el) { return el.offsetParent !== null; });
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Remember language choice (convenience only) */
  document.querySelectorAll('[data-lang-switch]').forEach(function (a) {
    a.addEventListener('click', function () { try { localStorage.setItem('devixo-lang', a.getAttribute('hreflang')); } catch (e) {} });
  });

  /* Project filters + search */
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var target = document.getElementById(group.getAttribute('data-filter-group'));
    if (!target) return;
    var cards = target.querySelectorAll('.project-card');
    var empty = target.querySelector('.filter-empty');
    var search = document.querySelector('[data-search-for="' + target.id + '"]');
    var count = document.querySelector('[data-count-for="' + target.id + '"]');
    var active = 'all';
    function apply() {
      var q = search ? search.value.trim().toLowerCase() : '';
      var shown = 0;
      cards.forEach(function (c) {
        var okCat = active === 'all' || (' ' + c.getAttribute('data-cats') + ' ').indexOf(' ' + active + ' ') > -1;
        var okQ = !q || c.getAttribute('data-search').indexOf(q) > -1;
        c.hidden = !(okCat && okQ);
        if (!c.hidden) { shown++; c.classList.add('is-in'); }
      });
      if (empty) empty.hidden = shown !== 0;
      if (count) count.textContent = String(shown);
    }
    group.addEventListener('click', function (e) {
      var b = e.target.closest('[data-filter]');
      if (!b) return;
      active = b.getAttribute('data-filter');
      group.querySelectorAll('[data-filter]').forEach(function (x) {
        var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', String(on));
      });
      apply();
    });
    search && search.addEventListener('input', apply);
    document.querySelectorAll('[data-clear-filters]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (search) search.value = '';
        group.querySelector('[data-filter="all"]').click();
      });
    });
  });

  /* Scroll reveal */
  if ('IntersectionObserver' in window && !reduce) {
    doc.classList.add('reveal-ready');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  /* Case-study table of contents highlight */
  var toc = document.querySelector('[data-toc]');
  if (toc && 'IntersectionObserver' in window) {
    var links = toc.querySelectorAll('a');
    var tio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) links.forEach(function (l) { l.classList.toggle('is-current', l.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.case-section[id]').forEach(function (s) { tio.observe(s); });
  }

  /* Contact form: validation, loading, success/error, WhatsApp hand-off */
  var form = document.querySelector('[data-project-form]');
  if (form) {
    var cfg = JSON.parse(form.getAttribute('data-config') || '{}');
    var summary = form.querySelector('[data-error-summary]');
    var sendErr = form.querySelector('[data-send-error]');
    var submit = form.querySelector('[type="submit"]');
    var success = document.querySelector('[data-form-success]');
    var consult = form.querySelector('[name="consultation"]');

    // Prefill project type from ?type= (links from service pages)
    var params = new URLSearchParams(location.search);
    var pre = params.get('type');
    if (pre) { var r = form.querySelector('[name="projectType"][value="' + pre + '"]'); if (r) r.checked = true; }
    var ref = params.get('project');
    if (ref) { var d = form.querySelector('[name="description"]'); if (d && !d.value) d.value = (isAr ? 'أريد مشروعًا مشابهًا لـ ' : 'I’d like a project similar to ') + ref + '.\n'; }

    var rules = {
      name: function (v) { return v.trim().length >= 2; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); },
      projectType: function () { return !!form.querySelector('[name="projectType"]:checked'); },
      description: function (v) { return v.trim().length >= 20; },
      website: function (v) { return !v.trim() || /^https?:\/\/\S+\.\S+/.test(v.trim()); },
    };
    function fieldOf(name) { var el = form.querySelector('[name="' + name + '"]'); return el && el.closest('.field'); }
    function check(name) {
      var el = form.querySelector('[name="' + name + '"]');
      var ok = rules[name](el ? el.value : '');
      var f = fieldOf(name);
      if (f) {
        f.classList.toggle('is-invalid', !ok);
        var inputs = f.querySelectorAll('input, select, textarea');
        inputs.forEach(function (i) { i.setAttribute('aria-invalid', String(!ok)); });
      }
      return ok;
    }
    Object.keys(rules).forEach(function (n) {
      form.querySelectorAll('[name="' + n + '"]').forEach(function (el) {
        el.addEventListener(el.type === 'radio' ? 'change' : 'blur', function () { if (fieldOf(n).classList.contains('is-invalid') || el.type !== 'radio') check(n); });
        el.addEventListener('input', function () { if (fieldOf(n).classList.contains('is-invalid')) check(n); });
      });
    });

    function message() {
      var fd = new FormData(form);
      var lines = [];
      var labels = cfg.labels || {};
      fd.forEach(function (v, k) {
        if (!v || k === 'consultation' || k === '_gotcha') return;
        var label = labels[k] || k;
        var shown = v;
        if (k === 'projectType' && cfg.types) shown = cfg.types[v] || v;
        lines.push('• ' + label + ': ' + String(shown).trim());
      });
      if (consult && consult.checked) lines.push('• ' + (isAr ? 'يطلب استشارة أولًا' : 'Requests a consultation first'));
      return (isAr ? 'طلب مشروع جديد من موقع ديفيكسو\n' : 'New project request from the Devixo website\n') + lines.join('\n');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      sendErr.hidden = true;
      var bad = Object.keys(rules).filter(function (n) { return !check(n); });
      if (bad.length) {
        summary.hidden = false;
        summary.focus();
        var first = fieldOf(bad[0]).querySelector('input, select, textarea');
        first && first.focus();
        return;
      }
      summary.hidden = true;
      submit.setAttribute('aria-disabled', 'true');
      submit.disabled = true;
      var label = submit.querySelector('span');
      var old = label.textContent;
      label.textContent = cfg.sending;
      submit.querySelector('.icon') && submit.querySelector('.icon').classList.add('spin');

      var done = function (ok, sent) {
        submit.disabled = false; submit.removeAttribute('aria-disabled');
        label.textContent = old;
        if (!ok) { sendErr.hidden = false; sendErr.focus(); return; }
        if (sent && cfg.thankYou) { location.href = cfg.thankYou; return; }
        form.hidden = true;
        success.hidden = false;
        success.querySelector('[data-success-text]').textContent = sent ? cfg.sentText : cfg.readyText;
        var wa = success.querySelector('[data-wa-send]');
        wa.href = 'https://wa.me/' + cfg.whatsapp + '?text=' + encodeURIComponent(message());
        wa.hidden = !!sent;
        success.querySelector('h2').focus();
      };

      if (cfg.endpoint) {
        fetch(cfg.endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })
          .then(function (r) { done(r.ok, true); })
          .catch(function () { done(false); });
      } else {
        setTimeout(function () { done(true, false); }, 500);
      }
    });

    var edit = document.querySelector('[data-edit-request]');
    edit && edit.addEventListener('click', function () { success.hidden = true; form.hidden = false; form.querySelector('input').focus(); });
  }
})();
