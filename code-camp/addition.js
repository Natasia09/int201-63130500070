// Compound Assignment With Augmented Addition
// ในการเขียนโปรแกรม เป็นเรื่องปกติที่ใช้ assignments (การกำหนดค่า) ในการแก้ไขเนื้อหาของตัวแปร หากยังจำได้ ทุกอย่างทางด้านขวาของเครื่องหมายเท่ากับจะถูกคำนวนก่อน ดังนั้นเราสามารถกล่าวได้ว่า:

// myVar = myVar + 5;
// เป็นการนำ 5 มาบวกให้กับ myVar เนื่องจากเป็นรูปแบบทั่วไป จึงมี operator ที่ทำทั้งการคำนวณทางคณิตศาสตร์และกำหนดค่าตัวแปรในขั้นตอนเดียว

// ตัวอย่างเช่น += operator

var myVar = 1;
myVar += 5;
console.log(myVar);
// 6 ควรแสดงในหน้า console

// จงแปลง assignments ของ a, b และ c โดยกำหนดให้ใช้ += operator
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += a +9;
b += 9 + 0;
c += c +-5;
//---------------------------------
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= a -+5;//5
b -= 20 +-5;//-6
c -= c -+2;//2
console.log(b);

//-----------------------------
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= a * 1;//25
b *= 3 * 1;//36
c *=  10;//46
//-------------------------------
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /=12;
b /= 4;
c /=  11;