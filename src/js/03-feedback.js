import throttle from 'lodash.throttle';
const LOCAL_KEY_EMAIL = 'feedback-mail';
const LOCAL_KEY_MESSAGE = 'feedback-sms';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
console.log(refs.form);
console.log(refs.input);
console.log(refs.textarea);
///
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onEmailInput, 500)); //added library Lodesh
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500)); //added library Lodesh
//
populateTextarea();
function onFormSubmit(e) {
  e.preventDefault(); //чтобы не перезагружалась страничка
  e.target.reset(); //чистит форму после отправки
  localStorage.removeItem(LOCAL_KEY_MESSAGE);
  localStorage.removeItem(LOCAL_KEY_EMAIL);
}
//
function onTextareaInput(e) {
  const message = e.target.value;
  console.log(message);
  localStorage.setItem(LOCAL_KEY_MESSAGE, JSON.stringify({ message }));
}
//

//
function onEmailInput(e) {
  const email = e.target.value;
  console.log(email);
  localStorage.setItem(LOCAL_KEY_EMAIL, JSON.stringify({ email }));
}

function populateTextarea(e) {
  savedMessage = localStorage.getItem(LOCAL_KEY_MESSAGE);
  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
