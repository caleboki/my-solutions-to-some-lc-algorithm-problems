// https://leetcode.com/problems/find-all-duplicates-in-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
    
//     if (nums.length < 2) return [];
    
//     let map = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         if (map[nums[i]] !== undefined) {
//             map[nums[i]] += 1;
//         } else {
//             map[nums[i]] = 1;
//         }
//     }
    
   
//     let result = (Object.keys(map).filter(f => map[f] === 2));
    
//     for (let i = 0; i < result.length; i++) {
//         result[i] = parseInt(result[i])
//     }
    
//     return (result)
    
// };

var findDuplicates = function(nums) {
    
    if (nums.length < 2) return [];
    
   nums.sort(function(a, b) {return a - b})
    let result = []
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) result.push(nums[i])
    }
    
    return result
    
};