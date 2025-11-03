function findLeader(arr){
    let n=arr.length
    let leaders=[]
    let  maxSoRight=arr[n-1]
    leaders.push(maxSoRight)
    for(let i=n-2;i>=0;i--){
        if(arr[i]>maxSoRight){
            maxSoRight=arr[i]
            leaders.push(arr[i])
        }
    }
    return leaders.reverse()
}
console.log(findLeader([16,17,4,3,5,2])) //[17,5,2]

// Explanation:

// Start from the rightmost side:
// 2 → always a leader (no elements to its right)
// 5 > 2 → leader
// 3 < 5 → not a leader
// 4 < 5 → not a leader
// 17 > 5 → leader
// 16 < 17 → not a leader
// Hence → [17, 5, 2]