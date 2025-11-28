function minimumElement(arr){
    minimum=Infinity
    for(let i=1;i<arr.length;i++){
        if(arr[i]<minimum){
           minimum=arr[i]
        }
    }

    return minimum
}
console.log(minimumElement([2,5,7,8,9,1]))    