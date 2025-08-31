// Write a function that returns the smallest number in an array

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallest([-9, -19, -3]));

//If you want to go from the last element down to the first

function findSmallestNum(arr) {
  let smallest = Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallestNum([-9, -19, -3]));
