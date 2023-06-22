// https://leetcode.com/problems/subarray-sum-equals-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// The simplest method is to consider every possible subarray of the given numsnums array, find the sum of the elements of each of those subarrays and check for the equality of the sum obtained with the given kk. Whenever the sum equals kk, we can increment the countcount used to store the required result.

//JAVA
// public class Solution {
//     public int subarraySum(int[] nums, int k) {
//         int count = 0;
//         for (int start = 0; start < nums.length; start++) {
//             for (int end = start + 1; end <= nums.length; end++) {
//                 int sum = 0;
//                 for (int i = start; i < end; i++)
//                     sum += nums[i];
//                 if (sum == k)
//                     count++;
//             }
//         }
//         return count;
//     }
// }


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