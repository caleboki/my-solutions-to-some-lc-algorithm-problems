// https://leetcode.com/problems/subarray-sum-equals-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
   
//     let sum = 0;
//     let count = 0;
    
//     //Frequency map with 0 initialized to 1 as we already have subarray Sum of size 0 by        //default
    
//     let map = {0 : 1};
    
//     for (let i = 0; i < nums.length; i++) {
               
//         sum += nums[i]; //Calculate the cummulative sum
        
//         //if the subarray is found
//         if ((sum - k) in map) {
//             count += map[sum - k]; //increment counter with the frequency of sum-k in map
//         }
        
//         //Frequency map implementation 
//         if (sum in map) {
//             map[sum]++;
//         } else {
//             map[sum] = 1;
//         }   
        
//     }
    
//     return count;    
// };

const subarraySum = (nums, k) => {
    let hash = {}, count = 0, sum = 0
    
    hash[0] = 1
    
    for (let i = 0; i < nums.length; i++) {
        
        sum += nums[i]
        
        if (hash[sum - k]) count += hash[sum - k]
        
        hash[sum] = (hash[sum] || 0) + 1
    }
    
    return count
}