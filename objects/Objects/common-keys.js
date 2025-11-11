const a = { name: "A", city: "B", age: 25 };
const b = { name: "A", age: 30, pin: 123 };
const commonKeys=Object.keys(a).filter(k=>k in b)
console.log(commonKeys)