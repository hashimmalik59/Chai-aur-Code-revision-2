let myDate = new Date()
console.log(myDate);
// console.log(myDate.toDateString()); // Mon Oct 07 2024
// console.log(myDate.toLocaleString()); // dd/mm/yy and then time
// console.log(new Date("10-07-24").toLocaleString());
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

let myDays = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(myDays.weekday)
