function minJumps(arr) {
  if (arr.length <= 1) return 0;

  let jumps = 0;
  let farthest = 0;
  let currentEnd = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    farthest = Math.max(farthest, i + arr[i]);

    // When we reach the end of the current jump range
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }

    // If currentEnd has reached or passed last index
    if (currentEnd >= arr.length - 1) break;
  }

  return jumps;
}

// Example
console.log(minJumps([2,3,1,1,4])); // Output: 2
