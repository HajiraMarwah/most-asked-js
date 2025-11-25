function countChar(str){
    str=str.toLowerCase()
    let count={}
    for(let i=0;i<str.length;i++){
        let char=str[i]
        count[char]=(count[char]||0)+1
    }
    return count
    
}
console.log(countChar('abcdwsacd'))