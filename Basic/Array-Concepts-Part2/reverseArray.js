const num = [1,2,3,6,5,4,2,5,5];

// num.reverse();
// console.log(num);

const reversed_Num= [];
// for(const numbers of num){
//     reversed_Num.unshift(numbers);
// }
// console.log(reversed_Num);

// for(let i = 0; i< num.length; i++){
//     const numbers = num[i];
//     reversed_Num.unshift(numbers);
// }

// console.log(reversed_Num);

// reversed loop
const finalNum = []
for(let i = num.length -1; i>=0; i--){
    const numbers = num[i];
    finalNum.push(numbers);
}
console.log(finalNum);

