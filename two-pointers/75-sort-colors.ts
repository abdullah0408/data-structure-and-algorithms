/**
 * 75. Sort Colors (Medium)
 *
 * Given an array with n objects colored red, white, or blue (represented by 0, 1, 2),
 * sort them in-place so objects of the same color are adjacent, in the order red, white, blue.
 * Must solve without using library's sort function.
 *
 * Approach: Two Pointers (Dutch National Flag)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param nums - Array with values 0, 1, 2
 * @returns Modified array in-place
 */

function sortColors(nums: number[]): void {
  let low: number = 0;
  let mid: number = 0;
  let high: number = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // if (low != mid) swap(nums[low], nums[mid]); // C++
      if (low !== mid) [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) mid++;
    else {
      // if (mid != high) swap(nums[mid], nums[high]); // C++
      if (mid !== high) [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Example 1:
// Input: nums = [2,0,2,1,1,0]
const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1, Bun.deepEquals(nums1, [0, 0, 1, 1, 2, 2]));
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2, Bun.deepEquals(nums2, [0, 1, 2]));
// Output: [0,1,2]

export {};
