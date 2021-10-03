// ให้เขียน Function เพื่อท ำกำรสุ่มเลข 1-10 และคืนผลลัพธ์เป็นเลขที่สุ่มได้ จำกนั้นให้ผู้เล่นเดำเลข โดยถ้ำเดำเลข
// เกินช่วง ให้หยุดเกม
// • ถ้ำผู้เล่นเดำค่ำที่สูงกว่ำเลขที่สุ่มได้ ให้แสดงข้อควำมว่ำ “Too high” 
// • ถ้ำผู้เล่นเดำค่ำที่ต ่ำกว่ำเลขที่สุ่มได้ ให้แสดงข้อควำมว่ำ “Too Low”
// • ถ้ำผู้เล่นเดำตรงกับค่ำที่สุ่มได้ ให้แสดงข้อควำมว่ำ “You WIN!”
// กรณีเดำไม่ถูกต้อง ให้ท ำกำรเฉลยเลขที่สุ่มได
function randNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  const randValue = randNumber();
  console.log(` The random number is ${randValue}`);
  let guessValue = 5;
  
  if (randValue >= 1 && randValue <= 10) {
    if (randValue > guessValue) {
      console.log(`Too Low, the random number is ${randValue}`);
    } else if (randValue < guessValue) {
      console.log(`Too High, the random number is ${randValue}`);
    } else console.log('You Win!');
  }
  