const computer = {
    brand : 'lenovo',
    price : 35000,
    processor : 'intel',
    hdd : '512gb',
    unique : {
        color : 'blue',
        model : {
            num : 4525525456
        }
    }
}
// changing model object value
computer.unique.model.num = 'Model #4525525456';
console.log(computer.unique.color);
console.log(computer.unique.model.num);
// want to delete a property in object
delete computer.price;
console.log(computer)
