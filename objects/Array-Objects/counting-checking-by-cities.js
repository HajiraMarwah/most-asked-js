const users = [
  { id: 1, name: "Hajira", city: "Bangalore" },
  { id: 2, name: "Marwah", city: "Pune" },
  { id: 3, name: "Anaya", city: "Delhi" }
];

const countCities=users.reduce((acc,user)=>{
   acc[user.city]=(acc[user.city]||0)+1
   return acc
},{})
console.log(countCities)

const groupByUser=users.reduce((acc,user)=>{
    if(!acc[user.city])acc[user.city]=[]
    acc[user.city].push(user.name)
    return acc
},{})
console.log(groupByUser)

// Check condition — Does any user live in Bangalore
const hasBangalore=users.some((c)=>c.city==="Bangalore")
console.log(hasBangalore)

// Check all condition — Are all users from Bangalore?
const allBangalore=users.every((c)=>c.city==="Bangalore")
console.log(allBangalore)

const sorted=[...users].sort((a,b)=>a.name.localeCompare(b.name))
console.log(sorted)


// counting when have array of occurence
const users1 = [
  { name: "Hajira", cities: ["Bangalore", "Mangalore"] },
  { name: "Marwah", cities: ["Pune", "Bangalore"] },
  { name: "Anaya", cities: ["Delhi", "Bangalore"] },
];
const uniqueCollection=users1.reduce((acc,user)=>{
 user.cities.forEach(city=>{
  acc[city]=(acc[city]||0)+1
 })
  return acc
},{})
console.log(uniqueCollection)


