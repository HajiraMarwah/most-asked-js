function longestConsecutive(nums) {
  let numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    // Only start counting if num-1 is not present
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// Output: 4
// [1,2,3,4]->4 is longest