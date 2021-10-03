//num1 and num2 are primitive variables เก็บแบบsingle value
let num1 = 20;
let num2 = 10;
num2 = num1;
console.log(num2);
console.log(num1 == num2); //10==20
num2 = 55;
console.log(num1);
//-----------------------------------------------------------------------//
//per1 and per2 are Object variables เก็บแบบmultiple value
let per1 = { id: 1, name: 'Natasia' };
let per2 = { id: 1, name: 'Natasia' };
console.log(per1==per2);//false
per2 = per1; //memory addree that points to its properties //FFEE
console.log(per1 == per2); //true, compare memory address
console.log(per1.name);
per2.name = 'Thiti';
console.log(per1.name); //Thiti
//---------------------------------------------------------------------//
//arr1 and arr2 are object variables because array in JavaScript are objects
let arr1 = [0, 2, 4, 6];
let arr2 = [0, 2, 4, 6];

console.log(arr1 === arr2); //false
arr2 = arr1; //memory address of arr1 to arr2
console.log(arr1 === arr2);//true
arr2[1] = 5;
console.log(arr1[1]); //1. ? 5
console.log(arr1); // 2. ? [0, 5, 4, 6]
console.log(arr2); // 3.? [0, 5, 4, 6]
//---------------------------------------------------------------------//
function doSomething(value,id) {//non-primitive(obj) type(memory address)
    //value (formal parameter)=item1(actual parameter) //memory address
    value.name = 'unknown';
    this._id=id;
  }
  
  let item1 = { name: 'ABC',id:2 };
  doSomething(item1);
  console.log(item1.name); //"unknown"
  console.log(item1); //{ name: 'unknown', id: 2 }
  
  //----------------------------------------
  function doSomething2(value) {//primitive type(single value)
    //value=isNum , primitive
    value = 100;
  }
  let isNum = true;
  doSomething2(isNum);
  console.log(isNum); //true
  