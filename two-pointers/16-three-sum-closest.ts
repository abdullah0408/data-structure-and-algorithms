/**
 * 16. 3Sum Closest (Medium)
 *
 * Given an integer array and a target, find three integers in nums
 * such that the sum is closest to target. Return the sum of the three integers.
 * Each input has exactly one solution.
 *
 * Approach: Two Pointers (with sorting)
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Sum of three integers closest to target
 */

function threeSumClosest(nums: number[], target: number): number {
  const n: number = nums.length;
  // sort(nums.begin(), nums.end()); // C++
  nums.sort((a, b) => a - b);
  let closestSum: number = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < n - 2; i++) {
    let left: number = i + 1;
    let right: number = n - 1;

    while (left < right) {
      let sum: number = nums[i] + nums[left] + nums[right];
      if (sum === target) return target;

      // if (abs(sum - target) < abs(closestSum - target)) { // C++
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        do {
          left++;
        } while (left < right && nums[left] === nums[left - 1]);
      } else {
        do {
          right--;
        } while (left < right && nums[right] === nums[right + 1]);
      }
    }
  }
  return closestSum;
}

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
console.log(
  threeSumClosest([-1, 2, 1, -4], 1),
  threeSumClosest([-1, 2, 1, -4], 1) === 2
);
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
// Input: nums = [0,0,0], target = 1
console.log(threeSumClosest([0, 0, 0], 1), threeSumClosest([0, 0, 0], 1) === 0);
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

export {};
