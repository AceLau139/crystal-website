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
}

/* var cartList = []
var addBtn = document.querySelector('#addBtn')
var products = document.querySelectorAll('.demo');


const addItem =()=>{
  console.log('product: '+ products)

  //push
  cartList.push(products)


  console.log('cart list: '+ cartList)

  //local storage
  localStorage.setItem('cartItem', JSON.stringify(cartList));
  //alert(`${productItem.proName} 已添加至我的購物車！`);
}

addBtn.addEventListener('click', addItem) */

var addBtn = document.querySelector('#addBtn')

const addItem =(e)=>{
  console.log(e.currentTarget.parentElement)
  e.currentTarget.parentElement
}

addBtn.addEventListener('click', (e)=>addItem(e))