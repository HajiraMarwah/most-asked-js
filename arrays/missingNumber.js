function missingNumber(arr){
    let min=Math.min(...arr)
    let max=Math.max(...arr)
    let missing=[]
    for(let i=min;i<=max;i++){
       if(!arr.includes(i)){
        missing.push(i)
       }
    }
    return missing
}
console.log(missingNumber([1,4,5,9]))