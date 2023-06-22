// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i] === needle[j]) return i
        }
    }
    return -1
};