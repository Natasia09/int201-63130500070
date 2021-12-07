
import { productList } from './product.js';
// import { get } from './cookie.js';

export{showProduct};
// console.log(productList);
//query for id = product
let divProduct = document.querySelector('#product');
let cart = [];
createnavBar();

function createnavBar(){
    //create navBar
    let navBar = document.querySelector("#navbar");
    navBar.setAttribute('class','navbar');
    navBar.setAttribute('style','background-color:#337ab7;color:white');

    //Create inner div in navbar
    let divNavRow = document.createElement('div');
    divNavRow.setAttribute('class','row');
    divNavRow.setAttribute('style','margin: 0.5em;padding: 0.5em');

    //Create 'SearchMenu' button
    let divNavSearchFor = document.createElement('div');
    divNavSearchFor.setAttribute('class','col-xs-1');
    //Create Button
    let navBarSearchMenuBtn = document.createElement('button');
    navBarSearchMenuBtn.setAttribute('type','button');
    navBarSearchMenuBtn.setAttribute('id','searchMenu')
    navBarSearchMenuBtn.setAttribute('class','btn btn-primary')
    navBarSearchMenuBtn.setAttribute('style','border-color:#fff')
    //Create Magnified glasses into button
    let navBarSearchMenu = document.createElement('img');
    navBarSearchMenu.setAttribute('src','image/search.png')
    navBarSearchMenu.setAttribute('style','width:2.5em;height:2.5em');
    navBarSearchMenuBtn.appendChild(navBarSearchMenu);
    divNavSearchFor.appendChild(navBarSearchMenuBtn);
    divNavRow.appendChild(divNavSearchFor);
    
    //Create 'Search product name'
    let navBarSearchName = document.createElement('div');
    navBarSearchName.setAttribute('class','col-xs-3');
    navBarSearchName.setAttribute('style','display:none')
    navBarSearchName.setAttribute('id','searchName')
    navBarSearchName.appendChild(document.createTextNode('Product name:'));
    //Add text box
    let navBarTextBox = document.createElement('input');
    navBarTextBox.setAttribute('type','text');
    navBarTextBox.setAttribute('id','pName');
    navBarTextBox.setAttribute('value','');
    navBarTextBox.setAttribute('style','color:#000;')
    navBarSearchName.appendChild(navBarTextBox);
    divNavRow.appendChild(navBarSearchName);

    //Create 'Search for available' (Stock = 0)
    let navBarSearchAvailable = document.createElement('div');
    navBarSearchAvailable.setAttribute('class','col-xs-2');
    navBarSearchAvailable.setAttribute('id','searchAvailable')
    navBarSearchAvailable.setAttribute('style','display:none')
    //Add checkbox
    let navBarCheckBox = document.createElement('input');
    navBarCheckBox.setAttribute('type','checkbox');
    navBarCheckBox.setAttribute('id','checkAvailable');
    navBarCheckBox.setAttribute('style','color:#000');
    navBarSearchAvailable.appendChild(navBarCheckBox);
    navBarSearchAvailable.appendChild(document.createTextNode('Product available (in stock)'));
    divNavRow.appendChild(navBarSearchAvailable);

    //Create Search button
    let navBarSearchBtn = document.createElement('div');
    navBarSearchBtn.setAttribute('class','col-xs-1');
    navBarSearchBtn.setAttribute('id','searchButton');
    navBarSearchBtn.setAttribute('style','display:none')
    //Add search button
    let searchButton = document.createElement('button');
    searchButton.setAttribute('type','button');
    searchButton.setAttribute('class','btn btn-outline-default');
    searchButton.setAttribute('style','color:#000')
    searchButton.setAttribute('id','search');
    searchButton.appendChild(document.createTextNode('Search'))
    navBarSearchBtn.appendChild(searchButton);
    divNavRow.appendChild(navBarSearchBtn);

    //Create Empty div
    let navBarEmpty = document.createElement('div');
    navBarEmpty.setAttribute('class','col-xs-9');
    navBarEmpty.setAttribute('id','empty')
    divNavRow.appendChild(navBarEmpty);

    //Create Cart
    let navBarCart = document.createElement('div');
    navBarCart.setAttribute('class','col-xs-2');
    //Add cart image
    let cartPic = document.createElement('img');
    cartPic.setAttribute('src','image/cart.png');
    cartPic.setAttribute('style','width:3em;height:3em');
    navBarCart.appendChild(cartPic);
    //Add number of products in cart
    let navBarNumCart = document.createElement('span');
    navBarNumCart.setAttribute('id','numCart');
    navBarNumCart.setAttribute('style','font-size: 20px')
    navBarNumCart.appendChild(document.createTextNode(0));
    navBarCart.appendChild(navBarNumCart);
    navBarCart.appendChild(document.createTextNode(' products in cart '))
    //Add trash button for empty the cart
    let navBarTrashButton = document.createElement('button');
    navBarTrashButton.setAttribute('id','trash');
    navBarTrashButton.setAttribute('class','btn btn-primary');
    navBarTrashButton.setAttribute('style','border-color:#fff')
    let trash = document.createElement('img')
    trash.setAttribute('src','image/bin.png')
    trash.setAttribute('style','width:2em;height:2em');
    navBarTrashButton.appendChild(trash)
    navBarCart.appendChild(navBarTrashButton)
    divNavRow.appendChild(navBarCart);


    //appendChild to all element
    navBar.appendChild(divNavRow);
}

