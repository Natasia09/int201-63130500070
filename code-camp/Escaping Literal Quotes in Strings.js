// Escaping Literal Quotes in Strings
// เมื่อคุณสร้าง string คุณต้องเริ่มและจบด้วย single หรือ double quote จะเกิดอะไรขึ้นเมื่อคุณจำเป็นต้องมี quote: " หรือ ' ภายใน string ของคุณ

// ใน JavaScript คุณสามารถ escape quote เพื่อไม่ให้ JavaScript มองว่าเป็นจุดสิ้นสุดของ string โดยการวาง backslash (\) ไว้หน้า quote

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
// สิ่งนี้ส่งสัญญาณไปยัง JavaScript ว่าเครื่องหมายคำพูดต่อไปนี้ไม่ใช่จุดสิ้นสุดของ string แต่ควรปรากฏอยู่ภายในสตริงแทน ดังนั้น หากคุณพิมพ์สิ่งนี้ไปยัง consode คุณเห็นข้อความดังนี้:

// Alan said, "Peter is learning JavaScript".

// จงใช้ backslashes ในการกำหนด string ให้กับตัวแปร myStr ซึ่งถ้าคุณพิมพ์ออกมายัง console คุณจะเห็นผลลัพธ์ดังนี้
// I am a "double quoted" string inside "double quotes".
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line