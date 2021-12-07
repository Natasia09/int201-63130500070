import { products } from "./product-list.js";
import { cartFn } from "./cart.js";
//ใช้ในการแสดงสินค้าในหน้า Website

export function showProduct(productList) {
  let outerDiv;
  let num = 0;
  productList.forEach((product) => {
    //ใช้ for-each ในการเข้าถึง element ทุกตัวใน array ที่ import มา และสร้าง div ของตัวเอง
    if (num == 0) {
      outerDiv = document.createElement("div");
      outerDiv.setAttribute("id", "Sample");
      outerDiv.setAttribute("class", "row row-cols-2 row-cols-lg-4 g-2 g-lg-3");
      num = num + 1;
    }
    let img = document.createElement("img");
    img.src = `${product.img}`;
    img.height = "250";
    img.style = "text-align:center;";
    img.className = "img-fluid";

    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("id", product.id);
    innerDiv.setAttribute(
      "class",
      "sProduct col bg-body card rounded-3 p-2 bd-highlight mh-100 px-md-5 py-md-5 mx-md-5 my-md-5"
    );
    innerDiv.appendChild(img);

    const content = document.createElement("div"); //สร้าง div เพิ่อที่จะดึงขัอมูลของแต่ละ element มาแสดง
    content.appendChild(document.createElement("br")); //สร้าง tag br เพื่อเว้นบรรทัด
    let pName = document.createElement("h5"); //สร้างตัวแปรที่เก็บการสร้าง tag h5
    pName.textContent = product.name; //set textcontent ให้ h5
    content.appendChild(pName); //เอาตัวแปรที่เป็น tag h5 มาต่อกิ่ง
    content.appendChild(document.createElement("br")); //สร้าง tag br เพื่อเว้นบรรทัด
    content.appendChild(document.createTextNode(`ID: ${product.id}`)); //สร้าง textNode แสดง id แล้วต่อกิ่งของ content
    content.appendChild(document.createElement("br")); //สร้าง tag br เพื่อเว้นบรรทัด
    content.appendChild(document.createTextNode(`${product.desc}`)); //สร้าง textNode แสดงคำอธิบาย แล้วต่อกิ่งของ content
    content.appendChild(document.createElement("br")); //สร้าง tag br เพื่อเว้นบรรทัด
    content.appendChild(
      document.createTextNode(`Price: ${product.price} BATH`)
    ); //สร้าง textNode แสดงราคา แล้วต่อกิ่งของ content
    content.appendChild(document.createElement("br")); //สร้าง tag br เพื่อเว้นบรรทัด
    content.appendChild(document.createTextNode(`Stock: ${product.stock}`)); //สร้าง textNode แสดง stock แล้วต่อกิ่งของ content
    content.appendChild(document.createElement("br")); //สร้าง tag br เพื่อเว้นบรรทัด

    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    if (product.stock === 0) {
      btn.setAttribute("id", product.id);
      btn.setAttribute("class", "btn btn-danger mw-100 cursor-not-allowed");
      btn.setAttribute("style", "cursor: not-allowed");
      btn.appendChild(document.createTextNode("Out of stock"));
    } else {
      btn.setAttribute("id", product.id);
      btn.setAttribute("class", "btn btn-primary mw-100");
      btn.setAttribute("target", "_blank");
      btn.appendChild(document.createTextNode("Add to cart"));
      btn.addEventListener("click", cartFn.addCart, false);
    }
    content.appendChild(btn);
    innerDiv.appendChild(content);
    outerDiv.appendChild(innerDiv);
  });
  document.querySelector("#products").appendChild(outerDiv);
}
showProduct(products);
