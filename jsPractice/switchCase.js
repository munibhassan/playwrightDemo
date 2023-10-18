function checkDayOfWeek(dayNumber){
    let day;

    switch (dayNumber) {
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
    
        default:
            console.log("Invalid Day");
            //break;
    } 
    return day
}

console.log(checkDayOfWeek(0));
// console.log(checkDayOfWeek(3));
// console.log(checkDayOfWeek(6));
// console.log(checkDayOfWeek(10));

let browser = "opera";

switch (browser) {
    case "chrome":
        console.log("launch chrome browser");
        break;
    case "firefix":
        console.log("launch firefix browser");
        break;
    case "edge":
        console.log("launch edge browser");
        break;

    default:
        console.log("please pass the right browser . . .. "+ browser);
        break;
}

//multi environment support dev, qa, staging, uat, prod
// multi user: admin, cutomer, customer, 