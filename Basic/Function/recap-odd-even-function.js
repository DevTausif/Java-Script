function add(price1, price2){
        const total = price1 + price2;
        return total;
}
function add(price1, price2){
        return price1 + price2;
}

const bill = add(5,25)
console.log(bill)

const bill2 = add(5,20)
console.log(bill2)

// math
function doMath(num1,num2){
    const sum =num1 + num2 ;
    const diff =num1 - num2;
    const multiply =sum * diff;
    const division =multiply / 2;
    return division;

}

const result = doMath(10,5);
console.log(result);

// conditional return even
function isEven(number){
    if(number % 2===0){
        return true;
    }
    else{
        return false
    }
}

const final = isEven(5)
console.log(final)
console.log(isEven(120))

// odd 
function isOdd(number){
    if(number % 2 ===1){
        return true;
    }
    return false
}

console.log('Odd Number',isOdd(5))
console.log('Odd Number',isOdd(10))