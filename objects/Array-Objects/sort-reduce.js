const employees = [
  { name: "Hajira", salary: 50000 },
  { name: "Marwah", salary: 60000 },
  { name: "Anaya", salary: 55000 }
];
const sorted=employees.sort((a,b)=>b.salary-a.salary)
console.log(sorted)
const salaried=employees.reduce((sum,e)=>sum+e.salary,0)
console.log(salaried)


