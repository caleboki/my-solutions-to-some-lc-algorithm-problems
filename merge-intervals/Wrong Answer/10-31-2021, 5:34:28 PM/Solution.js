// https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
//     if (intervals.length === 1) return intervals
    
//     let result = []
    
//     intervals.sort(function (a, b) {return a[0]-b[0]})
    
//     for (let i = 1; i < intervals.length; i++) {
//         if (intervals[i][0] <= intervals[i-1][1]) {
            
//             if (intervals[i][1] >= intervals[i-1][1]) {
//                 result.push([intervals[i-1][0], intervals[i][1]])
//             } else {
              
//                 result.push(intervals[i-1])
//             }
            
//         } else  {
            
//             if (result.length === 0) {
//                 result.push(intervals[i-1], intervals[i])
//             } else {
//                 result.push(intervals[i])
//             }
            
//         }
//     }
    
//     return result
    
    let merged = []
    
    for (interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1] < interval[0]) {
            merged.push(interval)
        }
        else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
        }
    }
    return merged
};