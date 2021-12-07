import { getCookie, setCookie } from "./cookie.js";


let cart = [];


//Function for adding product---------------------
export function addProductToCart(event){
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

export function outOfStock(event){ //กรณีที่กดเลือกของที่ out of stock (stock=0) จะแสดง alert ขึ้นมาเตือน
    alert(event.target.id + " is not available now!")
}

export function numProductInCart(){ // แสดงผลจำนวนของที่มีในตะกร้า
    let numProductInCart=0;
    for(let c of cart){
        numProductInCart += Number(c[1]);
        console.log(Number(c[1]))
    }
    console.log(typeof(numProductInCart));
    console.log(numProductInCart);
    let numCart = document.querySelector("#numCart");
    numCart.innerHTML = numProductInCart // เปลี่ยนจำนวนของในตะกร้า ที่บริเวณขวาบนของจอ
    // setCookie('cart',cart)
}


export function emptyCart(){ //ล้างตะกร้า ทำให้ array ที่เก็บข้อมูลกลายเป็น array เปล่าๆ
    cart = [];
    numProductInCart(); // เรียก function เพื่อให้ update จำนวนข้อมูลในตะกร้าสินค้า
    alert('You cart is empty now!') // แจ้ง alert ให้กับ user
}