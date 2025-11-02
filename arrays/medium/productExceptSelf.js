function productExceptSelf(nums) {
  let n = nums.length;
  let result = Array(n).fill(1);

  // Step 1: prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Step 2: suffix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// Output: [24, 12, 8, 6]


// | i | Exclude   | Product |
// | - | --------- | ------- |
// | 0 | [2, 3, 4] | 24      |
// | 1 | [1, 3, 4] | 12      |
// | 2 | [1, 2, 4] | 8       |
// | 3 | [1, 2, 3] | 6       |
