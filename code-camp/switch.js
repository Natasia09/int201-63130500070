// Selecting from Many Options with Switch Statements
// ถ้าคุณมีหลายตัวเลือก แนะนำให้ใช้ switch statement โดย switch statement ทดสอบค่าและสามารถมีได้หลาย case statements ซึ่งกำหนดค่าที่เป็นไปได้ได้หลายแบบ Statements จะทำงานจาก case แรกที่ match (ตรงกัน) จนถึงคำสั่ง break ก็จะหยุด

// นี่เป็นตัวอย่างswitch statement

// switch(lowercaseLetter) {
//   case "a":
//     console.log("A");
//     break;
//   case "b":
//     console.log("B");
//     break;
// }
// ค่า case จะถูกทดสอบด้วยเครื่องหมาย (===) คำสั่ง break ใน Javascript จะหยุดการรัน statements แต่ถ้าไม่ระบุคำสั่ง break statements ต่อไปจะทำงาน

// จงเขียนคำสั่ง switch เพื่อกำหนดเงื่อนไขของ val และกำหนดค่าให้กับ answer ตามเงื่อนไขด้านล่าง

// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  caseInSwitch(1);
  