/**
 * forms.js — Client-side validation for the inquiry form.
 *
 * PROTOTYPE NOTE: This form does not submit to a real endpoint.
 * Validation runs on submit. Errors are displayed inline and in a summary.
 * On "success" (all validation passes in prototype), a success state is shown.
 */

(() => {
  const form = document.getElementById('inquiry-form');
  const successPanel = document.getElementById('form-success');
  const errorSummary = document.getElementById('form-error-summary');
  const errorList = document.getElementById('error-summary-list');
  const submitBtn = document.getElementById('inquiry-submit');

  if (!form) return;

  // ── Validation rules ─────────────────────────────────────────────────────

  const validators = [
    {
      id: 'field-name',
      errorId: 'field-name-error',
      validate: (el) => el.value.trim().length >= 2,
      message: 'Please enter your name (at least 2 characters).',
    },
    {
      id: 'field-partner-name',
      errorId: 'field-partner-name-error',
      validate: (el) => el.value.trim().length >= 2,
      message: "Please enter your partner's name (at least 2 characters).",
    },
    {
      id: 'field-email',
      errorId: 'field-email-error',
      validate: (el) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()),
      message: 'Please enter a valid email address.',
    },
    {
      id: 'field-event-type',
      errorId: 'field-event-type-error',
      validate: (el) => el.value !== '',
      message: 'Please select the type of event.',
    },
    {
      id: 'field-date',
      errorId: 'field-date-error',
      validate: (el) => {
        if (!el.value) return false;
        const chosen = new Date(el.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return chosen >= today;
      },
      message: 'Please enter a valid future date for your wedding.',
    },
    {
      id: 'field-venue',
      errorId: 'field-venue-error',
      validate: (el) => el.value.trim().length >= 3,
      message: 'Please enter a venue or location.',
    },
    {
      id: 'field-message',
      errorId: 'field-message-error',
      validate: (el) => el.value.trim().length >= 20,
      message: 'Please share a brief message about your wedding (at least 20 characters).',
    },
    {
      id: 'field-consent',
      errorId: 'field-consent-error',
      validate: (el) => el.checked,
      message: 'You must agree to our privacy policy to submit an inquiry.',
    },
  ];

  // ── Error display helpers ─────────────────────────────────────────────────

  const showError = (errorId, message) => {
    const errorEl = document.getElementById(errorId);
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.hidden = false;
    // Mark field as invalid
    const field = errorEl.closest('.field');
    if (field) {
      const input = field.querySelector('input, textarea, select');
      if (input) {
        input.setAttribute('aria-invalid', 'true');
      }
    }
  };

  const clearError = (errorId) => {
    const errorEl = document.getElementById(errorId);
    if (!errorEl) return;
    errorEl.textContent = '';
    errorEl.hidden = true;
    const field = errorEl.closest('.field');
    if (field) {
      const input = field.querySelector('input, textarea, select');
      if (input) {
        input.removeAttribute('aria-invalid');
      }
    }
  };

  const clearAllErrors = () => {
    validators.forEach((v) => clearError(v.errorId));
    if (errorSummary) errorSummary.hidden = true;
    if (errorList) errorList.innerHTML = '';
  };

  // ── Real-time blur validation ─────────────────────────────────────────────

  validators.forEach(({ id, errorId, validate, message }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      if (el.value !== '' || el.type === 'checkbox') {
        if (!validate(el)) {
          showError(errorId, message);
        } else {
          clearError(errorId);
        }
      }
    });
    el.addEventListener('input', () => {
      if (el.getAttribute('aria-invalid') === 'true') {
        if (validate(el)) {
          clearError(errorId);
        }
      }
    });
  });

  // ── Form submit ───────────────────────────────────────────────────────────

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearAllErrors();

    const errors = [];

    validators.forEach(({ id, errorId, validate, message }) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (!validate(el)) {
        showError(errorId, message);
        errors.push({ errorId, message, labelId: id });
      }
    });

    if (errors.length > 0) {
      // Populate summary
      if (errorList && errorSummary) {
        errorList.innerHTML = errors
          .map(
            (err) =>
              `<li><a href="#${err.labelId}">${err.message}</a></li>`
          )
          .join('');
        errorSummary.hidden = false;
        errorSummary.focus();
      }
      return;
    }

    // All validation passed — simulate submission for prototype
    if (submitBtn) {
      const label = submitBtn.querySelector('.button-label');
      const loading = submitBtn.querySelector('.button-loading');
      submitBtn.disabled = true;
      if (label) label.hidden = true;
      if (loading) loading.hidden = false;
    }

    // Simulate async submission
    setTimeout(() => {
      form.hidden = true;
      if (successPanel) {
        successPanel.hidden = false;
        successPanel.focus();
      }
    }, 1200);
  });

  // ── Film notice dialog (films.html) ───────────────────────────────────────

  const filmNoticeDialog = document.getElementById('film-notice-dialog');
  const filmNoticeBody = document.getElementById('film-notice-body');
  const filmNoticeClose = document.getElementById('film-notice-close');

  if (filmNoticeDialog) {
    document.addEventListener('click', (e) => {
      const playBtn = e.target.closest('[data-film-notice]');
      if (!playBtn) return;
      const notice = playBtn.dataset.filmNotice || 'This is a prototype. Video is not connected.';
      if (filmNoticeBody) filmNoticeBody.textContent = notice;
      filmNoticeDialog.showModal();
    });

    if (filmNoticeClose) {
      filmNoticeClose.addEventListener('click', () => filmNoticeDialog.close());
    }
    filmNoticeDialog.addEventListener('click', (e) => {
      if (e.target === filmNoticeDialog) filmNoticeDialog.close();
    });
  }
})();
