Array.prototype.myMap=function(callback){
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i],i,this))
    }
    return result
}
console.log([1,2,3,4].myMap(num=>num*2))

// map loops over every element in the array, 
// applies a callback to each value, and stores the returned value in a new array.
//  Finally, it returns that new array.