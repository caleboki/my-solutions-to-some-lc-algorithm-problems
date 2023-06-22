// https://leetcode.com/problems/angle-between-hands-of-a-clock

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    //1h -> 5m
    //30m -> 180deg
    //1m = 1/30 * 180 = 6deg
    //1m = 6deg
    //60 m === 5 m of hourHand
    
    let hourToMinute = hour * 5 
    
    hour === 12 ? hourToMinute = hourToMinute + (minutes/60)*5 - 60 : hourToMinute = hourToMinute + (minutes/60)*5
    
    let minuteToDegree = (minutes/30) * 180
    
    let hourToMinuteToDegree = (hourToMinute/30) * 180
    
    return Math.abs(minuteToDegree - hourToMinuteToDegree)
};