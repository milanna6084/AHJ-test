// TODO: write code here
import Validation from './validation';
import paymentSystems from './paymentSystems';

const input = document.querySelector('input');
const button = document.querySelector('.button');
const cardsIMG = document.querySelectorAll('img[data-pay-system]');
const message = document.querySelector('.message');

function cleanMessage() {
  message.classList.forEach((item) => {
    if (item.startsWith('message-')) {
      message.classList.remove(item);
    }
  });
}

function onInput() {
  if (!(/^\d*$/).test(input.value)) {
    message.textContent = 'Please enter number';
    cleanMessage();
    message.classList.add('message-warning');
  } else {
    message.textContent = '';
    cleanMessage();
  }

  const validation = new Validation(input.value);
  const cardElem = validation.checkCardIssue();

  if (cardElem) {
    [...cardsIMG].forEach((item) => {
      if (item.dataset.paySystem !== cardElem.name) {
        item.classList.add('inactive');
      }
    });
  } else {
    [...cardsIMG].forEach((item) => {
      item.classList.remove('inactive');
    });
  }
}

function buttonClick() {
  let checking = false;

  const elemActive = [...cardsIMG].find((item) => !item.classList.contains('inactive'));
  const card = paymentSystems.find((item) => item.name === elemActive.dataset.paySystem);
  if (!card) {
    message.textContent = 'Your card is belongs to unknown payment system';
    cleanMessage(message);
    message.classList.add('message-warning');
  }

  if (card.cardLength.test(input.value.length.toString())) {
    const validation = new Validation(input.value);
    checking = validation.checkValidation();
  }

  if (checking) {
    message.textContent = 'Your card is valid';
    cleanMessage(message);
    message.classList.add('message-success');
  } else {
    message.textContent = 'Your card is invalid';
    cleanMessage(message);
    message.classList.add('message-error');
  }
}

input.addEventListener('input', () => onInput());

button.addEventListener('click', () => buttonClick());
