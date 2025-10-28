// function moveAllZeroToEnd(arr){
//     let j=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//             j++
//         }
//     }
//     return arr
// }
// const arr=[2,3,0,5,6,0,4,0,9]
// console.log(moveAllZeroToEnd(arr))

function moveAllZeroesToFirst(arr){
   let j=arr.length-1
   for(let i=arr.length-1;i>=0;i--){
    if(arr[i]!==0){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        j--
    }
   }
   return arr
}
const arr=[1,9,0,4,0,7]
console.log(moveAllZeroesToFirst(arr))