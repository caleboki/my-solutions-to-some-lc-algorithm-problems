// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let results = [""]
    let best = 0
    
    for (let word of arr) {
        let resultsLen = results.length
        for (let i = 0; i < resultsLen; i++) {
            let newRes = results[i] + word
            
            let newResSet = new Set(newRes.split(""))
         
            if (newRes.length !== newResSet.size) continue //i.e sub-sequence is not unique
            
            results.push(newRes)
            best = Math.max(best, newRes.length)
        }
        
    }
    return best
    
};