// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let map = new Map(); // count all qualified substring
    let start = 0;
    let letters = new Map(); // count letter occurance between [i, start]
    
    for(let i = 0; i < s.length; ++i) {
        letters.set(s[i], (letters.get(s[i]) || 0) + 1);
        
        if (i - start + 1 > minSize) { // try to move start forward
            letters.set(s[start], letters.get(s[start]) - 1);
            if (letters.get(s[start]) === 0) {
                letters.delete(s[start]);
            }
            start++;
        }      
        // save the qualified substring into map
        if (letters.size <= maxLetters && i - start + 1 >= minSize) {
            let sub = s.substring(start, i + 1);
            map.set(sub, (map.get(sub) || 0) + 1);
        }
    }
    let max = 0;
    [...map.entries()].map(([k, v]) => max = Math.max(max, v));
    return max;
    
};