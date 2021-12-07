// Manipulate Arrays With pop()
// อีกวิธีในการเปลี่ยนแปลงข้อมูลใน array ก็คือการใช้ฟังก์ชัน .pop()

// .pop() ใช้เพื่อดึงข้อมูลที่ส่วนท้ายของ array ออก เราสามารถเก็บค่าที่ดึงออกมานี้ให้กับตัวแปร กล่าวอีกนัยหนึ่งคือ .pop() จะลบ element สุดท้ายออกจาก array และคืนค่าเป็น element นั้น

// รายการทุกประเภทสามารถดึงออกจาก array ได้ ไม่ว่าจะเป็น number, string, หรือแม้แต่ array ที่ซ้อนกัน

// var threeArr = [1, 4, 6];
// var oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
// console.log ครั้งแรกจะแสดงค่า 6 และครั้งแรกสองจะแสดงค่า [1, 4]

// จงใช้ฟังก์ชัน .pop() เพื่อลบรายการสุดท้ายออกจาก myArray โดยนำ element ที่ดึงออกมากำหนดค่าให้กับ removedFromMyArray

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray=myArray.pop();
console.log(removedFromMyArray);