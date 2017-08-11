import toRoman from './toRoman';

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.querySelector('#toConvert').value;
  const result = toRoman(parseInt(value, 0));
  const view = document.querySelector('#demo-display > p');
  view.innerText = `Results: ${result}`;
  view.classList.add('fade-out');
  setTimeout(() => {
    view.classList.remove('fade-out');
  }, 250);
});

