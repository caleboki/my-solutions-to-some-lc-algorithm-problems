// https://leetcode.com/problems/add-strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//https://www.youtube.com/watch?v=PlCOTfHB54g
var addStrings = function(num1, num2) {
    let res = '';
    let i = num1.length - 1;
    let j = num2.length - 1 ;
    let carry = 0;
    
    while (i >= 0 || j >= 0) {
        let sum = carry;
        
        if (i >= 0) {
            sum += num1.charAt(i--) - '0'
        }
        if (j >= 0) {
            sum += num2.charAt(j--) - '0'
        }
        res += (sum % 10);
        carry = Math.floor(sum / 10);

    }
    if (carry !== 0) {
        res +=carry;
    }
    
    return res.split('').reverse().join('')
};