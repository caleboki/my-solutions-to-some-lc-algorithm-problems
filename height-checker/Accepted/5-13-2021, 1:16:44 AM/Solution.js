// https://leetcode.com/problems/height-checker

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = []
    let count = 0
    
    for (h of heights) {
        expected.push(h)
    }
    expected.sort(function(a,b){return a - b})
    
    for (let i = 0; i < expected.length; i++) {
        if (expected[i] !== heights[i]) count++
    }
    
    return count
};