// https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    nums = nums.sort((a, b) => {
        return (a-b)
    })
    
    const res = []
    
    const twoSum = (pos) => {
        const seen = new Set()
        
        for (let j = pos + 1; j < nums.length; j++) {
            const complement = -nums[pos] - nums[j]
            
            if (seen.has(complement)) {
                res.push([nums[pos], nums[j], complement])
                
                if (j + 1 < nums.length && nums[j] === nums[j+1]) j++
            }
            seen.add(nums[j])
            
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        
        if (nums[i] === nums[i-1]) continue
        
        twoSum(i)
    }
    
    return res
    
    
   
    
};

// var twoSum = function(nums, target) {
//     var pairs = {};
//     var len = nums.length;
    
//     for (let i = 0; i < len; i++) {
//         if (nums[i] in pairs) return [pairs[nums[i]], i];
        
//         pairs[target-nums[i]] = i;
//     }
// };