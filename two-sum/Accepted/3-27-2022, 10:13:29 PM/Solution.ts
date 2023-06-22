// https://leetcode.com/problems/two-sum

function twoSum(nums: number[], target: number): number[] {
    const pairs = {}, len = nums.length
    
    for (let i = 0; i < len; i++) {
        if (nums[i] in pairs) return [pairs[nums[i]], i]
        
        pairs[target-nums[i]] = i
    }

};
