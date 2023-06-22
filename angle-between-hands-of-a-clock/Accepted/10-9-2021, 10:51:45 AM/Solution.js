// https://leetcode.com/problems/angle-between-hands-of-a-clock

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    
    let hourToMinute = hour * 5 
    
    hour === 12 ? hourToMinute = hourToMinute + (minutes/12) - 60 : hourToMinute = hourToMinute + (minutes/60)*5
    
    
    let minuteToDegree = (minutes) * 6
    
    let hourToMinuteToDegree = (hourToMinute) * 6
    let degreeDifference = Math.abs(hourToMinuteToDegree - minuteToDegree)
    
    return Math.abs(Math.min(360 - (degreeDifference), (degreeDifference)))
    
};