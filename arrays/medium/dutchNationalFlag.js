// It is about sorting an array containing three types of elements in one pass and in-place.
function sortColors(arr) {
  let low = 0, mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap arr[mid] and arr[low]
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else { // arr[mid] === 2
      // Swap arr[mid] and arr[high]
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
// Output: [0, 0, 1, 1, 2, 2]
