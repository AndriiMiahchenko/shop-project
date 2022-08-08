// add to cart
let productsCountEl = document.getElementById("products-count");

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount + 1;
    // productsCountEl.textContent = +prevProductsCount.textContent + 1;
  });
}

// change like state
let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) => item.addEventListener("click", function () {
  if (item.classList.contains("liked")) {
    item.classList.remove("liked");
  } else {
    item.classList.add("liked");
  }
  //item.classList.toggle("liked");
})
)

//more details
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-hover");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
btnClose.addEventListener("click", closeModal);

// slider
$(".slider-block").slick({
  autoplay: true,
  dots: true,
})

// close in body 
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// open modal by scroll
function showModalByScroll() {
  if (window.pageYOffset > document.body.scrollHeight/2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

setTimeout(() => openModal(), 5000);


let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementsBtns = document.querySelectorAll(".increment-btn");
let quantityInput = document.querySelectorAll(".product-quantity input");

// constructor

function Counter(incBtn, decBtn, inpValue, minCount = 1, maxCount = 5) {
  this.domRefs = {
    incBtn,
    decBtn,
    inpValue,
  };

  this.toggleButtonState = function() {
    let count = this.domRefs.inpValue.value;
    this.domRefs.decBtn.disabled = count <= minCount;
    this.domRefs.incBtn.disabled = count >= maxCount;
  };

  this.toggleButtonState();

  this.increment = function() {
    console.log(this);
    this.domRefs.inpValue.value = +this.domRefs.inpValue.value + 1;
    this.toggleButtonState();
  }
  this.decrement = function() {
    this.domRefs.inpValue.value = +this.domRefs.inpValue.value - 1;
    this.toggleButtonState();
  }

  this.domRefs.incBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decBtn.addEventListener("click", this.decrement.bind(this));

  console.log(this);
}


let counter1 = new Counter(
  incrementsBtns[0],
  decrementBtns[0],
  quantityInput[0]
  );

