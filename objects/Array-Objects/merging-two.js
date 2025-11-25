const arr1 = [
  { city:"Delhi", name: "Hajira" },
  { city:"Pune", name: "Marwah" }
];

const arr2 = [
  { id: 1, city: "Delhi" },
  { id: 2, city: "Pune" }
]
const merged=arr1.map((obj1)=>({
    ...obj1,
    ...arr2.find((obj2)=>obj2.city===obj1.city)
}))
console.log(merged)