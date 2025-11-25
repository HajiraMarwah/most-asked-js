Array.prototype.myFilter=function(callback){
    let result=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i])
        }
    }
    return result
}
console.log([1,2,3,4,5,6,7,8].myFilter(num=>num%2===0))