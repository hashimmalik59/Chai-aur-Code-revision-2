let myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newNums = myNumbers.map((add) => (add + 1)) // map will return a new value like "add + 1"

let newNums = myNumbers
    .map((multiply) => multiply * 2) // Chanining method
    .map((add) => add + 10) // Chanining method
    .filter((newElement) => newElement >= 15) // Chanining method
console.log(newNums);