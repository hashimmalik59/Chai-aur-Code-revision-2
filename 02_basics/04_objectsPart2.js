// const myData = new Object() // Sigleton Object

const myData = {} // Non-Sigleton Object
myData.name = "Hashim"
myData.age = 23
myData.isDeveloper = "true"
// console.log(myData);

let heroes = {
    marvel: {
        hero1: "Superman",
        hero2: "Batman",
        hero3: "Flashman"
    },
    DC: {
        hero1: "Hulk",
        hero2: "IronMan",
        hero3: "Thor",
    }
}
// console.log(heroes.DC.hero2[4]);

let joinObject = Object.assign({}, myData, heroes) // Object join/concate method
// console.log(joinObject);

let spreadObject = { ...myData, ...heroes } // Best way to join objects
// console.log(spreadObject);

let usersData = [
    {
        id: 123,
        email: "abc@gmail.com"
    },
    {
        id: 456,
        email: "def@gmail.com"
    },
    {
        id: 789,
        email: "ghi@gmail.com"
    },
]
// console.log(usersData);
// console.log(usersData[1].id);
// console.log(usersData[1].email);

console.log(Object.keys(usersData)); // Getting keys
console.log(Object.values(usersData)); // Getting values
console.log(Object.entries(usersData)); // Getting keys with values

console.log(myData.hasOwnProperty('name')); // this key is available or not
console.log(myData.hasOwnProperty('Hashim')); // this key is available or not