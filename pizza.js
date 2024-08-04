document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".ingredients-container");

  ingredients.forEach((ingredient) => {
    const ingredientList = document.createElement("li");
    ingredientList.classList.add("ingredient");

    const name = document.createElement("h4");
    name.textContent = ingredient.name;

    const image = document.createElement("img");
    image.src = ingredient.img;
    image.alt = ingredient.name;

    const price = document.createElement("p");
    price.textContent = ingredient.price;

    ingredientList.appendChild(name);
    ingredientList.appendChild(image);
    ingredientList.appendChild(price);

    container.appendChild(ingredientList);
  });
});

const pizza = {};

console.log(ingredients);

// const order = {
//     pizza
//     price
// }

// const orderHistory = [
//     order
//     order
//     order
// ]

// addIngredient = find ingredient by id + push + switch selected
// removeIngredient = find by id + witch selected (змінила ерей з інгредієнтами) + filter

// localStorage
