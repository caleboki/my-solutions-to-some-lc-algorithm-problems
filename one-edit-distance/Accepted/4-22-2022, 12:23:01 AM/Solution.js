// https://leetcode.com/problems/one-edit-distance

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if (s.length > t.length) return isOneEditDistance(t, s)
    
    if ((t.length - s.length) > 1) return false
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            if (s.length === t.length) {
                return s.substring(i+1) === t.substring(i+1)
            } else {
                return s.substring(i) === t.substring(i+1)
                
            }
        }
    }
    return (s.length + 1) === t.length
    
};