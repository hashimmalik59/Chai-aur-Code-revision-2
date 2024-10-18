let myData = {
    firstName: "Hashim",
    lastName: "Malik",
    fullName: function () {
        // console.log(this.firstName + " " + this.lastName) // "this" keyword is refering current context(values)
        // console.log(this);

    },
    age: 23,
    isJob: false
}
// this.fullName();
myData.fullName();
myData.lastName = "Ahmad"
myData.fullName();
// console.log(this); // output: {}


/////////////////////////////////////////     Arrow Function     /////////////////////////////////////////////////////////

function regular() {
    let name = "Hashim"
    console.log(this.name); // undefined
    console.log(this); // Global objects
}
// regular()

let anonyms = function () {
    let name = "Hashim"
    console.log(this.name); // undefined
    console.log(this); // Global objects
}
// anonyms()

let arrFnc = () => {
    let name = "Hashim"
    console.log(this.name); // undefined
    console.log(this); // output: {}
}
// arrFnc() // Note: "this" keyword is only used on objects


// let fullName = (firstName, lastName) => { // Explicit return
//     return firstName + " " + lastName
// }
// console.log(fullName("Hashim", "Malik"))

// let fullName = (firstName, lastName) => (firstName + " " + lastName) // Implicit return, Note: Using in ReactJS
// console.log(fullName("Hashim", "Malik"))

let fullName = (firstName, lastName) => ({ name: "Hashim" }) // Implicit return, Note: Using in ReactJS
console.log(fullName("Hashim", "Malik"))