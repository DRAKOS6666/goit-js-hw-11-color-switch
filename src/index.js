import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

let timerId = null;

const startChange = event => {
  timerId = setInterval(changeBgColor, 1000);
  refs.buttonStop.addEventListener('click', stopChange);
  refs.buttonStart.setAttribute('disabled', '');
  refs.buttonStop.removeAttribute('disabled');
};

const stopChange = event => {
  clearInterval(timerId);
  refs.buttonStop.setAttribute('disabled', '');
  refs.buttonStart.removeAttribute('disabled');
  refs.buttonStop.removeEventListener('click', stopChange);
};

const changeBgColor = () => {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.buttonStart.addEventListener('click', startChange);
