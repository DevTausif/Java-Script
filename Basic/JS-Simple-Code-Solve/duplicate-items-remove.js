

function noDuplicate(arr){
    const unique = [];
    for(const item of arr){
        if(unique.includes(item)===false){
            unique.push(item);
        }
       
    }
    return unique;
}
const food = noDuplicate(['biriani', 'burger', 'kacchi', 'polao', 'kacchi','burger']);
const numb = noDuplicate([1,2,3,6,5,1,2,6,8]);

console.log(food);
console.log(numb);



