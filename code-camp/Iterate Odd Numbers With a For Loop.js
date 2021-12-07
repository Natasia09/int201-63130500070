// For loops ไม่จำเป็นต้องวนอ่านแบบเพิ่ม/ลดทีละหนึ่งในแต่ละรอบ การเปลี่ยน expression สุดท้าย ทำให้เราสามารถนับเลขคู่ได้

// เราจะเริ่มต้นด้วย i = 0 และ loop เมื่อ i < 10 เราจะเพิ่ม i ทีละ 2 ต่อรอบในการวน loop ด้วย i += 2

// var ourArray = [];
// for (var i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }
// ourArray ตอนนี้ประกอบด้วย [0,2,4,6,8] ลองเปลี่ยน initialization (การกำหนดค่าเริ่มต้น) เพื่อเราจะสามารถนับเลขคี่ได้

// ให้ push เลขคี่จาก 1 ถึง 9 เข้าไปใน myArray โดยใช้ for loop

// Setup
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
// Only change code below this line