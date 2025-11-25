const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];
const unique=arr.filter((v,i,self)=>i===self.findIndex(t=>t.id===v.id))
console.log(unique)
const products = [
  { name: "Apple", price: 20 },
  { name: "Banana", price: 10 },
  { name: "Mango", price: 15 },
];
const sumProducts=products.reduce((sum,e)=>sum+e.price,0)
console.log(sumProducts)