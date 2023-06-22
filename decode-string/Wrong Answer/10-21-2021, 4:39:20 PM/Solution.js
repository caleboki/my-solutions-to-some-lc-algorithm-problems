// https://leetcode.com/problems/decode-string

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    //idea recursion
    //use method of flattening srray
    
    let output = ''
    let currentStr = ''
    let currentNum = 1
        
    
    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(+s[i])) {
            currentNum = s[i]
            //continue
        }
        
        if (s[i] === '[') continue
        
        if (s[i] === ']') {
            output += currentStr.repeat(currentNum)
            currentStr = ''
        }
        
        if (s[i].match(/[a-z]/i)) {
            currentStr += s[i] 
        }
        
    }
    
    return(output)
    
};