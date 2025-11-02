const arr = [0, 2, 3, 5, 8, 9];
function secondLargest(arr) {
  let max = arr[0];
  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondLargest = max;

      max = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== max) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest(arr));
