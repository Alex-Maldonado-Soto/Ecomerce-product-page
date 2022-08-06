const numberProduct = document.getElementById("numberProduct");
const articlesNumber = document.getElementById("articlesNumber");
const precioCantidad = document.getElementById("precioCantidad");
const precioTotal = document.getElementById("precioTotal");
const dataProduct = document.getElementById("productCart");
const textNoneProduct = document.getElementById("textProductCart");
const buttonCart = document.getElementById("cart-button");
// const cartProduct = document.getElementsByClassName("product-cart")
const cartProduct = document.querySelector(".product-cart");
let numberShoesCart = 0;

numberProduct.value = 0;

function addProduct() {
  numberProduct.value++;
}

function deleteProduct() {
  if (numberProduct.value > 0) {
    numberProduct.value--;
  }
}

function addCart() {
  numberShoesCart = numberShoesCart + Number(numberProduct.value);
  numberProduct.value = 0;
  if (numberShoesCart >= 1) {
    articlesNumber.style.display = `block`;
    articlesNumber.innerHTML = `${numberShoesCart}`;
  } else {
    articlesNumber.style.display = `none`;
  }
}

setInterval(function () {
  if (numberShoesCart >= 1) {
    articlesNumber.style.display = `block`;
    articlesNumber.innerHTML = `${numberShoesCart}`;
  } else {
    articlesNumber.style.display = `none`;
  }
}, 1);

/////////////////fin de la parte del anadir producto

function deleteProductCart() {
  numberShoesCart = 0;
}

function openCart() {
  cartProduct.classList.toggle(`show`);

  if (numberShoesCart < 1) {
    textNoneProduct.style.display = `block`;
    dataProduct.style.display = `none`;
    buttonCart.style.display = `none`;
  }

  if (numberShoesCart >= 1) {
    textNoneProduct.style.display = `none`;
    precioCantidad.innerHTML = `$125.00 x ${numberShoesCart} <strong>$${
      numberShoesCart * 125
    }.00</strong>`;
    dataProduct.style.display = `grid`;
    buttonCart.style.display = `inherit`;
  }
}

setInterval(function () {
  if (numberShoesCart < 1) {
    textNoneProduct.style.display = `block`;
    dataProduct.style.display = `none`;
    buttonCart.style.display = `none`;
  }

  if (numberShoesCart >= 1) {
    textNoneProduct.style.display = `none`;
    precioCantidad.innerHTML = `$125.00 x ${numberShoesCart} <strong>$${
      numberShoesCart * 125
    }.00</strong>`;
    dataProduct.style.display = `grid`;
    buttonCart.style.display = `inherit`;
  }
}, 1);
