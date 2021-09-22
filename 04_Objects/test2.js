function doSomething(value){ 
//value(formal parameter)=item1(actual parameter)//memory address
    value.name="unknow"
}

let item1={name:'ABC'}
doSomething(item1);
console.log(item1.name);//"unknow"
//-------------------------------
function doSomething2(value){
    value=100;
}
let isNum=true;
doSomething2(isNum);
console.log(isNum);//true
console.log('hello');