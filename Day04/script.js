// findmax

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++)
    if (arr[i] > max) {
      max = arr[i];
    }
}

findMax([2, 4, 7, 8, 18]);

//count occurrences

function countOccurrences(arr, targetNumber) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetNumber) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([2, 4, 7, 8, 18, 8, 14, 8, 19, 8], 8));

//find duplicate element and remove it

function removeDuplicate(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicate([2, 4, 7, 8, 18, 8, 14, 8, 19, 8]));

// reverse an array

function reverseArr(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArr([2, 4, 7, 8, 18, 8]));
