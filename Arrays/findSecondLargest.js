function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(findSecondLargest([4, 9, 0, 2, 8, 7, 1, 10]));
