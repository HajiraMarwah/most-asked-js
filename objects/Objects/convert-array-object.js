const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];
const obj=Object.fromEntries(arr.map((item)=>[item.id,item.name]))
console.log(obj)