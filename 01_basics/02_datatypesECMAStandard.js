"use Strict"; // Treat all JS code as a newer version/JS

// alert('Hashim'); // we are using NodeJS not borwser

// console.log(3-2) console.log(3+6); // SyntaxError: Unexpected identifier 'console'

// console.log("Hashim");

// console.log(3 +
// 5); // code should be readable


// Datatypes
let name = "Hashim"
let age = 23
let isMarried = false

// String => "", '', ``
// Number => digits
// bigInt => for big number example: 24258456894803455467521274981374
// Boolean => true/false
// null => stand alone value/empty
// undefined => example: let marriageData;
// Symbol => use for uniqueness

// console.log(typeof null); // (object) typeof is used for knowing the type of datatype

let foo = 42; // foo is now a number
// console.log(typeof foo);
foo = "bar"; // foo is now a string
// console.log(typeof foo);
foo = true; // foo is now a boolean
// console.log(typeof foo);


// console.log(typeof NaN); Number

// converting a value from one type to another is called Coercion/Type Conversion
let num = '5' + 2
// console.log(num);
// console.log(typeof num); // Implicit Coercion 


let myAge = "23";
let newAge = Number(myAge) // Explicit Coercion
// console.log(myAge);
// console.log(typeof myAge);
// console.log(newAge);
// console.log(typeof newAge);