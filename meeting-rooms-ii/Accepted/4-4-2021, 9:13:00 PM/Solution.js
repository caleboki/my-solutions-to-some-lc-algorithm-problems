// https://leetcode.com/problems/meeting-rooms-ii

/**
 * @param {number[][]} intervals
 * @return {number}
 */

//Chronological Ordering
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0]);
    const ends = intervals.map(x => x[1]);
    
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    
    
    let roomsNeeded = 0, e = 0;
    
    for(let s = 0; s < starts.length; s++) {
        if(starts[s] >= ends[e]) {
            roomsNeeded--;
            e++;
        }
        roomsNeeded++;
    }
    return roomsNeeded
};