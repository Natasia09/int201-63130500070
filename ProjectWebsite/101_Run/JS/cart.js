import { products } from "./product-list.js";
export { cartFn }

let cart = [];
let numCart = document.querySelector("#num"); //รับ id numCart

//CartFn ที่เป็น Object เพื่อใช้เก็บ Function ที่เกี่ยวกับการเพิ่ม, ลบ, และแสดงสินค้าในตะกร้า
let cartFn = {
    addCart : (event) => {
        let id = event.target.id; // รับ Id ของ button
        let check = cart.find(value => { return value.id == id }) //ใช้ find ในการหาสินค้าในตะกร้า
       //สำหรับเช็คสินค้าที่อยู่ในตะกร้าและสินค้าที่เหลือใน Stock ถ้าสินค้าในตะกร้ามากกว่าใน Stock จะไม่สามารถเพิ่มสินค้าได
        if (check != undefined) { //ถ้าไม่พบสินค้าในตะกร้า
            let checkStock = products.find(value => {return value.id == check.id}) //เทียบสินค้าที่อยู่ในตะกร้าและที่เหลือใน Stock
            if(check.quantity < checkStock.stock){
                check.quantity++ // ถ้าเป็น True ให้เพิ่มจำนวนสินค้า
                cartFn.saveCart(); // เรียกใช้ function saveCart
            }else{
                alert('Out of Stock')
            }
        } else {
            cart.push({ id: id, quantity: 1 }) //กรณีเป็น False ให้เพิ่ม id และจำนวนสินค้าภายในตะกร้า
            alert(` " ${id} " added in your cart`); // แสดง alert
            cartFn.saveCart(); // เรียกใช้ function saveCart
        }
        console.log(cart)
        numCart.innerHTML = cartFn.numProductInCart() //ส่ง numCart ให้แสดง DOM 
    },
    //ใช้ในการเก็บสินค้าลง localStorage
    saveCart: () => {
        console.log(JSON.stringify(cart));
        localStorage.setItem('shoppingCart',JSON.stringify(cart)); // เก็บสินค้าใน cart ลงใน localStorage โดยแปลงให้เป็น JSON
    },
    //เช็คสินค้าในตะกร้า
    numProductInCart: () => {
        let numProduct = cart.reduce((count, cartItem) => count + cartItem.quantity, 0); //นับจำนวนสินค้าในตะกร้า
        return numProduct;
    },
    //ลบสินค้าในตะกร้า
    remove : () => {
        cart = [];
        localStorage.removeItem('shoppingCart'); // ลบ shoppingCart ที่อยู่ใน localStorage
        alert('Remove product in cart.')
        numCart.textContent = cart.length;
    },
    //แสดงรายการสินค้าที่อยู่ในตะกร้า
    showCart : () => {
        if (cart.length == 0) {
            alert('Cart is empty!!')
        } else {
            let alertText = '';
            cart.forEach(product => { alertText += `ProductID: ${product.id} Unit: ${product.quantity}\n`})
            alert("this is your product\n" + alertText);
        }
    }
}

//Clear Product.
const del = document.querySelector('#delete')
del.addEventListener('click',cartFn.remove)


//Show product in cart.
const showProduct = document.querySelector('#show')
showProduct.addEventListener('click',cartFn.showCart);

//loadCart() เมื่อโหลดหน้า Website กลับมาข้อมูลสินค้าจะยังเหมือนเดิม
function loadCart() {
    let cartLoad = JSON.parse(localStorage.getItem('shoppingCart')); // รับ shoppingCart ที่อยู่ใน localStorage
    cart = cartLoad != null ? cartLoad : []; //ถ้าใน cartLoad ไม่เท่ากับ null ให้แปลง cartLoad กลับมาเป็น Array Object
    numCart.innerHTML = cartLoad != null ? cartLoad.reduce((count, item) => count + item.quantity, 0) : 0;
}//numCart นับจำนวนสินค้าที่เก็บไว้ใน localStorage และแสดงออกมาโดยใช้ reduce
loadCart();

