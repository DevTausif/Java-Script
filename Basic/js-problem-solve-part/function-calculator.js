function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result  = add(a,b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(operation === 'divide'){
        const result = divide(a,b);
        return result;
    }
    else{
        return "Only 'add','subtract','multiply','divide' operation is allowed";
    }
}

const result =calculator(5,3,'multiply');
console.log(result);

// const totalAdd = add(5,3);
// const totalSub = subtract(5,3);
// const totalMulti = multiply(5,3);
// const totalDivide = divide(15,3);
// console.log(totalAdd, totalSub, totalMulti, totalDivide);
