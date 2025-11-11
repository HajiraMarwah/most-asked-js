const user = { name: "A", address: { city: "Bangalore" } };
const userDeepCopy=structuredClone(user)
console.log(userDeepCopy)
userDeepCopy.address.city="Jaipur"
console.log(userDeepCopy)
console.log(user) // doesnt affect orginal