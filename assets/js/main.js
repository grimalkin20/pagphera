/**
 * main.js — Site-wide initialisation and shared interactions.
 *
 * Responsibilities:
 * - Portfolio filter bar
 * - Scroll-based header shrink
 * - Smooth scroll for hash links
 */

(() => {
  // ── Header scroll shrink ──────────────────────────────────────────────────

  const header = document.querySelector('[data-site-header]');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('site-header--scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Portfolio filter bar ──────────────────────────────────────────────────

  const filterBtns = document.querySelectorAll('.filter-btn');
  const storyCards = document.querySelectorAll('[data-category]');
  const emptyState = document.getElementById('portfolio-empty');

  if (filterBtns.length && storyCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update button states
        filterBtns.forEach((b) => {
          b.setAttribute('aria-pressed', String(b === btn));
          b.classList.toggle('filter-btn--active', b === btn);
        });

        // Show/hide cards
        let visibleCount = 0;
        storyCards.forEach((card) => {
          const categories = card.dataset.category || '';
          const show = filter === 'all' || categories.includes(filter);
          card.hidden = !show;
          if (show) visibleCount++;
        });

        // Empty state
        if (emptyState) {
          emptyState.hidden = visibleCount > 0;
        }
      });
    });

    // Wire empty-state "View all" button if present
    const resetBtn = emptyState ? emptyState.querySelector('[data-filter="all"]') : null;
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.click();
      });
    }
  }

  // ── Smooth scroll for anchor links ───────────────────────────────────────

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const targetId = link.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }
})();
