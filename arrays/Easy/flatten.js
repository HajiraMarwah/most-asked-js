const arr=[1, [2, [3, 4], 5]]
const flatten=arr.flat(Infinity)
console.log(flatten)

// without buitl in 
function flatten(arr){
    let result=[]
   arr.forEach(item=>{    //looping through each item in array
       if(Array.isArray(item)){
           result=result.concat(flatten(item))  //checing if array i recursively call faltten an array
       }else{
           result.push(item)   // if not array then simply push it to result
       }
   })
   return result
}
console.log(flatten([1, [2, [3, 4], 5], 6]));