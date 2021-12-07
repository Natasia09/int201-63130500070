// Iterate Through an Array with a For Loop
// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

// งานทั่วไปของ JavaScript คือการวนอ่านเนื้อหาของ array โดยวิธีหนึ่งที่ทำได้คือใช้ for loop อย่างไรก็ตาม โค้ดนี้จะให้ผลลัพธ์เป็นแต่ละ element ของ array arr แสดงที่หน้า console:

// var arr = [10, 9, 8, 7, 6];
// for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// โปรดจำไว้ว่า arrays เป็น zero-based index ซึ่งหมายความว่า index สุดท้ายของ array คือ length - 1 เงื่อนไขสำหรับ loop ของเราคือ i < arr.length ซึ่งจะหยุดการวนซ้ำเมื่อ i เท่ากับ length ในกรณีนี้ การวนซ้ำครั้งสุดท้ายคือ i === 4 เช่น เมื่อ i เท่ากับ arr.length - 1 และส่งค่า 6 แสดงที่ console จากนั้น i จะเพิ่มขึ้นเป็น 5 และการวนซ้ำสิ้นสุดลงเนื่องจาก i < arr.length เป็น false

// ให้ประกาศตัวแปร total และกำหนดค่าเริ่มต้นเป้น 0 จงใช้ for loop เพื่อเพิ่มค่า element ของ array myArr ให้มีค่าเป็น total

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);//20