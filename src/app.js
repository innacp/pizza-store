let userPizza = [];

function renderIngredients() {
  const ingredientsList = document.getElementById("ingredients");

  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.classList.add("ingredient-box");

    // na vsyakyi pojarnyi vzyaly idshku
    listItem.id = ingredient.id;

    listItem.innerHTML = `
      <h4 class="ingredient-name">${ingredient.name}</h4>
      <img class="ingredient-img" src="${ingredient.image}">
      <p class="price">${ingredient.price}</p>
      <button class="add-btn">+</button>
      <button class="remove-btn">-</button>
    `;

    ingredientsList.innerHTML += listItem.outerHTML; //плюсік щоб не перезаписувати попередній елемент
    //outerHTML щоб не брати лістайтем як жс обєкт а як штмл

    // const pizzaList = document.getElementById("pizza");
    // const pizzaItem = document.createElement("li");
    // pizzaItem.classList.add("pizza-item");
    // pizzaItem.innerHTML = `
    //   <h4 class="ingredient-name">${ingredient.name}</h4>
    //   <img class="ingredient-img" src="${ingredient.image}">
    // `;

    // pizzaList.innerHTML += pizzaItem.outerHTML;
  });
}

function setupClickEventHandlers() {
  // HTMLCollection type
  const ingredients = document.getElementsByClassName("ingredient-box");

  // spread feature for representation html collection into array type
  [...ingredients].forEach((item) => {
    item.addEventListener("click", (e) => {
      addIngredient(parseInt(item.id));
    });
  });
}

function addIngredient(ingredientId) {
  const ingredient = ingredients.find(
    (ingredient) => ingredient.id === ingredientId && !ingredient.selected
  );
  if (ingredient) {
    ingredient.selected = true;
    userPizza.push(ingredient);
    console.log("Ingredient added!");
    console.log(ingredient.name);
  }

  if (ingredient.selected) {
    const pizzaList = document.getElementById("pizza");
    const pizzaItem = document.createElement("li");
    pizzaItem.classList.add("pizza-item");
    pizzaItem.innerHTML = `
      <h4 class="ingredient-name">${ingredient.name}</h4>
      <img class="ingredient-img" src="${ingredient.image}">
    `;

    pizzaList.innerHTML += pizzaItem.outerHTML;
  }
}

renderIngredients();
setupClickEventHandlers();

console.log(userPizza);

//вивести додані інгредієнти в піца контейнер +
//додати кнопки плюс мінус на інгрелдієнти
//додати рімув функцію на інгредієнт справа
