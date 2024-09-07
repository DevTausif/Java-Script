function getMax(jim,tim,kim){
    if(jim > tim && jim > kim){
        return ("Jim get the 1st prize");
    }
    else if(tim > jim && tim > kim){
        return ("Tim get the 1st prize");
    }
    else if(kim > jim && kim >tim){
        return ("Kim get the 1st prize");
    }
    return ('No one will get the first prize');
}


const num1 = 65;
const num2 = 98;
const num3 = 70;
const final = getMax(num1, num2 ,num3);
console.log(final);

const max = Math.max(12,52,100,5);
console.log(max)