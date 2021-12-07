// ในเกมคาสิโน Blackjack ผู้เล่นสามารถได้เปรียบเหนือเจ้ามือ โดยการติดตามจำนวนไพ่เลขสูงและต่ำที่เหลืออยู่ในสำรับ เรียกว่า การนับไพ่

// - การมีไพ่สูงเหลืออยู่ในสำรับจะเป็นประโยชน์ต่อผู้เล่น ไพ่แต่ละใบมีค่ากำหนดตามตารางด้านล่าง เมื่อนับเป็นบวก ผู้เล่นควรเดิมพันสูง เมื่อการนับเป็นศูนย์หรือติดลบ ผู้เล่นควรเดิมพันต่ำ
// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// - คุณจะเขียนฟังก์ชันการนับไพ่ ที่รับพารามิเตอร์ card ซึ่งสามารถเป็น number หรือ string และเพิ่มหรือลดค่าตัวแปร global count ตามมูลค่าของไพ่ (ดูตาราง) จากนั้นฟังก์ชันจะคืนค่า string ที่เป็นจำนวนนับปัจจุบัน (current count) และ string Bet หากการนับเป็นบวก หรือ string Hold หากการนับเป็นศูนย์หรือติดลบ การนับปัจจุบันและการตัดสินใจของผู้เล่น (Bet หรือ Hold) ควรคั่นด้วยเว้นวรรค
// Example Outputs: -3 Hold หรือ 5 Bet

// Hint

// - ห้ามรีเซ็ต count เป็น 0 เมื่อมีค่าเท่ากับ 7, 8, หรือ 9
// ห้ามส่งคืนค่าเป็น array ห้ามใส่ quote (single หรือ double) ในผลลัพธ์
var count = 0;

function cc(card) {
  // Only change code below this line

  var msg = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count === 5) msg = "5 Bet";
  else if (count === 0) msg = "0 Hold";
  else if (count === -5) msg = "-5 Hold";
  else if (count === -1) msg = "-1 Hold";
  else if (count === 1) msg = "1 Bet";


  return msg;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
