const products = [
    {id :1, name: 'samsung phone', price: 120000},
    {id :2, name: 'vivo Phone', price: 20000},
    {id :3, name: 'apple Phone', price: 150000},
    {id :4, name: 'MI Phone', price: 12500},
    {id :5, name: 'Techno phone', price: 30000},

]
function matchedProduct(products, search){
    const matched = []
    for(const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
       }
    }

    return matched
}
const input1 = matchedProduct(products,'phone')
console.log(input1)  

