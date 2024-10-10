document.addEventListener("DOMContentLoaded", function () {
  const savedOrders = JSON.parse(localStorage.getItem("orders"));

  if (!savedOrders) {
    alert("Orders is empty");
    window.location.href = "index.html";
  }

  const histiryContainer = document.getElementById("histiry-container");

  const orderHistoryInnerHtml = `
        <ul class="orders">
            ${savedOrders
              .map(
                (order) =>
                  `
                    <li class="order">
                        <br>

                        <ul class="order-ingredients">

                            ${order.pizza
                              .map(
                                (ingredient) =>
                                  `<li class="ingredient">${ingredient.name}</li>`
                              )
                              .join(" ")}

                        </ul>

                        <p>Id: ${order.id}</p>
                        <p>Price: ${order.price}</p>
                        
                        <br>
                        <hr>

                    </li>         
                `
              )
              .join(" ")}
    </ul>    `;

  histiryContainer.innerHTML = orderHistoryInnerHtml;
});
