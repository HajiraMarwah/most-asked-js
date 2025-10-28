function duplicate(arr){
    let duplicate=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j] && !duplicate.includes(arr[i])){
                duplicate.push(arr[i])
            }
        }
    }
    return duplicate
}
console.log(duplicate([1,2,3,4,1,4,5,7,5]))