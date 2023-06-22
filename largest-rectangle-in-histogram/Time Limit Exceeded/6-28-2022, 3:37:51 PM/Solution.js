// https://leetcode.com/problems/largest-rectangle-in-histogram

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0
    
    for (let i = 0; i < heights.length; i++) {
        
        for (let j = i; j < heights.length; j++) {
            let minHeight = Infinity
            
            for (let k = i; k <= j; k++) {
                minHeight = Math.min(minHeight, heights[k])
            }
            maxArea = Math.max(maxArea, minHeight * (j - i + 1))
        }
    }
    return maxArea
    
};