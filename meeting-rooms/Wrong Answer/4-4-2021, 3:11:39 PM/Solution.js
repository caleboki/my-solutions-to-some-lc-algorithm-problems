// https://leetcode.com/problems/meeting-rooms

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort(function(a, b) {return b[0] - a[0]});
    
    for (let i = 0; i < intervals.length; i++) {
        
        let diff = intervals[i][1] - intervals[i + 1][0];
        
        if(diff > 0) return true;
        return false;
        
    }
    
    
        
        
    
    
};