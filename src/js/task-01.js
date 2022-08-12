const countItem = document.querySelectorAll(".item");
console.log("Number of categories: " + countItem.length);

for (let elements of countItem) {
  const nameOfCategory = elements.firstElementChild.textContent;
  console.log("Category: " + nameOfCategory);
  const countOfElements = elements.lastElementChild.children;
  console.log("Elements: " + countOfElements.length);
}

// -----Через цикл for
// for (let i = 0; i < countItem.length; i++) {
//   const nameOfCategory = countItem[i].firstElementChild.textContent;
//   console.log("Category: " + nameOfCategory);
//   const countOfElements = countItem[i].lastElementChild.children;
//   console.log("Elements: " + countOfElements.length);
// }
