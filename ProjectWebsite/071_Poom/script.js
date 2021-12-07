
import {products} from "./prod2.js";
import {addProductToCart,numProductInCart,} from "./cart.js";

// let outerDiv;
export const divProducts = document.querySelector("#products");
displayProduct(products);

export function displayProduct(products) {
    let outerDiv;
    let num = 0;
    products.forEach(product => {
    if (num == 0) {
        outerDiv = document.createElement("div");
        outerDiv.setAttribute("class", "row row-cols-2 row-cols-lg-4 g-2 g-lg-3");
        num = num + 1;
    }
    const img = document.createElement("img");
    img.src = `${product.img}`;
    img.height = "250";
    img.style = "text-align:center;";
    img.className = "img-fluid";

    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "col bg-body card rounded p-2 bd-highlight mh-100 px-md-5 py-md-5 mx-md-5 my-md-5");
    innerDiv.setAttribute('id', product.id)
    innerDiv.appendChild(img);

    const content = document.createElement("div");

    content.appendChild(document.createElement("br"));
    const pName = document.createElement("h5");
    pName.textContent = product.name;
    content.appendChild(pName);
    content.appendChild(document.createElement("br"));
    content.appendChild(document.createTextNode(`ID: ${product.id}`));
    content.appendChild(document.createElement("br"));
    content.appendChild(document.createTextNode(`${product.desc}`));
    content.appendChild(document.createElement("br"));
    content.appendChild(document.createTextNode(`Price: ${product.price} BATH`));
    content.appendChild(document.createElement("br"));
    content.appendChild(document.createTextNode(`Stock: ${product.stock}`));
    content.appendChild(document.createElement("br"));

    const add2cartbtn = document.createElement("a");
    if (product.stock === 0){
        add2cartbtn.setAttribute("class", "btn btn-danger mw-100 cursor-not-allowed");
        add2cartbtn.setAttribute("style", "cursor: not-allowed");
        add2cartbtn.appendChild(document.createTextNode("Out of stock"))
    } else{
        add2cartbtn.setAttribute("class", "btn btn-primary mw-100");
        // add2cartbtn.setAttribute("id", product.id);
        add2cartbtn.appendChild(document.createTextNode("Add to cart"));
        add2cartbtn.addEventListener('click',addProductToCart,false);
    }
    content.appendChild(add2cartbtn);
    innerDiv.appendChild(content);
    outerDiv.appendChild(innerDiv);
    divProducts.appendChild(outerDiv);
    });
}

