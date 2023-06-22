// https://leetcode.com/problems/maximum-number-of-balloons

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map(), count = 0, len = 0

    for (let t of 'ballon') map.set(t, map.get(t) + 1 || 1)

    for (let t of text) {
        if (map.has(t)) len++
        if (len === 7) {
            count++
            len = 0
        }
    }

    return count

  

    
};