// problem 1
let n = 0;
while(n <= 200){
    n++
    if(n >= 100){
        break;
    }
    console.log(n)
}
console.log('--------------')

// problem 2
let num = 1
let total = 0
while(total <= 100){
    total++
    if(total >= 100){
        break
    }
    
    console.log(`${total} + ${num} = ${total + num}`)

}

console.log('----------------')

// problem 3
let nums = 1;
while(nums <= 100){
    nums++;
    let sqr = Math.sqrt(nums);
    if(sqr % 1 === 0){
        console.log(`Square Number Found : ${nums}`)
        break;
    }
    console.log(nums);
}

// continue statement problems
// problem 1
let i = 0;
while(i <= 40){
    i++
    if(i % 2 === 1){
        continue
    }
    console.log(i)
}
console.log('-------------')
// 
let a = 55;
while(a <= 85){
    if(a % 2 === 0 || a % 5 === 0){
        a++    
        continue      
    }
    console.log(a)
    a++
}