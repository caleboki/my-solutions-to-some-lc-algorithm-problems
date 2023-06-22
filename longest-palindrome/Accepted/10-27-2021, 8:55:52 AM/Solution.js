// https://leetcode.com/problems/longest-palindrome

/**
 * @param {string} s
 * @return {number}
 */
//https://www.youtube.com/watch?v=ci4PIq1NWoU
var longestPalindrome = function(s) {
    let map = {}
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1
        } else {
            map[s[i]]++
        }
    }
    
    //if there is only 1 letter in string e.g 'a'
    if (Object.values(map).length === 1) return map[s[0]]
    
    let result = 0
    let odd = 0
    
    for (let i of Object.values(map)) {
        if (i > 1) {
            if (i % 2 === 0) {
                result += i //sum even frequencies
            }
            else {
                result += i - 1 //subtract 1 letter from odd frequency to make even
                odd++
            }
        } else {
            odd++
        }
    }
    if (odd > 0) result++
    return result
    
};