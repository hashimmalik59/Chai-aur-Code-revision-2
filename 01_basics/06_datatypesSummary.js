// # Primitive Datatype: Always works on copy not on original value
// 7 Datatypes: String, Number, Boolean, null, undefined, bigInt, Symbol
let name = "Hashim" // String
let age = 23 // Number
let isMarried = false // Boolean
let marriageDate = null // null
let spouseName = undefined // undefined
let myID = Symbol("123") // Symbol
let hugeNumber = 454667676766786723423523n // bigInt


// # Non-Primitive/Reference Datatype: Always works on copy and original value
// Array, Object, Function
let heroes = ["Superman", "Batman", "Spiderman"] // Array

let myData = { // Object
    name: "Hashim",
    age: 23,
    isJob: true
}

let myFunction = function () { // Function Object
    console.log("Hello World!");
}
myFunction()