function longestLengthSubString(str){
    let left=0
    let maxLen=0
    let seen=new Set()
    for(let right=0;right<str.length;right++){
        while(seen.has(str[right])){
            seen.delete(str[left])
            left++
        }
        seen.add(str[right])
        maxLen=Math.max(maxLen,right-left+1)
    }
    return maxLen
}
console.log(longestLengthSubString("abcabcabc"))
console.log(longestLengthSubString("pwwkew"));   // 3 ("wke")

// | Step | `right` char | `seen` (current unique chars) | Action                        | Window (substring)                     | `maxLen` |   |
// | ---- | ------------ | ----------------------------- | ----------------------------- | -------------------------------------- | -------- | - |
// | 1    | `'p'`        | {} → { 'p' }                  | add 'p'                       | `"p"`                                  | 1        |   |
// | 2    | `'w'`        | { 'p' } → { 'p','w' }         | add 'w'                       | `"pw"`                                 | 2        |   |
// | 3    | `'w'`        | duplicate found!              | remove from left until unique | window shrinks: remove `'p'` → { 'w' } | `"w"`    | 2 |
// | 4    | `'k'`        | { 'w' } → { 'w','k' }         | add 'k'                       | `"wk"`                                 | 2        |   |
// | 5    | `'e'`        | { 'w','k' } → { 'w','k','e' } | add 'e'                       | `"wke"`                                | **3** ✅  |   |
// | 6    | `'w'`        | duplicate `'w'`               | remove from left until unique | remove `'w'` → { 'k','e' }             | `"kew"`  | 3 |
