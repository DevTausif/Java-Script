const school = 'Ideal School'
console.log(school.toLowerCase())
console.log(school.toUpperCase())
const subject ='Physics'
const book ='physics'

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('i am reading book')
}
else{
    console.log('I am not reading book properly')
}

const drink = 'water'
const liquid = '  water';
// trim only use on first and last wide space

if(drink.trim() === liquid.trim()){
    console.log('it is water')
}
else{
    console.log('It is no water')
}