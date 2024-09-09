const friends = ['Elon', 'Mark', 'Bill','Waren'];
for(const friend of friends){
    console.log(friend);
}

for(let i = 0; i< friends.length; i++){
    console.log(i);
    console.log(friends[i]);
    console.log(friends);
}

const numbers = [,5,2,5,6,2,4,8,5,6,1,85,5];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
// while loop
let i =0;
while(i < friends.length){
    console.log(friends[i]);
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}