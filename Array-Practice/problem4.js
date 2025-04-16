// const tourist_Destination =['cox bazar', 'banadarban', 'rangamati']
// const books = []
// const num = 45
// if(!Array.isArray(num)){
//     console.log('Its not array')
//     if(Array.isArray(tourist_Destination) && Array.isArray(books)){
//         console.log('Those are array')
//     }
// }
// else{
//     console.log('Those are not array')
// }

function check_Array(nums,tourist_Destination, books){
    if(Array.isArray(nums)){
        console.log('its array')
    }
    else{
        console.log('its not array')
    }
    if(Array.isArray(tourist_Destination) && Array.isArray(books)){
        console.log('both are array')
    }
    else{
        console.log('both are not array')
    }

    return 'check complete';
}  
const arr = check_Array(45,['cox bazar', 'banadarban', 'rangamati'],[])
console.log(arr)
