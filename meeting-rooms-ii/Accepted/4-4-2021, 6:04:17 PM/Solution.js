// https://leetcode.com/problems/meeting-rooms-ii

/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var minMeetingRooms = function(intervals) {
    
//     let count = 1;
    
//     if (intervals.length < 2) return count;
//     intervals.sort(function(a, b) {return a[0] - b[0]});
//     console.log(intervals)
    
//     for (let i = 0; i < intervals.length - 1; i++) {
//         if (intervals[i + 1][0] >= intervals[i][0] && intervals[i + 1][0] < intervals[i][1]){
//             //console.log(i)
//             count ++
            
//         }
        
//         if (interval[i + 1][0])
//     } 
//     return count;
    
// };


var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0]);
    const ends = intervals.map(x => x[1]);
    
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    console.log(starts)
    console.log(ends)
    
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