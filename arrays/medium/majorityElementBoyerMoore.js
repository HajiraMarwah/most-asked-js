function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;      // pick a new candidate
    }

    if (num === candidate) {
      count++;              // same as candidate → vote for it
    } else {
      count--;              // different → vote against
    }
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
