// สรุป
// The firstChildand lastChildreturn ลูกคนแรกและคนสุดท้ายของโหนด ซึ่งสามารถเป็นโหนดประเภทใดก็ได้ รวมถึงโหนดข้อความ โหนดความคิดเห็น และโหนดองค์ประกอบ
// firstElementChildและlastElementChildกลับมาเป็นครั้งแรกและลูกสุดท้ายโหนดธาตุ
// childNodesผลตอบแทนสดNodeListทุกโหนดลูกของโหนดประเภทใด ๆ ของโหนดที่ระบุ เด็ก ๆ ส่งคืนElementโหนดย่อยทั้งหมดของโหนดที่ระบุ

let menu = document.getElementById('menu');
let children = menu.children;
console.log(children);