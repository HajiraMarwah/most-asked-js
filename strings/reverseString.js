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


function reverseEachWord(str) {
    let result = "";
    let word = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char !== " ") {
            word += char;          // building a word
        } else {
            // reverse the word manually
            for (let j = word.length - 1; j >= 0; j--) {
                result += word[j];
            }
            result += " ";         // add space
            word = "";             // reset for next word
        }
    }

    // reverse the last word (no space after it)
    for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
    }

    return result;
}

console.log(reverseEachWord("abcde bye"));
