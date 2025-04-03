// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	
	const cart =document.querySelector("#cart-list")
	cart.innerHTML="";
	const products = JSON.parse(window.sessionStorage.getItem("Cart"));
	// alert(products[0].id)

	if (products.length === 0) {
        return;
    }
	
	products.map((product)=>{
	 let li = document.createElement("li");
		li.innerHTML=`${product.name} - ${product.price} `;
		cart.appendChild(li);
	});
}

// Add item to cart
function addToCart(productId) {
	let cart =JSON.parse(window.sessionStorage.getItem("Cart")) || [];
const product = products.filter((data)=>data.id==productId);
	// alert(product[0].name)

	const existingProduct = cart.find((data)=>data.id==productId);

	if(existingProduct){
		alert(`${product[0].name} is already in the cart`);
		return
	}
	cart.push(product[0]);
window.sessionStorage.setItem("Cart",JSON.stringify(cart))
	
	renderCart()
}

// click on add to chart;
productList.addEventListener("click",(e)=>{

	const ProductId =e.target.getAttribute("data-id");
	// alert(ProductId)
	addToCart(ProductId)
})

// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {
	window.sessionStorage.removeItem("Cart");
	renderCart();
}

// on click on clear cart

document.querySelector("#clear-cart-btn").addEventListener("click",()=>{
	clearCart();
})

// Initial render
renderProducts();
renderCart();
