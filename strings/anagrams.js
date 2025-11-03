function Anagram(str1,str2){
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()
    if(str1.length!==str2.length)return false

    let count1={}
    let count2={}
    for(let i=0;i<str1.length;i++){
        let char=str1[i]
        if(count1[char]){
            count1[char]++
        }else{
            count1[char]=1
        }
    }
     for(let i=0;i<str2.length;i++){
        let char=str2[i]
        if(count2[char]){
            count2[char++]
        }else{
            count2[char]=1
        }
    }
    for(let key in count1){
        if(count1[key]!==count2[key]){
            return false
        }
    }
return true

}
console.log(Anagram("silent","listen")) //true
console.log(Anagrams("hello", "world"));  //false