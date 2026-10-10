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
        if (!v || k === 'consultation' || k.charAt(0) === '_' || k === 'page_language') return;
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

/* Motion helpers: stagger, parallax, scroll progress (skipped for reduced motion) */
(function () {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var doc = document.documentElement;

  // Stagger children of grids and lists
  document.querySelectorAll('.grid, .project-grid, .why-list, .process, .principles, .offer-grid, .type-grid, .platforms, .systems, .tech-grid, .criteria, .flow, .guide-list, .stack-table').forEach(function (g) {
    var i = 0;
    Array.prototype.forEach.call(g.children, function (c) {
      if (!c.classList.contains('reveal') && !g.classList.contains('process')) c.classList.add('reveal');
      c.style.setProperty('--d', String(i++ % 8));
    });
  });
  // Section headings and text blocks also rise in
  document.querySelectorAll('.section-head, .why-intro, .faq-intro, .split-text, .cta-inner, .founder > *, .tech-inline, .legend').forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal:not(.is-in), .mock-figure').forEach(function (el) { io.observe(el); });
  }

  // Mouse parallax on the hero composition
  var hv = document.querySelector('.hero-visual');
  if (hv && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var hero = hv.closest('.hero');
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      hv.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
      hv.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
    });
    hero.addEventListener('mouseleave', function () { hv.style.setProperty('--mx', 0); hv.style.setProperty('--my', 0); });
  }

  // Scroll progress bar
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var max = doc.scrollHeight - innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? scrollY / max : 0) + ')';
      ticking = false;
    });
  }, { passive: true });
})();

/* Mobile carousels: mark long lists, add dot indicators */
(function () {
  'use strict';
  var sel = [
    '#testimonials .testimonial-grid', '#services > .container > .grid', '#home-projects', '#why .why-list',
    '.offer-grid', '.type-grid', '.criteria', '.platforms', '.principles',
    '.section .grid.grid-3', '.section .grid.grid-4', '.case-reviews',
  ].join(',');
  var mq = window.matchMedia('(max-width: 760px)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isAr = document.documentElement.lang === 'ar';
  document.querySelectorAll(sel).forEach(function (track) {
    if (track.closest('.case-gallery')) return;
    track.classList.add('m-carousel');
    var items = function () { return Array.prototype.filter.call(track.children, function (c) { return !c.hidden && !c.classList.contains('filter-empty') && c.tagName !== 'SCRIPT'; }); };
    var dots = document.createElement('div');
    dots.className = 'm-dots';
    dots.setAttribute('role', 'tablist');
    track.after(dots);
    var io;
    function build() {
      dots.innerHTML = '';
      if (io) io.disconnect();
      var list = items();
      if (!mq.matches || list.length < 2) { dots.hidden = true; return; }
      dots.hidden = false;
      list.forEach(function (item, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', (isAr ? 'العنصر ' : 'Item ') + (i + 1));
        if (i === 0) b.setAttribute('aria-current', 'true');
        b.addEventListener('click', function () { item.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', inline: 'start', block: 'nearest' }); });
        dots.appendChild(b);
      });
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && en.intersectionRatio > 0.6) {
            var idx = list.indexOf(en.target);
            Array.prototype.forEach.call(dots.children, function (d, j) { d.setAttribute('aria-current', String(j === idx)); });
            en.target.classList.add('is-in');
          }
        });
      }, { root: track, threshold: [0.6] });
      list.forEach(function (it) { io.observe(it); });
    }
    build();
    mq.addEventListener ? mq.addEventListener('change', build) : mq.addListener(build);
    // Rebuild when portfolio filters hide/show cards
    Array.prototype.forEach.call(track.children, function (c) { new MutationObserver(build).observe(c, { attributes: true, attributeFilter: ['hidden'] }); });
  });
})();

