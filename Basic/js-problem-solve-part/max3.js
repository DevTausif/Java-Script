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

// const jim = getMax(65);
// const tim = getMax(98);
// const kim = getMax(70);
const final = getMax(65, 95, 70);
console.log(final);

const max = Math.max(12,52,100,5);
console.log(max)