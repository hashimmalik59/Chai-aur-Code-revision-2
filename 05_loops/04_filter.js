let names = ["Hashim", "Ahmad", "Malik"]
names.forEach((item) => { // Shallow Copy
    // console.log(item + " " + "G")
})

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
nums.filter((value) => {
    // return console.log(value + 1)
})

// let newNums = []
// newNums.forEach((num) => {
//     if (num > 5) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers.forEach((items) => console.log(items + 5)) // forEach will not return a value like "items > 5"

let myNums = [1, 2, 3, 4, 5]
let b = myNums.filter((values) => { // filter will not return like "value + 1"
    return values > 0
})
// console.log(b);

// let numArray = []
// numArray.filter((num) => {
//     if (num > 10) {
//         numArray.push(num)
//     }
// })
// console.log(numArray);



let fabFivePlayers = [
    { playerName: "Virat Kohli", playerDebut: 2007, playerRuns: 25000, playerAverage: 55.65, playerRegion: "Asia" },
    { playerName: "Babar Azam", playerDebut: 2015, playerRuns: 14000, playerAverage: 51.43, playerRegion: "Asia" },
    { playerName: "Steve Smith", playerDebut: 2007, playerRuns: 21000, playerAverage: 45.68, playerRegion: "Non-Asia" },
    { playerName: "Kane Williamson", playerDebut: 2009, playerRuns: 23000, playerAverage: 43.75, playerRegion: "Non-Asia" },
    { playerName: "Joe Root", playerDebut: 2008, playerRuns: 240000, playerAverage: 47.23, playerRegion: "Non-Asia" },
]
let greatPlayers = fabFivePlayers.filter((playerData) => playerData.playerRuns > 12000 && playerData.playerAverage > 40 &&playerData.playerRegion === "Non-Asia")
console.log(greatPlayers);