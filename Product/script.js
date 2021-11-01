import {product1,product2,product3,product4,product5 } from "./product.js";

const divProductsEle = document.querySelector('#product');
const divProductsEle2= document.querySelector('#product2');
//product1ctor
const divProductEle = document.createElement('div');
 divProductEle.setAttribute('class',product1.id);
 const pProductNameEle = document.createElement('h2');
 pProductNameEle.textContent =product1.name;
 divProductEle.append(pProductNameEle);

const pProductImgEle=document.createElement("img");
pProductImgEle.src=product1.img;
pProductImgEle.setAttribute('style','width:16em;');
divProductEle.append(pProductImgEle);

const pProductIdEle = document.createElement('p');
pProductIdEle.textContent =`ID: ${product1.id}`;
divProductEle.append(pProductIdEle);

const pProductPriceEle = document.createElement('p');
pProductPriceEle.setAttribute('class',"price1");
pProductPriceEle.textContent = product1.price + ' Baht';
divProductEle.append(pProductPriceEle);

const pProductDesEle = document.createElement('p');
pProductDesEle.textContent =product1.description;
divProductEle.append(pProductDesEle);



const pProductStockEle = document.createElement('p');
pProductStockEle.textContent = `Stock:${product1.stock}` ;
divProductEle.append(pProductStockEle);
pProductStockEle.appendChild(document.createElement('br'));
//pProductStockEle.appendChild(document.createElement('br'));

// const pProductbuttonEle = document.createElement('p');
// pProductbuttonEle.textContent = `Stock:${product1.stock}` ;
const button = document.createElement("button"); // สร้าง Element button
    button.setAttribute("type", "button"); // กำหนด type ให้เป็น button
    button.setAttribute("class", "btn btn-outline-primary"); 
    button.textContent = "Buy Now"; // ให้แสดงข้อความของ Button ว่า Buy Now
    pProductStockEle.appendChild(button); // กำหนดให้ button เป็น child ของ Element div
    pProductStockEle.appendChild(document.createElement('br'));
    pProductStockEle.appendChild(document.createElement('br'));
 
//----------------------------------------------------------------------------------------------------//
//Product2
const divProductEle2 = document.createElement('div');
 divProductEle2.setAttribute('class',product2.id);

// const divProductEle2 = document.createElement('div');
//  divProductEle.setAttribute('class',product2.id);
const pProductNameEle2 = document.createElement('h2');
 pProductNameEle2.textContent =product2.name;
 divProductEle.append(pProductNameEle2);

const pProductImgEle2=document.createElement("img");
pProductImgEle2.src=product2.img;
pProductImgEle2.setAttribute('style','width:16em;');
divProductEle.append(pProductImgEle2);


const pProductIdEle2 = document.createElement('p');
pProductIdEle2.textContent =`ID: ${product2.id}`;
divProductEle.append(pProductIdEle2);

const pProductPriceEle2 = document.createElement('p');
pProductPriceEle2.setAttribute('class',"price2");
pProductPriceEle2.textContent = product1.price + ' Baht';
divProductEle.append(pProductPriceEle2);

const pProductDesEle2 = document.createElement('p');
pProductDesEle2.textContent =product2.description;
divProductEle.append(pProductDesEle2);



const pProductStockEle2 = document.createElement('p');
pProductStockEle2.textContent = `Stock:${product2.stock}` ;
divProductEle.append(pProductStockEle2);
pProductStockEle2.appendChild(document.createElement('br'));

const button2 = document.createElement("button"); // สร้าง Element button
    button2.setAttribute("type", "button"); // กำหนด type ให้เป็น button
    button2.setAttribute("class", "btn btn-outline-primary"); 
    button2.textContent = "Buy Now"; // ให้แสดงข้อความของ Button ว่า Buy Now
    pProductStockEle2.appendChild(button2); // กำหนดให้ button เป็น child ของ Element div
    pProductStockEle2.appendChild(document.createElement('br'));
    pProductStockEle2.appendChild(document.createElement('br'));


//----------------------------------------------------------------------------------------------------//
//Product3
const divProductEle3 = document.createElement('div');
 divProductEle3.setAttribute('class',product3.id);

const pProductNameEle3 = document.createElement('h2');
 pProductNameEle3.textContent =product3.name;
 divProductEle.append(pProductNameEle3);

const pProductImgEle3=document.createElement("img");
pProductImgEle3.src=product3.img;
pProductImgEle3.setAttribute('style','width:16em;');
divProductEle.append(pProductImgEle3);


const pProductIdEle3 = document.createElement('p');
pProductIdEle3.textContent =`ID: ${product3.id}`;
divProductEle.append(pProductIdEle3);

