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
    let carry = 0
    let result = []
    let resultString = ""
   
    let p1 = num1.length - 1
    let p2 = num2.length - 1
    
    if (p1 === 0 && p2 === 0) {
        return (num1[p1] - '0') + num2[p2] - '0'
    }
    
    while (p1 > -1 || p2 > -1) {
        //convert digits to integer values
        
        //checking if we are still bounded within p1/p2, 
        //subtract '0' from num to convert with ASCII
        //otherwise set to 0
        let x1 = p1 >= 0 ? num1[p1] - '0' : 0
        let x2 = p2 >= 0 ? num2[p2] - '0' : 0
        
        //get result
        let sum = x1 + x2 + carry
       
        result.push(sum % 10)
        carry = sum / 10
        
        p1--, p2-- 
    }
    
    if (carry === 1) result.push(1)
    
    result.reverse()
    
    for (i of result) {
        resultString += i.toString().split(".")[0]
    }
    return resultString
    
};