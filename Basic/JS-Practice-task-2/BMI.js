let weight = 85; 
let height = 1.7;

const bmi = weight / (height * height);
if(bmi < 18.5){
    console.log('You are Under Weight');
}
else if( bmi >= 18.5 && bmi <=24.9){
    console.log('You are Normal');
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log('You are Over Weight');
}
else{
    console.log('You are Obese');
}