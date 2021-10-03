// แบบฝึกหัดที่4 ให้เขียนโปรแกรมเพื่อท าเมนูจัดการ Text String ให้ทดสอบโดยใช้ String 
// อย่างน้อย 3 กรณีที่แตกต่างกัน
// • ให้เขียน Function เพื่อแสดงเมนูในการจัดการ String
// 1: Reverse String 
// 2: Replace Vowels with ‘*’
// 3: Count Vowels in String
// • ตัวอย่างเช่น “Hello World” 
// กด 1 ได้ “dlroW olleH”
// กด 2 ได้ “H*ll* W*rld”
// กด 3 ได้ 3 
function reverseStr(str){
    // let reverseText = str.split("").reverse().join("");
    // console.log(reverseText);
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}
function replaceVowals(str){
    let vowals = /[aeiouAEIOU]/gi;
    let replaced = str.replace(vowals,'*');
    console.log(replaced);
}
function countVowal(str){
    let count = 0;
    let vowals = ['a','e','i','o','u','A','E','I','O','U'];
    for (let i = 0; i < str.length; i++) {
        if(vowals.includes(str[i])){
            count++;
        }
    }
    console.log(count);
}


function testString(num) {
    
    switch(num){
        case 1:
            reverseStr("Hello World");
        break;
        case 2:
            replaceVowals("Hello World");
        break;
        case 3:
            countVowal("Hello World")
        break;
    }
    
}
testString(1);
testString(2);
testString(3);