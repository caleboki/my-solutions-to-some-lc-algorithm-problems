// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    
    let prefix = strs[0]
    
    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === "") return ""
        }
    }
    return prefix
    
};

//TIme complexity O(S)
//Great explanation here: https://www.youtube.com/watch?v=bl8ue-dTxgs