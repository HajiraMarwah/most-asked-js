function threeSum(nums, target = 0) {
  let result = [];
  nums.sort((a, b) => a - b); // sort first

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));
// [[-1, 0, 1], [-1, -1, 2]]
