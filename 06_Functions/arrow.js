//1.
const myFunc = function (instructor, ta, ...students) {
    let greeting = 'Hello';
    return students;
  };
  //arrow
  const myFunc = (instructor,ta, ...student) => student;
  
//2.
  function echo(text) {
    return text;
  }
  const echo = text => text;//arrow
  
  
  //3.
  function sayHi(greeting, name) {
    return `${greeting}, ${name}`;
  }
  //arrow
const sayHi = (greeting,name) => `${greeting},${name}`;
  
  //4.
  function getClass() {
    return `INT201`;
  }
  const getClass = () => `INT201`//arrow
  console.log((getClass));
////////////////////////////////////////////////////////////////////////////////////
  const myFunc = (instructor,ta, ...student) => {let a = 0; return student};

  console.log(myFunc(1,2,3))
  
  
  
  const echo = text => text;
  
  
  
  const sayHi = (greeting,name) => `${greeting},${name}`;
  
  console.log(sayHi('Hello','World'))
  
  
  
  const getClass = () => `INT201`;
  
  console.log(getClass());
