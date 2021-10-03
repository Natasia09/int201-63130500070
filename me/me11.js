//หา minmax in array
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }
  console.log(minMax([1,2,3,4]));
//
function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number;i++) {
          
      newArray.push(i);
    }
  
    return newArray;
  }
  console.log(printArray(3));//[ 1, 2, 3 ]
  //
  function futurePeople(population,n){
    for (let i = 1; i <= 360; i++) {
  population = population + n;
}
return population;
}