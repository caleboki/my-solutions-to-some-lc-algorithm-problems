// https://leetcode.com/problems/meeting-rooms

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length === 0) return true;
    
    for (let i = 0; i < intervals.length; i++) {
        
        let diff = intervals[i][1] - intervals[i + 1][0];
        
        if (intervals[i + 1][0] >= intervals[i][0] && intervals[i + 1][0] <= intervals[i][1]){
            return false;
        }
        return true;
        
    }
    
    
        
        
    
    
};