let myObject = {
    name: "Hashim",
    age: 23,
    isJob: false
}
let { name: n, age: a, isJob: isJ } = myObject // Destructring(used for ommit myObject.name, myObjects.age, myObject.isJob)
console.log(n);
console.log(a);
console.log(isJ);

// const myDestructring = ({ name }) => { // this is also called destructring mostly used in React
// }
// myDestructring(name = "Hashim")

// { // this is JSON and our APIs are in JSON syntax
//     "name": "Hashim",
//     "age": 23,
//     "isJob": false
// }