function maxSubArray(nums) {
  let maxSoFar = nums[0];   // biggest sum found so far
  let currentSum = nums[0]; // current running sum

  for (let i = 1; i < nums.length; i++) {
    // Either add current number to previous sum,
    // or start new sum from current number
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update max if currentSum is greater
    maxSoFar = Math.max(maxSoFar, currentSum);
  }

  return maxSoFar;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
//  other way

function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Instead of: currentSum = Math.max(nums[i], currentSum + nums[i]);
    if (currentSum + nums[i] > nums[i]) {
      currentSum = currentSum + nums[i];
    } else {
      currentSum = nums[i];
    }

    // Instead of: maxSoFar = Math.max(maxSoFar, currentSum);
    if (currentSum > maxSoFar) {
      maxSoFar = currentSum;
    }
  }

  return maxSoFar;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
