// https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    
    let firstMax = nums[firstLen - 1];
    let secondMax = nums[secondLen - 1];
    let result = nums[firstLen + secondLen - 1];

    for (let i = firstLen + secondLen; i < n; ++i) {
        firstMax = Math.max(firstMax, nums[i - secondLen] - nums[i - firstLen - secondLen]);
        secondMax = Math.max(secondMax, nums[i - firstLen] - nums[i - firstLen - secondLen]);
        result = Math.max(result, firstMax + nums[i] - nums[i - secondLen], secondMax + nums[i] - nums[i - firstLen]);
    }

  return result;
    
};