const pizza = {};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".ingredients-container");

  ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.classList.add("ingredient");
    ingredientItem.setAttribute("data-id", ingredient.id);

    const name = document.createElement("h4");
    name.textContent = ingredient.name;

    const image = document.createElement("img");
    image.src = ingredient.img;
    image.alt = ingredient.name;

    const price = document.createElement("p");
    price.textContent = ingredient.price;

    ingredientItem.appendChild(name);
    ingredientItem.appendChild(image);
    ingredientItem.appendChild(price);

    container.appendChild(ingredientItem);
  });
});

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
