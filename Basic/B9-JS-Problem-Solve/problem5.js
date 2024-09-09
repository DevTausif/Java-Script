function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) === false || typeof livingCost !== 'number'){
         return 'Invalid';
    }

    // calculate income

    let income = 0;
    for(let amount of arr){
        if(amount >= 3000){
            //deduct tax amount
            let tax = amount * 20 / 100;
            income += amount - tax ;
        }
        else{
            income += amount;
        }
        
    }

    let savings = income - livingCost;
    // if(savings >= 0){
    //     return savings;
    // }
    // else{
    //     return 'earn more';
    // }

    return savings >=0 ? savings : 'earn more';
    
}

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));

