// https://leetcode.com/problems/minimum-moves-to-equal-array-elements

function minMoves(nums: number[]): number {
    nums.sort((a, b) => {return a - b})
    let count: number = 0
    
    for (let i = nums.length - 1; i > 0; i--) {
        count += nums[i] - nums[0]
    }
    return count
};