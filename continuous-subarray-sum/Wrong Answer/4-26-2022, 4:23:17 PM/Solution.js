// https://leetcode.com/problems/continuous-subarray-sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var checkSubarraySum = function (nums, k) {
// 	let sum = 0, prefix = 0, hash = new Set();
	
// 	for (let i = 0; i < nums.length; i++) {
// 		sum += nums[i]

// 		sum = sum % k
        
// 		if(hash.has(sum)) return true

// 		hash.add(prefix);
// 		prefix = sum;
// 	}
    
// 	return false
// };


var checkSubarraySum = function (nums, k) {
	let i = 0, j = 1
    
    while (j < nums.length) {
        if (nums[i] === k || nums[j] === k) return true
        if (nums[i] + nums[j] === k) return true
        i++, j++
    }
    return false
};