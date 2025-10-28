function minimumElement(arr){
    minimum=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<minimum){
           minimum=arr[i]
        }
    }

    return minimum
}
console.log(minimumElement([2,5,7,8,9,1]))    