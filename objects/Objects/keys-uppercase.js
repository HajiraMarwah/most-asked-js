const obj = { name: "Hajira", city: "Bangalore" };
const upperkeys=Object.fromEntries(Object.entries(obj).map(([k,v])=>k.toUpperCase(),v))
console.log(upperkeys)