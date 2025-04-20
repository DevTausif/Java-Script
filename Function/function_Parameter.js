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


// finding even number in an array
function find_Even_Num(array){
    const new_arr = []
    for(let index of array){
        if(index % 2 === 0 && !new_arr.includes(index)){
           new_arr.push(index)
        }
    }
    new_arr.sort((a,b)=>{return a - b})
    return new_arr
}

const given_data = find_Even_Num([2,4,9,6,3,2])
console.log(given_data)

// finding odd number 
function find_Odd_Num(given_data){

    const odd_Arr = []
    for(let index of given_data){
        if(index % 2 === 1 && !odd_Arr.includes(index)){
            odd_Arr.push(index)
        }      
    }

    odd_Arr.sort((a, b)=>{return b - a})
    return odd_Arr
} 

const given_Data2 = find_Odd_Num([2,3,6,5,4,2,1,2,5,8,9,6,3])
console.log(given_Data2)

// addition of array's value
function arr_Addition(arr){
    let sum = 0
    const array = []
    for(const number of arr){
        if(!array.includes(number)){
            array.push(number)
            array.sort((a,b)=>{return a - b})
        }
    }

    for(const num of array){
        sum += num
    }
    return `Sum of Array ${sum}`
}
const given_Addition = arr_Addition([5,6,3,2,1,4,5,2])
console.log(given_Addition)

// Subtraction of object
function sub_Obj(obj_Value){
    let sum = 0
    const arr = []
    for(const key of Object.values(obj_Value)){
        for(const key2 of key){
            if(!arr.includes(key2)){
                arr.push(key2)
                arr.sort((a,b)=>{return a - b})
            }
        }
    }
    for(const arr2 of arr){
        sum -= arr2
    }
    return `Sum of this Object ${sum}`
}
const obj_values = sub_Obj({arr:[5,6,2,3,5,2,1]})
console.log(obj_values)