// https://leetcode.com/problems/delete-and-earn

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {   

    //if you have duplicate values in nums array, if you earn one of them, you end up earning all of them. This is because you have deleted its neighbors and therefore make its remaining duplicates "undeletable". Hence the problem simplifies to which values can earn you the largest total.
    
    let map = {}
    
    for (let num of nums) {
        if (!(map[num])) map[num] = 0
        map[num] += num
    }
    
    let prevMaxPoints = 0
    let maxPoints = map[1] || 0
    
    for (let num = 2; num <= 10000; num++) {
        const thisPoints = map[num] || 0
        const newMaxPoints = Math.max(maxPoints, thisPoints + prevMaxPoints)
        prevMaxPoints = maxPoints
        maxPoints = newMaxPoints
    }
    
    return maxPoints
};