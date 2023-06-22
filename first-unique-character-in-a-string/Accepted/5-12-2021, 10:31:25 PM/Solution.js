// https://leetcode.com/problems/first-unique-character-in-a-string

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    
    for (i of s) {
        if (map[i] === undefined) {
            map[i] = 1
        } else {
            map[i]++
        }
    }
    
    if (!Object.values(map).find(ele => ele === 1)) return -1
    
    let unique = Object.keys(map).find(ele => map[ele] === 1)
    
    return s.indexOf(unique)
    
    
};