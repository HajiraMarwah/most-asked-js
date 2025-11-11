const obj = { a: 1, b: 0, c: null, d: "hi" };
const cleaned=Object.fromEntries(Object.entries(obj).filter(([_,v])=>Boolean(v)))
console.log(cleaned)