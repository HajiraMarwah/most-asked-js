function countVowelConsonantsDigits(str){
    let s=str.toLowerCase()
    let vowel=0
    let digits=0
    let consonants=0
    let unique=""
    for(let i=0;i<str.length;i++){
      if(!unique.includes(str[i])){
        unique+=str[i]
      }
    }
    for(let i=0;i<unique.length;i++){
        let char=s[i]
        if(char>="0" && char<="9"){
            digits++
        }
        else if("aeiou".includes(char)){
          vowel++
        }else if(char>="a" && char<="z"){
          consonants++
        }
    }
    return {vowel,consonants,digits}
}
const result=countVowelConsonantsDigits("Hello World 123!")
console.log(`vowels:${vowel},consonants:${consonants},digits:${digits}`)