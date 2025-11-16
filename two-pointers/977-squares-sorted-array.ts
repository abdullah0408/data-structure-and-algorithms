/**
 * 977. Squares of a Sorted Array (Easy)
 *
 * Given a sorted array, return an array of the squares of each number
 * sorted in non-decreasing order.
 *
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param nums - Sorted array of integers
 * @returns Array of squared numbers in sorted order
 */

function sortedSquares(nums: number[]): number[] {
  const n: number = nums.length;
  const squaredArray: number[] = [];
  let left: number = 0;
  let right: number = n - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      // squaredArray.insert(arr.begin(), value); // C++
      squaredArray.unshift(nums[left] ** 2);
      left++;
    } else {
      squaredArray.unshift(nums[right] ** 2);
      right--;
    }
  }

  return squaredArray;
}

// Example 1:
// Input: nums = [-4,-1,0,3,10]
console.log(
  sortedSquares([-4, -1, 0, 3, 10]),
  Bun.deepEquals(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100])
);
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
console.log(
  sortedSquares([-7, -3, 2, 3, 11]),
  Bun.deepEquals(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121])
);
// Output: [4,9,9,49,121]

export {};
