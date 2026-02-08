let cart = [];

// select all order buttons
let buttons = document.querySelectorAll(".menuButton");

// loop through buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let itemName = buttons[i].getAttribute("data-item");
    let price = 0;

    // decide price using switch
    switch (itemName) {
      case "Idli":
        price = 40;
        break;
      case "Vada":
        price = 30;
        break;
      case "Dosa":
        price = 60;
        break;
      case "Uttappa":
        price = 70;
        break;
      case "Pongal":
        price = 50;
        break;
      case "Idiyappam":
        price = 55;
        break;
      case "Puri":
        price = 60;
        break;
      case "Paddu":
        price = 45;
        break;
    }

    addItemToCart(itemName, price);
    displayCart();
  });
}

// add item or increase quantity
function addItemToCart(name, price) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty++;
      return;
    }
  }

  cart.push({
    name: name,
    price: price,
    qty: 1
  });
}

// display billing
function displayCart() {
  let cartDiv = document.querySelector(".cart");
  cartDiv.innerHTML = "";

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].price * cart[i].qty;
    total += itemTotal;

    cartDiv.innerHTML += `
      <p>
        ${cart[i].name} - ₹${cart[i].price} × ${cart[i].qty}
        = ₹${itemTotal}
      </p>
    `;
  }

  cartDiv.innerHTML += `<hr><h4>Total: ₹${total}</h4>`;
}
