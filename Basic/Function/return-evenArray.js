function evenNumber(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 ===0){
            // console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = evenNumber([5,2,10,5,20])
console.log(numbers)

function sumOfEven(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2===0){
            // console.log(number)
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEven(numbers)
console.log(sum)