// https://leetcode.com/problems/target-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0
    
    const calculate = (i, sum) => {
        if (i === nums.length) {
            if (sum === target) count++
        } 
        else 
        {
            calculate(i+1, (sum + nums[i]))
            calculate(i+1, (sum - nums[i]))
        }
    }
    
    calculate(0, 0)
    
    return count
};


// var findTargetSumWays = function(nums, target) {
//     let memo = {}
    
//     const calculate = (i, sum) => {
//         if ((`${i}-${sum}`) in memo) return memo[`${i}-${sum}`]
//         if(i >= nums.length) return sum === target ? 1 : 0
        
//         let add = calculate(i + 1, sum + nums[i])
//         let sub = calculate(i + 1, sum - nums[i])
        
//         memo[`${i}-${sum}`] = add + sub
        
//         return memo[`${i}-${sum}`]
//     }
//     return calculate(0, 0)
// };