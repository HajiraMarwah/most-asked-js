const students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 75 },
  { name: "C", marks: 98 },
  { name: "D", marks: 60 }
];
const max=Math.max(...students.map(s=>s.marks))
console.log(max)

// want object of maximum
const toppers = students.filter(s => s.marks === max);
console.log(toppers);