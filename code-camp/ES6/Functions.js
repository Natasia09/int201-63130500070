// ES6 เสนอรูปแบบ anonymous function ที่ง่ายกว่าเดิมโดยการใช้ arrow function syntax

// const myFunc = () => {
//   const myVar = "value";
//   return myVar;
// }
// เมื่อไม่มี function body และมีเพียงการคืนค่า ดังนั้น arrow function อนุญาตให้คุณไม่ต้องมี keyword return เช่นเดียวกับวงเล็บที่ล้อมรอบโค้ด ซึ่งช่วยลดความซับซ้อนของฟังก์ชันขนาดเล็ก เพราะสามารถเขียนด้วยคำสั่งบรรทัดเดียว:

// const myFunc = () => "value";
// โค้ดนี้จะคืนค่า string value by default

// จงปรับแก้ฟังก์ชันที่กำหนดค่าให้กับตัวแปร magic ซึ่งคืนค่าเป็น new Date() โดยใช้ arrow function นอกจากนี้ให้ตรวจสอบว่าไม่มีการกำหนด keyword var ในฟังก์ชัน

const magic = () =>{
    return new Date();
  }