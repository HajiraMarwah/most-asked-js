function union(arr1, arr2) {
  const result = [];

  for (let num of arr1.concat(arr2)) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

// Example
console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));
// 👉 [1, 2, 3, 4, 5, 6]
