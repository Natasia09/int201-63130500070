/*let product

[price1,price2,...arr]=[products[0].price,products[1].price,50,100];
console.log(price1);
console.log(price2);
console.log(arr.length);*/

//destruturing +rest parameter
function getStudentnClass(instructor,ta,naja,...students){
    return students;
}
let studentSec2=getStudentnClass('Umaporn','Tisanai','A','B','C','ant','bee');
console.log(studentSec2);

[instructor,ta,...student]=['Umaporn','Tisanai','A','B','C','ant','bee']
console.log(student);
console.log(student.length);
//ถ้าจะเพิ่มstudent ก็สามารถบอกตำแหน่งstudentได้เลย
student[0]='Natasia';
console.log(student);
student[2]='Daria';
console.log(student);