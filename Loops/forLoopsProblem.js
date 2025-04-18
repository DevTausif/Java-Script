// problem 1
for(let i =1; i <= 60; i++){
    console.log(i, "I will invest at least 6 hrs every single day for next 60 days!")
}
console.log('----------------')
// problem 2
// odd 
for(let i = 1; i <= 10; i+=2){
    console.log('Odd Number', i)
}
console.log('-------------------')
for(let i = 0; i <= 10; i+=2){
    console.log('Even Number', i)
}
console.log('-------------------')

// problem 3
let total = 0
for(let odd_num = 91; odd_num <= 129; odd_num+=2){
    total = total + odd_num
}
console.log('Sum of Odd Number', total)

let total1 = 0
for(let even_num = 51; even_num <= 85; even_num+=2){
    total1 = total1+ even_num
}
console.log('Sum of Even Number', total1)
console.log('---------------------')

// problem 4
let multi = 9
for(let nums = 1; nums <= 10; nums++){
    console.log(`${multi} x ${nums} = ${multi*nums}`)
}
console.log('----------')
// problem 5
for(let i= 81; i >=65; i--){
    console.log(i)
}
