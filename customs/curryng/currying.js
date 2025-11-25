function curry(fn){
    let arity=fn.length
    function curried(...args){
        if(args.length>=arity){
            return fn(...args)
        }
        return (...newArgs)=>curried(...args,...newArgs)
    }
    return curried

}