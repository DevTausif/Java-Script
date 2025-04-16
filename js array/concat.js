const numbers = [12, 87, 98, 45]
const nums = [12, 87, 98, 45]

if(numbers.includes(99)){
    console.log(numbers.concat(nums))
}
else{
    const num = nums.slice(1,2)
    console.log(num)
}

