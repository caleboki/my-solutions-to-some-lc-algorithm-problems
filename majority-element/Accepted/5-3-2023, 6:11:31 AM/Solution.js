// https://leetcode.com/problems/majority-element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let len = nums.length;
    let map = {};
    
    for (let i = 0; i < len; i++) {
        if (map[nums[i]] !== undefined) {
            map[nums[i]] += 1;
        }
        else
            {
            map[nums[i]] = 1;
            }
    }
    
    let arr = Object.values(map);
    let max = Math.max(...arr);
    
    return Object.keys(map).find(key => map[key] === max);    
      
};