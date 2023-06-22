// https://leetcode.com/problems/maximum-number-of-balloons

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map(), count = 0, len = 0

    const popMap = () => {
        map = new Map()
        for (let t of 'ballon') map.set(t, map.get(t) + 1 || 1)
    }

    popMap()

    for (let t of text) {
        if (map.has(t) && map.get(t) > 0) {
            len++
            map.set(t, map.get(t) + 1 || 1)
        }
        if (len === 7) {
            count++
            len = 0
            popMap()
        }
    }

    return count

  

    
};