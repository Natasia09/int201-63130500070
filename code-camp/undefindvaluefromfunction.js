// Understanding Undefined Value returned from a Function
// ฟังก์ชันสามารถมี return statement ได้ แต่ก็ไม่จำเป้นต้องมี ในกรณีที่ฟังก์ชันไม่มี return statement เมื่อเราเรียกฟังก์ชันนี้ จะมีประมวลผลโค้ดภายใน และคืนค่า undefined ออกมา

// Example

// var sum = 0;
// function addSum(num) {
//   sum = sum + num;
// }
// addSum(3);
// addSum เป็นฟังก์ชันที่ไม่่มี return statement ฟังก์ชันนี้จะเปลี่ยนค่าตัวแปร global sum แต่คืนค่าเป็น undefined

// จงสร้างฟังก์ชัน addFive ที่ไม่มี argument โดยฟังก์ชันนี้จะนำ 5 ไปบวกให้กับตัวแปร sum แต่คืนค่าเป็น undefined
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

console.log(addThree());
addFive();
// จงเรียกใช้ function processArg ด้วย argument 7 และกำหนดค่าส่งกลับไปยังตัวแปร processed

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed=processArg(7);
// Only change code below this line