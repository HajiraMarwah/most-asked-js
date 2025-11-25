const users = [
  { id: 1, name: "Hajira", city: "Bangalore" },
  { id: 2, name: "Marwah", city: "Pune" },
  { id: 3, name: "Anaya", city: "Delhi" }
];

// Access individual objects
// console.log(users[0].name) // Hajira

//Loop through array of objects
users.forEach((user)=>console.log(user.name)) // Hajira Marwah Anaya


// filter user with city bangalore
const banagloreUser=users.filter((c)=>c.city==="Bangalore")
console.log(banagloreUser)

//get array of names
const usersName=users.map((n)=>n.name)
// console.log(usersName)

//find user with id 2
const secondUserId=users.find((i)=>i.id===2)
// console.log(secondUserId)

const find=users.find((i)=>i.city==="Pune")
console.log("findinggg",find)