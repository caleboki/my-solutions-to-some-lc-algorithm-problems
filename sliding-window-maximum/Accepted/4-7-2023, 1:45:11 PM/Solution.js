// https://leetcode.com/problems/sliding-window-maximum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     let output = []
    
//     for (let i = 0; i < nums.length-k+1; i++) {
//         let max = nums[i]
//         for (let j = i; j < i+k; j++) {
//             max = Math.max(max, nums[j])
//         }
//         output.push(max)
//     }
//     return output
// };

// The given problem requires finding the maximum element in every sliding window of size k in an array of integers. The initial solution uses a nested loop to traverse every window and find its maximum element, resulting in a time complexity of O(n*k), where n is the length of the input array.

// To make the solution more performant, we can use a deque data structure to store the indices of the maximum elements in each window. A deque allows us to efficiently add and remove elements from both ends.

// We start by initializing an empty deque and an empty result array. We then traverse the input array and do the following for each element:

// Remove indices from the deque that are out of range (i.e., indices that are no longer in the current window).
// Remove indices from the deque whose corresponding elements are smaller than the current element, as those elements are no longer candidates for being the maximum element in the current window.
// Add the current index to the deque.
// If the current index is greater than or equal to k-1 (i.e., we have processed at least k elements), add the maximum element in the current window to the result array, which is the first element of the deque.
// By using a deque to store the indices of the maximum elements, we avoid the nested loop and the repeated traversal of each window to find the maximum element. This optimized solution has a time complexity of O(n), where n is the length of the input array, and a space complexity of O(k), where k is the size of the sliding window.

const maxSlidingWindow = (nums, k) => {
  const n = nums.length;
  const result = [];
  const deque = [];

  for (let i = 0; i < n; i++) {
    // Remove indices that are out of range
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove indices whose corresponding elements are smaller than the current element
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add the current index to the deque
    deque.push(i);

    // Add the maximum element in the current window to the result array
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
};
