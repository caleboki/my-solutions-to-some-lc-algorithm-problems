// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let map = {}, j = 0, max = 0
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in map)) {
            map[s[i]] = 0
        }
        map[s[i]]++
        
        while(Object.keys(map).length > 2) {
            map[s[j]]--
            if (map[s[j]] === 0) delete map[s[i]]
            j++
        }
        max = Math.max(max, i-j+1)
    }
    return max
    
};