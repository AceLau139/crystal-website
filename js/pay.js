let deleteBtn = document.querySelector('.deleteBtn')
let payBtn = document.querySelector('.payBtn')

let addBtn = document.querySelector('.addBtn')
let minusBtn = document.querySelector('.minusBtn')
let pinkNum = 0

/* let totalCount =  */

function add(){
    pinkNum += 1;
    document.querySelector('#pinkNum').innerHTML = pinkNum;
    document.querySelector('#totalNum').innerHTML = pinkNum;
    console.log(pinkNum)
    return pinkNum;
}

function minus(){
    if(pinkNum>0){
        pinkNum -= 1;
        document.querySelector('#pinkNum').innerHTML = pinkNum;
        document.querySelector('#totalNum').innerHTML = pinkNum;
        console.log(pinkNum)
        return pinkNum;
    }
    else if(pinkNum=0){
        document.querySelector('#pinkNum').innerHTML = pinkNum;
        document.querySelector('#totalNum').innerHTML = pinkNum;
        console.log(pinkNum)
    }
}

addBtn.addEventListener('click',add)
minusBtn.addEventListener('click',minus)