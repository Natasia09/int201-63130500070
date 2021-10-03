//หาพื้นที่
function triArea(base, height) {
    let	triArea=(base * height) / 2 ;
        return triArea
    }
    console.log(triArea(2,3))
//Write a function that takes an integer minutes and converts it to seconds.
    function convert(minutes) {
        let convert=60*minutes;
        return convert
    }
    console.log(convert(2))

//Fix the code in the code tab to pass this challenge (only syntax errors).
// Look at the examples below to get an idea of what the function should do.
function cubes(a) {
	let cubes=a**3;
	return cubes
}
console.log(cubes(2))
//return array ตำแหน่ง1
let b=[1,2,3]
function getFirstValue(arr) {
	return arr[0];
}
 console.log(getFirstValue(b));

 //Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
 //nextEdge(8, 10) ➞ 17
 function nextEdge(side1, side2) {
	let nextEdge=(side1 + side2) - 1;
	return nextEdge	;
}
 console.log(nextEdge(5,2));
 //หาร เอาเศษ
 function remainder(x, y) {
	return x%y
}
console.log(remainder(10,2));
//addition
function addition(a, b) {
	return a+b;
}

console.log(addition(10,2));
//
function circuitPower(voltage, current) {
	let circuitPower=voltage*current;
	return circuitPower;
}
console.log(circuitPower(100,2));
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
	let addition=num+1;
	return addition;
	
}
console.log(addition(100));

//
function squared(a) {
	return a*a;
}