const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

const cards = document.querySelector(".cards");

diplayProducts(cartProducts);

function diplayProducts(products) {
  let str = "";

  products.map((product) => {
    str += `
    <div class="card">
      <img src="${product.images[0]}" alt="Product image" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <button onclick="removeFromCart(${product.id})">Remove</button>
    </div>
    `;
  });

  cards.innerHTML = str;
}

function removeFromCart(id) {
  let newCartProducts = cartProducts.filter((pr) => pr.id !== id);
  localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
  diplayProducts(newCartProducts);
}
