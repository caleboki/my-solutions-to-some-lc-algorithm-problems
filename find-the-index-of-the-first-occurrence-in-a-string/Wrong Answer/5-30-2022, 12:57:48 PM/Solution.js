// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index, j = needle.length, map = {}
    needle = Array.from(needle)
    
    for (let n in needle) {
        if (!(needle[n] in map)) map[needle[n]] = 0
        map[needle[n]]++
    }
    
    for (let i = 0; i < haystack.length; i++) {
        if ((haystack[i] in map)) {
            if (!index) index = i
            j--
        }
        if (j === 0) return index
    }
    return -1
    
    
};