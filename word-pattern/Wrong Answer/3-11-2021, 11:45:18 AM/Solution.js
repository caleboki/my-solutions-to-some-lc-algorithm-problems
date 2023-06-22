// https://leetcode.com/problems/word-pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    //idea: create a frequency map of pattern and s then compare the value
    //convert s to array
    let sArray = s.split(" ");
    let sMap = {};
    let pMap = {};
    
    for (let i = 0; i < sArray.length; i++) {
        if(sMap[sArray[i]] !== undefined) {
            sMap[sArray[i]] += 1;
        }
        else {
            sMap[sArray[i]] = 1;
        }
    }
    
    for (let k = 0; k < pattern.length; k++) {
        if(pMap[pattern[k]] !== undefined) {
            pMap[pattern[k]] += 1;
        }
        else {
            pMap[pattern[k]] = 1;
        }
    }
    
    let arr1 = Object.values(sMap);
    let arr2 = Object.values(pMap);
    
    if (arr1.length !== arr2.length) return false;
    
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] !== arr2[j]) return false;
        return true;
    }
    
};