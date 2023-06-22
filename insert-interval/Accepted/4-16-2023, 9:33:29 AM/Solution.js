// https://leetcode.com/problems/insert-interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// var insert = function(intervals, newInterval) {
//     if(!intervals.length) return [newInterval]
    
//     let inserted = false
//     // insert the newInterval in the correct spot i.e sorting by start time
//     for(let i = 0; i < intervals.length; i++) {
//         const start = intervals[i][0]
//         if(newInterval[0] <= start) {
//             intervals.splice(i, 0, newInterval) //put newInterval in i's place shifting i
//             inserted = true
//             break
//         }
//     }
//     if(!inserted) intervals.push(newInterval);
    
//     const result = [intervals[0]]
//     // merge overlapping intervals
//     for(let i = 1; i < intervals.length; i++) {
            
//         const [prevStart, prevEnd] = result[result.length-1]
//         const [currStart, currEnd] = intervals[i]
        
//         if(currStart > prevEnd) {
//             result.push(intervals[i]);
//             continue;
//         }
//         const newStart = Math.min(prevStart, currStart);
//         const newEnd = Math.max(prevEnd, currEnd);
//         result.pop()
//         result.push([newStart, newEnd]);
//     }
//     return result;
// };

const insert = (intervals, newInterval) => {
    intervals.push(newInterval)

    const merge = (intervals) => {
        let merged = []
        intervals.sort((a, b) => {return a[0] - b[0]})

        for (let interval of intervals) {
            if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
                merged.push(interval)
            } 
            else {
                merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
            }
        }
        return merged
    }

    return merge(intervals)
}