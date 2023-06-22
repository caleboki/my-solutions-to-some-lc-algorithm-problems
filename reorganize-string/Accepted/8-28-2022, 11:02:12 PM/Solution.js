// https://leetcode.com/problems/reorganize-string

/**
 * @param {string} s
 * @return {string}
 */

// Time Complexity: O(n log(n))
// Space Complexity: O(n)
var reorganizeString = function(s) {
    let map = {}, result = []
    
    for (let c of s) {
        map[c] = (map[c] || 0) + 1
    }
    
    let sortedMap = Object.entries(map).sort((a, b) => b[1] - a[1])
    
    // Check if we can distribute the first char by every other position.
    // We only need to check the first char because the chars are ordered by count
    // so if the first char succeeds, all following chars will succeed
    if (sortedMap[0][1] > Math.floor((s.length + 1) / 2)) return ''
    
    let position = 0
    
    for (let entry of sortedMap) {
        let [char, count] = entry
        
        for (let j = 0; j < count; j++) {
            // Distribute the current char every other position. The same char
            // will never be placed next to each other even on the 2nd loop
            // for placing chars in odd positions
            result[position] = char
            position += 2
            
            // This will only happen once since total number of chars
            // will be exactly equal to the length of s
            if (position >= s.length) position = 1
            
        }
        
    }
    return result.join('')
};