// https://leetcode.com/problems/angle-between-hands-of-a-clock

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    
    //Convert hour to equivalent minute marking
    let hourToMinute = hour * 5 
    
    //Reset 12hour to 0 minute marking and taking into account one rev on min hand = 1/12 of hour     //hand
    hour === 12 ? hourToMinute = hourToMinute + (minutes/12) - 60 : hourToMinute = hourToMinute + (minutes/12)
    
    let minuteToDegree = (minutes) * 6
    
    let hourToMinuteToDegree = (hourToMinute) * 6
    let degreeDifference = Math.abs(hourToMinuteToDegree - minuteToDegree)
    
    return Math.abs(Math.min(360 - (degreeDifference), (degreeDifference)))
};