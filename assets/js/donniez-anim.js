/* ================================================================
   DONNIE ZVADA — Motion System v3
   Quiet scroll-reveal. Progressive enhancement only: without JS
   (or with reduced motion) the site renders fully static.
   ================================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('dz-anim');

  var SELECTORS = [
    '.dz-stagger > *',
    '.dz-box',
    '.dz-entry-list > li',
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

  // Slight stagger between siblings, capped so nothing feels slow.
  var siblingIndex = new Map();
  targets.forEach(function (el) {
    var parent = el.parentElement;
    var idx = siblingIndex.get(parent) || 0;
    siblingIndex.set(parent, idx + 1);
    el.classList.add('dz-io');
    el.style.setProperty('--dz-io-delay', Math.min(idx * 50, 250) + 'ms');
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

  // Failsafe: if the observer never reports (background tab on load,
  // bfcache restore, odd browser), reveal everything so content is
  // never left permanently invisible.
  function revealAll() {
    targets.forEach(function (el) { el.classList.add('dz-in'); });
    observer.disconnect();
  }

  window.setTimeout(revealAll, 2500);
  window.addEventListener('pageshow', function (e) { if (e.persisted) revealAll(); });
})();
