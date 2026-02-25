function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log('countNegatives:', countNegatives([-2, 4, -1, -6, 3, 2, -7, -18]));

//find largest

function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log('findLargest:', findLargest([5, 0, 7, 10, 8, 17, 1]));
console.log('findLargest:', findLargest([-9, -19, -3]));

//find smallest

function findSmallest(arr) {
  let smallest = Infinity; //when finding smallest, you can't put -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log('findSmallest:', findSmallest([5, 0, 7, 10, 8, 17, 1]));
console.log('findSmallest:', findSmallest([-9, -19, -3]));

//find second largest

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firsLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firsLargest) {
      secondLargest = firsLargest;
      firsLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log('secondLargest:', secondLargest([4, 9, 0, 2, 8, 7, 1]));
