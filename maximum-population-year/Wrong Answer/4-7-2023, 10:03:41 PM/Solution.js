// https://leetcode.com/problems/maximum-population-year

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let maxPop = logs.length, earliest = logs[0][0]

    for (let i = 1; i < logs.length; i++) {
        let [birth, death] = logs[i]
        let [prevBirth, prevDeath] = logs[i-1]
        
        if (birth < prevDeath) {
            maxPop--
            if (prevBirth < birth) earliest = prevBirth
        }
        
        

    }

    return earliest

    
};