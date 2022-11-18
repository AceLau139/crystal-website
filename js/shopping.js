let shoppingCart = []

window.onload = function() {
    var productList = [{
            "imgUrl": "./img/career.jpg",
            "productName": "綠髮碧璽金髮晶虎眼石黃水晶",
            "productPrice": "548",
            "productComment": "1"
        },
        {
            "imgUrl": "./img/exorcise.jpg",
            "productName": "金沙黑曜石黑髮晶黑尖晶石白幽靈",
            "productPrice": "689",
            "productComment": "9.7"
        },
        {
            "imgUrl": "./img/health.jpg",
            "productName": "櫻花瑪瑙白月光石",
            "productPrice": "488",
            "productComment": "1.3"
        },
        {
            "imgUrl": "./img/love.jpg",
            "productName": "粉晶白幽靈藍月光石吊飾",
            "productPrice": "459",
            "productComment": "1.1"
        },
        {
            "imgUrl": "./img/mood.jpg",
            "productName": "櫻花瑪瑙白月光石玫瑰金水晶",
            "productPrice": "548",
            "productComment": "2.3"
        },
        {
            "imgUrl": "./img/relationship.jpg",
            "productName": "阿魯沙黃水晶拉長石葡萄石",
            "productPrice": "429",
            "productComment": "3.3"
        },
        {
            "imgUrl": "./img/wisdom.jpg",
            "productName": "藍月光石海藍寶玫瑰金吊牌水晶",
            "productPrice": "699",
            "productComment": "1.2"
        },
    ];

    var oBox = document.querySelector("#box");
    var oUl = document.getElementsByTagName("ol")[0];

    //add items & shopping cart btn
    for (let i = 0; i < productList.length; i++) {
        var oLi = document.createElement("li");
        var data = productList[i];

        oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="100%" height="100%"></div>';
        oLi.innerHTML += '<h3 id="h3" class="pro_name"><a rel="nofollow" href="#">' + data["productName"] + '</a></h3>';
        oLi.innerHTML += '<p class="pro_price">HKD$' + data["productPrice"] + '</p>';
        oLi.innerHTML += '<p class="pro_rank">' + data["productComment"] + 'K <i class="fa-regular fa-thumbs-up"></i></p>';
        oLi.innerHTML += '<div class="addBtn">加入購物車</div>';
        oUl.appendChild(oLi);

    }

    // Get all buttons as a NodeList
    var aBtn = document.querySelectorAll('.add_btn');

    console.log(aBtn)

    // Convert buttons NodeList to an array
    var aBtnArr = Array.prototype.slice.call(aBtn);

    console.log(aBtnArr)

    //forEach -> addEventListener('click', addItem)
    aBtnArr.forEach(addBtn => {
        console.log(addBtn)
        addBtn.addEventListener('click', ()=>{
            console.log('Button click')
        })
    });

    //addItem{
    //  shoppingCart.push(shopping cart[i])
    //  localStorage.setItem('cartItem', JSON.stringify(shoppingCart));
    //}

    
}


    //push
    /* shoppingCart.push() */

    /* aBtnArr.forEach(element => 
        console.log(element)
    ); */

    /* for (let i = 0; i < aBtnArr.length; i++) {
        aBtnArr[i].addEventListener('click', ()=>{
            console.log(i)
        })
    } */

        /* function Product(product) {
        shoppingCart = Object.assign(shoppingCart, {
            product1: {"imgUrl": "./img/career.jpg",
            "productName": "綠髮碧璽金髮晶虎眼石黃水晶",
            "productPrice": "548",
            "productComment": "1"
          }
        })
    } */

    /* function addItem(){
        for (let i = 0; i < aBtnArr.length; i++) {
            console.log('onclick')
      
            //push
            shoppingCart.push(productList[x])
        
            console.log('shopping cart: '+ shoppingCart)
        
            //local storage
            localStorage.setItem('cartItem', JSON.stringify(shoppingCart));
            //alert(`${productList.proName} 已添加至我的購物車！`);
        }
    } */

