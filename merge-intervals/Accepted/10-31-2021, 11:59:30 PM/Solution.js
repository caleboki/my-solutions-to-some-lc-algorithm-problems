// https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {    
    intervals.sort(function(a, b) {return a[0] - b[0]})
    let merged = []
    
    for (interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval)
        }
        else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
        }
    }
    return merged
};