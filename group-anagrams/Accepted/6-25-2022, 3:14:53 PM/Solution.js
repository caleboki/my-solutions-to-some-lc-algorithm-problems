// https://leetcode.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 0) return []
    
    let ans = {}
    
    for (let s of strs) {
        let key = s.split('').sort().join('')
        if (ans[key] === undefined) {
            ans[key] = [s]
        } else {
            ans[key].push(s)
        }
    }
    
    return Object.values(ans)
};