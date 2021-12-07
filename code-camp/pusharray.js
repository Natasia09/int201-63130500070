// Manipulate Arrays With push()
// การนำข้อมูลมาต่อท้าย array ทำได้ง่ายๆ โดยการใช้ ฟังก์ชัน push()

// .push() รับ parameter ตั้งแต่หนึ่งตัวขึ้นไป แล้ว "pushes (ดัน)" ไปไว้ที่ส่วนท้ายของ array

// ตัวอย่าง:

// var arr1 = [1,2,3];
// arr1.push(4);

// var arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// arr1 ควรมีค่า [1, 2, 3, 4] และ arr2 ควรมีค่า ["Stimpson", "J", "cat", ["happy", "joy"]]

// จง Push ["dog", 3] ไปที่ด้านท้ายของตัวแปร myArray
// Setup
var myArray = [["John", 23], ["cat", 2]];
 myArray .push(["dog", 3]);
// Only change code below this line