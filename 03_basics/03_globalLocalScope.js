// Global Scope: Outside any function is Global scope
// Block Scope: Accessing in side of Block scope

if (true) {
    var a = 10 // var is global scope accessing every where
    let b = 20 // let is block scope not accessing every where only in block scope {}
    const c = 20 // let is block scope not accessing every where only in block scope {}
}
console.log(a);
console.log(b);
console.log(c);