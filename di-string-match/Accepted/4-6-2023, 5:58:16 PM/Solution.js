// https://leetcode.com/problems/di-string-match

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let size = s.length, high = size, low = 0, output = []

    for (let i = 0; i < size; i++) {
        if (s[i] === 'I') {
            output[i] = low
            low++
        } else {
            output[i] = high
            high--
        }
    }
    
    output[size] = high
    return output
};