showProduct(productList);
// showProduct(productList);

function showProduct(productList){
    for(let p of productList){
        let divP = document.createElement('div');
        divP.setAttribute('id',p.id);
        divP.setAttribute('class','col-md-5')
        divP.setAttribute('style','padding:2em;margin:2em;border:double grey 1px;height:auto;')
        //Add image of product
        let img = document.createElement('img');
        img.setAttribute('src',p.image);
        img.setAttribute('style','width:16em;height:16em;text:center')
        divP.appendChild(img)
        divP.appendChild(document.createElement('br'));
        //Add product details
        divP.appendChild(document.createTextNode('ID: ' + p.id));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Name: ' + p.name));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Desription: ' + p.description));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Price: ' + p.price + ' baht'));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Stock: ' + p.stock));
        divP.appendChild(document.createElement('br'));
        
        //create button
        const button = document.createElement('button');
        button.setAttribute('type','button');
        button.setAttribute('id',p.id)
        if(p.stock==0){
            button.setAttribute('class','btn btn-danger');
            button.appendChild(document.createTextNode("Out of stock"));
            button.addEventListener('click',outOfStock)
        }
        else{
            button.setAttribute('class','btn btn-primary');
            button.appendChild(document.createTextNode("Buy"));
            button.addEventListener('click',addProductToCart)
        }
        divP.appendChild(button);
        divProduct.appendChild(divP);
    }
}

//function for showing search menu---------------------
const searchBtnMenu = document.querySelector('#searchMenu');
searchBtnMenu.addEventListener('click',toggleSearchMenu)
let searchMenuShow = false; 
function toggleSearchMenu(){
    if(searchMenuShow){//searchMenu แสดงผลอยู่ -> ถ้ากดก็จะซ่อน
        document.querySelector('#searchName').setAttribute('style','display:none');
        document.querySelector('#searchAvailable').setAttribute('style','display:none');
        document.querySelector('#searchButton').setAttribute('style','display:none');
        document.querySelector('#empty').setAttribute('class','col-xs-9');
    }
    else{ //searchMenu ซ่อนอยู่ -> ถ้ากดจะแสดง
        document.querySelector('#searchName').setAttribute('style','display:inline');
        document.querySelector('#searchAvailable').setAttribute('style','display:inline');
        document.querySelector('#searchButton').setAttribute('style','display:inline');
        document.querySelector('#empty').setAttribute('class','col-xs-3');
    }
    // console.log(searchMenuShow);
    searchMenuShow = !searchMenuShow;
}

