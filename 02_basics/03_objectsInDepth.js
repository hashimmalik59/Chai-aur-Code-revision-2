// Object.create() // Singleton (Constructor method)

let mySymbol = Symbol('Ahmad')
const myData = { // Object Literals
    name: "Hashim",
    age: 23,
    isJob: false,
    [mySymbol]: "Ki haal hai" // Declaring Symbol in objects
}
console.log(myData[mySymbol]); // Accessing symbol in object
console.log(typeof myData[mySymbol]);

// myData.name = 'Ahmad' // changing value in Object
// Object.freeze(myData) // it will freeze our object so we cannot change anything in our object

myData.hello = function () {
    console.log(`Hello ${this.name}`); // "this" keyword is used for reference like myData.name/this.name   
}
console.log(myData.hello());
console.log(myData);