const pProductPriceEle3 = document.createElement('p');
pProductPriceEle3.setAttribute('class',"price3");
pProductPriceEle3.textContent = product3.price + ' Baht';
divProductEle.append(pProductPriceEle3);

const pProductDesEle3 = document.createElement('p');
pProductDesEle3.textContent =product3.description;
divProductEle.append(pProductDesEle3);



const pProductStockEle3 = document.createElement('p');
pProductStockEle3.textContent = `Stock:${product3.stock}` ;
divProductEle.append(pProductStockEle3);
pProductStockEle3.appendChild(document.createElement('br'));

const button3 = document.createElement("button"); // สร้าง Element button
    button3.setAttribute("type", "button"); // กำหนด type ให้เป็น button
    button3.setAttribute("class", "btn btn-outline-primary"); 
    button3.textContent = "Buy Now"; // ให้แสดงข้อความของ Button ว่า Buy Now
    pProductStockEle3.appendChild(button3); // กำหนดให้ button เป็น child ของ Element div
    pProductStockEle3.appendChild(document.createElement('br'));
    pProductStockEle3.appendChild(document.createElement('br'));

    
//----------------------------------------------------------------------------------------------------//
//Product4
const divProductEle4 = document.createElement('div');
divProductEle4.setAttribute('class',product4.id);

const pProductNameEle4 = document.createElement('h2');
pProductNameEle4.textContent =product4.name;
divProductEle.append(pProductNameEle4);

const pProductImgEle4=document.createElement("img");
pProductImgEle4.src=product3.img;
pProductImgEle4.setAttribute('style','width:16em;');
divProductEle.append(pProductImgEle4);


const pProductIdEle4 = document.createElement('p');
pProductIdEle4.textContent =`ID: ${product4.id}`;
divProductEle.append(pProductIdEle4);

const pProductPriceEle4 = document.createElement('p');
pProductPriceEle4.setAttribute('class',"price4");
pProductPriceEle4.textContent = product4.price + ' Baht';
divProductEle.append(pProductPriceEle4);

const pProductDesEle4 = document.createElement('p');
pProductDesEle4.textContent =product4.description;
divProductEle.append(pProductDesEle4);



const pProductStockEle4 = document.createElement('p');
pProductStockEle4.textContent = `Stock:${product4.stock}` ;
divProductEle.append(pProductStockEle4);
pProductStockEle4.appendChild(document.createElement('br'));

const button4 = document.createElement("button"); // สร้าง Element button
   button4.setAttribute("type", "button"); // กำหนด type ให้เป็น button
   button4.setAttribute("class", "btn btn-outline-primary"); 
   button4.textContent = "Buy Now"; // ให้แสดงข้อความของ Button ว่า Buy Now
   pProductStockEle4.appendChild(button4); // กำหนดให้ button เป็น child ของ Element div
   pProductStockEle4.appendChild(document.createElement('br'));
   pProductStockEle4.appendChild(document.createElement('br'));

      
//----------------------------------------------------------------------------------------------------//
//Product5
const divProductEle5 = document.createElement('div');
divProductEle5.setAttribute('class',product5.id);

const pProductNameEle5 = document.createElement('h2');
pProductNameEle5.textContent =product5.name;
divProductEle.append(pProductNameEle5);

const pProductImgEle5=document.createElement("img");
pProductImgEle5.src=product5.img;
pProductImgEle5.setAttribute('style','width:16em;');
divProductEle.append(pProductImgEle5);


const pProductIdEle5= document.createElement('p');
pProductIdEle5.textContent =`ID: ${product5.id}`;
divProductEle.append(pProductIdEle5);

const pProductPriceEle5 = document.createElement('p');
pProductPriceEle5.setAttribute('class',"price5");
pProductPriceEle5.textContent = product5.price + ' Baht';
divProductEle.append(pProductPriceEle5);

const pProductDesEle5 = document.createElement('p');
pProductDesEle5.textContent =product5.description;
divProductEle.append(pProductDesEle5);



const pProductStockEle5= document.createElement('p');
pProductStockEle5.textContent = `Stock:${product5.stock}` ;
divProductEle.append(pProductStockEle5);
pProductStockEle5.appendChild(document.createElement('br'));

const button5 = document.createElement("button"); // สร้าง Element button
   button5.setAttribute("type", "button"); // กำหนด type ให้เป็น button
   button5.setAttribute("class", "btn btn-outline-primary"); 
   button5.textContent = "Buy Now"; // ให้แสดงข้อความของ Button ว่า Buy Now
   pProductStockEle5.appendChild(button5); // กำหนดให้ button เป็น child ของ Element div
   pProductStockEle5.appendChild(document.createElement('br'));
   pProductStockEle5.appendChild(document.createElement('br'));
divProductsEle.append(divProductEle);






