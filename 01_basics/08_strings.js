let firstName = "Hashim"
let lastName = "Malik"
let age = 23
// console.log("My name is " + firstName + lastName + "and my age is " + age); that not a best approach

// console.log(`My name is ${firstName.length} ${lastName.toUpperCase()} and my age is ${age}`); // best practice and this is string interpolation

let fullName = ("Hashim Ahmad Malik")
console.log(fullName);
// console.log(fullName.__proto__); // knowing all prototypes
// console.log(fullName.toUpperCase());
// console.log(fullName.charAt(2)); // give the index and get the character
// console.log(fullName.substring(0, 6)); // give the index and get the character
console.log(fullName.trim()); // it will remove the unwanted spaces
console.log(fullName.slice(7, 12)); // returns elements of an array
let url = "www.linkedin.com/hashimmalik59/"
console.log(url);
console.log(url.replace("linkedin", "github")); // it will replace the wanted character
console.log(url.includes("hashimmalik59")); // it will check our wanted character is available or not
console.log(fullName.split(" ")); // it will create an array on getting spaces and other special characters