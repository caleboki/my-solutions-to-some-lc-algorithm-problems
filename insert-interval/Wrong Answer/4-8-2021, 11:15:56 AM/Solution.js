// https://leetcode.com/problems/insert-interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(!intervals.length) return [newInterval]
    
    let inserted = false;
    // insert the newInterval in the correct spot
    for(let i = 0; i < intervals.length; i++) {
        const start = intervals[i][0]; //alternatively: const [start] = intervals[i];
        if(newInterval[0] <= start) {
            intervals.splice(i, 0, newInterval);
            inserted = true;
            break;
        }
    }
    if(!inserted) intervals.push(newInterval);
    
    const result = [intervals[0]];
    const [prevStart, prevEnd] = result[result.length-1];
    // merge overlapping intervals
    for(let i = 1; i < intervals.length; i++) {
            
        
        // const prevStart = [intervals[0][0]];
        // const prevEnd = [intervals[0][[intervals[0].length - 1]]];
        const [currStart, currEnd] = intervals[i];
        
        if(currStart > prevEnd) {
            result.push(intervals[i]);
            continue;
        }
        const newStart = Math.min(prevStart, currStart);;
        const newEnd = Math.max(prevEnd, currEnd);
        result.pop()
        result.push([newStart, newEnd]);
    }
    return result;
};

// var insert = function(intervals, newInterval) {
    
//     let inserted = false;
//     for(let i = 0; i < intervals.length; i++) {
//         const start = intervals[i][0];
//         if(newInterval[0] <= start) {
//             intervals.splice(i, 0, newInterval);
//             inserted = true;
//             break;
//         }
//     }
//     if(!inserted) intervals.push(newInterval); //if no insertion, interval must be at end
    
//     const result = [intervals[0]];
//     console.log(result)
//     const [prevStart, prevEnd] = result[result.length-1]
//     console.log(prevEnd)
    
// }
