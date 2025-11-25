const users = [
  { id: 1, name: "Hajira" },
  { id: 2, name: "Marwah" }
];
const obj=users.reduce((acc,u)=>{
    acc[u.id]=u.name
    return acc
},{})
console.log(obj)