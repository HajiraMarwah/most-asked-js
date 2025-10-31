function maxProduct(nums) {
  if (nums.length === 0) return 0;

  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num < 0) {
      // Swap max and min when multiplied by negative
      [maxProd, minProd] = [minProd, maxProd];
    }

    maxProd = Math.max(num, maxProd * num);
    minProd = Math.min(num, minProd * num);

    result = Math.max(result, maxProd);
  }

  return result;
}

// Example
console.log(maxProduct([2,3,-2,4])); // Output: 6
console.log(maxProduct([-2,0,-1]));  // Output: 0
