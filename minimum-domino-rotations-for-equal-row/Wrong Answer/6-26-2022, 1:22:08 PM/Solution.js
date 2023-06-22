// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let countTops = 0, countBottoms = 0, topsCopy = tops, bottomsCopy = bottoms
    
    for (let i = 1; i < topsCopy.length; i++) {
        if (tops[i-1] !== topsCopy[i] && topsCopy[i-1] === bottomsCopy[i]) {
            topsCopy[i] = topsCopy[i-1]
            countTops++
        }
    }
    
    for (let i = 1; i < topsCopy.length; i++) {
        if (topsCopy[i] !== topsCopy[i-1]) {
            countTops = Infinity
            break
        }
    }
    
    for (let i = 1; i < bottomsCopy.length; i++) {
        if (bottomsCopy[i-1] !== bottomsCopy[i] && tops[i-1] === bottomsCopy[i]) {
            bottomsCopy[i] = bottomsCopy[i-1]
            countBottoms++
        }
    }
    
    for (let i = 1; i < bottomsCopy.length; i++) {
        if (bottomsCopy[i] !== bottomsCopy[i-1] && countTops < Infinity) {
            return countTops
        } else if (bottomsCopy[i] !== bottomsCopy[i-1]) {
            return -1
        }
    }
    
    return Math.min(countTops, countBottoms)
    
    
    
};