// https://leetcode.com/problems/subarray-sum-equals-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   
    let sum = 0;
    let count = 0;
    let map = {0 : 1};
    
    for (let i = 0; i < nums.length; i++) {
               
        sum += nums[i];
        
        //if the subarray is found
        if ((sum - k) in map) {
            count += map[sum - k];
        }
        
        if (sum in map) {
            map[sum] = map[sum] + 1;
        } else {
            map[sum] = 1;
        }   
    }
    //console.log(map)
    return count;    
};