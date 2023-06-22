// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Insert characters from the beginning of the string until we have K distinct characters in the HashMap.
// These characters will constitute our sliding window. We are asked to find the longest such window having no more than K distinct characters. We will remember the length of this window as the longest window so far.
// After this, we will keep adding one character in the sliding window (i.e., slide the window ahead) in a stepwise fashion.
// In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than K. We will shrink the window until we have no more than K distinct characters in the HashMap. This is needed as we intend to find the longest window.
// While shrinking, we’ll decrement the character’s frequency going out of the window and remove it from the HashMap if its frequency becomes zero.
// At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.

var lengthOfLongestSubstringKDistinct = function(s, k) {
    let map = {}, j = 0, max = 0
    
    // in the following loop we'll try to extend the range [j, i]
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in map)) {
            map[s[i]] = 0
        }
        map[s[i]]++
        
        while(Object.keys(map).length > k) {
            map[s[j]]--
            
            if (map[s[j]] === 0) delete map[s[j]]
            j++
        }
        max = Math.max(max, i - j + 1)
    }
    return max
};