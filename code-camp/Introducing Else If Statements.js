// Introducing Else If Statements
// ถ้าคุณมีเงื่อนไขหลายๆ เงื่อนไขที่ต้องเช็ค คุณสามารถใช้คำสั่ง if ต่อเนื่องกัน ด้วยคำสั่ง else if

// if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }
// จงเปลี่ยน logic ไปใช้คำสั่ง else if
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5) {
      return "Smaller than 5";
    }else{
      return "Between 5 and 10";
  }
  }
  
  testElseIf(7);
  //-------------------
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  // Change this value to test
  console.log(orderMyLogic(7));
  console.log(orderMyLogic(2));
  