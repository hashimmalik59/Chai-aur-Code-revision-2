// for of loop

let myNames = ["Hashim", "Ahmad", "Malik"]
for (let i of myNames) {
    // console.log(i);
}

let sayGreeting = "Hello World"
for (const greet of sayGreeting) {
    // console.log(greet);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for in Loop

let myObject = {
    Pak: "Pakistan",
    Ind: "India",
    Aus: "Australia",
    Eng: "England",
    NZ: "New Zealand",
}
for (let key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} :- ${myObject[key]}`);
}

let myHeroes = ["Superman", "Batman", "Flashman"]
for (let hero in myHeroes) {
    // console.log(hero);
    // console.log(`${hero} :- ${myHeroes[hero]}`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// forEach Loop

let numbers = [1, 2, 3, 4, 5]
numbers.forEach((keys) => {
    // console.log(keys);
})

let myData = [
    {
        short: "Pak",
        full: "Pakistan"
    },
    {
        short: "Ind",
        full: "India"
    },
    {
        short: "Aus",
        full: "Australia"
    },
    {
        short: "Eng",
        full: "England"
    },
]
myData.forEach((values) => {
    console.log(`${values.short} short name and full name is ${values.full}`);
})