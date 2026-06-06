/* ============================================================
   home-motion.js — Homepage-only motion
   1. Stat count-up (IntersectionObserver, data-count / data-prefix / data-suffix)
   2. Ghost pill parallax (viewport-relative, ±50px cap, skipped ≤880px + reduced-motion)
   ============================================================ */

(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------
     1. STAT COUNT-UP
     Looks for elements with [data-count] inside .bento-stats.
     Animates from 0 → target once when the element enters the viewport.
  ---------------------------------------------------------------- */
  function initCountUp() {
    var countEls = document.querySelectorAll('[data-count]');
    if (!countEls.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        var el       = entry.target;
        var raw      = el.getAttribute('data-count');
        var target   = parseFloat(raw);
        var prefix   = el.getAttribute('data-prefix') || '';
        var suffix   = el.getAttribute('data-suffix') || '';
        var isNeg    = target < 0;
        var absTarget = Math.abs(target);
        var isInt    = Number.isInteger(target);

        /* Skip animation under reduced-motion — just set the final value */
        if (prefersReduced) {
          el.textContent = prefix + (isNeg ? '−' : '') + (isInt ? absTarget : absTarget.toFixed(1)) + suffix;
          return;
        }

        var DURATION = 1200; /* ms */
        var startTs  = null;

        function step(ts) {
          if (!startTs) startTs = ts;
          var progress = Math.min((ts - startTs) / DURATION, 1);
          var ease = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
          var current  = absTarget * ease;
          var display  = isInt ? Math.round(current) : current.toFixed(1);
          el.textContent = prefix + (isNeg ? '−' : '') + display + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });

    countEls.forEach(function (el) { observer.observe(el); });
  }

  /* ----------------------------------------------------------------
     2. GHOST PILL PARALLAX
     Elements with [data-parallax] drift based on distance from the
     viewport centre. Speed is the data-parallax value (default 0.12).
     Capped at ±50 px. Disabled below 880 px and under reduced-motion.
  ---------------------------------------------------------------- */
  function initParallax() {
    if (prefersReduced) return;
    if (window.innerWidth <= 880) return;

    var pills = document.querySelectorAll('[data-parallax]');
    if (!pills.length) return;

    var ticking = false;
    var vh = window.innerHeight;

    function updatePills() {
      pills.forEach(function (pill) {
        var rect        = pill.getBoundingClientRect();
        var centerY     = rect.top + rect.height / 2;
        var distCenter  = centerY - vh / 2;
        var speed       = parseFloat(pill.getAttribute('data-parallax') || '0.12');
        var offset      = distCenter * speed * -1;
        offset = Math.max(-50, Math.min(50, offset));
        pill.style.transform = 'translateY(' + offset + 'px)';
      });
    }

    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        updatePills();
      });
    }, { passive: true });

    window.addEventListener('resize', function () {
      vh = window.innerHeight;
      if (window.innerWidth <= 880) {
        pills.forEach(function (p) { p.style.transform = ''; });
      }
    });

    /* Initial position */
    updatePills();
  }

  /* Boot on DOMContentLoaded or immediately if already parsed */
  function boot() {
    initCountUp();
    initParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
