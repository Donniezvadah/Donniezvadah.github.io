/* ================================================================
   DONNIE ZVADA — Motion System v2
   Scroll-reveal + scroll progress. Progressive enhancement only:
   without JS (or with reduced motion) the site renders fully static.
   ================================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('dz-anim');

  /* ── Scroll-reveal ─────────────────────────────────────────── */
  var SELECTORS = [
    '.dz-stagger > *',
    '.dz-clean-card',
    '.dz-project-card',
    '.dz-nav-card',
    '.dz-leadership-card',
    '.dz-feature-box',
    '.dz-timeline-item',
    '.dz-supervisor-card',
    '.dz-section-intro',
    '.dz-section-header',
    '.dz-workshop-card',
    '.dz-award-card',
    '.dz-cv-wrapper'
  ];

  var targets = [];
  var seen = new Set();

  document.querySelectorAll(SELECTORS.join(',')).forEach(function (el) {
    if (!seen.has(el)) {
      seen.add(el);
      targets.push(el);
    }
  });

  // Stagger siblings: delay grows with position among revealed siblings
  // of the same parent, capped so late cards never feel sluggish.
  var siblingIndex = new Map();
  targets.forEach(function (el) {
    var parent = el.parentElement;
    var idx = siblingIndex.get(parent) || 0;
    siblingIndex.set(parent, idx + 1);
    el.classList.add('dz-io');
    el.style.setProperty('--dz-io-delay', Math.min(idx * 70, 420) + 'ms');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Reveal when entering the viewport, or if it was scrolled past
      // so fast that it already left before this callback ran.
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
        entry.target.classList.add('dz-in');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });

  targets.forEach(function (el) { observer.observe(el); });

  /* ── Scroll progress bar ───────────────────────────────────── */
  var bar = document.createElement('div');
  bar.id = 'dz-progress';
  document.body.appendChild(bar);

  var ticking = false;
  function paintProgress() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = max > 0 ? (100 * doc.scrollTop / max) + '%' : '0';
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(paintProgress);
    }
  }, { passive: true });

  paintProgress();
})();
