function woodCalculator(chariQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood =  chariQuantity * perChairWood ;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood; 
}

const wood = woodCalculator(5,1,3);
console.log(wood);

// Shirt price

function shoppingPrice(shirtQuantity, pantQuantity, shoeQuantity){
    
    const shirt = 500;
    const pant  = 300;
    const shoe = 900;

    const shirtPrice = shirtQuantity * shirt;
    const pantPrice = pantQuantity * pant;
    const shoePrice = shoeQuantity * shoe;

    const totalPrice = shirtPrice + pantPrice + shoePrice;
    const totalShirtPrice = shirtPrice;

    // return [totalShirtPrice, totalPrice];
    return {totalShirtPrice, totalPrice};

}

const receipt = shoppingPrice(5, 5, 2);
console.log(receipt);