// https://leetcode.com/problems/permutation-in-string

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function(s1, s2) {
//     if (s1.length > s2.length) return false
//     if (s2.includes(s1)) return true
    
//     let perm = findPermutations(s1)
    
//     for (let i = 0; i < perm.length; i++) {
//         if (s2.includes(perm[i])) return true
//     }
//     return false
// };

// let findPermutations = (string) => {
    
//     if (string.length < 2) return [string]
//     let permutationsArray = []
    
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i]
//         let remainingChars = string.slice(0, i) + string.slice(i+1, string.length)
        
//         for (let permutation of findPermutations(remainingChars)) {
//             permutationsArray.push(char + permutation)
//         }
//     }
//     return permutationsArray
// }

var checkInclusion = function(s1, s2) {
    if ((s1.length > s2.length) || s2.length === 0) return false
    if (s1.length === 0) return true
    
    let s1map = {}
    
    for (s of s1) {
        if (s1map[s] !== undefined) {
            s1map[s]++
        } else {
            s1map[s] = 1
        }
    }
    
    let s1mapKeys = Object.keys(s1map).sort()
    let s1mapValues = Object.values(s1map).sort(function(a, b){return a - b})
    
    
    for (let i = 0; i < s2.length; i++) {
        let s2map = {}
        let sub = s2.substring(i, i+s1.length )
        
        for (s of sub) {
            if (s2map[s] !== undefined)  {
                s2map[s]++
            } else {
                s2map[s] = 1
            }
            
            let keys = Object.keys(s2map)
            let values = Object.values(s2map)
            
            keys.sort()
            values.sort(function(a, b){return a - b})
            
            if (keys.every((v, i) => v === s1mapKeys[i]) && values.every((v, i) => v === s1mapValues[i])) return true
            
            
          
            console.log(keys)
        }
    }
    return false
};