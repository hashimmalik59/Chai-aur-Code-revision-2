// Stack & Heap Memory

// Stack: Works on copy
let fullName = "Hashim Malik"
let myfullName = fullName

myfullName = "Hashim Ahmad Malik"

// console.log(fullName);
// console.log(myfullName);


// Heap: Works on original
let myData = {
    name: "Hashim",
    age: 23,
    isJob: true
}

let myUpdatedData = myData
myUpdatedData.name = "Malik Hashim"

console.log(myData);
console.log(myUpdatedData);