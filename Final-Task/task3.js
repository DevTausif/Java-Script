function checkDigits(name){
    if(typeof name !== 'string'){
        return 'Invalid Input'
    }
    for(let num = 0; num < name.length; num++){
        if(!isNaN(name[num])){
            return true
        }
        
    }
    return false
}
const user_data = [
    checkDigits('Raj123'),
    checkDigits('Suman'),
    checkDigits('Name2024'),
    checkDigits('!@#'),
    checkDigits(['Raja']),


]
console.log(user_data.join('\n'))