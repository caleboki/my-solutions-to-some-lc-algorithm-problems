// https://leetcode.com/problems/repeated-dna-sequences

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let l = 10, seen = new Set(), output = new Set()
    
    for (let i = 0; i < s.length - l + 1; i++) {
        let tmp = s.substring(i, i+l)
        
        if (seen.has(tmp)) output.add(tmp)
        seen.add(tmp)
    }
    return Array.from(output)
};