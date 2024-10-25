let myNums = [1, 2, 3]
let newNums = myNums.reduce((value, item) => value + item, 0)
// console.log(newNums);

let numsInArr = [1, 2, 3, 4, 5]
let newArr = numsInArr.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue

}, 0)
// console.log(newArr);

let coursesData = [
    {
        courseName: "JavaScript course",
        coursePrice: 7999,
    },
    {
        courseName: "Pythob course",
        coursePrice: 5999,
    },
    {
        courseName: "Mobile App Development course",
        coursePrice: 13999,
    },
    {
        courseName: "Data Science course",
        coursePrice: 15999,
    },
]
let sumAllPrice = coursesData.reduce((accumulator, currentValue) => accumulator + currentValue.coursePrice, 0)
console.log(sumAllPrice);
