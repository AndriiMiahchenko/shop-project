let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    console.log("clicked");
  });
}

document.getElementById("like-click1").onclick = function () {
  this.classList.toggle("like-style");
};

document.getElementById("like-click2").onclick = function () {
  this.classList.toggle("like-style");
};

document.getElementById("like-click3").onclick = function () {
  this.classList.toggle("like-style");
}

document.getElementById("like-click4").onclick = function () {
  this.classList.toggle("like-style");
}

document.getElementById("like-click5").onclick = function () {
  this.classList.toggle("like-style");
}

document.getElementById("like-click6").onclick = function () {
  this.classList.toggle("like-style");
}

document.getElementById("like-click7").onclick = function () {
  this.classList.toggle("like-style");
}

document.getElementById("like-click8").onclick = function () {
  this.classList.toggle("like-style");
}

document.getElementById("like-click9").onclick = function () {
  this.classList.toggle("like-style");
}



