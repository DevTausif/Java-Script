// const age = 20;
// age >= 18 ? console.log('You can participate in the vote') : console.log('You can not participate in the vote');

let price = 50;
const isLeader = true;

// price = isLeader === false ? 0 : price + 100;

// nested ternary condition
price = isLeader === true ? 
        price > 100 ? price = price /2 : 0 
: price = price + 100;
console.log(price);