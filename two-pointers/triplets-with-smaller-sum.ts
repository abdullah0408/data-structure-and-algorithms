/**
 * Triplets with Smaller Sum (Medium)
 *
 * Given an array of distinct integers and a value sum, find the count of
 * triplets (i, j, k) where i < j < k and arr[i] + arr[j] + arr[k] < sum.
 *
 * Approach: Two Pointers (with sorting)
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * @param arr - Array of distinct integers
 * @param n - Size of array
 * @param sum - Target sum threshold
 * @returns Count of triplets with sum < target
 */

function countTriplets(arr: number[], n: number, sum: number): number {
  // sort(arr.begin(), arr.end()); // C++
  arr.sort((a, b) => a - b);
  let count: number = 0;

  for (let i = 0; i < n - 2; i++) {
    let left: number = i + 1;
    let right: number = n - 1;

    while (left < right) {
      const currentSum: number = arr[i] + arr[left] + arr[right];

      if (currentSum >= sum) right--;
      else {
        count += right - left;
        left++;
      }
    }
  }

  return count;
}

// Example 1:
// Input: n = 4, sum = 2, arr[] = {-2, 0, 1, 3}
console.log(
  countTriplets([-2, 0, 1, 3], 4, 2),
  countTriplets([-2, 0, 1, 3], 4, 2) === 2
);
// Output: 2
// Explanation: Below are triplets with sum less than 2 (-2, 0, 1) and (-2, 0, 3).

// Example 2:
// Input: n = 5, sum = 12, arr[] = {5, 1, 3, 4, 7}
console.log(
  countTriplets([5, 1, 3, 4, 7], 5, 12),
  countTriplets([5, 1, 3, 4, 7], 5, 12) === 4
);
// Output: 4
// Explanation: Below are triplets with sum less than 12 (1, 3, 4), (1, 3, 5), (1, 3, 7) and (1, 4, 5).

export {};
