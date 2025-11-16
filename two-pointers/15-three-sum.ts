/**
 * 15. 3Sum (Medium)
 *
 * Given an integer array, return all triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Solution set must not contain duplicate triplets.
 *
 * Approach: Two Pointers (with sorting)
 * Time Complexity: O(n²)
 * Space Complexity: O(1) (excluding output array)
 *
 * @param nums - Array of integers
 * @returns Array of triplets that sum to 0
 */

function threeSum(nums: number[]): number[][] {
  const n: number = nums.length;
  const triplets: number[][] = [];
  // sort(nums.begin(), nums.end()); // C++
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left: number = i + 1;
    let right: number = n - 1;

    while (left < right) {
      let sum: number = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        // triplets.push_back({nums[i], nums[left], nums[right]}); // C++
        triplets.push([nums[i], nums[left], nums[right]]);
        do {
          left++;
        } while (left < right && nums[left] === nums[left - 1]);
        do {
          right--;
        } while (left < right && nums[right] === nums[right + 1]);
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
console.log(
  threeSum([-1, 0, 1, 2, -1, -4]),
  Bun.deepEquals(threeSum([-1, 0, 1, 2, -1, -4]), [
    [-1, -1, 2],
    [-1, 0, 1],
  ])
);
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: The distinct triplets are [-1,0,1] and [-1,-1,2].

// Example 2:
// Input: nums = [0,1,1]
console.log(threeSum([0, 1, 1]), Bun.deepEquals(threeSum([0, 1, 1]), []));
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
console.log(
  threeSum([0, 0, 0]),
  Bun.deepEquals(threeSum([0, 0, 0]), [[0, 0, 0]])
);
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

export {};
