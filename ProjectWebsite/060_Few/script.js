import {product,product2,product3,product4,product5} from './product.js'

// เข้าถึง div ที่เราสร้างไว้ โดยมี div ที่มี class เป็น product, product2
let productDiv = document.querySelector(".product");
let productDiv2 = document.querySelector(".product2");

//1 product 1
let product1ShowDiv = document.createElement("div"); //สร้าง div เป็น element
product1ShowDiv.setAttribute("id" , product.id) //กำหนด attribrute ที่เป็น id โดยมีค่าคือ product id

let product1Img = document.createElement("img"); // สร้าง element img
product1Img.setAttribute("src","https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000") // กำหนด src ของรูป
product1Img.setAttribute("style","width:200px;heght:200px;") // สร้าง attribrute style
product1ShowDiv.append(product1Img); // นำ div ของ product1ShowDiv ใส่ใน productImg

let product1Name = document.createElement("p"); // สร้าง element p ไว้เก็บค่า name
product1Name.textContent = product.name; // นำค่า name ของ product ใส่ใน product1Name
product1ShowDiv.append(product1Name); // นำ product1Name ใส่ใน product1ShowDiv

let product1Desc = document.createElement("p"); // สร้าง element p ไว้เก็บค่า desc
product1Desc.textContent = product.desc; // นำค่า desc ของ product ใส่ใน product1Desc
product1ShowDiv.append(product1Desc); // นำ product1Desc ใส่ใน product1ShowDiv

let product1Price = document.createElement("p"); // สร้าง element p ไว้เก็บค่า price
product1Price.textContent = product.price; // นำค่า price ของ product ใส่ใน product1Desc
product1ShowDiv.append(product1Price);  // นำ product1Price ใส่ใน product1ShowDiv
productDiv.append(product1ShowDiv) // นำ product1ShowDiv ที่มีข้อมูลของ product ชิ้นที่ 1 ใส่ใน productDiv

// และทำแบบเดียวกันกับข้อมูลที่เหลือ
//2 product 2
let product2ShowDiv = document.createElement("div");
product2ShowDiv.setAttribute("id" , product2.id)

let product2Img = document.createElement("img");
product2Img.setAttribute("src","https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/i/p/iphone_12_purple_pure_back_iphone_12_purple_pure_front_2-up_print__usen_3.jpg")
product2Img.setAttribute("style","width:200px;heght:200px;")
product2ShowDiv.append(product2Img);


let product2Name = document.createElement("p");
product2Name.textContent = product2.name;
product2ShowDiv.append(product2Name);

let product2Desc = document.createElement("p");
product2Desc.textContent = product2.desc;
product2ShowDiv.append(product2Desc);

let product2Price = document.createElement("p");
product2Price.textContent = product2.price;
product2ShowDiv.append(product2Price);
productDiv.append(product2ShowDiv);

//3 product 3
let product3ShowDiv = document.createElement("div");
product3ShowDiv.setAttribute("id" , product3.id)

let product3Img = document.createElement("img");
product3Img.setAttribute("src","https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617761672000")
product3Img.setAttribute("style","width:200px;heght:200px;")
product3ShowDiv.append(product3Img);


let product3Name = document.createElement("p");
product3Name.textContent = product3.name;
product3ShowDiv.append(product3Name);

let product3Desc = document.createElement("p");
product3Desc.textContent = product3.desc;
product3ShowDiv.append(product3Desc);

let product3Price = document.createElement("p");
product3Price.textContent = product3.price;
product3ShowDiv.append(product3Price);
productDiv.append(product3ShowDiv);

//4 product 4
let product4ShowDiv = document.createElement("div");
product4ShowDiv.setAttribute("id" , product4.id)

let product4Img = document.createElement("img");
product4Img.setAttribute("src","https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_TH?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948881000")
product4Img.setAttribute("style","width:200px;heght:200px;")
product4ShowDiv.append(product4Img);

let product4Name = document.createElement("p");
product4Name.textContent = product4.name;
product4ShowDiv.append(product4Name);

let product4Desc = document.createElement("p");
product4Desc.textContent = product4.desc;
product4ShowDiv.append(product4Desc);

let product4Price = document.createElement("p");
product4Price.textContent = product4.price;
product4ShowDiv.append(product4Price);
productDiv2.append(product4ShowDiv);

//5 product 5
let product5ShowDiv = document.createElement("div");
product5ShowDiv.setAttribute("id" , product5.id)

let product5Img = document.createElement("img");
product5Img.setAttribute("src","https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202009_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1599672435000")
product5Img.setAttribute("style","width:200px;heght:200px;")
product5ShowDiv.append(product5Img);

let product5Name = document.createElement("p");
product5Name.textContent = product5.name;
product5ShowDiv.append(product5Name);

let product5Desc = document.createElement("p");
product5Desc.textContent = product5.desc;
product5ShowDiv.append(product5Desc);

let product5Price = document.createElement("p");
product5Price.textContent = product5.price;
product5ShowDiv.append(product5Price);
productDiv2.append(product5ShowDiv);