// Task1 Solve
function multi(num1,num2,num3,num4){
    const  result = num1 * num2 * num3 * num4
    return `Multiply of the numbers ${num1} x ${num2} x ${num3} x ${num4} = ${result}`
}

const result_values = multi(2,5,6,3)
console.log(result_values)
console.log('----------------------------------')

// task2 solve
function multi_Div(num){
    if(num % 2 === 0){
       return `The result are ${num} x ${2} = ${num * 2}`
    }
    else if(num % 2 === 1){
       return `The result are ${num} / ${2} = ${num / 2}`
    }
    
   
}

const given_Input = multi_Div(5)
console.log(given_Input)
console.log('----------------------')


// task3 solve
function make_Avg(new_Arr){
    let sum = 0
    for(const nums of new_Arr){
        sum += nums
    }
    sum/= new_Arr.length
    return `The Average = ${sum}`
}
const array = make_Avg([2,5,6,3])
console.log(array)
console.log('--------------')

//task4
function count_zero(binary){
    const zero_Obj = {}
    for(const zero of binary){
        zero_Obj[zero]=(zero_Obj[zero] || 0) +1
    }
    
        return `There is ${zero_Obj[0] || 'no'} zero in the binary`
   
}

const result_Of_Zero = count_zero([1,1,1,1,1,1,1,1,1])
console.log(result_Of_Zero)
console.log('----------------------------------')

// task5
function odd_Even(numbers){
    if(numbers % 2 === 0){
        return `${numbers} is an even number`
    }
    else if(numbers % 2 === 1){
        return `${numbers} is a odd number`
    }
}
const given_Nums = odd_Even(5)
console.log(given_Nums)
