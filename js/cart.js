myStorage = window.localStorage;

var itemList = [];
var cartItem = {
    "imgUrl": proImg,
    "productName": proName,
    "productPrice": proPrice,
    "productComment": proRank,
};



window.onload = function() {

    /* var oBox = document.querySelector("#box"); */
    var oCar = document.querySelector("#car");


    var proImg = localStorage.getItem('imgUrl');
    var productName = localStorage.getItem('productName');
    var productPrice = localStorage.getItem('productPrice');
    var productComment = localStorage.getItem('productComment');

    function showCart(){
        proImg.innerHTML += '<div class="img left"><img src="' + productList["imgUrl"] + '" ></div>';
    }
/* 
    //add shopping cart btn
    for (let i = 0; i < product.length; i++) {
        var oLi = document.createElement("li");
        var data = product[i];

        oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="100%" height="100%"></div>';
        oLi.innerHTML += '<h3 id="h3" class="pro_name"><a rel="nofollow" href="#">' + data["productName"] + '</a></h3>';
        oLi.innerHTML += '<p class="pro_price">HKD$' + data["productPrice"] + '</p>';
        oLi.innerHTML += '<p class="pro_rank">' + data["productComment"] + 'K <i class="fa-regular fa-thumbs-up"></i></p>';
        oLi.innerHTML += '<div class="add_btn">加入購物車</div>';
        oUl.appendChild(oLi);
    } */

    var aBtn = getClass(oBox, "add_btn");//獲取box下的所有添加購物車按鈕
    var number = 0;//初始化商品數量
    for (var i = 0; i < aBtn.length; i++) {
        number++;
        aBtn[i].index = i;
        aBtn[i].onclick = function() {
            var oDiv = document.createElement("div");
            var data = productList[this.index];
            oDiv.className = "flex-container hid";
            oDiv.innerHTML += '<div class="check left"> <i class="i_check" id="i_check" onclick="i_check()" >√</i></div>';
            oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" ></div>';
            oDiv.innerHTML += '<div class="name left"><span>' + data["productName"] + '</span></div>';
            oDiv.innerHTML += '<div class="price left"><span>' + data["productPrice"] + '元</span></div>';
            oDiv.innerHTML +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div></div>'
            oDiv.innerHTML += '<div class="subtotal left"><span>' + data["productPrice"] + '元</span></div>'
            oDiv.innerHTML += '<div class="ctrl left"><a rel="nofollow" href="javascript:;">X</a></div>';

            oCar.appendChild(oDiv);
            var flag = true;
            var check = oDiv.firstChild.getElementsByTagName("i")[0];
            check.onclick = function() {
                // console.log(check.className);
                if (check.className == "i_check i_acity") {
                    check.classList.remove("i_acity");

                } else {
                    check.classList.add("i_acity");
                }
                getAmount();
            }
            var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
            delBtn.onclick = function() {
                var result = confirm("確定刪除嗎?");
                if (result) {
                    oCar.removeChild(oDiv);
                    number--;
                    getAmount();
                }
            /* localStorage.removeItem('myCat'); */
            }
            var i_btn = document.getElementsByClassName("count_i");
            for (var k = 0; k < i_btn.length; k++) {
                i_btn[k].onclick = function() {
                    bt = this;
                    //小計
                    at = this.parentElement.parentElement.nextElementSibling;
                    //單價
                    pt = this.parentElement.parentElement.previousElementSibling;
                    //數量值
                    node = bt.parentNode.childNodes[1];
                    console.log(node);
                    num = node.innerText;
                    num = parseInt(num);
                    num++;
                    node.innerText = num;
                    //單價
                    price = pt.innerText;
                    price = price.substring(0, price.length - 1);
                    //計算小計值
                    at.innerText = price * num + '元';
                    //計算總計值
                    getAmount();
                }
            }
            //獲取所有數量減號按鈕
            var d_btn = document.getElementsByClassName("count_d");
            for (k = 0; k < i_btn.length; k++) {
                d_btn[k].onclick = function() {
                    bt = this;
                    //小計
                    at = this.parentElement.parentElement.nextElementSibling;
                    //單價
                    pt = this.parentElement.parentElement.previousElementSibling;
                    //c_num節點
                    node = bt.parentNode.childNodes[1];
                    num = node.innerText;
                    num = parseInt(num);
                    if (num > 1) {
                        num--;
                    }
                    node.innerText = num;
                    //單價
                    price = pt.innerText;
                    price = price.substring(0, price.length - 1);
                    //計算小計值		
                    at.innerText = price * num + '元';
                    //計算總計值
                    getAmount();
                }
            }

            delBtn.onclick = function() {
                var result = confirm("確定刪除嗎?");
                if (result) {
                    oCar.removeChild(oDiv);
                    number--;
                    getAmount();
                }
            }
        }
    }
}

function getClass(oBox, tagname) {
    var aTag = oBox.getElementsByTagName("*");
    var aBox = [];
    for (var i = 0; i < aTag.length; i++) {
        if (aTag[i].className == tagname) {
            aBox.push(aTag[i]);
        }
    }
    return aBox;
}


var index = false;
function checkAll() {
    var choose = document.getElementById("car").getElementsByTagName("i");
    // console.log(choose);
    if (choose.length != 1) {
        for (i = 1; i < choose.length; i++) {
            if (!index) {
                choose[0].classList.add("i_acity2")
                choose[i].classList.add("i_acity");
            } else {
                choose[i].classList.remove("i_acity");
                choose[0].classList.remove("i_acity2")
            }
        }
        index = !index;
    }
    getAmount();
}



//價值合計
function getAmount() {
    // console.log(ys);
    ns = document.getElementsByClassName("i_acity");
    console.log(ns);
    sum = 0;
    //選中框
    document.getElementById("price_num").innerText = sum;
    for (y = 0; y < ns.length; y++) {
        //小計
        amount_info = ns[y].parentElement.parentElement.lastElementChild.previousElementSibling;
        num = parseInt(amount_info.innerText);
        sum += num;
        document.getElementById("price_num").innerText = sum;
    }
}