// Comparisons with the Logical And Operator
// บางครั้งคุณจะต้องการทดสอบมากกว่าหนึ่งสิ่งในครั้งเดียว logical and (&&) จะคืนค่า true หาก operands (ค่าที่ทดสอบ)ทางซ้ายและขวาเป็นจริงเท่านั้น

// การซ้อนคำสั่ง if (คือมีคำสั่ง if ภายในคำสั่ง if) สามารถทำให้ได้ผลลัพธ์ที่เหมือนกัน

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// จะคืนค่า Yes ก็ต่อเมื่อ num มากกว่า 5 และน้อยกว่า 10 ซึ่ง logic เดียวกันนี้ สามารถเขียนได้ดังนี้:

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";
// จงแทนที่คำสั่ง if ทั้งสองด้วย if คำสั่งเดียว โดยใช้เครื่องหมาย && กำหนดให้คืนค่า string Yes ถ้า val น้อยกว่าหรือเท่ากับ 50 และมากกว่าหรือเท่ากับ 25 แต่ถ้าเงื่อนไขเป็นเท็จ จะคืนค่า string No
function testLogicalAnd(val) {
    // Only change code below this line
  
  
  if (val>=25 && val <= 50) {
    return "Yes";
  }
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);