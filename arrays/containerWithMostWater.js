// You are given an array height where each element represents the height of a vertical line on the x-axis.
// Find two lines that together with the x-axis form a container, such that it holds the most water.
// Return the maximum area of water the container can store.
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let currHeight = Math.min(height[left], height[right]);
    let area = width * currHeight;
    maxArea = Math.max(maxArea, area);

    // Move the smaller height pointer
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
