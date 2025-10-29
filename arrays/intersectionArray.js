// function intersection(arr1, arr2) {
//   const set = new Set(arr2);
//   return [...new Set(arr1)].filter(item => set.has(item));
// }

// // Example usage:
// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// // Output: [3, 4]

function intersection(arr1, arr2) {
  const result = [];

  for (let num of arr1) {
    if (arr2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

// Example
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// 👉 [3, 4]
