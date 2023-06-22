// https://leetcode.com/problems/add-strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1, num2) {
//     let res = []
//     let carry = 0
    
//     let p1 = num1.length - 1
//     let p2 = num2.length - 1
    
//     while (p1 >= 0 || p2 >= 0) {
//         let x1 = p1 >= 0 ? num1[p1] - '0' : 0
//         let x2 = p2 >= 0 ? num2[p2] - '0' : 0
//         let value = (x1 + x2 + carry) % 10
//         carry = (x1 + x2 + carry)/10
//         res.push(value)
//         p1--
//         p2--
        
//     }
//     if (carry !== 0) res.push(carry)
//     return res
    
// };


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