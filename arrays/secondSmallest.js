function secondSmallest(arr){
    min=arr[0]
    secondSmallest=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            secondSmallest=min
            min=arr[i]
        }else if(arr[i]<secondSmallest && arr[i]!==min){
            secondSmallest=arr[i]
        }
    }
    return secondSmallest
}
const arr=[9,7,4,5,1]
console.log(secondSmallest(arr))