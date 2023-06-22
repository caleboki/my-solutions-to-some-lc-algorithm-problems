// https://leetcode.com/problems/meeting-rooms

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort(function(a, b){return a[0] - b[0]}) //sort intervals by start time
    
    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i], [prevStart, prevEnd] = intervals[i-1]
        //check if previous meeting has ended before start of new meeting
        // if (intervals[i][0] < intervals[i-1][1]) {
        //     return false   
        // }
        
        if (start < prevEnd) return false
    }
    return true
};