//Write a function that returns the largest number in an array

function findLargest(arr) {
  let largestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

console.log(findLargest([5, 0, 10, 8, 17]));

//another example with all negative values for the above

function findLargestNum(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest
}

console.log(findLargestNum([-9, -19, -3]));