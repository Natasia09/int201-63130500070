let arr1 = []; //array

let obj = {}; //object

console.log(typeof arr1);

console.log(arr1.length);

arr1 = [10, true, 1, 'unknown', ['A', 'B', 'C'], { id: 1, name: 'Adam' }]; //array is untyped

console.log(arr1[arr1.length - 1]);

console.log(arr1[arr1[2]]); // [integer expression]
console.log(arr1[arr1.length - 1].name);