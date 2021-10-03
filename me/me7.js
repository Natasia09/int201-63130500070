//shalow
function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    console.log(`keys1: ${keys1}`);
    console.log(`keys2: ${keys2}`);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  
  let book1 = {
    isbn: 123456789,
    title: 'JavaScript'
  };
  let book2 = {
    isbn: 123456789,
    title: 'JavaScript'
  };
  
  console.log(shallowEquality(book1, book2));