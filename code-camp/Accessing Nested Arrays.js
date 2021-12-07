// Accessing Nested Arrays
// ดังที่เราได้เห็นในตัวอย่างก่อนหน้านี้ object สามารถมีได้ทั้ง object ที่ซ้อนกันและ array ที่ซ้อนกัน เช่นเดียวกับการเข้าถึง object ที่ซ้อนกัน สัญลักษณ์วงเล็บ (brackets) สามารถเข้าถึง array ที่ซ้อนกันได้

// นี่คือตัวอย่างของวิธีการเข้าถึง array ที่ซ้อนกัน

// var ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];
// ourPets[0].names[1];
// ourPets[1].names[0];
// ourPets[0].names[1] ควรเป็น string Fluffy, และ ourPets[1].names[0] ควรเป็น string Spot

// จงใช้เครื่องหมายจุด (dot) และวงเล็บ (bracket) เพื่อกำหนดค่าตัวแปร secondTree ให้กับ item ที่ 2 ใน trees list จาก object myPlants

var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  var secondTree = myPlants[1].list[1];