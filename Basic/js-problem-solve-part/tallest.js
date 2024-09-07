function getMax(numbers){

    let arrMax = numbers[0];   
    for(const num of numbers){
        if(num > arrMax){
           arrMax = num;
        }         
    }

    return arrMax;
}

const height = [65, 66, 68, 72, 78, 60];
const result = getMax(height);
console.log(result);