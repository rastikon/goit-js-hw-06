const changeColor = document.querySelector(".change-color");

const backgroundColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", () => {
  const currentBackgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = currentBackgroundColor;
  backgroundColor.textContent = currentBackgroundColor;
});