//function for searching product------------------------
const searchBtn = document.querySelector('#search');
const pName = document.getElementById("pName");
const checkAvailable = document.querySelector('#checkAvailable');

searchBtn.addEventListener('click', queryProduct);

function queryProduct(){
    if(checkAvailable.checked==false & pName.value==''){ //เผื่อปัด cas นี้ทิ้ง ดักกรณีไว้ก่อน
        // checkAvailable.checked เพื่อดูว่าติ๊กอยู่รึเปล่า
        // ไม่มีเงื่อนไข แสดงผลทุกรายการ ต้องมีโค้ด 2 บรรทัดล่างเผื่อในกรณีที่มีการ query บางส่วน แล้วยกเลิก จะได้แสดงผลทั้งหมดออกมา
        divProduct.innerHTML = '';
        showProduct(productList)
    } 
    else{
        divProduct.innerHTML = ''; // ล้างข้อมูลใน div product
        let newProductList = [];
        for(let p of productList){
            if(p.name.toLowerCase().includes(pName.value.toLowerCase()) | pName.value==''){//เช็คว่า pName ไม่มีเงื่อนไข หรือ pName ตรงกับค่า product ของเรา
                if(checkAvailable.checked==true){//เช็คในส่วน checkAvailable ว่ามีการตรวจว่ามีของหรือไม่
                    if(p.stock>0) newProductList.push(p); // ถ้า stock = 0 ก็จะไม่แสดงผล
                }
                else{
                    newProductList.push(p); // ไม่มีเงื่อนไขเพิ่มเติมก็เอาข้อมูลนั้น push ลง array ได้เลย
                }
            }
        }
        
        showProduct(newProductList) // เรียก function การแสดงผล โดยส่ง parameter เป็น array ที่เราทำการกรอง เลือก ข้อมูลแล้ว
    }
    
}

//Function for adding product---------------------
function addProductToCart(event){
    let Pid = event.target.id
    let exist = false;
    if(cart.length==0){ //ของชิ้นแรก เพิ่มแน่นอน
        cart.push([Pid,1])
    }
    else{
        for(let c of cart){ //เช็คว่า id นี้มีในตะกร้าแล้วหรือยัง
            if(Pid==c[0]){ // ถ้ามี เพิ่มจำนวน
                c[1] +=1;
                exist = true
            }
        }
        if(exist==false){// ถ้าไม่มี ให้เพิ่มเป็นของใหม่ในตะกร้า
            cart.push([Pid,1]);
        }
    }
    console.log(cart)
    
    alert("add product " + Pid + "to your cart")
    numProductInCart();
}

function outOfStock(event){ //กรณีที่กดเลือกของที่ out of stock (stock=0) จะแสดง alert ขึ้นมาเตือน
    alert(event.target.id + " is not available now!")
}

function numProductInCart(){ // แสดงผลจำนวนของที่มีในตะกร้า
    let numProductInCart=0;
    for(let c of cart){
        numProductInCart += c[1];
    }
    console.log(numProductInCart);
    let numCart = document.querySelector("#numCart");
    numCart.innerHTML = numProductInCart // เปลี่ยนจำนวนของในตะกร้า ที่บริเวณขวาบนของจอ
}

//Function empty the cart-------------------------------------
const trashButton = document.querySelector('#trash');
trashButton.addEventListener('click',emptyCart)

function emptyCart(){ //ล้างตะกร้า ทำให้ array ที่เก็บข้อมูลกลายเป็น array เปล่าๆ
    cart = [];
    numProductInCart(); // เรียก function เพื่อให้ update จำนวนข้อมูลในตะกร้าสินค้า
    alert('You cart is empty now!') // แจ้ง alert ให้กับ user
}





