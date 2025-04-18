// problem 1
let num = 1
while(num <= 60){
    console.log(num, 'I will invest at least 6 hrs every single day for next 60 days!')
    num++
} 

// problem 2
// odd number
let nums = 61
while(nums <= 100){
    if(nums % 2 === 1){
        console.log('odd number ',nums)
    }
    nums++
}
console.log('---------------')
// even number
let even = 78
while(even <= 98){
    if(even % 2 === 0){
        console.log('even number ', even)
    }
    even++
}
console.log('---------------')

// problem 3
// sum of total odd number
let sum_of_Odd = 81
let total = 0
while(sum_of_Odd <= 131){
    if(sum_of_Odd % 2 ===1){
        console.log('odd numbers :', sum_of_Odd)
        total =total+sum_of_Odd
    }
    sum_of_Odd++
}
console.log('Sum of all odd numbers', total)
console.log('----------------------')

// sum of even number
let sum_of_Even = 206
let total_Sum = 0
while(sum_of_Even <= 311){
    if(sum_of_Even % 2 === 0){
        console.log('Even Numbers',sum_of_Even)
        total_Sum = total_Sum + sum_of_Even
    }
    sum_of_Even++

}
console.log("Sum of total Even numbers",total_Sum)
console.log('----------------')

// problem 4
let multi = 5
let i = 1
while(i <= 10){
    console.log(`${multi} x ${i} = ${multi * i}`)
    i++
}
console.log('-------------')

// problem 5
// let timer = 15
// while (timer <= 21){
//     console.log(timer)
//     i++
// }