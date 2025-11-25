const people = [
  { name: "Hajira", cities: ["Delhi", "Pune", "Mumbai"] },
  { name: "Marwah", cities: ["Bangalore","Delhi", "Chennai"] }
];

// Get all cities
const cities=people.flatMap((c)=>c.cities)
console.log(cities)

//get unique cities
const uniqueCity=[...new Set(people.flatMap((c)=>c.cities))]
console.log(uniqueCity)
