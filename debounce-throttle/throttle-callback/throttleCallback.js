function throttle(fucn,delay){
    let state={last:0}
    return function(...args){
        const now=Date.now()
        if(now-state.last>=delay){
            fucn.apply(this,args)
            state.last=now
        }
    }
}