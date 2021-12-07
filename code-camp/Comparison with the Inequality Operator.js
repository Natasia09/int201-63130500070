// Comparison with the Inequality Operator
// inequality operator (!=) จะทำงานตรงข้ามกับ equality operator (==) ซึ่ง (!=) หมายถึง ถ้าค่าข้อมูลเท่า จะส่งคืนค่า false ในขณะที่ (==) จะคืนค่า true อย่างไรก็ตาม เช่นเดียวกับ equality operator (==) เมื่อมีการเปรียบเทียบ inequality operator (!=) จะทำการแปลงประเภทข้อมุลให้

// Examples

// 1 !=  2
// 1 != "1"
// 1 != '1'
// 1 != true
// 0 != false
// ผลลัพธ์แต่ละบรรทัดจะเป็น true, false, false, false, และ false ตามลำดับ

// จงเพิ่ม inequality operator != ใน if statement เพื่อให้ function คืนค่า string Not Equal เมื่อ val ไม่เท่ากับ 99
// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);