/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

/////
//////
///
///
///
//
///
///
///
///
///
///
///
///
//
///
////
////
////
///
const products = [
  {
    id: idi,
    name: "Milk",
    category: "eat",

    price: 70,
    rating: 2,
    discount: 45,
    images: ["/image/assets/images/Ibrohim/blinch.png"],
  },
  {
    id: idii,
    name: "Banana",
    category: "eat",

    price: 80,
    rating: 4,
    discount: 45,
    images: ["/image/assets/images/Ibrohim/nav-icons3.png"],
  },
  {
    id: id1,
    name: "Kiwi",
    category: "eat",

    price: 80,
    rating: 4,
    discount: 45,
    images: ["/image/assets/images/Ibrohim/nav-icons3.png"],
  },
  {
    id: id2,
    name: "Watermelom",
    category: "eat",

    price: 80,
    rating: 4,
    discount: 45,
    images: ["/image/assets/images/Ibrohim/nav-icons3.png"],
  },
  {
    id: id3,
    name: "Apple",
    category: "eat",

    price: 80,
    rating: 4,
    discount: 45,
    images: ["/image/assets/images/Ibrohim/nav-icons3.png"],
  },
];
const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

const cards = document.querySelector(".cards");

diplayProducts(products);

function diplayProducts(products) {
  let str = "";

  products.map((product) => {
    str += `
    <div  class="card">
    <a href="/pages/contact-cart.html" onclick="sendProductDetails(${product.id})">
    <img src="${product.images[0]}" alt="Product image" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      </a>
      <button onclick="addToCart(${product.id})">В корзину</button>
      </div>
    `;
  });

  cards.innerHTML = str;
}

function sendProductDetails(id) {
  const product = products.find((pr) => pr.id === id);
  localStorage.setItem("productData", JSON.stringify(product));
}

function addToCart(id) {
  const product = { numOfProducts: 1, ...products.find((pr) => pr.id === id) };

  let hasProduct = false;
  cartProducts.forEach((pr) => {
    if (pr.id === product.id) {
      hasProduct = true;
    }
  });
  if (!hasProduct) {
    cartProducts.push(product);
  }

  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}
