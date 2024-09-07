const tausif = 65;
const kabir = 95;
if(tausif > kabir ){
    console.log('kabir will get the 1st prize');
}
else{
    console.log('tausif will get the 2nd prize');
}

// inside function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const final = getMax(52,95);
const final2 = getMax(95,100);
const finalResult = getMax(final2,final);
// console.log(final);
console.log(finalResult);