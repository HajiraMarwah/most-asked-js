function Anagram(str1,str2){
  if(str1.length!==str2.length)return false
  let count={}
  for(let i=0;i<str1.length;i++){
     let char=str1[i]
     count[char]=(count[char]||0)+1

  }
  for(let i=0;i<str2.length;i++){
    let char=str2[i]
    if(!count[char])return false
    count[char]--
  }
  return true
}
console.log(Anagram("silent","listen")) //true
console.log(Anagrams("hello", "world"));  //false



// if using word of array
function Anagarm(str,arr){
    const sortedArr=str.split("").sort().join("")
    for(i=0;i<arr.length;i++){
        if(sortedArr==arr[i].split("").sort().join("")){
            return true
        }
    }
    return false
}
console.log(Anagarm("listen",["enlist","google","silent","banana"]))