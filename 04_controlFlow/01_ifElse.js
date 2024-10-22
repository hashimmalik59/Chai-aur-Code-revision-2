// If Else

if (4 <= 3) {
    // console.log("Yes");
} else {
    // console.log("No");
}

let score = 1000
if (score > 999) {
    let winOrlose = "Winner"
    // console.log(`${winOrlose}, your score is ${score}`);
} else {
    winOrlose = "Looser"
    // console.log(`${winOrlose}, your score is ${score}`);
}

// if ("Hashim" === "Malik") console.log("Yes"), console.log(true), console.log("Executed"); // Not a cleaner code


let emailLoggedIn = true
let googleLoggedIn = true
let guestLoggedIn = false

if (googleLoggedIn && emailLoggedIn) {
    console.log("Welcome");
} else {
    console.log("Try Again");
}

if (googleLoggedIn || emailLoggedIn || guestLoggedIn) {
    console.log("You are ready to buy");
} else {
    console.log("Try Again");
}