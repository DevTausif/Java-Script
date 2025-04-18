const numbers = [12, 87, 98, 45]
const nums = [12, 87, 98, 45]

if(numbers.includes(99)){
    console.log(numbers.concat(nums))
}
else{
    nums.splice(2,2,120,155,255)
    console.log(nums)
}
