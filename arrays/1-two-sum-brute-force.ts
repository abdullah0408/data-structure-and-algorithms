/**
 * 1. Two Sum (Easy)
 *
 * Given an array of integers nums and an integer target, return indices of
 * the two numbers such that they add up to target.
 *
 * Constraints:
 * - Each input has exactly one solution
 * - Cannot use the same element twice
 * - Return answer in any order
 *
 * Approach: Brute Force (Nested Loops)
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * @param nums - Array of integers
 * @param target - Target sum to find
 * @returns Array of two indices that add up to target
 */

function twoSum(nums: number[], target: number): number[] | null {
  let n: number = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum: number = nums[i] + nums[j];
      if (sum === target) return [i, j];
    }
  }

  return null;
}

// Example 1:
// Input: nums = [2,7,11,15], target = 9
console.log(
  twoSum([2, 7, 11, 15], 9),
  Bun.deepEquals(twoSum([2, 7, 11, 15], 9), [0, 1])
);
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
console.log(twoSum([3, 2, 4], 6), Bun.deepEquals(twoSum([3, 2, 4], 6), [1, 2]));
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
console.log(twoSum([3, 3], 6), Bun.deepEquals(twoSum([3, 3], 6), [0, 1]));
// Output: [0,1]

export {};
