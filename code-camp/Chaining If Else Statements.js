// คำสั่ง if/else สามารถเชื่อมต่อกันเพื่อสร้าง logic ที่ซับซ้อน ด้านล่างเป็น pseudocode ของการเชื่อมต่อคำสั่ง if / else if หลายคำสั่ง

// if (condition1) {
//   statement1
// } else if (condition2) {
//   statement2
// } else if (condition3) {
//   statement3
// . . .
// } else {
//   statementN
// }
// จงเขียนเชื่อมคำสั่ง if/else if เพื่อให้เป็นไปตามเงื่อนไขด้านล่าง

// num < 5 - ส่งคืนค่า Tiny
// num < 10 - ส่งคืนค่า Small
// num < 15 - ส่งคืนค่า Medium
// num < 20 - ส่งคืนค่า Large
// num >= 20 - ส่งคืนค่า Huge
function testSize(num) {
    // Only change code below this line
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
     return "Huge"
  } else {
    statementN
  }
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);