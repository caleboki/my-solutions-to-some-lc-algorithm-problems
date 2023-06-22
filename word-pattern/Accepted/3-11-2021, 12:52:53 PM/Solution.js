// https://leetcode.com/problems/word-pattern

var wordPattern = function(pattern, s) {
    //idea: create a map of pattern and s then compare the value
    //convert s to array
    let sArray = s.split(" ");
    let sMap = {};
    let pMap = {};
    
    if (pattern.length !== sArray.length) return false;
    
    for (let i = 0; i < sArray.length; i++) {
        
        let curWord = sArray[i];
        let curLetter = pattern[i];
        
        if(sMap[curLetter] !== undefined && sMap[curLetter] !== curWord) return false;
        if(pMap[curWord] !== undefined && pMap[curWord] !== curLetter) return false;
        
        pMap[curWord] = curLetter;
        sMap[curLetter] = curWord;
        
    }
    console.log(sMap)
    console.log(pMap)
    return true;
    
};