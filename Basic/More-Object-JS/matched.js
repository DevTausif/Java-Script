const numbers = [45,6,5,2,5,8,4,5,6];
// for(let i = 0; i< numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// for(const num of numbers){
//     console.log(num);
// }

const products = [
    {id:1, name: 'Samsung Phone', price: 20000},
    {id:2, name: 'Walton Phone', price: 40000},
    {id:3, name: 'Iphone Phone', price: 100000},
    {id:4, name: 'Xiaomi Phone', price: 20000},
    {id:5, name: 'Pixel Phone', price: 50000},
    {id:6, name: 'Sony Laptop', price: 80000},
    {id:7, name: 'Mac-Book Laptop', price: 150000},
    {id:8, name: 'Asus VivoBook Laptop', price: 120000},
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
      if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
      }
    }

    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);