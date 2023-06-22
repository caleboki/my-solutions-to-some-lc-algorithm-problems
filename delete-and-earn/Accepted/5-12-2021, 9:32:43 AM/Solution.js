// https://leetcode.com/problems/delete-and-earn

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {   
    const n = 1001;
    const counts = new Array(n).fill(0);
    
    for (const num of nums) counts[num]++;

    const dp = new Array(n).fill(0);
    dp[1] = counts[1];

    for (let i = 2; i < n; i++) {
        const points = counts[i] * i;
        dp[i] = Math.max(dp[i - 2] + points, dp[i - 1]);
    }
    
    return dp[n - 1];
    
    
//     let points = 0;
    
//     nums.sort(function(a,b){return b - a})
     
//     for (let i = 0; i<nums.length; i++) {     
        
//         points += nums[i]
        
//         if (nums.includes(nums[i] - 1)) nums.splice(nums.indexOf(nums[i] - 1), 1)
//         if (nums.includes(nums[i] + 1)) nums.splice(nums.indexOf(nums[i] + 1), 1)
//     }
    
//     return points
};