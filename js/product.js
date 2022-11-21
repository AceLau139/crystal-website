window.onload = function() {
    var product = [{
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
    var oCar = document.querySelector("#car");
    var oUl = document.getElementsByTagName("ol")[0];

    //add items & shopping cart btn
    for (let i = 0; i < product.length; i++) {
        var oLi = document.createElement("li");
        var data = product[i];

        oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="100%" height="100%"></div>';
        oLi.innerHTML += '<h3 id="h3" class="pro_name"><a rel="nofollow" href="#">' + data["productName"] + '</a></h3>';
        oLi.innerHTML += '<p class="pro_price">HKD$' + data["productPrice"] + '</p>';
        oLi.innerHTML += '<p class="pro_rank">' + data["productComment"] + 'K <i class="fa-regular fa-thumbs-up"></i></p>';
        oLi.innerHTML += '<div class="add_btn">加入購物車</div>';
        oUl.appendChild(oLi);

    }

    var aBtn = getClass(oBox, "add_btn");//獲取box下的所有添加購物車按鈕
    var number = 0;//初始化商品數量
    for (var i = 0; i < aBtn.length; i++) {
        number++;
        aBtn[i].index = i;
        aBtn[i].onclick = function() {
            var oDiv = document.createElement("div");
            var data = product[this.index];
            oDiv.className = "flex-container hid";
            oDiv.innerHTML += '<div class="check left"> <i class="i_check" id="i_check" onclick="i_check()" >√</i></div>';
            oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" ></div>';
            oDiv.innerHTML += '<div class="name left"><span>' + data["productName"] + '</span></div>';
            oDiv.innerHTML += '<div class="price left"><span>' + data["productPrice"] + '元</span></div>';
            oDiv.innerHTML +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div></div>'
            oDiv.innerHTML += '<div class="subtotal left"><span>' + data["productPrice"] + '元</span></div>'
            oDiv.innerHTML += '<div class="ctrl left"><a rel="nofollow" href="javascript:;">X</a></div>';

            oCar.appendChild(oDiv);
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
                    //console.log(node);
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

// local storage
var cartArea = document.querySelector('#car')
var itemDiv = document.createElement('div')


const retrieved =()=>{
    const storage = localStorage.getItem('cartItem');
    const storageItem = (JSON.parse(storage))
    console.log(storageItem)

    var itemDiv = document.createElement("div");

    for (let i=0; i<storageItem.length; i++) {
        //console.log(`${property}: ${storageItem[property]}`);
        console.log('storage: '+storage)

        const itemDiv = document.createElement('div')
        //innerHTML into cartArea
        itemDiv.className = "flex-container hid";
        itemDiv.innerHTML += '<div class="check left"> <i class="i_check" id="i_check" onclick="i_check()" >√</i></div>';
        itemDiv.innerHTML += `<div class="img left"><img src="${storageItem[i].ProductUrl}" ></div>`;
        itemDiv.innerHTML += `<div class="name left"><span> ${storageItem[i].ProductName} </span></div>`;
        itemDiv.innerHTML += `<div class="price left"><span> ${storageItem[i].productPrice} 元</span></div>`;
        itemDiv.innerHTML +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div></div>'
        itemDiv.innerHTML += `<div class="subtotal left"><span> ${storageItem[i].productPrice} 元</span></div>`;
        itemDiv.innerHTML += '<div class="ctrl left removeStorage"><a rel="nofollow" href="javascript:;">X</a></div>';
        
        // itemDiv.appendChild(newContent);
        cartArea.appendChild(itemDiv)
        // console.log(itemDiv.innerHTML + property)

        var check = itemDiv.firstChild.getElementsByTagName("i")[0];
        check.onclick = function() {
            // console.log(check.className);
            if (check.className == "i_check i_acity") {
                check.classList.remove("i_acity");
            } else {
                check.classList.add("i_acity");
            }
            getAmount();
        }

        //remove local storage
        var removeStorage = itemDiv.lastChild.getElementsByTagName("a")[0];
        removeStorage.onclick = function() {
            var result = confirm("確定刪除嗎?");
            if (result) {
                cartArea.removeChild(itemDiv);
                number--;
                getAmount();
            }
        }


        //remove local storage
        var removeStorage = document.querySelectorAll('.removeStorage')
        console.log('removeStorage: '+removeStorage)

        //const storage = localStorage.getItem('cartItem');
        //const storageItem = (JSON.parse(storage))

        /* for(let i=0; i<removeStorage.length; i++){
            removeBtn[i].addEventListener('click', ()=>{
                var result = confirm("確定刪除嗎?");
                if (result) {
                    window.localStorage.removeItem(removeStorage[i]);
                    cartArea.removeChild(itemDiv)
                    retrieved();
                }
            })
        } */

        removeStorage.forEach(removeBtn => {
            removeBtn.addEventListener('click', ()=>{
                var result = confirm("確定刪除嗎?");
                if (result) {
                    window.localStorage.removeItem('cartItem');
                    cartArea.removeChild(itemDiv)
                    console.log(storageItem)
                    retrieved();
                }
            })
        });

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
                //console.log(node);
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
    }
}

//價值合計
function getAmount() {
    // console.log(ys);
    ns = document.getElementsByClassName("i_acity");
    //console.log(ns);
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

retrieved()
window.addEventListener("storage", retrieved);
