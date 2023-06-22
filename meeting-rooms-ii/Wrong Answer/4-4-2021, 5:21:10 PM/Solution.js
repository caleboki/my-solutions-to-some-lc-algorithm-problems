// https://leetcode.com/problems/meeting-rooms-ii

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    
    let count = 1;
    
    if (intervals.length < 2) return count;
    intervals.sort(function(a, b) {return a[0] - b[0]});
    
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i + 1][0] >= intervals[i][0] && intervals[i + 1][0] < intervals[i][1]){
            count++
            return count;
        }
    } 
    return count;
    
};