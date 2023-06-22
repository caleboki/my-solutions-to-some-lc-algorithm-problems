// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let taps = [], min = 0
    
    for (let i in ranges) {
        let interval1 = Number(i) - Number(ranges[i])
        let interval2 = Number(i) + Number(ranges[i])
        
        taps.push([interval1, interval2])
    }
    
    for (let tap of taps) {
        if ((tap[1] >= n) && (tap[0] <= 0)) min++  
    }
    
    if (min === 0) return -1
    return min
    
    
    
};