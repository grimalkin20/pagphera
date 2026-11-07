(() => {
  const form = document.getElementById('career-application-form');
  if (!form) return;

  const roleSelect = document.getElementById('application-role');
  const fileInput = document.getElementById('application-cv');
  const fileError = document.getElementById('application-cv-error');
  const status = document.getElementById('application-form-status');
  const maxFileSize = 10 * 1024 * 1024;
  const allowedExtensions = ['pdf', 'doc', 'docx'];

  document.querySelectorAll('[data-application-role]').forEach((link) => {
    link.addEventListener('click', () => {
      if (roleSelect) roleSelect.value = link.dataset.applicationRole;
    });
  });

  const validateFile = () => {
    const file = fileInput.files[0];
    let message = '';

    if (file) {
      const extension = file.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        message = 'Choose a PDF, DOC or DOCX file.';
      } else if (file.size > maxFileSize) {
        message = 'The CV or résumé must be no larger than 10 MB.';
      }
    }

    fileInput.setCustomValidity(message);
    fileInput.setAttribute('aria-invalid', message ? 'true' : 'false');
    fileError.textContent = message;
    fileError.hidden = !message;
    return !message;
  };

  fileInput.addEventListener('change', validateFile);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.hidden = false;
    status.textContent = 'Your application has not been sent or saved. The secure application service is not connected yet, so your details and selected file have stayed in this browser.';
    status.focus();
  });
})();
