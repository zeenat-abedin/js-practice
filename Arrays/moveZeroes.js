// 2 pointer approach
// one pointer is i (i will find out which number should I shift) and another is x (the place where I need to shift my element)
// If you find a non zero number then move it to x position.
// leetcode problem 283

function moveZeroes(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  // fill all the remaining elements to zero
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); //[ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0])); //[ 0 ]
