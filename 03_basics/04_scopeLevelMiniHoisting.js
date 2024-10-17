function first() {
    let name = "Hashim"
    function second() { // Closure acceesing parent functions elements and parent cannot access children elements
        // console.log(name);
        let age = 23
    }
    // console.log(age);
    second()
}
first()

if (true) {
    let name = "Hashim"
    if (name === "Hashim") {
        let isJob = false
        // console.log(`My name is ${name} and i have no ${isJob}`);
    }
    // console.log(isJob);
}
// console.log(name);


// console.log(myFnc1(4))
function myFnc1(num1) { // and regular function is exexutes without any problem
    return num1
}

// console.log(myFnc2(5)) // ReferenceError: Cannot access 'myFnc2' before initialization
let myFnc2 = function (num2) { // the variable value is not accessing before initialization (this is called Hoisting)
    return num2
}