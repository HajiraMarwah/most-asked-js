const scores = { A: 50, B: 70, C: 90 };
const max=Object.keys(scores).reduce((a,b)=>
    scores[a]>scores[b]?a:b
)
console.log(max)