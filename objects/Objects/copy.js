const user = { name: "Anaya", city: "Delhi" };

// copy using shallow
const copy={...user}
console.log(copy)

//using assign
const copy2=Object.assign({},user)
console.log(copy2)