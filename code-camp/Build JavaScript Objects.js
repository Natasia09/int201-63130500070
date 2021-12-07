// Build JavaScript Objects
// คุณอาจจะเคยได้ยินคำว่า object มาก่อน

// Objects คล้ายกับ arrays เว้นแต่แทนที่จะใช้ indexes ในการเข้าถึง และแก้ไขข้อมูล คุณจะเข้าถึงข้อมูลใน object ผ่านสิ่งที่เรียกว่า properties

// Object มีประโยชน์สำหรับการจัดเก็บข้อมูลในลักษณะที่มีโครงสร้าง และสามารถเป็นสิ่งแทนวัตถุในโลกแห่งความเป็นจริงได้ เช่น แมว

// ต่อไปนี้เป็นตัวอย่างของ cat object:

// var cat = {
//   "name": "Whiskers",
//   "legs": 4,
//   "tails": 1,
//   "enemies": ["Water", "Dogs"]
// };
// ในตัวอย่างนี้ properties (คุณสมบัติ) ทั้งหมดจะถูกเก็บไว้ใน string เช่น name, legs และ tails อย่างไรก็ตาม คุณสามารถใช้ตัวเลขเป็นค่า properties ได้ คุณยังสามารถละเครื่องหมายคำพูด กรณีที่ค่า properties เป็น string คำเดียวได้ดังนี้:

// var anotherObject = {
//   make: "Ford",
//   5: "five",
//   "model": "focus"
// };
// อย่างไรก็ตาม หาก object ของคุณมี properties ที่ไม่ใช่ string JavaScript จะปรับเป็น string โดยอัตโนมัติ

// จงสร้าง object แทนสุนัข เรียกว่า myDog ซึ่งมี properties name (string) legs, tails และ friends

// คุณสามารถกำหนด properties ของ object เหล่านี้ เป็นค่าใดก็ได้ที่คุณต้องการ ตราบใดที่ name เป็น string tails เป้น numbers และ friends เป็น array
var myDog = {
    "name": "Lola",
    "legs": 4,
    "tails": 1,
    "friends": ["Sam", "Sarah"]
  };
  // Setup

  //เข้าถึงobj
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

  //----------------
  // Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line

  //---------update
  // Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.name = "Happy Coder"; // Dot notation
  myDog["name"] = "Happy Coder"; // Bracket notation