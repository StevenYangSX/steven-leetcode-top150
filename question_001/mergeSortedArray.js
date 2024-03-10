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
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
};

module.exports = mergeSortedArray;
