// https://leetcode.com/problems/decode-string

/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function(s) {
//     //idea recursion
//     //use method of flattening srray
    
//     let output = ''
//     let currentStr = ''
//     let currentNum = 1
        
    
//     for (let i = 0; i < s.length; i++) {
//         if (Number.isInteger(+s[i] ) && !s[i-1].match(/[a-z]/i)) {
//             currentNum = s[i]
//             //continue
//         }
        
//         if (s[i] === '[') continue
        
//         if (s[i] === ']') {
//             output += currentStr.repeat(currentNum)
//             currentStr = ''
//         }
        
//         if (s[i].match(/[a-z]/i)) {
//             currentStr += s[i] 
//         }
        
//     }
    
//     return(output)
    
// };

 var decodeString = function(s) {
    const stack = [];
    
    for (let letter of s) {
        if (letter != "]") {
            stack.push(letter)
            console.log(stack)
        } else {
            let substr = "";
            while (stack[stack.length - 1] != "[") {
                substr = stack.pop() + substr
            }
                
            // remove open bracket
            stack.pop()
            
            let k = ""
            
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k
            }
                
            stack.push(substr.repeat(Number(k)))            
        }
    }
    
    return stack.join("");
};
