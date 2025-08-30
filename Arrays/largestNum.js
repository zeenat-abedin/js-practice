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
