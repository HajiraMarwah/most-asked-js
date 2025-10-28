function combinedMaxMin(arr){
    let max=arr[0],min=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max)  max=arr[i]
        if(arr[i]<min) min=arr[i]
    }
    return{max,min}
    
}
const arr=[2,4,5,8,9]
const result=combinedMaxMin(arr)
// console.log(combinedMaxMin(arr))
console.log(`maximin number:${result.max} and minimum number:${result.min}`)
