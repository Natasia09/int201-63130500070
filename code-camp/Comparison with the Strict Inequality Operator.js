// strict inequality operator (!==) เป็นตรรกะที่ตรงกันข้ามกับ strict equality operator (===) ซึ่ง (!==) หมายถึง ถ้าค่าข้อมูลและประเภทข้อมูลเท่า จะคืนค่า false ในขณะที่ (===) จะคืนค่า true โดย strict inequality operator (!==) จะไม่แปลงประเภทข้อมูล

// Examples

// 3 !==  3
// 3 !== '3'
// 4 !==  3
// ตามลำดับแต่ละบรรทัดจะได้ค่า false, true, และ true.

// เพิ่มเครื่องหมาย (!==) ในคำสั่ง if เพื่อให้ function ส่งคืนค่า string Not Equal เมื่อ val ไม่เท่า 17 ทั้งข้อมูลและประเภท
// Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);