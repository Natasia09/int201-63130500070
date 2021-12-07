// Manipulate Arrays With shift()
// pop() นำ element สุดท้ายของ array ออกเสมอ แต่หากคุณต้องการนำ element แรกออกล่ะ?

// นั่นคือสิ่งที่ .shift() ทำได้ โดย .shift() ทำงานคล้ายกับ .pop() แต่ .shift() จะนำ element แรกออกแทนที่จะเป็น element สุดท้าย

// ตัวอย่าง:

// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();
// removedFromOurArray ควรมีค่า string Stimpson และ ourArray ควรมี ["J", ["cat"]]

// จงใช้ฟังก์ชัน .shift() เพื่อนำ element แรกออกจาก myArray โดยนำ element ที่ดึงออกมากำหนดค่าให้กับ removedFromMyArray
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray= myArray.shift();