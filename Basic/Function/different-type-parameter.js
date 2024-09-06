function evenSizedString(str){
    const length = str.length;
    console.log(length, str)
    
    if(length % 2 ===0){
        console.log('Even size');
        return true
    }
    else{
        console.log('Odd Size')
        return false
    }
    
    
}

const size = evenSizedString('Dhaka')
console.log(size)

evenSizedString('Chandpur')


function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2 
        return result; 
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true))
console.log(doubleOrTriple(5, false))

function numberOfELements(numbers){
    const len = numbers.length;
    return len;
}

const number = numberOfELements([12,52,40,30]);
console.log(number)


function getAge(person){
    const age = person.age;
    return age;
}

const person = { age:25 }
const finalAge = getAge(person);
console.log(finalAge);