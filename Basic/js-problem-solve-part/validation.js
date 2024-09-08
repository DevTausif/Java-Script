function multiply(num1, num2){
    if(typeof num1 !=='number' || typeof num2 !== 'number'){
        return 'Please provide a number';
    }
    const multiply = num1 * num2;
    return multiply;
}

const result = multiply(5,'seven');
console.log(result);

function fullName(first,second){
    if(typeof first !== 'string' && typeof second !== 'string'){
        return 'Please Provide Your First And Last Name';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Tausif','Kabir');
console.log(full);



function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please Provide a Object';
    }
    const price1 = product.name;
    const price = product.price;
    return [price1, price];
}

const price = getPrice({name: 'Mojo', price: '20tk'});
// const price = getPrice(5);
// const price = getPrice([5,6]);
console.log(price);


function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please Provide An Array';
    }
    const second = numbers[1];
    return second;
}
// const second = getSecond([1,5,2,96]);
const second = getSecond(85);
console.log(second);