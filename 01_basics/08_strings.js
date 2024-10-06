let firstName = "Hashim"
let lastName = "Malik"
let age = 23
// console.log("My name is " + firstName + lastName + "and my age is " + age); that not a best approach

// console.log(`My name is ${firstName.length} ${lastName.toUpperCase()} and my age is ${age}`); // best practice and this is string interpolation

let fullName = ("Hashim Ahmad Malik")
// console.log(fullName);
// console.log(fullName.__proto__); // knowing all prototypes
// console.log(fullName.toUpperCase());
// console.log(fullName.charAt(2)); // give the index and get the character
// console.log(fullName.substring(0, 6)); // give the index and get the character
// console.log(fullName.trim()); // it will remove the unwanted spaces
// console.log(fullName.slice(7, 12)); // returns elements of an array
// let url = "www.linkedin.com/hashimmalik59/"
// console.log(url);
// console.log(url.replace("linkedin", "github")); // it will replace the wanted character
// console.log(url.includes("hashimmalik59")); // it will check our wanted character is available or not
// console.log(fullName.split(" ")); // it will create an array on getting spaces and other special characters

// Exercise

// Question 1: How can you convert the string "JavaScript is fun" to uppercase?
let message = "Javascript is fun"
// console.log(message.toUpperCase());

// Question 2: Given the string "Hello, World!", write a method to extract the word "World" from it.
let hello = "Hello, World"
// console.log(hello.substring(7, 12));

// Question 3: How can you check if the string "Learn JavaScript" contains the word "JavaScript"?
let str = "Learn Javascript"
// console.log(str.includes("Javascript"));

// Question 4: Given the string "Frontend" and the string "Engineer", concatenate both strings with a space in between.
let str1 = "Frontend "
let str2 = "Engineer"
// console.log(str1 + str2);

// Question 5: Write a method to replace all occurrences of the word "JS" with "JavaScript" in the string "I love JS because JS is awesome".
let messageJS = "I love JS because JS is awesome"
// console.log(messageJS);
// console.log(messageJS.replace("JS", "Javascript"));

// Question 6: How can you trim the whitespace from the beginning and end of the string " Hello JS! "?
let greeting = "  Hello JS     "
// console.log(greeting);
// console.log(greeting.trim());

// Question 7: Given the string "apple,banana,cherry", split this string into an array of words.
let fruit = "apple"
let fruit2 = "banana"
let fruit3 = "cherry"
// console.log(fruit.split(fruit2, fruit3));

// Question 8: Write a method to reverse the string "coding".
let code = "coding"
// console.log(code.reverse());

// Question 9: How can you get the character at index 4 in the string "JavaScript"?
let js = "Javascript"
// console.log(js[4]);

// Question 10: How can you convert the string "12345" into a number?
let str3 = "12345"
let intoNumber = Number(str3)
// console.log(intoNumber);