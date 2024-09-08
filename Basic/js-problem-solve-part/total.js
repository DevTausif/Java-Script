const products =[
    {name : 'Shampoo', price : 300},
    {name : 'Comb', price : 100},
    {name : 'Shirt', price : 700},
    {name : 'pant', price : 1200}
];

function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
     }

     return sum;
}
const total =getShoppingTotal(products);
console.log(total);