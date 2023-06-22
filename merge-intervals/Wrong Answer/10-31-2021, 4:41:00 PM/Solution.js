// https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    if (intervals.length === 1) return intervals
    
    let result = []
    
    intervals.sort(function (a, b) {return a[0]-b[0]})
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= intervals[i-1][1]) {
            result.push([intervals[i-1][0], intervals[i][1]])
            
        } else  {
            result.push(intervals[i])
        }
    }
    
    return result
    
    
    
    
    
};