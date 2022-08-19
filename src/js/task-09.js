const changeColor = document.querySelector(".change-color");

const backgroundColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  console.log("Зараз колір: ", getRandomHexColor());
  backgroundColor.textContent = getRandomHexColor();
});
