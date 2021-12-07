// Comparisons with the Logical Or Operator
// - logical or operator (||) คืนค่า true หาก operands (ค่าที่ทดสอบ) ตัวใดตัวหนึ่งเป็น true นอกเหนือจากนั้น จะคืนค่า false
// logical or operator ประกอบด้วย pipe symbols 2 อัน (||) ซึ่งอยู่ระหว่างปุ่ม Backspace และ Enter

// รูปแบบด้านล่ารคล้ายกับที่เราเรียนกันมา

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// จะคืนค่า Yes ก็ต่อเมื่อ num อยู่ระหว่าง 5 และ 10 (รวม 5 และ 10 ด้วย) ซึ่ง logic เดียวกันนี้ สามารถเขียนได้ดังนี้:

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";
// จงรวมคำสั่ง if ทั้งสองคำสั่งให้เป็น if คำสั่งเดียว เพื่อให้คืนค่า string Outside ถ้า val ไม่ได้อยู่ระหว่าง 10 และ 20 (รวม 10 และ 20 ด้วย) แต่ถ้าเงื่อนไขเป็นเท็จ จะคืนค่า string Inside
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  testLogicalOr(15);
  
  