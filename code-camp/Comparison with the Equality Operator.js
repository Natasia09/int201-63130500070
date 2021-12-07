// Comparison with the Equality Operator
// ใน Javascript มี comparison operators (operator ที่ใช้ในการเปรียบเทียบ) มากมาย operator เหล่านี้ส่งคืนค่า boolean true หรือ false

// operator ที่เป็นพื้นฐานที่สุดคือ equality operator == ซึ่งจะเปรียบเทียบค่า 2 ค่า และส่งคืนค่า true ถ้าค่าทั้งสองเท่ากัน และ false ถ้าค่าทั้งสองไม่เท่ากัน โปรดทราบว่า equality operator แตกต่างจากการกำหนดค่า (=) ซึ่งเป็นการกำหนดค่าทางด้านขวาไปยังตัวแปรทางด้านซ้าย

// function equalityTest(myVal) {
//   if (myVal == 10) {
//      return "Equal";
//   }
//   return "Not Equal";
// }
// หาก myVal เท่ากับ 10 equality operator จะคืนค่า true ดังนั้นโค้ดในวงเล็บปีกกาจะทำงาน และฟังก์ชันจะคืนค่า Equal แต่ในทางกลับกัน หาก หาก myVal ไม่เท่ากับ 10 equality operator จะคืนค่า false ฟังก์ชันจะคืนค่า Not Equal อย่างไรก็ตาม เพื่อให้ JavaScript สามารถเปรียบเทียบ ประเภทข้อมูล ที่แตกต่างกันสองแบบ (เช่น numbers และ strings) จะต้องแปลงประเภทหนึ่งเป็นอีกประเภทหนึ่ง ซึ่งเรียกว่า Type Coercion เมื่อเป็นเช่นนั้นแล้ว ก็สามารถเปรียบเทียบเงื่อนไขต่างๆ ได้ดังนี้:

// 1   ==  1
// 1   ==  2
// 1   == '1'
// "3" ==  3
// expression เหล่านี้จะถูกประเมินเป็น true, false, true, และ true ตามลำดับ

// จงเพิ่ม equality operator ให้กับบรรทัดที่กำหนด เพื่อที่ function จะได้คืนค่า string Equal เมื่อ val มีค่าเท่ากับ 12
// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);