// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}, j = 0, max = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            j = Math.max(j, map[s[i]] + 1)
        }
        map[s[i]] = i
        
        max = Math.max(max, i - j + 1)
    }
    return max
};