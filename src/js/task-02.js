const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const element = document.querySelector("#ingredients");
const elementArray = [];

for (let el of ingredients) {
  const listElement = document.createElement("li");
  listElement.classList.add(".item");
  listElement.textContent = el;
  elementArray.push(listElement);
}

element.append(...elementArray);
