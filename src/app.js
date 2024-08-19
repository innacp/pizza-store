function renderIngredients() {
  const ingredientsList = document.getElementById("ingredients");

  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.classList.add("ingredient-box");

    listItem.id = ingredient.id;

    listItem.innerHTML = buildIngredientHtml(ingredient, true);

    ingredientsList.innerHTML += listItem.outerHTML;
  });
}

function setupAddIngredientEvents() {
  // HTMLCollection type
  const buttons = document.getElementsByClassName("add-btn");

  // spread feature for representation html collection into array type
  [...buttons].forEach((item) => {
    item.addEventListener("click", (event) => {
      const button = event.target;
      const ingredientId = button.attributes["data-ingredient-id"].value;
      addIngredient(parseInt(ingredientId));
    });
  });
}

function addIngredient(ingredientId) {
  const ingredient = ingredients.find(
    (ingredient) => ingredient.id === ingredientId && !ingredient.selected
  );
  if (ingredient) {
    ingredient.selected = true;
  }
  renderSelectedIngredients();
}

function renderSelectedIngredients() {
  const pizzaList = document.getElementById("pizza");
  // clear innerHtml with previous items
  pizzaList.innerHTML = "";

  ingredients
    .filter((ingredient) => ingredient.selected)
    .forEach((ingredient) => {
      const listItem = document.createElement("li");
      listItem.classList.add("ingredient-box");

      listItem.id = ingredient.id;

      listItem.innerHTML = buildIngredientHtml(ingredient, false);

      pizzaList.innerHTML += listItem.outerHTML;
    });
  setupRemoveIngredientEvents();
}

function removeIngredient(ingredientId) {
  const ingredient = ingredients.find(
    (ingredient) => ingredient.id === ingredientId && ingredient.selected
  );
  if (ingredient) {
    ingredient.selected = false;
  }

  renderSelectedIngredients();
}

function setupRemoveIngredientEvents() {
  const buttons = document.getElementsByClassName("remove-btn");
  console.log(buttons);

  [...buttons].forEach((item) => {
    item.addEventListener("click", (event) => {
      const button = event.target;
      const ingredientId = button.attributes["data-ingredient-id"].value;
      removeIngredient(parseInt(ingredientId));
    });
  });
}

// addOrRemove: true = Add, false = remove
function buildIngredientHtml(ingredient, addOrRemove) {
  return `
      <h4 class="ingredient-name">${ingredient.name}</h4>
      <img class="ingredient-img" src="${ingredient.image}">
      <p class="price">${"$" + ingredient.price}</p>
        <div class="btn-container">
          <button data-ingredient-id="${ingredient.id}" class="${
    addOrRemove ? "add-btn" : "remove-btn"
  }">${addOrRemove ? "+" : "-"}</button>
        </div>
    `;
}

renderIngredients();
setupAddIngredientEvents();

//saveOrder
//взяти селектед хавка айтеми і запихнути в ерейчик order і цей ерейчик засунути в локалсторедж
//в ордер хісторі рендеримо список ордерів (ерей з ереїв)
