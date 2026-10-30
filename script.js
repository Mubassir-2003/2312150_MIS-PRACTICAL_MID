var cartItems = []; 
var totalPrice = 0;   

function addToCart(name, price) {
  cartItems.push(name + " - TK " + price);
  totalPrice = totalPrice + price;
  document.getElementById("cart-count").textContent = "Cart Items: " + cartItems.length;
  document.getElementById("added-msg").textContent = name + " added to your cart!";
}

function showCart() {
  var list = document.getElementById("cart-list");
  list.innerHTML = "";
  for (var i = 0; i < cartItems.length; i++) {
    var li = document.createElement("li");
    li.textContent = cartItems[i];
    list.appendChild(li);
  }
  document.getElementById("cart-total").textContent = "Total: " + totalPrice + "TK" ;
}

function clearCart() {
  cartItems = [];
  totalPrice = 0;
  document.getElementById("cart-count").textContent = "Cart Items: 0";
  document.getElementById("cart-list").innerHTML = "";
  document.getElementById("cart-total").textContent = "Total: 0 TK";
  document.getElementById("added-msg").textContent = "";
}

function sendMessage() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var text = document.getElementById("message").value.trim();
  var out = document.getElementById("form-msg");

  if (name === "" || email === "" || text === "") {
    out.style.color = "#b00020";
    out.textContent = "Please fill in all fields.";
  } else {
    out.style.color = "#2e7d32";
    out.textContent = "Thank you, " + name + "! Your message has been sent.";
  }
}