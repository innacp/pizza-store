function renderIngredients() {
  const ingredientsList = document.getElementById("ingredients");

  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.classList.add("ingredient-box");

    listItem.id = ingredient.id;

    listItem.innerHTML = buildIngredientHtml(ingredient);

    ingredientsList.innerHTML += listItem.outerHTML;
  });
}

function setupAddIngredientEvents() {
  // HTMLCollection type
  const buttons = document.getElementsByClassName("add-btn");

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

function removeIngredient() {
  // [1, 2, true, {hello: 'privet'}]
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
function buildIngredientHtml(ingredient, addOrRemove = true) {
  //explain addOrRemove
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

function saveOrder() {
  let savedOrders = JSON.parse(localStorage.getItem("orders"));

  const newOrder = {
    id: new Date().getTime().toString(36),
    pizza: [...ingredients.filter((i) => i.selected)],
  };

  const totalPrice = newOrder.pizza.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  newOrder.price = totalPrice;

  console.log(totalPrice);

  savedOrders = savedOrders
    ? [...savedOrders, { ...newOrder }]
    : [{ ...newOrder }];

  localStorage.setItem("orders", JSON.stringify(savedOrders));

  window.location.href = "order.html";
}

function renderOrder() {
  const order = localStorage.getItem("orders");
}

renderSelectedIngredients();

//спред почитати попробувати +

//переродити ню ордер на таку структуру: +

// const order {
//   id: number,
//   price: number,
//   pizza: {
//     ingredients,
//   }
// }

//orderHistory
//порахувати ціну піци і додати її в рендер
//взяти ордерс з локал стореджа і відрендерити штмл
//додати ріпіт ордер
