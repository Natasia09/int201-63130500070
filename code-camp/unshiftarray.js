// Manipulate Arrays With unshift()
// นอกจากที่คุณสามารถ shift element ออกจากตำแหน่งแรกของ array แล้ว คุณยังสามารถ unshift element ที่ตำแหน่งแรกของ array ได้ด้วย เช่น เพิ่ม element ที่ด้านหน้า array

// .unshift() ทำงานเหมือนกับ .push() แต่แทนที่จะเพิ่ม element ที่ส่วนท้ายของ array unshift() จะเพิ่ม element ที่จุดเริ่มต้นของ array

// ตัวอย่าง:

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");
// หลังจาก shift แล้ว ourArray ควรมีค่า ["J", "cat"] และหลังจาก unshift แล้ว ourArray ควรมีค่า ["Happy", "J", "cat"].

// จงเพิ่ม ["Paul",35] ที่ตำแหน่งแรกของตัวแปร myArray โดยใช้ unshift()
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

// Only change code below this line