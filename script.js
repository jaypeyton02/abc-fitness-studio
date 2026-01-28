// Subscribe button (footer)
const subscribeBtn = document.getElementById("subscribeBtn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", function () {
    alert("Thank you for subscribing.");
  });
}

// Add to Cart buttons (gallery)
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", function () {
    alert("Item added to the cart.");
  });
});

// Clear Cart button
const clearCartBtn = document.getElementById("clearCartBtn");
if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    alert("Cart cleared.");
  });
}

// Process Order button
const processOrderBtn = document.getElementById("processOrderBtn");
if (processOrderBtn) {
  processOrderBtn.addEventListener("click", function () {
    alert("Thank you for your order.");
  });
}

// Contact form submit
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message.");
  });
}
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", function () {
    alert("Item added to the cart.");
  });
});
const clearCartBtn = document.getElementById("clearCartBtn");

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    alert("Cart cleared.");
  });
}
const processOrderBtn = document.getElementById("processOrderBtn");

if (processOrderBtn) {
  processOrderBtn.addEventListener("click", function () {
    alert("Thank you for your order.");
  });
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message.");
  });
}
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", function () {
    const item = this.getAttribute("data-item");

    let cart = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    cart.push(item);

    sessionStorage.setItem("cartItems", JSON.stringify(cart));
    alert("Item added to the cart.");
  });
});
const viewCartBtn = document.getElementById("viewCartBtn");

if (viewCartBtn) {
  viewCartBtn.addEventListener("click", function () {
    let cart = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    if (cart.length === 0) {
      alert("Your cart is empty.");
    } else {
      alert("Your Cart:\n" + cart.join("\n"));
    }
  });
}
const clearCartBtn = document.getElementById("clearCartBtn");

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    sessionStorage.removeItem("cartItems");
    alert("Cart cleared.");
  });
}
const processOrderBtn = document.getElementById("processOrderBtn");

if (processOrderBtn) {
  processOrderBtn.addEventListener("click", function () {
    sessionStorage.removeItem("cartItems");
    alert("Thank you for your order.");
  });
}
