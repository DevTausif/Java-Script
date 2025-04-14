// problem 1
let burger = 450
const price = burger > 500 ? 'free coke' : burger+=30 
console.log(price + ' ' + '(included coke price)')

// problem 2
const weight = 60
const height = 170
const bmi = weight / (height / 100) ** 2
if(bmi<18.5){
    console.log('you are underweight')
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log('you are normal')
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log('you are over weight')
}
else{
    console.log('you are obese')
}

// problem 3
const result = 60

if(result <= 100 && result >= 90){
    console.log('A')
}
else if(result <= 89 && result >= 80){
    console.log('B')
}
else if( result <= 79 && result >= 70){
    console.log('C')
}
else if (result <= 69 && result >= 60){
    console.log('D')
}
else{
    console.log('F')
}

// problem 4
const myScore = 70
if(myScore > 80){
    const friendScore = 95
    if(friendScore > 80){
        console.log('go for lunch')
    }
    else if(friendScore < 80 && friendScore >= 60){
        console.log('good luck next time')
    }
    else if(friendScore < 60 && friendScore >= 40){
        console.log('message unseen')
    }
    else if(friendScore < 40){
        console.log('block your friend')
    }
}
else{
    if(myScore < 80){
        console.log('go to home and sleep and act sad')
    }
}

// problem 5
const num1 = 8
const num2 = 6
const result1 = num1 > num2 ? num1 * 2 : num1 + num2
console.log(result1)

// problem 6
const age = 60
const student = true
let ticketFare = 800
if(age < 10){
    console.log('free for children')
}
else if(!student){
    const ticketPrice = ticketFare * 0.5
    console.log(ticketPrice)
}
else if(age >= 60){
    const ticketPrice = ticketFare * 0.15
    const ticketPrice2 = ticketFare - ticketPrice
    console.log(ticketPrice2)
}
else{
    console.log(ticketFare)
}