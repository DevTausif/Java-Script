const phones = [
    {name : 'Samsung', price: 120000, camera: "110mp", color: 'Black'},
    {name : 'Iphone', price: 150000, camera: "50mp", color: 'Space Black'},
    {name : 'MI', price: 40000, camera: "12mp", color: 'White'},
    {name : 'Pixel', price: 60000, camera: "60mp", color: 'Ocean Blue'},
    {name : 'Nothing', price: 80000, camera: "50mp", color: 'Grey'}
]

function getCheapestMobile(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
             min = phone;
        }
    }
    return min;    
}

const cheap = getCheapestMobile(phones);
console.log(cheap);


