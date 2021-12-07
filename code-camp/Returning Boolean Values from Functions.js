// จากที่ได้เรียนรู้มาแล้วใน Comparison with the Equality Operator ทุกการเปรียบเทียบจะคืนค่า boolean true หรือ false

// บางครั้งเราใช้ if/else statement เพื่อใช้ในการเปรียบเทียบดังนี้

// function isEqual(a,b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// แต่ยังมีวิธีที่ดีกว่าที่ได้ผลแบบเดียวกัน กล่าวคือ เนื่องจาก === คืนค่า true หรือ false เราจึงสามารถคืนค่าเป็นผลจากการเปรียบเทียบได้ดังนี้

// function isEqual(a,b) {
//   return a === b;
// }
// จงแก้ไข function isLess เพื่อนำ if/else statement ออก
function isLess(a, b) {
    // Only change code below this line
    return a<b;
    // Only change code above this line
  }
  
  console.log(isLess(10, 15));