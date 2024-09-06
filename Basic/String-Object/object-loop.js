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
// "for in" is use on object and "for of" use in array
for(const prop in computer){
    // console.log(prop);
    // console.log(computer[prop]);
}
 const keys = Object.keys(computer);
//  console.log(keys)

 for(const key of keys){
    console.log(key, ":", computer[key]);
 }
