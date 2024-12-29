const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

increment.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});

decrement.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});

reset.addEventListener('click', () => {
  counter.innerText = 0;
});


