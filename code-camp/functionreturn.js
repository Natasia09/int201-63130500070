// Return a Value from a Function with Return
// เราสามารถส่งค่าไปยังฟังก์ชันด้วย arguments คุณสามารถใช้คำสั่ง return เพื่อส่งค่ากลับจากฟังก์ชันได้

// Example

// function plusThree(num) {
//   return num + 3;
// }
// var answer = plusThree(5);
// answer มีค่า 8.

// plusThree รับ argument ผ่านเข้ามายัง num และส่งกลับค่าเท่ากับ num + 3.

// จงสร้างฟังก์ชัน timesFive ที่รับ argument 1 ตัว นำมาคูณด้วย 5 แล้วคืนค่าเป็นผลลัพธ์ที่คำนวณได้
function timesFive(num) {
    return num *5;
  }
  var answer = timesFive(5);