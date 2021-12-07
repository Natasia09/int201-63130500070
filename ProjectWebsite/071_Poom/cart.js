
let cart;
const numCart = document.querySelector("#numCart");
const localStorage = window.localStorage;

//เช็คว่าบน localStorage มี cart อยู่ก่อนมั้ย
if(JSON.parse(localStorage.getItem('cart'))===null){ //ถ้าไม่มี
    cart = []; //ให่เป็นตระกร้าใหม่
    numProductInCart(); //ไปเรียก function numProductInCart เพื่ออัพเดทหน้า html
}else{ //ถ้ามี cart[] ใน localStorage
    cart = JSON.parse(localStorage.getItem('cart')); //ให้ใช้ cart ที่ได้มาจาก localStorage
    numProductInCart(); //ไปเรียก function numProductInCart เพื่ออัพเดทหน้า html
}

const cartIcon = document.getElementById('cartIcon');
cartIcon.addEventListener('click',() => {
    if(cart.length == 0){  //check ว่ามีของมั้ย
        alert('no item in cart!!');
    }else{
        let textInfo = '';
        for (let i = 0; i < cart.length; i++) { //loop เข้าไปหาว่ามีอะไรอยู่
        textInfo += `id:${cart[i].id} qty:${cart[i].qty} 
`; //ต่อ string
        }
        alert(textInfo);
    }
});


export function addProductToCart(e) {
    // console.log(e);
    let Pid = e.target.parentNode.parentNode.id
    let exist = false;
    if(cart.length==0){ //ของชิ้นแรก เพิ่มแน่นอน
        cart.push({id:Pid,qty:1});
    }
    else{
        for(let c of cart){ //เช็คว่า id นี้มีในตะกร้าแล้วหรือยัง
            if(Pid==c.id){ // ถ้ามี เพิ่มจำนวน
                c.qty +=1;
                exist = true;
            }
        }
        if(exist==false){// ถ้าไม่มี ให้เพิ่มเป็นของใหม่ในตะกร้า
            cart.push({id:Pid,qty:1});
        }
    }
    // console.log(cart)
    localStorage.setItem('cart',JSON.stringify(cart)); //set cart ที่เพิ่ง add มาลง localStorage
    alert("add product " + Pid + " to your cart");
    numProductInCart(); //อัพเดทหน้า html
}

export function numProductInCart(){
    let numProductInCart = 0; 
    if(cart===null){ //เช็ตว่าในตระกร้ามีของมั้ย
        return 0; //ไม่มี return 0
    }
    for(let c of cart){ 
        numProductInCart += c.qty;
    }
    numCart.innerHTML = numProductInCart //เปลี่ยนค่าใน html
    return numProductInCart;
}

const trashButton = document.querySelector('#trash');
trashButton.addEventListener('click',emptyCart);

function emptyCart(){ //ล้างตะกร้า ทำให้ array ที่เก็บข้อมูลกลายเป็น array เปล่าๆ
    if(numProductInCart() === 0){
        alert('now your cart is empty');
    }else{
        cart = []; //ให้ cart[] เป็น empty array
        localStorage.clear(); //clear localStorage
        numProductInCart(); // เรียก function เพื่อให้ update จำนวนข้อมูลในตะกร้าสินค้า
        alert('empty your cart?') // แจ้ง alert ให้กับ user
    }
}