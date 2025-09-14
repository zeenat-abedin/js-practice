// leetcode 268

function missingNumber(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;

  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
  }
  return totalSum - partialSum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// time complexity -> o(n)