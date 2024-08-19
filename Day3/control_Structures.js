// if-else
function checkNum(num){
    if(num>0) return "Positive number";
    else if(num<0) return "Negative number"
    else return "The number is 0"
}

console.log(checkNum(-2))

// Ternary Operator
function checkVotingAge(age){
    return age>=18?"yes":"NO";
}

console.log(checkVotingAge(18))

// switch case
function checkWeek(day1) {
    let day = day1.toUpperCase();
    switch (day) {
        case "MONDAY":
            console.log("Monday");
            break;
        case "TUESDAY":
            console.log("Tuesday");
            break;
        case "WEDNESDAY":
            console.log("Wednesday");
            break;
        case "THURSDAY":
            console.log("Thursday");
            break;
        case "FRIDAY":
            console.log("Friday");
            break;
        case "SATURDAY":
            console.log("Saturday");
            break;
        case "SUNDAY":
            console.log("Sunday");
            break;
        default:
            console.log("Enter valid Input");
    }
}

checkWeek("monday");

// Nested switch case
function checkLeapYear(year){
    if(year%4===0) return true;
    else {
        if(year%100===0 && year%400===0) return true;
        else return false;
    }
}

console.log(checkLeapYear(2000))