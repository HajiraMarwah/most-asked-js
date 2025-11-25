Array.prototype.myReduce=function(callback,initialValue){
    let accumulator=initialValue
    for(let i=0;i<this.length;i++){
        accumulator=accumulator===undefined?
        this[i]:callback(accumulator,this[i],i,this)
    }
    return accumulator
}
console.log([1,2,3,4,5,6].myReduce((sum,x)=>sum+x,0))
//  reduce keeps a running value called accumulator.
//  For each element, we call the callback and update the accumulator. 
// At the end, we return the accumulated result.