// Write a function that searches for an element in an array and returns the index. If the element is not present then just return -1.

function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(searchElement([4, 2, 0, 10, 8, 30], 8));

// Write a function that returns the number of negative numbers in an array

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count
}

console.log(countNegatives([2, -9, 17, 0, 1, -10, -4, 8]));
