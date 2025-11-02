function missingNumber(arr){
    let min=Math.min(...arr)
    let max=Math.max(...arr)
    let missing=[]
    for(let i=min;i<=max;i++){
        // missing.push(i) // if i want all complete array use this withoutif condition with mssing [1,2,3,4,5,6,7,8,9]
       if(!arr.includes(i)){
        missing.push(i)  //return array of missing number [2,3,6,7,8]
       }
    }
    return missing
}
console.log(missingNumber([1,4,5,9]))