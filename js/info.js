var shoppingCart = []
let addBtn = document.querySelector('#addBtn');

//Slide
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  let productName = document.querySelector('.productName');
  let productPrice = document.querySelector('.price');
  let oldPrice = document.querySelector('.oldprice');

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
  productName.innerHTML = dots[slideIndex - 1].dataset.proname;
  productPrice.innerHTML = dots[slideIndex - 1].dataset.price;
  oldPrice.innerHTML = dots[slideIndex - 1].dataset.oldprice;

  return addBtn.setAttribute('data-productname', dots[slideIndex - 1].dataset.proname)
}

addBtn.addEventListener('click', ()=>{
  var itemName = addBtn.dataset.productname

  //push obj into shoppingCart
  shoppingCart.push(itemName)
  console.log(shoppingCart)

  //local storage
  localStorage.setItem('cartItem', JSON.stringify(shoppingCart));
})