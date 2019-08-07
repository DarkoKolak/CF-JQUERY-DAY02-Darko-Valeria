// renders products on the index.html page
for (var i = 0; i < products.length; i++) {
	$("#shop").append(`<div class="gadgetBox">
		<img src="${products[i].image}">
		<p class="product">${products[i].name}</p>
		<p class="price">${products[i].price} EUR</p>
		<button id="${i}" class="add">Add to Cart</button>
		<div>&#9825;&#8644;&#128065;</div>
		</div>`)
}

// adding items to cart array on click
var cart = [];	
$(".add").click(addToCart);
function addToCart() {
	var i = $(this).attr("id")
	if (cart[i] == undefined) {
		cart[i] = 0;
	}
	cart[i] += 1; // 
	console.log(cart);
	closeCart();
}

// calculates total price
function calcTotalPrice() {
	var totalPrice = 0;
	for (i = 0; i < cart.length; i++) {
		if (cart[i] == undefined) {
			continue //
		} else {
			totalPrice = totalPrice + cart[i] * products[i].price;
		}	
	}
	return totalPrice;
}

// show the cart content and calculates the price
$("#cartBtn").click(showCart);
function showCart() {
	var shoppingCart = $("#cart-content");
	if (cart.length == 0 || calcTotalPrice() == 0) {
		alert("Your cart is empty.");
	} else {
		$("#shoppingCart").css("display", "flex");
		shoppingCart.text("");
		for (var i = 0; i < cart.length; i++) {
			if (cart[i] == undefined || cart[i] == 0) {
				continue
			} else {
				shoppingCart.append(
					`<div class="cartBox" id="cartBox${i}">
						<img src="${products[i].image}">
						<span>${products[i].name} Price: ${products[i].price} EUR</span>
						<p id="item${i}">Items: ${cart[i]}</p>
						<button id="rmv${i}" class="rmvButton"><i class="fas fa-trash-alt"></i></button>
					</div>`);	
			}
		}	
	}
	$("#totalPrice").text(`Total: ${calcTotalPrice()} EUR`); 
	$("#closeButton").click(closeCart);

	$(".rmvButton").click(removeFromCart);
}	

function removeFromCart() {
	var i = $(this).attr("id")[3];
	console.log(i);
	cart[i] -= 1;
	console.log(i);
	$(`#item${i}`).text(`Items: ${cart[i]}`);
	$("#totalPrice").text(`Total: ${calcTotalPrice()} EUR`);
	if (cart[i] == 0) {
		$(`#cartBox${i}`).remove();
	}
	if (calcTotalPrice() == 0) {
		$("#shoppingCart").css("display", "none");
	}
}



function closeCart() {
	document.getElementById("shoppingCart").style.display = "none";
}


// function showCart() {
	// var shoppingCart = document.getElementById("cart-content");
	// if (cart.length == 0 || calcTotalPrice() == 0) {
	// 	alert("Your cart is empty.");
	// } else {
		// document.getElementById("shoppingCart").style.display = "flex";
		// shoppingCart.innerHTML = "";
		// shoppingCart.innerHTML += `<span id="closeButton">&#10006;</span>`;
	// 	for (var i = 0; i < cart.length; i++) {
	// 		if (cart[i] == undefined || cart[i] == 0) {
	// 			continue //check if one slot is empty, if yes it moves on without breaking
	// 		} else {
	// 			shoppingCart.innerHTML += 
	// 				`<div class="cartBox" id="cartBox${i}">
	// 					<img src="${products[i].image}">
	// 					<p>${products[i].name}</p>
	// 					<p>Price: ${products[i].price} EUR</p>
	// 					<p id="item${i}">Items: ${cart[i]}</p>
	// 					<button id="rmv${i}" class="rmvButton"><i class="fas fa-trash-alt"></i></button>
	// 				</div>`;	
	// 		}
	// 	}
	// }
	// shoppingCart.innerHTML += `<div id="totalPrice"></div>`;
	// document.getElementById("totalPrice").innerHTML = `Total: <b>${calcTotalPrice()} EUR</b>`; 
	// shoppingCart.innerHTML += `<button id="checkout">Checkout</button>`;

	// document.getElementById("closeButton").addEventListener("click", closeCart, false);
