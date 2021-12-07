import {products} from "./prod2.js";
import {displayProduct,divProducts} from "./script.js";

const searchIcon = document.querySelector('#searchIcon');
searchIcon.addEventListener('click',toggleSearchBar);
let showBar = false;

function toggleSearchBar() {
    if(showBar){
        document.getElementById('divWarp').setAttribute('style','display:none');
    }else{
        document.getElementById('divWarp').setAttribute('style','display:inline');
    }
    showBar = !showBar;
}

const searchBar = document.getElementById('searchBar');
// searchBar.addEventListener('keyup',(e) => {
//     if(e.target.value == ''){
//         divProducts.innerHTML = '';
//         displayProduct(products);
//     }else{
//         console.log(e);
//         divProducts.innerHTML = '';
//         const textSearch = e.target.value.toLowerCase();
//         const filterProducts = products.filter((product) => {
//             return (
//                 product.name.toLowerCase().includes(textSearch) ||
//                 product.id.toLowerCase().includes(textSearch)
//             );
//         });
//         displayProduct(filterProducts);
//     }
// });

const searchBtn = document.getElementById('searchBtn');
// searchBtn.addEventListener('click', () => {
//     divProducts.innerHTML = '';
//     const textSearch = searchBar.value.toLowerCase();
//     const filterProducts = products.filter((product) => {
//         return (
//             product.name.toLowerCase().includes(textSearch) ||
//             product.id.toLowerCase().includes(textSearch)
//         );
//     });
//     displayProduct(filterProducts);
// });


searchBtn.addEventListener('click', hiddenProduct);


function hiddenProduct(){
    const textSearch = searchBar.value.toLowerCase();
    products.forEach((product) =>{
        const productDiv = document.getElementById(product.id);
        if(product.name.toLowerCase().includes(textSearch) || product.id.toLowerCase().includes(textSearch)){
            productDiv.hidden = false;
        }else{
            productDiv.hidden = true;
        }
    })
}