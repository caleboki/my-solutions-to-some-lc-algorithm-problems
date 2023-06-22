// https://leetcode.com/problems/minimum-time-difference

/**
 * @param {string[]} timePoints
 * @return {number}
 */
//https://www.youtube.com/watch?v=yGQ8DodDPyc
var findMinDifference = function(timePoints) {
    for (let index in timePoints) {
        let time = timePoints[index]
        let [hours, minutes] = time.split(':')
        
        //normalize time points to minutes after midnight, i.e convert time to minutes
        let minutesPastMidnight = (+hours * 60) + (+minutes)
        timePoints[index] = minutesPastMidnight
        
    }
   
    timePoints.sort((a, b) => {return a - b}) //sorted timepoints have min difference next to each other
    
    let res = 1440 + timePoints[0] - timePoints[timePoints.length - 1] //wrap around. 1440 is equivalent to 0 seconds
    
    for (let i = 1; i < timePoints.length; i++) {
        res = Math.min(res, (timePoints[i] - timePoints[i-1]))
    }
    return res
    
};