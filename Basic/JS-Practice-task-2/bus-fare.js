const age = 40;
const money = 800;
if(age < 10){
    console.log('free');    
}
 // 50% discount for student
 else if(age >= 10 && age <= 30){
    const discount = money * 50 / 100;
    const payAmount = money - discount;
    console.log(payAmount);
}
// 15% discount
else if(age >= 60){
    const discount = money * 15 / 100;
    const payAmount = money - discount;
    console.log(payAmount);
}
else{
    console.log(money);
}