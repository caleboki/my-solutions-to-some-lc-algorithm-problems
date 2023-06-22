// https://leetcode.com/problems/substring-with-largest-variance

/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    let variance = 0, freqMap = new Map()
    
    for (let c of s) {
        if (!freqMap.has(c)) freqMap.set(c, 0)
        freqMap.set(c, freqMap.get(c)+1)
    }
    
    for (let [primaryString] of freqMap) {
        for (let [secondaryString] of freqMap) {
            if (primaryString === secondaryString) continue
            
            let primaryFreq = 0, secondaryFreq = 0, secondaryCharCount = freqMap.get(secondaryString)
            
            for (let currentStr of s) {
                if (currentStr === primaryString) primaryFreq++
                if (currentStr === secondaryString) {
                    secondaryFreq++
                    secondaryCharCount--
                }
                
                if ((primaryFreq > 0 && secondaryFreq > 0) && (primaryFreq > secondaryFreq)) {
                    variance = Math.max(variance, (primaryFreq - secondaryFreq))
                }
                
                if (primaryFreq < secondaryFreq && secondaryCharCount > 0) { //we move to a new substring
                   primaryFreq = 0
                   secondaryFreq = 0
                }
                
            }
        }
    
    }
    
    return variance
    
};