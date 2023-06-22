// https://leetcode.com/problems/continuous-subarray-sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var checkSubarraySum = function(nums, k) {
//     if ((nums.reduce((a, b) => a + b, 0) % k) === 0) return true
    
//     let windowStart = 0, multipleSum, windowSum = 0
    
//     for (let num in nums) {
//         //accumulate sum
//         windowSum += nums[num]
        
//         if (num >= 1) {
//             multipleSum = windowSum
            
//             if ((multipleSum % k) === 0) return true
            
//             windowSum -= nums[windowStart]
//             windowStart++
//         }
//     }
//     return false
// };


var checkSubarraySum = function (nums, k) {

	let sum = 0, prefix = 0, hash = new Set();
	
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		sum = sum % k

		if(hash.has(sum)) return true

		hash.add(prefix);
		prefix = sum;
	}
	return false
};