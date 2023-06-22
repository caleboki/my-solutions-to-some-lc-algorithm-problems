// https://leetcode.com/problems/delete-and-earn

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {   
     
    if (nums.length === 0) {
        return 0;
    }
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    const numsLookup = new Array(nums.length + 1).fill(0);
    
    console.log(numsLookup)
    for (let i=0; i<nums.length; i++) {
        if (numsLookup[nums[i]]) {
            numsLookup[nums[i]] += nums[i];
        } else {
            numsLookup[nums[i]] = nums[i];
        }
    }
    
    let twoPrev = numsLookup[0];
    let prev = numsLookup[1];
    
    console.log(numsLookup)
    console.log(twoPrev)
    
    for (let i=2; i<numsLookup.length; i++) {
        const temp = prev;
        prev = Math.max(numsLookup[i] + twoPrev, prev);
        twoPrev = temp;
    }
    
    return prev;
    
    
//     let points = 0;
    
//     nums.sort(function(a,b){return b - a})
     
//     for (let i = 0; i<nums.length; i++) {     
        
//         points += nums[i]
        
//         if (nums.includes(nums[i] - 1)) nums.splice(nums.indexOf(nums[i] - 1), 1)
//         if (nums.includes(nums[i] + 1)) nums.splice(nums.indexOf(nums[i] + 1), 1)
//     }
    
//     return points
};