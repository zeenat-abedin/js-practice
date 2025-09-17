// leetcode 138

function singleNumber(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
  return nums[i];
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

// time complexity -> o(n)
// space complexity -> o(n) [since 0(n/2) is same as o(n)]

// another solution using XOR where space complexity isn't required,

function singleNumberSolutionTwo(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

console.log(singleNumberSolutionTwo([2, 2, 1]));
console.log(singleNumberSolutionTwo([4, 1, 2, 1, 2]));
console.log(singleNumberSolutionTwo([1]));
