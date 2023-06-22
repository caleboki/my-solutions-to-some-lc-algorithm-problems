// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;
    
    const diff1 = [];
    const diff2 = [];
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff1.push(s1[i]);
            diff2.push(s2[i]);
        }
    }
    
    if (diff1.length !== diff2.length || diff1.length > 2) {
        return false;
    }
    
    if (diff1.length === 0) {
        return true;
    }

    console.log(diff1)
    console.log(diff2)

    return diff1[0] === diff2[1] && diff1[1] === diff2[0];

   

    

    

    
};