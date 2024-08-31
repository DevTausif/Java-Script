// includes are case sensitive

const number = [1,2,3,5,6,8,9,10]
console.log(number.includes(7))
if(!number.includes(7)){
    number.push(7);
    console.log(number)
}
else{
    console.log('Number not found')
}