// https://leetcode.com/problems/delete-and-earn

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {   
    const numTotals = new Map();
    
    nums.forEach(num => {
        const total = numTotals.get(num) || 0;
        numTotals.set(num, total + num); 
    });
    
    let prevMaxPoints = 0;
    let maxPoints = numTotals.get(1) || 0;
    
    console.log(numTotals)
    
    for (let num = 2; num <= 10000; num++) {
        const thisPoints = numTotals.get(num) || 0;
        const newMaxPoints = Math.max(maxPoints, thisPoints + prevMaxPoints);
        prevMaxPoints = maxPoints;
        maxPoints = newMaxPoints; 
    }
    
    return maxPoints
    
    
//     let points = 0;
    
//     nums.sort(function(a,b){return b - a})
     
//     for (let i = 0; i<nums.length; i++) {     
        
//         points += nums[i]
        
//         if (nums.includes(nums[i] - 1)) nums.splice(nums.indexOf(nums[i] - 1), 1)
//         if (nums.includes(nums[i] + 1)) nums.splice(nums.indexOf(nums[i] + 1), 1)
//     }
    
//     return points
};