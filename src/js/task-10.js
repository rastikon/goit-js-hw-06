function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let btnCreateBoxes = document.querySelector("[data-create]");
let btnDestroyBoxes = document.querySelector("[data-destroy]");
let boxes = document.getElementById("boxes");

btnCreateBoxes.addEventListener("click", getAmount);
btnDestroyBoxes.addEventListener("click", destroy);

//Функція прийому кількості квадратів
function getAmount() {
  let amount = document.querySelector("input").value;
  createBoxes(amount);
}

//Функція створення квадратів
function createBoxes(amount) {
  const basicSize = 30;
  let elements = [];

  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    const square = document.createElement("div");
    square.style.backgroundColor = getRandomHexColor();
    square.style.width = size + "px";
    square.style.height = size + "px";
    elements.push(square);
  }
  boxes.append(...elements);
  console.log(boxes);
}

//Функція очищення квадратів
function destroy() {
  boxes.innerHTML = "";
}
