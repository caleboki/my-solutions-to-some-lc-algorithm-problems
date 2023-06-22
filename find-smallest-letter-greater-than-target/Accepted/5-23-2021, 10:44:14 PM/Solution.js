// https://leetcode.com/problems/find-smallest-letter-greater-than-target

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let l = 0
    let r = letters.length
 
    while (l < r) {
        let mid = Math.floor((l+r)/2)
        if (target >= letters[mid]) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    return letters[l % letters.length]
    
    
};