let arr1 = []; //array

let obj = {}; //object

console.log(typeof arr1);

console.log(arr1.length);

arr1 = [10, true, 1, 'unknown', ['A', 'B', 'C'], { id: 1, name: 'Adam' }]; //array is untyped

console.log(arr1[arr1.length - 1]);

console.log(arr1[arr1[2]]); // [integer expression]



console.log(arr1[4][arr1[4].length - 1]); //access 'C'



console.log(arr1[5].name); //access name property



arr1[4][0] = 'X';

console.log(arr1[4]);

arr1[0] = 20;

console.log(arr1);

//spread operator

let arr2 = ['confirm', ...arr1];

console.log(arr2);



let arr3 = 'hello world';

let arr4 = [...arr3];

console.log(arr4.length);