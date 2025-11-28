const arr=[1,2,3,4,1,2,3,4,6,7]

//using filter
const uniqueArr=arr.filter((num)=>arr.indexOf(num)===arr.lastIndexOf(num))
console.log(uniqueArr)

//optimized
let count={}
arr.forEach(n=>count[n]=(count[n]||0)+1)
const uniqueArrOptimise=Object.keys(count).filter(n=>count[n]===1).map(Number)
console.log(uniqueArrOptimise)