// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let count = 0
    
    for (let i = 1; i < tops.length; i++) {
        if (tops[i-1] !== tops[i] && tops[i-1] === bottoms[i]) {
            tops[i] = tops[i-1]
            count++
        }
    }
    
    for (let i = 1; i < tops.length; i++) {
        if (tops[i] !== tops[i-1]) return -1
    }
    
    return count
    
};