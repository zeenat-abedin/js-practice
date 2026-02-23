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