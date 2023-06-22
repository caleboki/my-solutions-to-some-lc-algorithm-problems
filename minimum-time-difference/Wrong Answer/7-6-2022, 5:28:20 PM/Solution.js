// https://leetcode.com/problems/minimum-time-difference

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    
    
    for (let index in timePoints) {
        let time = timePoints[index]
        let [hours, minutes] = time.split(':')
        
        //normalize time points to minutes after midnight
        let minutesPastMidnight = (+hours * 60) + (+minutes)
        timePoints[index] = minutesPastMidnight
        
    }
    
    timePoints.sort((a, b) => {return a - b})
    console.log(timePoints)
    
    let res = 1440 - timePoints[0] - timePoints[1]
    return res
    
};