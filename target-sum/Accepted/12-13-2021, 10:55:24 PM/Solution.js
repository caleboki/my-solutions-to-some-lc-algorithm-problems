// https://leetcode.com/problems/target-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function(nums, target) {
//     let count = 0
    
//     const calculate = (i, sum, t) => {
//         if (i === nums.length) {
//             if (sum === t) count++
//         } 
//         else 
//         {
//             calculate(i+1, (sum + nums[i]), t)
//             calculate(i+1, (sum - nums[i]), t)
//         }
//     }
    
//     calculate(0, 0, target)
    
//     return count
// };

// var findTargetSumWays = function(nums, target) {
//     let memo = {}
    
//     const calculate = (i, sum) => {
//         if (i === nums.length) {
//             if (sum === target) {
//                 return 1
//             } else {
//                 return 0
//             }
//         } 
//         if (i in memo) return memo[i]
        
//         memo[i] = calculate(i+1, sum + nums[i]) + calculate(i+1, sum - nums[i])
//         return memo[i]
//     }
//     return calculate(0, 0)
// };

// var findTargetSumWays = function(nums, target) {
//     let memo = {}
    
//     const calculate = (i, sum) => {
//         if ((i-sum) in memo) return memo[i-sum]
//         if(i >= nums.length) return sum === target ? 1 : 0
        
//         let add = calculate(i + 1, sum + nums[i])
//         let sub = calculate(i + 1, sum - nums[i])
        
//         memo[i-sum] = add + sub
//         return memo[i-sum]
//     }
//     return calculate(0, 0)
// };

var findTargetSumWays = function(nums, target, dp = {}) {
    const traverse = (index, sum)=>{
        if(dp.hasOwnProperty(`${index}-${sum}`)) return dp[`${index}-${sum}`];
        if(index >= nums.length) return sum === target ? 1 : 0;
        let add = traverse(index + 1, sum + nums[index]);
        let sub = traverse(index + 1, sum - nums[index]);
        dp[`${index}-${sum}`] = add + sub;
        return dp[`${index}-${sum}`];
    }
    return traverse(0,0)
};