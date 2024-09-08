const products =[
    {name : 'Comb', price : 100,    quantity: 2},
    {name : 'Shampoo', price : 300, quantity: 4},
    {name : 'Shirt', price : 700,   quantity: 5},
    {name : 'pant', price : 1200,   quantity: 3}
];

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisItemCost = product.price * product.quantity;
        total = total + thisItemCost;
    }

    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);