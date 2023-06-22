// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!haystack || !needle) return -1
    
    if (haystack === needle) return 0
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.substring(i, i + needle.length) === needle) return i
    }
    
    return -1
    
    
};