const users = [
  { name: "Hajira", age: 25 },
  { name: "Marwah", age: 28 }
];
const updatedUsers=users.map((u)=>({...u,country:"india"}))
console.log(updatedUsers)