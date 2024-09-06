function oddAvg(numbers){
    const odds = [];
    for(const numb of numbers){
        if(numb % 2 ===1){
           odds.push(numb);
        }
    
    }
    

    let sum = 0;
   for(const number of odds){
        sum = sum + number;
        
   }
   
   const count =odds.length;
   const avg = sum / count;
   console.log(sum, count);
   return avg;
}

const numbers = [42,13,58,65];
const avg = oddAvg(numbers);
console.log('Avg Of The Odd Numbers is :',avg);