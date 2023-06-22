// https://leetcode.com/problems/add-strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//https://www.youtube.com/watch?v=PlCOTfHB54g
// var addStrings = function(num1, num2) {
//     let res = '';
//     let i = num1.length - 1;
//     let j = num2.length - 1 ;
//     let carry = 0;
    
//     while (i >= 0 || j >= 0) {
//         let sum = carry;
        
//         if (i >= 0) {
//             sum += num1.charAt(i--) - '0'
//         }
//         if (j >= 0) {
//             sum += num2.charAt(j--) - '0'
//         }
//         res += (sum % 10);
//         carry = Math.floor(sum / 10);

//     }
//     if (carry !== 0) {
//         res +=carry;
//     }
    
//     return res.split('').reverse().join('')
// };

var addStrings = function(num1, num2) {
    let result = ''
    let carrying = false
    
    while (num1.length || num2.length) {
        let num = parseInt(num1.substring(num1.length - 1) || 0)
        +                               
        parseInt(num2.substring(num2.length - 1) || 0)
        +
        (+carrying)
        carrying = (num >= 10)
        
        result = `${num.toString().split('')[1] || num}${result}`
        
        num1 = num1.slice(0, -1)
        num2 = num2.slice(0, -1)
    }
    
    return carrying ? `1${result}`: result
    
    
};