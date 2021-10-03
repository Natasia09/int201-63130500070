let products = [
    { id: 1, price: 10 },
    { id: 2, price: 5 }
  ];
  
  let newProduct = { id: 3, price: 20 };
  console.log(products);
  products = [...products, { id: newProduct.id, price: newProduct.price }];//ใช้spead ในการเพิ่มproduct
  console.log(products);//ชี้memory addressใหม่
  console.log(products[0]);//สามารถเข้าถึงทุกตัวในindexได้เลย

  //destructuring +rest parameter
function getStudentsInClass(instructor, ta, ...students) {
    return students;
  }
  let studentSec2 = getStudentsInClass('Umaporn', 'Tisanai', 'A', 'B', 'C');
  console.log(studentSec2);
  
  [instructor, ta, ...student] = ['Umaporn', 'Tisanai', 'A', 'B', 'C'];
  console.log(student);

  //spread operator across the arguments in the function call.
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  let nums = [5, 20, 15];
  console.log(sum(...nums));
  
  //destructuring array
  function myClassStudents(lect, ta, ...students) {
    return students;
  }
  
  let myStudents = myClassStudents(
    'Umaporn',
    'Tisansi',
    'Peter',
    'Danial',
    'Joe'
  );
  console.log(myStudents);
  console.log(myStudents.length);
  
  //destructuring object
  let { firstname, lastname, ...address } = {
    firstname: 'Natasia',
    lastname: 'Yusuwapan',
    province: 'Bangkok',
    contact: '02-470-9810'
  };
  function yourAddress(addr) {
    return addr;
  }
  function fullName(fn){
    return fn;
  }
  console.log(fullName(firstname +' '+ lastname));
  console.log(yourAddress(address));
  console.log();
  
  //copy object properties with spread operator
  
  let std1 = { id: 1, name: 'Adam' };
  let std2 = { ...std1 };
  std2.id = 444;
  console.log(std1);
  console.log(std2);
  