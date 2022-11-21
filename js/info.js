var shoppingCart = []
let addBtn = document.querySelector('#addBtn');

let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("demo");
let captionText = document.getElementById("caption");
let productName = document.querySelector('.productName');
let productPrice = document.querySelector('.price');
let oldPrice = document.querySelector('.oldprice');

//Slide
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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
  productPrice.innerHTML = `$${dots[slideIndex - 1].dataset.price}`;
  oldPrice.innerHTML = dots[slideIndex - 1].dataset.oldprice;

  addBtn.setAttribute('data-productname', dots[slideIndex - 1].dataset.proname)
}

addBtn.addEventListener('click', ()=>{
  //var itemName = addBtn.dataset.productname

  var itemUrl = dots[slideIndex - 1].src;
  var itemName = dots[slideIndex - 1].dataset.proname;
  var itemPrice = dots[slideIndex - 1].dataset.price
  var productItem = {
    'ProductUrl':itemUrl,
    'ProductName':itemName, 
    'productPrice':itemPrice
  }

  //push obj into shoppingCart 
  shoppingCart.push(productItem)
  console.log(shoppingCart)

  //local storage
  localStorage.setItem('cartItem', JSON.stringify(shoppingCart));
})

