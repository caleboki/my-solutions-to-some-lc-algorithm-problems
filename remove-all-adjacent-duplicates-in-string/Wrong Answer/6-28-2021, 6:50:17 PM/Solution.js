// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    
    for (str of s) {
        if (stack.includes(str)) {
            stack.shift()
            
        } else {
            stack.unshift(str)
        }
    }
    return stack.reverse().join('')
    
};