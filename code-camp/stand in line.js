// Stand in Line
// ในวิทยาการคอมพิวเตอร์ queue เป็น โครงสร้างข้อมูล ที่เป็นนามธรรม ซึ่งรายการต่างๆ จะถูกจัดวางตามลำดับ โดยรายการใหม่จะเพิ่มที่ด้านหลังของ queue และรายการเก่าจะถูกลบออกจากด้านหน้าของ queue

// เขียน function nextInLine ซึ่งรับค่า array (arr) และตัวเลข (item) เป็น argument

// เพิ่มตัวเลขไปยังด้านท้ายของ array และลบรายการแรกของ array ออก

// function nextInLine ควรส่งคืนค่าที่ถูกลบออกไป
function nextInLine(arr, item) {
    // Your code here
  
    var queue = arr.push(item);
  
    var removeItem = arr.shift();
  
    return removeItem;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));
  
  