// https://leetcode.com/problems/reorganize-string

/**
 * @param {string} s
 * @return {string}
 */

// Time Complexity: O(n log(n))
// Space Complexity: O(n)

// We can use a map to keep track of the count of each char in the string and start constructing the new string by going from the chars in descending order to make sure the chars with a higher count are spread out first. To distribute the chars, we can simply start at the beginning and then increment our position by 2 each time, but there are 2 caveats.

// This might not always be possible if the count of the most frequent char can't be distributed by every other position, which is to say that the count of the most frequent char cannot exceed Math.floor((s.length + 1) / 2) (we use s.length + 1 b/c we want to distribute it by every other position which is half the length + 1). Additionally, once we reach the end of the string length with our position (remember, we're only rearranging the string so our new string length can't exceed the old one), we have to wrap back around.

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