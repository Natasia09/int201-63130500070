// Write Reusable JavaScript with Functions
// ใน JavaScript เราสามารถแบ่งโค้ดของเราออกเป็นส่วนๆ เพื่อใช้ซ้ำได้ เรียกว่า functions

// นี่เป็นตัวอย่างของ function

// function functionName() {
//   console.log("Hello World");
// }
// คุณสามารถเรียก หรือ invoke function นี้ได้ โดยการระบุชื่อตามด้วยวงเล็บ เช่น functionName(); ทุกครั้งที่เรียกใช้ function ก็จะมีการพิมพ์ข้อความ Hello World บนหน้า console ซึ่งโค้ดทั้งหมดที่อยู่ในวงเล็บปีกกาจะรันทุกครั้งที่มีการเรียกใช้ฟังก์ชัน

// จงสร้างฟังก์ชันชื่อ reusableFunction ซึ่งพิมพ์ string Hi World ออกมาที่หน้า console
// เรียกใช้ฟังก์ชัน
function reusableFunction(){
    console.log("Hi World")
  };
  
  reusableFunction();