/* Lightbox: in-page image viewer for [data-lightbox] links (falls back to opening the image) */
(function () {
  'use strict';
  var links = document.querySelectorAll('a[data-lightbox]');
  if (!links.length) return;
  var isAr = document.documentElement.lang === 'ar';
  var rtl = document.documentElement.dir === 'rtl';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var T = isAr ? { close: 'إغلاق', prev: 'السابق', next: 'التالي', of: 'من', label: 'عارض الصور' } : { close: 'Close', prev: 'Previous', next: 'Next', of: 'of', label: 'Image viewer' };
  var svg = function (d) { return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>'; };

  var box = document.createElement('div');
  box.className = 'lb';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', T.label);
  box.innerHTML =
    '<div class="lb-backdrop" data-lb-close></div>' +
    '<div class="lb-top"><span class="lb-count" aria-live="polite"></span>' +
    '<button type="button" class="lb-btn lb-close" data-lb-close aria-label="' + T.close + '">' + svg('<path d="M18 6 6 18M6 6l12 12"/>') + '</button></div>' +
    '<button type="button" class="lb-btn lb-nav lb-prev" aria-label="' + T.prev + '">' + svg('<path d="m15 18-6-6 6-6"/>') + '</button>' +
    '<figure class="lb-stage"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
    '<button type="button" class="lb-btn lb-nav lb-next" aria-label="' + T.next + '">' + svg('<path d="m9 18 6-6-6-6"/>') + '</button>';
  document.body.appendChild(box);
  var img = box.querySelector('.lb-img'), cap = box.querySelector('.lb-cap'), count = box.querySelector('.lb-count');
  var prevBtn = box.querySelector('.lb-prev'), nextBtn = box.querySelector('.lb-next'), closeBtn = box.querySelector('.lb-close');
  var group = [], idx = 0, opener = null, scrollY = 0;

  function show(i, dir) {
    idx = (i + group.length) % group.length;
    var a = group[idx];
    var thumb = a.querySelector('img');
    img.classList.remove('is-in', 'from-l', 'from-r');
    if (dir) img.classList.add(dir > 0 ? 'from-r' : 'from-l');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = a.getAttribute('data-caption') || '';
    count.textContent = group.length > 1 ? (idx + 1) + ' ' + T.of + ' ' + group.length : '';
    prevBtn.hidden = nextBtn.hidden = group.length < 2;
    var done = function () { requestAnimationFrame(function () { img.classList.add('is-in'); }); };
    if (img.complete) done(); else img.onload = done;
    [idx - 1, idx + 1].forEach(function (j) { var n = group[(j + group.length) % group.length]; if (n) { var p = new Image(); p.src = n.getAttribute('href'); } });
  }
  function open(a) {
    var name = a.getAttribute('data-lightbox');
    group = Array.prototype.filter.call(document.querySelectorAll('a[data-lightbox="' + name + '"]'), function (x) { return x.offsetParent !== null || x === a; });
    opener = a;
    scrollY = window.scrollY;
    document.documentElement.classList.add('lb-open');
    box.hidden = false;
    requestAnimationFrame(function () { box.classList.add('is-open'); });
    show(group.indexOf(a));
    closeBtn.focus({ preventScroll: true });
  }
  function close() {
    box.classList.remove('is-open');
    document.documentElement.classList.remove('lb-open');
    setTimeout(function () { box.hidden = true; img.removeAttribute('src'); }, reduce ? 0 : 220);
    if (opener) opener.focus({ preventScroll: true });
    window.scrollTo(0, scrollY);
  }
  var step = function (d) { show(idx + d, d); };

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      open(a);
    });
  });
  box.addEventListener('click', function (e) { if (e.target.closest('[data-lb-close]')) close(); });
  box.querySelector('.lb-stage').addEventListener('click', function (e) { if (e.target === e.currentTarget) close(); });
  prevBtn.addEventListener('click', function () { step(-1); });
  nextBtn.addEventListener('click', function () { step(1); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowRight') step(rtl ? -1 : 1);
    else if (e.key === 'ArrowLeft') step(rtl ? 1 : -1);
    else if (e.key === 'Tab') {
      var f = [closeBtn, prevBtn, nextBtn].filter(function (b) { return !b.hidden; });
      var i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  // Touch: swipe sideways to change image, swipe down to close
  var sx = 0, sy = 0, tracking = false;
  box.addEventListener('touchstart', function (e) { if (e.touches.length !== 1) return; tracking = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  box.addEventListener('touchmove', function (e) {
    if (!tracking) return;
    var dy = e.touches[0].clientY - sy;
    if (dy > 0 && Math.abs(dy) > Math.abs(e.touches[0].clientX - sx)) { img.style.transform = 'translateY(' + dy + 'px)'; img.style.opacity = String(Math.max(.3, 1 - dy / 400)); }
  }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (!tracking) return; tracking = false;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    img.style.transform = ''; img.style.opacity = '';
    if (dy > 90 && Math.abs(dy) > Math.abs(dx)) close();
    else if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) && group.length > 1) step((dx < 0) !== rtl ? 1 : -1);
  });
})();
