// https://leetcode.com/problems/longest-repeating-character-replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// First we need to build a freq. map of all characters in s
//  Then we will need to know how many letters in our substring that we need to replace.
// To find out the lettersToReplace = (end - start + 1) - maxRepeatLetter;       
// Now that we know how many characters that need to be replaced in our window, we can deduce that if lettersToReplace > k than the window is invalid and we decrease the window size from the left.

var characterReplacement = function(s, k) {
    let map = {}, maxRepeatLetter = 0, j = 0, max = 0
    
    for (let i = 0; i < s.length; i++) {
        //Setting up a freq. counter for all characters in s
        if (!(s[i] in map)) map[s[i]] = 0
        map[s[i]]++
        
        maxRepeatLetter = Math.max(maxRepeatLetter, map[s[i]])
        
        let lettersToReplace = i - j + 1 - maxRepeatLetter
        if ((lettersToReplace) > k) {
            map[s[j]]--
            j++
        }
        
        max = Math.max(max, i - j + 1)
    }
    return max
    
};