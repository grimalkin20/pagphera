/**
 * cookie-consent.js — Cookie preference management.
 * 
 * Stores preferences in localStorage. Does NOT use a cookie for consent storage
 * in this prototype (avoids a chicken-and-egg consent problem).
 * 
 * Preference schema stored as JSON in localStorage key 'pagphera_consent':
 * {
 *   version: 1,
 *   timestamp: ISO string,
 *   necessary: true,       // always true
 *   analytics: boolean
 * }
 * 
 * PROTOTYPE NOTE: Analytics scripts are not actually loaded in this build.
 * The consent infrastructure is in place for future integration.
 */

(() => {
  const STORAGE_KEY = 'pagphera_consent';
  const CONSENT_VERSION = 1;

  const banner = document.getElementById('cookie-banner');
  const dialog = document.getElementById('cookie-dialog');
  const acceptAllBtn = document.getElementById('cookie-accept-all');
  const rejectOptionalBtn = document.getElementById('cookie-reject-optional');
  const openPrefsBtn = document.getElementById('cookie-open-prefs');
  const savePrefsBtn = document.getElementById('cookie-save-prefs');
  const dialogCloseBtn = document.getElementById('cookie-dialog-close');
  const analyticsCheckbox = document.getElementById('pref-analytics');

  // All cookie-settings triggers (header, footer, inline)
  const settingsTriggers = document.querySelectorAll('.cookie-settings-trigger');

  // ── Helpers ──────────────────────────────────────────────────────────────

  const getPrefs = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed.version !== CONSENT_VERSION) return null;
      return parsed;
    } catch {
      return null;
    }
  };

  const savePrefs = (analytics) => {
    const prefs = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      necessary: true,
      analytics: Boolean(analytics),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // localStorage unavailable — consent state will not persist
    }
    applyPrefs(prefs);
    return prefs;
  };

  const applyPrefs = (prefs) => {
    // In a real build, this is where you would conditionally load analytics scripts.
    // Example (do NOT implement without backend integration):
    // if (prefs.analytics) loadAnalytics();
    // For the prototype, we just log the decision.
    if (typeof console !== 'undefined') {
      console.info('[Pagphera consent] Preferences applied:', prefs);
    }
  };

  // ── Banner ────────────────────────────────────────────────────────────────

  const showBanner = () => {
    if (!banner) return;
    banner.hidden = false;
    // Delay focus to allow banner to render
    requestAnimationFrame(() => {
      const firstBtn = banner.querySelector('button');
      if (firstBtn) firstBtn.focus();
    });
  };

  const hideBanner = () => {
    if (banner) banner.hidden = true;
  };

  // ── Dialog ────────────────────────────────────────────────────────────────

  const openDialog = () => {
    if (!dialog) return;
    hideBanner();
    // Pre-fill checkbox from current prefs
    const prefs = getPrefs();
    if (analyticsCheckbox) {
      analyticsCheckbox.checked = prefs ? prefs.analytics : false;
    }
    dialog.showModal();
    if (dialogCloseBtn) dialogCloseBtn.focus();
  };

  const closeDialog = () => {
    if (!dialog) return;
    dialog.close();
  };

  // ── Event listeners ───────────────────────────────────────────────────────

  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', () => {
      savePrefs(true);
      hideBanner();
      closeDialog();
    });
  }

  if (rejectOptionalBtn) {
    rejectOptionalBtn.addEventListener('click', () => {
      savePrefs(false);
      hideBanner();
      closeDialog();
    });
  }

  if (openPrefsBtn) {
    openPrefsBtn.addEventListener('click', openDialog);
  }

  if (savePrefsBtn) {
    savePrefsBtn.addEventListener('click', () => {
      const analytics = analyticsCheckbox ? analyticsCheckbox.checked : false;
      savePrefs(analytics);
      closeDialog();
    });
  }

  if (dialogCloseBtn) {
    dialogCloseBtn.addEventListener('click', closeDialog);
  }

  // Click backdrop to close dialog
  if (dialog) {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) closeDialog();
    });
  }

  // All cookie-settings triggers
  settingsTriggers.forEach((trigger) => {
    trigger.addEventListener('click', openDialog);
  });

  // ── Initialise ────────────────────────────────────────────────────────────

  const prefs = getPrefs();
  if (!prefs) {
    // No stored preference — show the banner
    // Small delay to avoid banner flashing before page paint
    setTimeout(showBanner, 600);
  } else {
    // Preferences already stored — apply them silently
    applyPrefs(prefs);
  }
})();
