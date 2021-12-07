// Golf Code
// ในเกม golf แต่ละหลุมมี par หมายถึงจำนวนเฉลี่ยของ strokes ที่นักกอล์ฟทำให้บอลลงหลุมได้ ก็ถือว่าเกมจบ ทั้งนี้ขึ้นอยู่กับว่า strokes ของคุณมากหรือน้อยกว่า par ก็จะใช้ชื่อเล่นที่ต่างกัน

// function ของคุณจะรับ argument par และ strokes แล้วคืนค่า string ที่ถูกต้อง ตามตารางที่ลิสต์ stroke ตามลำดับความสำคัญ top (สูงสุด) ถึง bottom (ต่ำสุด):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par และ strokes จะเป็นตัวเลขที่เป็นบวกเสมอ เราได้เพิ่ม array ของชื่อทั้งหมดเพื่อความสะดวกของคุณ

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes === 1) return "Hole-in-one!";

  else if ((strokes - par) <= -2) return 'Eagle';

  else if ((strokes - par) === -1) return 'Birdie';

  else if (strokes === par) return 'Par';

  else if ((strokes - par) === 1) return 'Bogey';

  else if ((strokes - par) === 2) return 'Double Bogey';

  else return 'Go Home!';
  // Only change code above this line
}

 

golfScore(5, 4);