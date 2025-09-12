// m is the length of nums1 and n is the length of nums2
// (leetcode 88)

function mergeSortedArray(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);

  let p1 = 0; //pointer 1
  let p2 = 0; //pointer 2

  for (let i = 0; i < m + n; i++) {
    if (p2 >=n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
        nums1[i] = nums1Copy[p1];
        p1++
    } else {
        nums1[i] = nums2[p2]
        p2++
    }
  }
  return nums1
}

console.log(mergeSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3))