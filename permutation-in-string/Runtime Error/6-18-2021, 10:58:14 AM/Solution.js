// https://leetcode.com/problems/permutation-in-string

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let perm = findPermutations(s1)
    
    for (let i = 0; i < perm.length; i++) {
        if (s2.includes(perm[i])) return true
    }
    return false
};

let findPermutations = (string) => {
    
    if (string.length < 2) return [string]
    let permutationsArray = []
    
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let remainingChars = string.slice(0, i) + string.slice(i+1, string.length)
        
        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
}