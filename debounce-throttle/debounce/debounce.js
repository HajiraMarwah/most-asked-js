function debounce(fn,delay){
let timer
  return function(...args){
    document.getElementById("status").textContent="Typing"
    clearTimeout(timer)
    timer=setTimeout(()=>{fn.apply(this,args)},delay)
  }
}
function handleEvent(event){
  let text=event.target.value
  document.getElementById("status").textContent=text?
  `Final Text is ${text}`:"Nothing typed as yet"
}
const debouncedFunction=debounce(handleEvent,1000)
document.getElementById("search").addEventListener("input",debouncedFunction)