let products=[
    {id:1,price:10},
    {id:2,price:5}
];
console.log(products);

//ลองเพิ่มid .ใหม่เข้าไปในarray products
let newProduct={id:3,price:20};
//way1
products=[...products,{id:newProduct.id,price:newProduct.price}];
//way2
//products = [...products,{...newProduct}];



//shallow copy
newProduct.price=100;
console.log(products);

//... 1)spread operator
//... 2)