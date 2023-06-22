// https://leetcode.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 0) return []
    
    let ans = {}
    
    for (let s of strs) {
        if (ans[s.split('').sort().join('')] === undefined) {
            ans[s.split('').sort().join('')] = [s]
        } else {
            ans[s.split('').sort().join('')].push(s)
        }
        
    }
    
    return Object.values(ans)
};