const counters = document.querySelectorAll("#counter");

const onBtnDecrement = document.querySelector('[data-action="decrement"]');
const onBtnIncrement = document.querySelector('[data-action="increment"]');

let currentValue = 0;

onBtnDecrement.addEventListener("click", () => {
  console.log("-");
  currentValue--;
  document.querySelector("#value").innerHTML = currentValue;
});

onBtnIncrement.addEventListener("click", () => {
  console.log("+");
  currentValue++;
  document.querySelector("#value").innerHTML = currentValue;
});
