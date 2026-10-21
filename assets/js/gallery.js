/**
 * gallery.js — Accessible lightbox for wedding story galleries.
 * Opens a <dialog> lightbox, supports keyboard navigation, focus trapping,
 * and respects prefers-reduced-motion.
 */

(() => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let galleryItems = [];
  let currentIndex = 0;

  const getGalleryItems = () =>
    Array.from(document.querySelectorAll('[data-lightbox-src]'));

  const openLightbox = (index) => {
    galleryItems = getGalleryItems();
    currentIndex = index;
    showImage(currentIndex);
    lightbox.showModal();
    closeBtn.focus();
    updateNavState();
  };

  const closeLightbox = () => {
    lightbox.close();
    // Return focus to the trigger that opened it
    if (galleryItems[currentIndex]) {
      galleryItems[currentIndex].focus();
    }
  };

  const showImage = (index) => {
    const item = galleryItems[index];
    if (!item) return;
    const src = item.dataset.lightboxSrc;
    const alt = item.dataset.lightboxAlt || '';
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    updateNavState();
  };

  const updateNavState = () => {
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= galleryItems.length - 1;
  };

  const showPrev = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showImage(currentIndex);
    }
  };

  const showNext = () => {
    if (currentIndex < galleryItems.length - 1) {
      currentIndex++;
      showImage(currentIndex);
    }
  };

  // Wire gallery item buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox-src]');
    if (!trigger) return;
    galleryItems = getGalleryItems();
    const index = galleryItems.indexOf(trigger);
    openLightbox(index >= 0 ? index : 0);
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  // Prev/next buttons
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);

  // Keyboard navigation within lightbox
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    } else if (e.key === 'ArrowRight') {
      showNext();
    }
  });

  // Click outside dialog content to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
})();
