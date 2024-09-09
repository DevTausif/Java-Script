const person = ['rakib', 'nokib', 'sakib', 'dakib'];
const sortedPerson = person.sort();
console.log(sortedPerson);


const number = [2,5,8,95,65,4,7,3];
const number_asc= [...number].sort(function(a,b){return a - b});
const number_dsc= [...number].sort(function(a,b){return b - a});

console.log(number_asc);
console.log(number_dsc);