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
