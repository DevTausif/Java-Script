const address = 'Banasree';
const part = address.slice(2,7)
console.log(address)
console.log(part)

const sentence = 'i am a good and hardworking person'
// console.log(sentence.split(' '))
console.log(sentence.split('h'))

const friendsStr = 'Rahim, Kahim, Dahim, Lahim, Fahim, Sahim'
const friends = friendsStr.split(',') 
console.log(friendsStr)
console.log(friends)

const realFriend = ['Rahim', ' Kahim', ' Dahim', ' Lahim', ' Fahim', ' Sahim']
console.log(realFriend.join(','))
console.log(realFriend.join('-'))