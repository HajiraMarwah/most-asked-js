// Sliding Window Approach-(Works only when all numbers are non-negative)
function subarraySum(nums, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < nums.length; end++) {
    currentSum += nums[end];

    // Shrink window from the left if sum > target
    while (currentSum > target && start < end) {
      currentSum -= nums[start];
      start++;
    }

    // Check if we found the sum
    if (currentSum === target) {
      return nums.slice(start, end + 1);
    }
  }

  return []; // not found
}

console.log(subarraySum([1, 2, 3, 7, 5], 12)); 
// Output: [3, 7, 2] or [7, 5] depending on numbers

// How it works
// You move a window (start → end) through the array.
// Add numbers to the current sum.
// If the sum gets too big, move start forward to make it smaller.
// Stop when you find the target sum.

// 2.Array Can Have Negative Numbers-Use a HashMap (because sliding window fails with negatives).
function subarrayWithGivenSum(nums, target) {
  let map = new Map();  // stores prefixSum -> index
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    // Check if the whole prefix equals target
    if (currentSum === target) {
      return nums.slice(0, i + 1);
    }

    // Check if there's a previous prefix that gives currentSum - target
    if (map.has(currentSum - target)) {
      let startIndex = map.get(currentSum - target) + 1;
      return nums.slice(startIndex, i + 1);
    }

    // Store prefix sum and index
    map.set(currentSum, i);
  }

  return []; // not found
}

console.log(subarrayWithGivenSum([10, 2, -2, -20, 10], -10));
// Output: [10, 2, -2, -20]
