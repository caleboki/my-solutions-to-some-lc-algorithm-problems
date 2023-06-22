// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}, j = 0, max = 0
    
    for (let i = 0; i < s.length; i++) {
        // if the map already contains the 's[i]', shrink the window from the beginning so that
        // we have only one occurrence of 's[i]'
        if (s[i] in map) {
            j = Math.max(j, map[s[i]] + 1)
        }
        map[s[i]] = i+1
        
        max = Math.max(max, i - j + 1)
    }
    return max
};