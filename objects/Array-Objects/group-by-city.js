const users = [
  { name: "Hajira", cities: ["Bangalore", "Mangalore"] },
  { name: "Marwah", cities: ["Pune", "Bangalore"] },
  { name: "Anaya", cities: ["Delhi", "Bangalore"] },
];

const cityGroups = {};

users.forEach(user => {
  user.cities.forEach(city => {
    if (!cityGroups[city]) {
      cityGroups[city] = []; // create array if city not exists
    }
    cityGroups[city].push(user.name); // add user to city
  });
});

console.log(cityGroups);
