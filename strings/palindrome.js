

function palindrome(str){
    // const reversed=str.split("").reverse().join("")
    // return str===reversed
    let left=0
    let right=str.length-1
    while(left<right){
        if(str[left]!==str[right])return false
        left++
        right--
    }
    return true
}
console.log(palindrome("madam"))


// palindorme for number
function palindromeNum(num){
    const string=num.toString();
    return string===string.split("").reverse().join("")
}
console.log(palindromeNum(121))

// check palindorme for two strings

function isTwoPalindrome(str1,str2){
    const isPlaindrome=(s)=>{
        return s===s.split("").reverse().join("")
    }
    return isPlaindrome(str1) && isPlaindrome(str2)
}
console.log(isTwoPalindrome("madam", "racecar"))
console.log(isTwoPalindrome("madam", "hello"));