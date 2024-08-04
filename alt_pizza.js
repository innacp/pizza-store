function renderIngredients() {
  ingredients.forEach((ingredient) => {
    const ingredientItem = document.getElementById(ingredient.id);

    const image = ingredientItem.querySelector("img");
    const name = ingredientItem.querySelector(".name");
    const price = ingredientItem.querySelector(".price");

    image.src = ingredient.image;
    image.alt = ingredient.name;
    name.textContent = ingredient.name;
    price.textContent = ingredient.price;
  });
}

renderIngredients();
