// Add element in array
const number = [1,2,3,5,4,6]
console.log(number)
number.push(44)
console.log(number)
// remove element in array
let del=number.pop() // Store deleted array last element on variable
console.log(number)
console.log(del)

// shift array
let add = number.shift()  // Store shifted array element on variable
console.log(number)
console.log(add)

// unshift array

number.unshift(10) // Store unshift array 1st element
console.log(number); 