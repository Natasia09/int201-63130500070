// Use Conditional Logic with If Statements
// If statement ใช้ในการตัดสินใจในโค้ด คีย์เวิร์ด if บอกให้ JavaScript รันโค้ดในวงเล็บปีกกาภายใต้เงื่อนไขบางอย่าง ซึ่งกำหนดไว้ในวงเล็บ เงื่อนไขเหล่านี้เรียกว่า Boolean และอาจเป็น true หรือfalseเท่านั้น

// เมื่อเงื่อนไขประเมินว่าเป็น true โปรแกรมจะรันคำสั่งภายในวงเล็บปีกกา เมื่อเงื่อนไข Boolean ถูกประเมินเป็น false คำสั่งภายในวงเล็บปีกกาจะไม่ทำงาน

// Pseudocode

// if (condition is true) {
//   statement is executed
// }
// Example

// function test (myCondition) {
//   if (myCondition) {
//      return "It was true";
//   }
//   return "It was false";
// }
// test(true);
// test(false);
// test(true) คืนค่า string It was true และ test(false) คืนค่า string It was false.

// When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

// - เมื่อเรียกใช้ test ด้วยค่า true จากนั้น if statement จะประเมิน myCondition ว่าเป็น true หรือไม่ เนื่องจากในที่นี้มีค่าเป็น true ดังนั้นฟังก์ชันจึงคืนค่า It was true เมื่อเราเรียก test ด้วยค่า false แล้ว myCondition จะไม่เป็น true และคำสั่งในวงเล็บปีกกาจะไม่ถูกดำเนินการ และ function จะส่งคืนค่า It was false
// จงสร้างif statement ภายใน function เพื่อคืนค่า Yes, that was true ถ้า parameter wasThatTrue มีค่าเป็น true และคืนค่า No, that was false ถ้าเงื่อนไขมีค่าเป็น false

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if(wasThatTrue){
    return "Yes, that was true";
  }
  return "No, that was false";
  }
  
  
    // Only change code above this line
  
  trueOrFalse(true);
  trueOrFalse(false);