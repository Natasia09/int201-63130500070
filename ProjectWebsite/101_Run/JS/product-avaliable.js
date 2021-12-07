import { showProduct } from "./show-product.js";
import { products } from "./product-list.js";
// export { queryProduct, onloadQuery };

const divProduct = document.querySelector("#products");

//Show product available.
const checkAvl = document.querySelector("#checkAvailable");
checkAvl.addEventListener("click", queryProduct);

//Function queryProduct() Feature ในการกรองเพื่อแสดงสินค้าเฉพาะที่เหลืออยู่ใน Stock
function queryProduct() {
  let productAll = document.getElementsByClassName("sProduct"); // Get Product ทั้งหมดที่อยู่ใน HTML
  if (checkAvl.checked){ // เช็ค Status ของปุ่ม
    for (let product of productAll) { // Loop
      let name = product.textContent.toLocaleLowerCase(); // กำหนดให้ค่าที่ลูปกลายเป็นตัวพิมพ์เล็ก
      if(name.includes("stock: 0")){ //เช็คหาคำว่ามีตรงกับคำว่า stock: 0 
        product.style.display = "none"; //ถ้า True จะไม่แสดงสินค้าที่หมด Stock
      } else {
        product.style.display = "inline"; // ถ้า False จะแสดงสินค้าที่เหลือใน Stock
      }
    }
  }else{ // ถ้าปุ่มเป็น false
    for (let product of productAll) {
      product.style.display = "inline" // จะแสดงสินค้าทั้งหมด
    }
  }
    localStorage.setItem("Checkbox", JSON.stringify(checkAvl.checked)); // เก็บค่าของปุ่มลงใน LocalStorage
}

//เมื่อโหลดหรือเข้า Website ใหม่จะยังคงแสดง Feature queryProduct()
function onloadQuery() {
  let getBtnCheck = JSON.parse(localStorage.getItem("Checkbox")); // ดึง Checkbox จากใน localStorage และแปลงค่ากลับมา
  if (getBtnCheck == true) {
    document.querySelector("#checkAvailable").checked = getBtnCheck; //ตั้งสถานะของปุ่มให้เป็น True
    queryProduct();
  }
}
onloadQuery();


// --------------Code เก่า------------------
// function for check Product available
// function queryProduct() {
//   let productList = []; // สร้าง Array ว่างๆ
//   if (btn.checked == true) {
//     divProduct.innerHTML = '';
//     products.forEach(products => {
//         if (products.stock > 0) {
//             productList.push({
//                 id: products.id,
//                 name: products.name,
//                 desc: products.desc,
//                 price: products.price,
//                 stock: products.stock,
//                 img: products.img
//             })
//         }
//     })
//   } else {
//     divProduct.innerHTML = '';
//     products.forEach(products => {
//         productList.push({
//             id: products.id,
//             name: products.name,
//             desc: products.desc,
//             price: products.price,
//             stock: products.stock,
//             img: products.img
//         })
//     })
//   }
//   divProduct.innerHTML = "";
//   showProduct(productList); // เอา Array ที่สร้างไว้เป็น parameter เพื่อให้ function showProduct ทำงาน
//   localStorage.setItem("queryProduct", JSON.stringify(productList)); // เก็บข้อมูลใน Array ทั้งหมดลงใน localStorage
//   localStorage.setItem("Checkbox", JSON.stringify(btn.checked)); // เก็บ button status ลงใน localStorage
// }


// function for check Product available
// function queryProduct() {
//   let productList = []; // สร้าง Array ว่างๆ
//   if (checkAvl.checked == true) {
//     // ถ้าปุ่ม Product avaliable เป็นจริง
//     productList = products.filter((product) => {
//       return product.stock > 0;
//     });
//   } else {
//     productList = products;
//   }
//   divProduct.innerHTML = "";
//   showProduct(productList); // เอา Array ที่สร้างไว้เป็น parameter เพื่อให้ function showProduct ทำงาน
//   localStorage.setItem("queryProduct", JSON.stringify(productList)); // เก็บข้อมูลใน Array ทั้งหมดลงใน localStorage
//   localStorage.setItem("Checkbox", JSON.stringify(checkAvl.checked)); // เก็บ button status ลงใน localStorage
// }

// function onloadQuery() {
//   let getProduct = JSON.parse(localStorage.getItem("queryProduct")); // ดึง queryProduct จากใน localStorage และแปลงค่ากลับมา
//   let getBtnCheck = JSON.parse(localStorage.getItem("Checkbox")); // ดึง Checkbox จากใน localStorage และแปลงค่ากลับมา
//   if (getBtnCheck) {
//     //ถ้า Button เป็น True
//     divProduct.innerHTML = ""; //ลบ ParentNode ทั้งหมดของ #products
//     document.querySelector("#checkAvailable").checked = getBtnCheck; //ตั้งสถานะของปุ่มให้เป็น True
//     showProduct(getProduct); //แสดง Product ทั้งหมดที่ดึงค่ากลับมาจาก localStorage
//   }
// }
// onloadQuery();
