// square
function square(num1){
    const sqt = `${num1} x ${num1} = ${num1 * num1}`
    return sqt
}

const result = square(4)
const result2 = square(5)
console.log(result)
console.log(result2)


// addition
function sum_Addition(num1, num2){
    const result = `${num1} + ${num2} = ${num1 + num2}`
    return result
}

const result3 = sum_Addition(5,2)
console.log(result3) 

// checking array is array
function check_Array(is_Array){
    for(let i in is_Array){
        
        const checking_num = is_Array[i]
        if(checking_num === 85){
            is_Array.splice(i,1)
            
        }
        else{
            is_Array.push(85)
        }
        break
    }
    
    is_Array.sort(function(a,b){return a - b})
    return is_Array
}

const checking = check_Array([4,5,2,6,3])
console.log(checking)

//adding a new value in array
function adding_Arr(new_Value){
    if(Array.isArray(new_Value)){
        new_Value.unshift(7)
        new_Value.sort(function(a,b){return a - b})
    }
    else{
        return 'Its not an array'
    }
    return new_Value
}

const new_Arr = adding_Arr([66,9,8,5,2,3])
console.log(new_Arr)

// delete same value from array
function delete_Same_Value(same_Value){
    const new_Array = []
    for(let i of same_Value){
        if(!new_Array.includes(i)){
            new_Array.push(i)
        }
    }
    new_Array.sort(function(a,b){return a - b})
    return new_Array
}

const given_Arr = [2,5,6,8,5,6,3,2,5,4,1]
const sorted_Arr = delete_Same_Value(given_Arr)
console.log(sorted_Arr)

// checking duplicated sorted value
function checking_Duplicate_Value(get_Arr){
    const obj_Value = {}
    const new_Arr = []
    for(let item_Value of get_Arr){
        obj_Value[item_Value] = (obj_Value[item_Value] || 0) + 1
    }
    for(let item_Value of get_Arr){
        if(obj_Value[item_Value] > 1){
            new_Arr.push(item_Value)
        }
    }

    new_Arr.sort((a,b) => {return a - b})
    return new_Arr
}

const given_Arr2 = [2,5,6,8,5,6,3,2,5,4,1]
const sorted_Duplicate_Value = checking_Duplicate_Value(given_Arr2)
console.log(sorted_Duplicate_Value)