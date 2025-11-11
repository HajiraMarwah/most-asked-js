const obj = { A: 1, B: 2, C: 3 };
const swap=Object.fromEntries(Object.entries(obj).map(([k,v])=>[v,k]))
console.log(swap)