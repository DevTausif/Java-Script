const user_Details = {
    f_Name : 'Tausif',
    L_name : 'Kabir',
    user_Age : 25,
    user_Address : 'Basaboo',
    sub : ['first','second','third'],
    subs :{
        sub1 : 'bng',
        sub2 : 'eng',
        sub3 : 'math',
        sub4:'phy'

    }
}
user_Details.sub.push('fourth', 'fifth')
user_Details.subs.sub5 = 'chem'
delete user_Details.user_Address
console.log(user_Details.subs)
for(const key in user_Details){
    console.log( key,user_Details[key])
}
// for(const [key, value] of Object.entries(user_Details.subs)){
//     console.log(`${key} : ${value}`);
// }
// for(const [key1, value1] of Object.entries(user_Details)){
//     console.log(`${key1} : ${value1}`)
// }
// for(const details_Sub of user_Details.sub){
//     console.log(details_Sub)
// }