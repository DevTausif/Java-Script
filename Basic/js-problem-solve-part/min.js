function minPrice(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }        
    }
    return min;
}

const prices = [20000, 16000, 50000, 100000, 30000, 35000];
const finalPrice = minPrice(prices);
console.log(finalPrice + 'tk');


