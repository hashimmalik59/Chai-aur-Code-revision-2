// let name = "Hashim"
// let name = {}
// let name = []
let name = ''
if (name) {
    // console.log(`My name is ${name}`);
} else {
    // console.log(`No`);
}

// falsy values => 0, -0, 0n, "", bigInt, null, undefined, NaN
// truthy values => "0", "false", " ", [], {} function(){}

// let myArray = []
// if (myArray.length === 0) {
//     console.log("Array is empty");
// }

// let myObject = {}
// if (Object.keys(myObject).length === 0) { // now it is converts into an array
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator(??): null, undefined
// let value = 5 ?? 10 // output: 5
// let value = 5 ?? null // output: 5
// let value = undefined ?? null // output: null
// let value = null ?? undefined // output: undefined
// let value = 15 ?? null // output: 15
let value = 15 ?? undefined // output: 15
// console.log(value);


// Ternary Operator
let age = 23;
age > 17 ? console.log("Adult") : console.log("Child");