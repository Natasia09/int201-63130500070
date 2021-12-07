// Passing Values to Functions with Arguments
// Parameters คือตัวแปรที่ทำหน้าที่เหมือน placeholders (ข้อความในตัวยึด) ที่รับค่าที่เราจะป้อนเข้าไปให้กับฟังก์ชันเมื่อมีการเรียก เมื่อมีการสร้างฟังก์ชัน โดยทั่วไปจะกำหนด parameter ตั้งแต่หนึ่งตัวขึ้นไป ส่วนค่าจริงๆ ที่ป้อน (หรือ "ส่ง") เข้าไปในฟังก์ชันเมื่อมีการเรียก เรียกว่า arguments

// นี่คือ function ที่มี 2 parameter คือ param1 และ param2

// function testFun(param1, param2) {
//   console.log(param1, param2);
// }
// จากนั้นเราสามารถเรียก testFun ได้ดังนี้: testFun("Hello", "World"); เราได้ส่ง string arguments 2 ตัว เข้าไป คือ Hello กับ World โดยภายในฟังก์ชัน ค่าของ param1 จะเท่ากับ string Hello และค่าของ param2 จะเท่ากับ string World หมายเหตุ คุณสามารถเรียก testFun ได้อีกครั้งด้วย argument ที่ต่างออกไป และ parameter ก็จะรับค่าจาก argument ใหม่นั้นเข้าไป

// -
// จงสร้างฟังก์ชันชื่อ functionWithArgs ที่รับ argument 2 ตัว และแสดงผลรวมของ argument ทั้งสองตัวนั้นที่หน้า console
// จงเรียกใช้ฟังก์ชัน โดยส่งเลข 2 ตัวเข้าไปเป็น argument
function functionWithArgs(p1,p2){
    console.log(p1+p2);
  }
  functionWithArgs(1,2);