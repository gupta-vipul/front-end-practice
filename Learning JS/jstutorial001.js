// var firstName = "Vipul";

// console.log(firstName);

// console.log(typeof(firstName));

// var a = "We are learning JavaScipt";
// console.log("Line no: 8","type of variable["+ typeof a+"]", a);

// a = 1234;
// console.log("Line no: 10", typeof a, a);

// var a = 456;
// console.log("Line no: 13", typeof a, a);

// Class - 02 -- 18-05-23

const firstName = "Vipul";
const middleName = "";

if (middleName) {
    console.log("Yes, having a middle name");
} else if (firstName) {
    console.log("Yes, having a first name");
} else {
    console.log("No, Not having any name");
}

var number = 0;
var number2 = 100;

if (number) {
    console.log("number is", number);
}


// Example of Explicit type conversion

var num1 = "50"; // numeric string value

var num2 = parseInt(num1);
console.log(num2);
console.log("Type of num1:", typeof num1, "Type of num2:", typeof num2);
