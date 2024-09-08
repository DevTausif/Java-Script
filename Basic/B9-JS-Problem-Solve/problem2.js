function checkName(name){

    if(typeof name !== 'string'){
        return 'Invalid';
    }

    let lastLetter = name.slice(-1).toLowerCase();
    let checkName = ['a','y','i','e','o','u','w'];
    // let result = false;
    // for(const char of checkName ){
    //     if(char === lastLetter){
    //         result = true;
    //     }
    // }

    let result =checkName.includes(lastLetter);

    return result ? 'Good Name' : 'Bad Name'

}

console.log(checkName('Salman'));
console.log(checkName('RafeE'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));