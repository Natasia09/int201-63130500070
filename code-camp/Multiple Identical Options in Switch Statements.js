// ถ้าไม่ระบุ break statement ในแต่ละ case ของคำสั่ง switch ก็จะทำให้ case ถัดไปทำงานจนกว่าจะเจอคำสั่ง break ถ้าคุณมีหลาย input ที่มี output เหมือนกัน คุณสามารถใช้คำสั่ง switch ดังนี้

// var result = "";
// switch(val) {
//   case 1:
//   case 2:
//   case 3:
//     result = "1, 2, or 3";
//     break;
//   case 4:
//     result = "4 alone";
// }
// case สำหรับค่า 1, 2, และ 3 จะให้ผลลัพธ์เดียวกัน

// จงเขียนคำสั่ง switch เพื่อกำหนดค่า answer ตามช่วงต่อไปนี้:

// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// หมายเหตุ: คุณจะต้องมีคำสั่ง case สำหรับแต่ละช่วงตัวเลข
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  sequentialSizes(1);
  