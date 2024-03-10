/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 1. intuitive way : copy nums2 to nums1 to fill last n elements. Then sort arr1.

// 2. My way: copy nums1 to another array. Using two pointers, fill nums1 accoradingly.

// 3. optimal solution: starting pionters from the back of arr1 and arr2. save space

var mergeSortedArray = function (nums1, m, nums2, n) {
  let tail = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[tail] = nums1[p1];
      p1--;
    } else {
      nums1[tail] = nums2[p2];
      p2--;
    }
    tail--;
  }

  // after the above loop, if p2 is still >=0, there are elements in nums2 that needs to be copied to nums1
  while (p2 >= 0) {
    nums1[tail] = nums2[p2];
    p2--;
    tail--;
  }
};

module.exports = mergeSortedArray;
