document.addEventListener("DOMContentLoaded", function () {
  const savedOrders = JSON.parse(localStorage.getItem("orders"));

  if (!savedOrders) {
    alert("Orders is empty");
    window.location.href = "index.html";
  }
  //   const lastOrder = savedOrders[savedOrders.length - 1];
  const lastOrder = savedOrders.at(-1);

  const orderContainer = document.getElementById("order-container");

  const renderOrder = `
          <h3>Your Order</h3>
          <p>${lastOrder.pizza
            .map((ingredient) => ingredient.name)
            .join(", ")}</p>  
          <p>${lastOrder.price}</p> 
          <button onclick="window.location.href='index.html'">Back</button>
        `;
  orderContainer.innerHTML = renderOrder;
});
