// https://leetcode.com/problems/multiply-strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var multiply = function(num1, num2) {
    
//     const addStings = (str1, str2) => {
        
//     }
    
//     let strToAdd = []
    
//     for (let i = num2.length-1; i >= 0; i--) {
//         let result = ''
        
//         for (let j = num1.length-1; j >= 0; j--) {
            
            
//             let carrying = 0
//             let num = (parseInt(num2[j]) || 0) * (parseInt(num1[i]) || 0) 
//             console.log(parseInt(num1[i]))
            
//             if (num.toString().length > 1) {
                
//                 carrying = num.toString()[0]
                
//             } else {
//                 carrying = 0
//             }
            
//             result = `${num.toString().split('')[1] || num}${result}`
            
//         }
        
//         strToAdd.push(result)
//     }
    
//     if (strToAdd.length === 1) return strToAdd[0]
//     console.log(strToAdd)
// };

// var multiply = function (num1, num2) {
//     if (!num1 || !num2) return 0
//     if (num1 === 1 || num2 === 1) return Math.max(num1, num2)
    
//     let n1 = num1.length, n2 = num2.length
    
//     let a, b, c, d
    
//     if (n1 % 2 === 0) {
//         a = num1.substring(0, n1/2)
//         b = num1.substring(n1/2, n1)
//     } else {
//         a = num1.substring(0, (n1/2) + 1)
//         b = num1.substring((n1/2) + 1, n1)
//     }
    
//     if (n2 % 2 === 0) {
//         c = num2.substring(0, n2/2)
//         d = num2.substring(n2/2, n2)
//     } else {
//         c = num2.substring(0, (n2/2) + 1)
//         d = num2.substring((n2/2) + 1, n2)
//     }
    
//     let ac = a * c * 100
//     let bd = b * d
    
//     return ac + bd + (a*d + b*c) 
// }

var multiply = function (num1, num2) {
    if(!+num1 || !+num2) return '0'
    
    let product = new Array(num1.length + num2.length).fill(0)
    let currentIndex = product.length - 1
    
    for (let i = num1.length - 1; i >= 0; i--) {
        let index = currentIndex
        currentIndex--
        
        for (let j = num2.length - 1; j>=0; j--) {
            let num = +num1[i] * +num2[j] + product[index]
            product[index] = num % 10
            index--
            product[index] += Math.floor(num/10)
            //console.log(product)
            
        }
        
    }
    return product.join('').replace(/^0+/, '')

    
}
