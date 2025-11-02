// Right Rotation by k (clockwise)
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n; // handle k > n

  // Step 1: Reverse entire array
  reverse(arr, 0, n - 1);

  // Step 2: Reverse first k elements
  reverse(arr, 0, k - 1);

  // Step 3: Reverse remaining n - k elements
  reverse(arr, k, n - 1);

  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateRight(arr, 3)); 
// Output: [5, 6, 7, 1, 2, 3, 4]



// Left Rotation by k (counterclockwise)
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateLeft(arr, k) {
  const n = arr.length;
  k = k % n;

  // Step 1: Reverse first k elements
  reverse(arr, 0, k - 1);

  // Step 2: Reverse remaining n - k elements
  reverse(arr, k, n - 1);

  // Step 3: Reverse entire array
  reverse(arr, 0, n - 1);

  return arr;
}

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateLeft(arr2, 3));
// Output: [4, 5, 6, 7, 1, 2, 3]
