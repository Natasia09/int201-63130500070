//obj
let person = {
    firstName: "Nasia",
    lastName : "Narak",
    id       : 30,
    call: 0937635015,
   }
   console.log(person);
 const s = {
    firstName: "DA",
    lastName : "NA",
    call: 0937635015,
   }
   console.log(s);

   //ex3
   let square ={
    area: function(){ return this.side * this.side;},
    side: 100
  };
  square.area() //ถ้าจะใช้งานfunctionให้ใส่()ด้วยนะจ้ะ
  console.log(square.area());
 

//ex4
let notebook={รุ่น:"asus",ราคา:35000,อื่นๆ:{ประกัน:2,ขนาด:14.5}}
console.log(notebook.อื่นๆ.ขนาด);

//ex4.5
let room={number:3,For:"rent",room1:{animal:"ant",size:"small"}};
//console.log(room.room1.size);
room.howmuch=2000;
room.number=4;
console.log(room);

//ex5
let square ={
    area: function(){ return this.side * this.side;},
    side: 10
    };
    square.area()
//ex5.1 //เอาคำว่าfunctionออก
let square ={
    area(){ return this.side * this.side;},
    side: 10
    };
    console.log(square.area());
//ex6
let o = Object.create({x: 1, y: 2,z:3});
 let p = Object.create(o);
console.log(p.x);  
console.log(p.y,p.z); 
console.log(p);