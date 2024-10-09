let fruit = ["Apple", "Banana", "Mango"]
let vegetable = ["Potato", "Tomato", "Onion"]

console.log(fruit);
console.log(vegetable);

fruit.push(vegetable) // Bad practice of concating two arrays (Note: Returns existing array)
console.log(fruit);
console.log(fruit[3][0]);

let foodItems = fruit.concat(vegetable) // Concates both arrays (Note: Returns new array)
console.log(foodItems);

let foodItems2 = [...fruit, ...vegetable] // Spread Operator: Best practice fot concates arrays
console.log(foodItems2);

let number = [0, 1, 2, 3, 4, [5, 6], [7, 8, 9, [1, 2, 3]]]
console.log(number);
console.log(number.flat(Infinity)); // this method will flat all elements

console.log(Array.isArray(fruit)) // checking, this is array or not (output: true)
console.log(Array.isArray("Hashim")) // (output: false)

console.log(Array.from("Hashim")); // converts into an array (output: [ 'H', 'a', 's', 'h', 'i', 'm' ])

let firstName = "Hashim"
let middleName = "Ahmad"
let lastName = "Malik"
console.log(Array.of(firstName, middleName, lastName)); // kind of same as Array.from