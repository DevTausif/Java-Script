// checking a value of there index position in array
// console.log(number.indexOf(5));
// checking number 7 in array if it is not exist then store that number on array
// console.log(number.indexOf(7));
// push that number
const number = [1,2,3,5,6,8]

if(number.indexOf(7) === -1){
    number.push(7)
    console.log(number)

}
else{
    number.pop();
    console.log(number)
}