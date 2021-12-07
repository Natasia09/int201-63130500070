// Replacing If Else Chains with Switch
// หากคุณมีหลายตัวเลือกให้เลือก switch statement จะสามารถเขียนได้ง่ายกว่า if/else if statements หลายชุด ดังตัวอย่างต่อไปนี้:

// if (val === 1) {
//   answer = "a";
// } else if (val === 2) {
//   answer = "b";
// } else {
//   answer = "c";
// }
// สามารถเขียนแทนด้วย

// switch(val) {
//   case 1:
//     answer = "a";
//     break;
//   case 2:
//     answer = "b";
//     break;
//   default:
//     answer = "c";
// }
// จงแก้ชุดคำสั่ง if/else if ให้เป็นคำสั่ง switch

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  chainToSwitch(7);
  