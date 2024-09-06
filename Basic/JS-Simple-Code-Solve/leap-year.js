function isLeapYear(year){
    if(year % 4 ===0){
        return true;
    }
    return false;
}

const isLeap = isLeapYear(2024);
console.log(isLeap);

// another way to find leap year

function isLeapYear2(year){
    if(year % 100 !==0 && year % 4 ===0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    return false;
}

const year2 = isLeapYear2(2000)
console.log(year2)