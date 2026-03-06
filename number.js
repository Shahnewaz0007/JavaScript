var oP=20;
var cP=0.5;
var aP='20';
var kP=parseInt('20');// parseInt() is used to convert a string to an integer. It takes a string as an argument and returns an integer. If the string cannot be converted to an integer, it returns NaN (Not a Number). In this case, '20' can be successfully converted to the integer 20, so aP will be assigned the value 20 after the parseInt() function is called.

var jP=parseFloat('20.5');// parseFloat() is used to convert a string to a floating-point number. It takes a string as an argument and returns a floating-point number. If the string cannot be converted to a floating-point number, it returns NaN (Not a Number). In this case, '20.5' can be successfully converted to the floating-point number 20.5, so jP will be assigned the value 20.5 after the parseFloat() function is called.

console.log(oP+cP);
console.log(oP+aP);
console.log(oP+kP);


console.log(typeof (oP+cP));
console.log(typeof (oP+aP));


const num=-50/0;
console.log(num); // Output: -Infinity

const num1=50/0;
console.log(num1); // Output: Infinity