let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount + 1;
    // productsCountEl.textContent = +prevProductsCount.textContent + 1;
  });
}


let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

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


$(".slider-block").slick({
  autoplay: true,
  dots: true,
})

const modalItems = document.querySelectorAll('.modal');

if (modalItems.length > 0) {
  window.addEventListener('scroll', modalOnScroll);

  function modalOnScroll() {
    for (let i = 0; i < modalItems.length; i++) {
      const modalItems = modalItems[i];
      const modalItemsHeight = modalItems.offsetHeight;
      const modalItemsOffset = offset(modalItems).top;
      const modalStart = 2;

      let modalItemsPoint = window.innerHeight - modalItemsHeight / modalStart;
      if (modalItemsHeight > window.innerHeight) {
        modalItemsPoint = window.innerHeight - window.innerHeight / modalStart;
      }

      if ((pageYOffset > modalItemsOffset - modalItemsPoint) && (pageYOffset < (modalItemsOffset + modalItemsHeight))) {
        modalItems.classList.add('show');
      } else {
        modalItems.classList.remove('show');
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}