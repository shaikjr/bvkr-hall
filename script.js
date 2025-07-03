const scriptURL = 'https://script.google.com/macros/s/AKfycbxfGrNxXg5sApj0fMXcKitKh0s9suAEBEDlpCn2-UluEm_YUlKl6qAHo6HPuF7IZU7Qcw/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("✅ Thank you! Form is submitted."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('❌ Error!', error.message));
});
