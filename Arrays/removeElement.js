// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

// 2 pointer approach

function removeElement(nums, val) {
  let x = 0; // first pointer is 0
  for (let i = 0; i < nums.length; i++) {
    //shift elements to left if it is not equal to val
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}

console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 3)); //8 since if we ignore val 3, then we have 8 elements in the array