// 	var remove = document.getElementsByClassName("rmvButton");
// 	for (var i = 0; i < remove.length; i++) {
// 		remove[i].addEventListener("click", function(){removeFromCart(this.getAttribute("id"))}, false);
// 	}	
// }





// for (var i = 0; i < products.length; i++) {
// 		document.getElementById("shop").innerHTML += 
// 		`<div class="gadgetBox">
// 		<img src="${products[i].image}">
// 		<p class="product">${products[i].name}</p>
// 		<p class="price">${products[i].price} EUR</p>
// 		<button id="${i}" class="add">Add to Cart</button>
// 		<div>&#9825;&#8644;&#128065;</div>
// 		</div>`;
// }		

// var box = document.getElementsByClassName("add");

// for (var i = 0; i < box.length; i++) {
// 	box[i].addEventListener("click", function(){addToCart(this.getAttribute("id"))}, false);
// }

// var cart = [];
// function addToCart(i) {
// 	if (cart[i] == undefined) {
// 		cart[i] = 0;
// 	}
// 	cart[i] += 1; // 
// 	closeCart();
// }


// function calcTotalPrice() {
// 	var totalPrice = 0;
// 	for (i = 0; i < cart.length; i++) {
// 		if (cart[i] == undefined) {
// 			continue //
// 		} else {
// 			totalPrice = totalPrice + cart[i] * products[i].price;
// 		}	
// 	}
// 	return totalPrice;
// }

// document.getElementById("cartBtn").addEventListener("click", showCart, false);

// function showCart() {
// 	var shoppingCart = document.getElementById("cart-content");
// 	if (cart.length == 0 || calcTotalPrice() == 0) {
// 		alert("Your cart is empty.");
// 	} else {
// 		shoppingCart.style.display = "flex";
// 		shoppingCart.innerHTML = "";
// 		shoppingCart.innerHTML += `<span id="closeButton">&#10006;</span>`;
// 		for (var i = 0; i < cart.length; i++) {
// 			if (cart[i] == undefined || cart[i] == 0) {
// 				continue //check if one slot is empty, if yes it moves on without breaking
// 			} else {
// 				shoppingCart.innerHTML += 
// 					`<div class="cartBox" id="cartBox${i}">
// 						<img src="${products[i].image}">
// 						<p>${products[i].name}</p>
// 						<p>Price: ${products[i].price} EUR</p>
// 						<p id="item${i}">Items: ${cart[i]}</p>
// 						<button id="rmv${i}" class="rmvButton"><i class="fas fa-trash-alt"></i></button>
// 					</div>`;	
// 			}
// 		}
// 	}
// 	shoppingCart.innerHTML += `<div id="totalPrice"></div>`;
// 	document.getElementById("totalPrice").innerHTML = `Total: <b>${calcTotalPrice()} EUR</b>`; 
// 	shoppingCart.innerHTML += `<button id="checkout">Checkout</button>`;

// 	document.getElementById("closeButton").addEventListener("click", closeCart, false);
// 	var remove = document.getElementsByClassName("rmvButton");
// 	for (var i = 0; i < remove.length; i++) {
// 		remove[i].addEventListener("click", function(){removeFromCart(this.getAttribute("id"))}, false);
// 	}	
// }

// function closeCart() {
// 	document.getElementById("shoppingCart").style.display = "none";
// }


// function removeFromCart(id) {
// 	var i = id[3];
// 	cart[i] -= 1;
// 	document.getElementById(`item${i}`).innerHTML = `Items: ${cart[i]}`;
// 	document.getElementById("totalPrice").innerHTML = `Total: <b>${calcTotalPrice()} EUR</b>`;
// 	if (cart[i] == 0) {
// 		document.getElementById(`cartBox${i}`).style.display = "none";
// 	}
// 	if (calcTotalPrice() == 0) {
// 		document.getElementById("cart-content").style.display = "none";
// 	};
// }