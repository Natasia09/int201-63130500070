export { searching, showSearch };

//Searching product.
const search = document.querySelector('#buttonSch');
search.addEventListener('click', searching);
//ใช้ในการค้นหาสินค้า
function searching() {
  const productAll = document.getElementsByClassName("sProduct");
  const searchString = document.querySelector("#SearchProduct");
  const filter = searchString.value.toLowerCase();
  for (let product of productAll) {
    let name = product.textContent.toLocaleLowerCase();
    if (name.includes(filter)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}



//Fliped Search Bar.
const searchBar = document.querySelector('#Simg');
searchBar.addEventListener('click', showSearch);
//ใช้ในการแสดง Search Bar
function showSearch() {
  if (divWrap.style.display != "none") {
    divWrap.style.display = "none";
  } else {
    divWrap.style.display = "inline";
  }
}


//----------- Code เก่า ------------------ 
//let count = 0;
// function showSearch() {
// count++
//   if (count % 2 == 0) {
//     divWrap.setAttribute('style', 'display: none;');
//   } else {
//     divWrap.setAttribute('style', 'display: inline;');
//   }
// }
