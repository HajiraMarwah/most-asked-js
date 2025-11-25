function throttle(fn,delay){
  let last=0
  return function(...args){
    let now=Date.now()
    if(now-last>=delay){
      fn.apply(this,args)
      last=now
    }
  }
}
function onScroll(){
  document.getElementById("status").textContent=`
  scroll event fired at,${new Date().toLocaleTimeString()}`
  console.log("scroll",Date.now())
}
const throlledFunction=throttle(onScroll,1000)
window.addEventListener("scroll",throlledFunction)