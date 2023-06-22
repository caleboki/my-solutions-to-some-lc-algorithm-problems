// https://leetcode.com/problems/add-binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let index1 = a.length - 1;
    let index2 = b.length - 1;
    let carry = 0;
    let result = '';
    
    while(index1 >= 0 || index2 >= 0) {
        
        let value1 = a[index1] || 0;
        let value2 = b[index2] || 0;
        
        let sum = +value1 + +value2 + carry;
        
        if(sum === 0) {
            carry = 0;
            result = '0' + result;
        }
        else if(sum === 1) {
            carry = 0;
            result = '1' + result;
        }
        else if(sum === 2) {
            carry = 1;
            result = '0' + result;
        }
        else {
            carry = 1
            result = '1' + result;
        }
        
        index1--;
        index2--;
    }
    
    if(carry > 0) result = carry + result;
    return result;
};