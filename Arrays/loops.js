function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count
}

console.log('countNegatives:', countNegatives([-2, 4, -1, -6, 3, 2, -7, -18]));

//find largest

function findLargest(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
           largest = arr[i]
        }
    }
    return largest
    
}

console.log('findLargest:', findLargest([5, 0, 7, 10, 8, 17, 1]));