// https://leetcode.com/problems/greatest-common-divisor-of-strings

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";
    let s = "";
    let str = "";
    const length = Math.min(str1.length, str2.length)
    for(let i = 0; i < length; i++){
        s = `${s}${str2[i]}`
        if((str1.length % s.length === 0) && (str2.length % s.length === 0)) str = s;
    }
    return str;
};