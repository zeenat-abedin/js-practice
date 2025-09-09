// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
// such that each unique element appears only once. The relative order of the elements should
// be kept the same. Then return the number of unique elements in nums.
// Note: In DSA whenever you see the word non-decreasing, always know it will have duplicates

// 2 pointer approach

function removeDuplicatesFromSortedArray(nums) {
  let x = 0; //here x indicates the unique element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

console.log(removeDuplicatesFromSortedArray(0, 0, 1, 1, 1, 2, 2, 3, 3, 4));
