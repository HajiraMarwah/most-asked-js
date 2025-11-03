// const string="hello"
// const reverseString=string.split("").reverse().join("")
// console.log(reverseString)

function reverseStr(str){
    let result=""
    for(let i=str.length-1;i>=0;i--){
        result+=str[i]
    }
    return result
}
console.log(reverseStr("hello"))