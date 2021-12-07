const friends = [

    { fullname: 'Paul lee', address: 'Bangkok, Thailand' },
  
    { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
  
  ];
  
  
  
  function getFullName(name, surname) {
  
    return `${name} ${surname}`;
  
  }
  
  //getFriendName is a higher order function
  
  
  
  function getFriendName(name, surname, callbackFn) {
  
    const fullname = callbackFn(name, surname);
  
    console.log(fullname);
  
  }
  
  
  
  //getFullName is a callback function
  
  getFriendName('Paul', 'lee', getFullName);