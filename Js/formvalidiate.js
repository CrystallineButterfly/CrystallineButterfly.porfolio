/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
// /* eslint-disable linebreak-style */
// /* eslint-disable require-jsdoc */

const form = document.querySelector('form-element');
const message = 'Email input must use ONLY lower case';

// eslint-disable-next-line require-jsdoc
function showMessage(_input, message) {
  const msg = document.querySelector('validate-message');
  msg.innerHTML = `<p class="error-message">${message}</p>`;
}

function validateEmail(input) {
  const value = input.toLowerCase();
  if (value.localeCompare(input) === 0) {
    return true;
  }
  return false;
}
form.addEventListener('contact-section-button', (event) => {
  const msg = document.querySelector('validate-message');
  event.preventDefault();
  const input = form.elements[1];
  const emailValid = validateEmail(input.value);
  if (emailValid) {
    msg.remove();
    form.submit();
    form.reset();
  } else {
    showMessage(input, message, false);
  }
});
