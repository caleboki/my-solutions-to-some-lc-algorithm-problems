// https://leetcode.com/problems/find-all-anagrams-in-a-string

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let pLength = p.length
    let sLength = s.length
    
    let len = sLength - pLength
    
    let pMap = {}
    let result = []
    
    for (let i = 0; i < pLength; i++) {
        if (pMap[p[i]] === undefined){
            pMap[p[i]] = 1 
        } else {
            pMap[p[i]]++
        }
    }
    console.log(pMap)
    
    
    
    const isAnnagram = (sub, map) => {
        let subMap = {}
        let count = 0
        
        sub = sub.split('')
        sub.forEach(l => {
            if (subMap[l] === undefined) {
                subMap[l] = 1
            } else {
                subMap[l]++
            }
        })
        
        sub.forEach(l => {
            if (subMap[l] === pMap[l]) {
                count++
                
            } else {
                return false
            }
        })
        
        return count === sub.length
    }
                    
    for (let i = 0; i < len + 1; i++) {
        let sub = s.substring(i, pLength)
        pLength++
        if (isAnnagram(sub, pMap)) result.push(i)
    }
    
    return result
    
};