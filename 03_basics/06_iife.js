// function IIFE() {
//     console.log("Hashim");
// }
// IIFE()


// IIFE: Avoid polluting the global namespace
(function IIFE(name) {
    console.log(`Hello ${name}`);
})("Hashim"); // two IIFEs are executes with at the end IIFE need semicolon

((friend) => {
    console.log(`Hello Dear ${friend}`);
})("Hashim buddy")