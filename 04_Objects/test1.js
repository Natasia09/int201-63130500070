//num1 num2 Primitive variable
let num1=10;
let num2=10;
num2=num1;

//console.log(num1==num2);
num2=55;
//console.log(num1);

//per1 per2 Object variable
let per1={id:1,name:"Natasia"}
let per2={id:1,name:"Natasia"}
per2=per1//memory address the point to its properties

//console.log(per1==per2);//true,compare memory address
per2.name='Thiti';
//console.log(per1.id,per1.name);//Thiti

//-----------------------------------
//arr1 and arr2 are object variables because array in js are object
let arr1=[0,2,4,6];
let arr2=[0,2,4,6];

console.log(arr1===arr2);//false
arr2=arr1; //memory address of arr1 to arr2
arr2[1]=5;
console.log(arr[1]);//5
console.log(arr1);//[0,5,4,6]
console.log(arr2);//[0,5,4,6]

//--------------------------------------
function soSomething(value){
  
    value.name="unknow"
}

let item1={name:'ABC'}
doSomething(item1);
console.log(item1.name);