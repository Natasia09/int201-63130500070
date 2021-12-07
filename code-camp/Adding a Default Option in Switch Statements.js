// Adding a Default Option in Switch Statements
// ในswitch statement คุณอาจไม่สามารถระบุค่าที่เป็นไปได้ทั้งหมดด้วย case statements อย่างไรก็ตาม คุณสามารถใช้ default statement แทนเพื่อรันกรณีที่ไม่ตรงกับเงื่อนไข case ใดเลย โดยให้คิดว่าเหมือนกับ else statement ของคำสั่ง if/else

// default statement ควรเป็น case ท้ายสุด

// switch (num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   default:
//     defaultStatement;
//     break;
// }
// จงเขียนคำสั่ง switch เพื่อกำหนดค่าให้กับ answer ด้วยเงื่อนไขต่อไปนี้ a - apple
// b - bird
// c - cat
// default - stuff
function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  switchOfStuff(1);
  