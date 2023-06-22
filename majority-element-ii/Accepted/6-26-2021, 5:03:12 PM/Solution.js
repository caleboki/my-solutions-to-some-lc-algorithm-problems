// https://leetcode.com/problems/majority-element-ii

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
    const memo = new Map()
    for (let i = 0; i < nums.length; i++) {
	// count the no. of occurances
       memo.set(nums[i],memo.get(nums[i])+1 || 1)
    }
   
    const result = []
    for (let [key,value] of memo) {
	// if greater than 1/3rd of total items then push it in result array
      if (value > nums.length / 3) result.push(key)
    }
    return result ;
};