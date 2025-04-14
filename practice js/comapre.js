// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != '10')
// console.log(10 !== '10')

// let price = 600
//  if(price >= 500){
//     console.log('kkkk')
//  }

const price = 5000;
if(price > 5000){
    console.log('eat free')
}
else if(price === 5000){
    const discount = price * 10 / 100;
    if(discount === 500){
        const discountAmount = price - discount
        console.log(discountAmount)
    }
    // console.log(discount)
}
else{
    console.log(price)
}