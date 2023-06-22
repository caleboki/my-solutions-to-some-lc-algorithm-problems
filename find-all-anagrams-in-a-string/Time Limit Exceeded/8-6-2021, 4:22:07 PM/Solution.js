// https://leetcode.com/problems/find-all-anagrams-in-a-string

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s === '' || p === '') return []
    
    let result = []
    
    let pLength = p.length
    let sLength = s.length
    
    let len = sLength - pLength
    
    const isAnnagram = (sub, p) => {
        if (sub.split('').sort().join('') === p.split('').sort().join('')) return true
        return false     
    }
                    
    for (let i = 0; i < len + 1; i++) {
        let sub = s.substring(i, pLength)
        pLength++
       
        if (isAnnagram(sub, p)) result.push(i)
    }
    
    return result
};