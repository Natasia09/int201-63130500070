// Count Backwards With a For Loop
// for loop สามารถนับถอยหลังได้ ตราบที่เราสามารถกำหนดเงื่อนไขที่ถูกต้อง

// เพื่อให้การวนแต่ละครั้งลดลงทีละสองใน เราต้องเปลี่ยนการกำหนดค่าเริ่มต้น, เงื่อนไข และ expression สุดท้าย

// เราจะเริ่มจาก i = 10 และ loop เมื่อ i > 0 เราจะลด i ทีละ 2 ใน loop แต่ละรอบ ด้วย expression i -= 2

// var ourArray = [];
// for (var i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }
// ourArray ตอนนี้จะประกอบด้วย [10,8,6,4,2] ลองเปลี่ยนการกำหนดค่าเริ่มต้น และ expression สุดท้าย เพื่อให้เราสามารถนับถอยหลังได้ทีละสอง สำหรับการสร้าง array ที่ประกอบด้วยเลขคี่เรียงจากมากไปน้อย

// จง push เลขคี่จาก 9 ถึง 1 ให้กับ myArray โดยใช้ for loop
// Setup
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
// Only change code below this line