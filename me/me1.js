
//the for statement simplifies loops that follow a common pattern.
//ex1
for (let i = 0; i <= 5; i++) {
  console.log(i);;
}
//ex2
var sum=0;
for(let i = 0; i <= 5; i++) {
    sum+=i
    console.log(sum);
  }

//The for/of loop works with iterable objects , arrays, strings, sets, and maps are iterable:
let data=['sunya','sunny','kareena','kareeta','wanraya','wansofia','natasia','daria']
for(let item of data){//ที่itemเป็นชื่ออะไรก้ได้เป็นชื่อแค่ชั่วคราว
console.log(item);
}
//loop IN
//ex1
var obj={1:"ya",2:"ny",3:"na"};
for(let propoty in obj){
    console.log(propoty+">>>>"+obj[propoty])
};
//ex2
const student={id:1, name:"Somchai"}
for(let prop in student){
console.log(prop);
console.log(student[prop])
}

