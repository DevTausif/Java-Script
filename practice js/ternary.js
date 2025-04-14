const age = 2
age === 20 ? console.log('yes') : console.log('no')

let price = 500
const isLeader = true

const finalPrice = price === 500 && isLeader === false ? console.log('hahaha') : price += 200
console.log(finalPrice)

let price1 = 50;
const leader2 = false;
const result = leader2 === true ? price1 > 100 ? price1 = price1 / 2 : price1 = 0 : price1 += 1000
console.log(result)