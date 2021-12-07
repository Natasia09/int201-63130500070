// Using Objects for Lookups
// Object เปรียบได้กับที่เก็บ key/value เช่นเดียวกับพจนานุกรม ถ้าคุณมีข้อมูลแบบตาราง คุณสามารถใช้ object เพื่อค้นหาค่า แทนที่จะใช้คำสั่ง switch หรือกลุ่ม if/else นอกจากนี้ object ยังมีประโยชน์มาก เมื่อคุณรู้ว่าข้อมูลที่คุณป้อนเข้าไปถูกจำกัดตามช่วงที่กำหนด

// นี่เป็นตัวอย่างในการค้นหาตัวอักษรย้อนกลับอย่างง่าย

// var alpha = {
//   1:"Z",
//   2:"Y",
//   3:"X",
//   4:"W",
//   ...
//   24:"C",
//   25:"B",
//   26:"A"
// };
// alpha[2];
// alpha[24];

// var value = 2;
// alpha[value];
// alpha[2] เป็น string Y, alpha[24] เป็น string C, และ alpha[value] เป็น string Y

// จงแปลงคำสั่ง switch ให้เป็น object ชื่อว่า lookup เพื่อค้นหา val และกำหนดค่า string ที่เกี่ยวข้องให้กับตัวแปร result
// Setup
function phoneticLookup(val) {
    var result = "";
  
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
   
    return result;
  }
  
  // Change this value to test
  console.log(phoneticLookup("charlie"));
  