// https://leetcode.com/problems/longest-repeating-character-replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = {}, maxRepeatLetter = 0, j = 0, max = 0
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in map)) {
            map[s[i]] = 0
        }
        map[s[i]]++
        maxRepeatLetter = Math.max(maxRepeatLetter, map[s[i]])
        
//Current window size is from j to i, overall we have a letter which is repeating //'maxRepeatLetter' times, this means we can have a window which has one  letter
// repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
// if the remaining letters are more than 'k', it is the time to shrink the window as we
// are not allowed to replace more than 'k' letters
        
        if ((i - j + 1 - maxRepeatLetter) > k) {
            map[s[j]]--
            j++
        }
        
        max = Math.max(max, i - j + 1)
    }
    return max
    
};