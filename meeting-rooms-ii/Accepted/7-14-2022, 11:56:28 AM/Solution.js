// https://leetcode.com/problems/meeting-rooms-ii

/**
 * @param {number[][]} intervals
 * @return {number}
 */

//Chronological Ordering
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0])
    const ends = intervals.map(x => x[1])
    
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    //example starts = [0, 5, 15]
    //example ends = [ 10, 20, 30 ]

    
    let roomsNeeded = 0, j = 0;
    
    for(let i = 0; i < starts.length; i++) {
        roomsNeeded++
        if(starts[i] >= ends[j]) {
            roomsNeeded--
            j++
        }
        
       
    }
    return roomsNeeded
};