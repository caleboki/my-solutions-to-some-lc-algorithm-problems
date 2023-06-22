// https://leetcode.com/problems/meeting-rooms

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length < 2) return true;
    intervals.sort(function(a, b) {return a[0] - b[0]});
    
    for (let i = 0; i < intervals.length - 1; i++) {
        console.log(intervals[i + 1][0])
        
        //if (intervals[i][])
        
        if (intervals[i + 1][0] >= intervals[i][0] && intervals[i + 1][0] <= intervals[i][1]){
            return false;
        }
    }
    
    return true;
    
    
        
        
    
    
};