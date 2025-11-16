/**
 * 167. Two Sum II - Input Array Is Sorted (Medium)
 *
 * Given a sorted array (1-indexed), find two numbers that add up to target.
 * Return their 1-indexed positions [index1, index2].
 *
 * Constraints:
 * - Exactly one solution exists
 * - Cannot use same element twice
 * - Must use O(1) extra space
 *
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param numbers - Sorted array of integers
 * @param target - Target sum
 * @returns 1-indexed positions [index1, index2]
 */

function twoSum(numbers: number[], target: number): number[] | null {
  const n: number = numbers.length;
  let left: number = 0;
  let right: number = n - 1;

  while (left < right) {
    const sum: number = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }

  return null;
}

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
console.log(
  twoSum([2, 7, 11, 15], 9),
  Bun.deepEquals(twoSum([2, 7, 11, 15], 9), [1, 2])
);
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
console.log(twoSum([2, 3, 4], 6), Bun.deepEquals(twoSum([2, 3, 4], 6), [1, 3]));
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
console.log(twoSum([-1, 0], -1), Bun.deepEquals(twoSum([-1, 0], -1), [1, 2]));
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

export {};
