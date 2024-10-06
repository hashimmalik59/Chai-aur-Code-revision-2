//////////////////////////////////////             JS Numbers             ////////////////////////////////////////////////

let age = 23
// console.log(age);
// console.log(typeof age); // Number

let newAge = new Number(12000)
// console.log(newAge);
// console.log(typeof newAge); // object

// console.log(newAge.toFixed(3)); // it wil give you zero with your wanted number
// console.log(newAge.toPrecision(3)); // it will precise the value means remove the decimal value it will also round of the value (output 23.6)

// console.log(newAge.toLocaleString()); // it a value with comma like 12,000 like 12K


//////////////////////////////////////             JS Maths               ////////////////////////////////////////////////


// console.log(Math);
// console.log(typeof Math); // Object

// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// console.log(Math.round(34.49)); // it will round of the value accoring to .50< is round downward
// console.log(Math.round(34.50)); // it will round of the value accoring to .49> is round upward

// console.log(Math.ceil(123.456)); // it will upward round of the value
// console.log(Math.floor(123.456)); // it will downward round of the value

// console.log(Math.min(2, 3, 8, 4, 0));
// console.log(Math.max(2, 3, 8, 4, 0));


// console.log(Math.floor(Math.random() * 6 + 1)); // it will generate the random number

// let min = 10
// let max = 20
// console.log(Math.floor(Math.random() * max - min + 1) + min);

// Exercise

// Basic Arithmetic Operations:
// Write a JavaScript program that calculates the sum, difference, product, and quotient of two numbers: a = 10 and b = 5.
function sumProductQuotient(a, b) {
    // let sum = a + b
    // let product = a * b
    let quotient = a / b
    return quotient
}
// console.log(sumProductQuotient(10, 5))

// Rounding Numbers:
// How do you round the number 4.567 to its nearest integer in JavaScript?
// console.log(Math.round(123.456));


// Finding Maximum and Minimum:
// Using JavaScript, how would you find the maximum and minimum numbers from this list: [3, 8, 12, 5, 6, 11]?
let arr = [3, 8, 12, 5, 6, 11]
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// Power Calculation:
// Write a JavaScript function that calculates the power of a number, e.g., 5 raised to the power of 3.
let power = 5
// console.log(5 ** 3);

// Random Number Generation:
// How can you generate a random integer between 1 and 100 in JavaScript?
// console.log(Math.floor(Math.random() * 100 + 1));


// Trigonometric Function:
// Using JavaScript, how do you calculate the sine of a number (e.g., Math.sin(π/2))?


// Checking for NaN:
// Write a JavaScript function that checks if a value is NaN (Not-a-Number).
function notANumber(a, b) {
    let c = a * b
    return c;
}
// console.log(notANumber(2, "abc"));

// Floating Point Precision:
// In JavaScript, why does the expression 0.1 + 0.2 === 0.3 return false? How can this be fixed?
let num1 = 0.1
let num2 = 0.2
let num4 = toFixed(num1)
let num5 = toFixed(num2)
let num6 = num4 + num5
let num3 = 0.3
console.log(num3 === num6); // false



// Modulus Operation:
// What is the result of the modulus operation 17 % 5 in JavaScript, and how does it work?
let value1 = 17
let value2 = 5
// console.log(value1 % value2); // Modulus is working as Remainder like our school traditional Math


// Parsing Numbers from Strings:
// How can you convert the string '42.56' into a number in JavaScript?
let str = "42.56"
// console.log(str);
let stringToNumber = parseInt(str)
// console.log(stringToNumber);
