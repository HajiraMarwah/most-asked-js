function isSortedAndRotated(arr){
    let countBreaks=0
    let n =arr.length
    for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1]){
            countBreaks++
        }
    }
    if(arr[n-1]>arr[0]){
        countBreaks++
    }
    return countBreaks===1 && !(arr[0]<arr[n-1])
}
console.log(isSortedAndRotated([5,1,2,3,4,]))