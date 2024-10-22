// Switch

let workingDays = "thur"
switch (workingDays) {
    case "mon":
        console.log("Monday");
        break;
    case "tue":
        console.log("Tuesday");
        break;
    case "wed":
        console.log("Wednesday");
        break;
    case "thur":
        console.log("Thursday");
    // break;
    case "fri": // if we comment break and then next case is also executes without default case
        console.log("Friday");
        break;
    default:
        console.log("Holidays");
        break;
}