// https://leetcode.com/problems/fizz-buzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = []
    
    for (let i = 0; i < n; i++) {
        let item = i + 1
        if (item % 3 === 0 && item % 5 === 0) {
            answer.push("FizzBuzz")
        } else if (item % 3 === 0) {
            answer.push("Fizz")
        } else if (item % 5 === 0) {
            answer.push("Buzz")
        } else {
            answer.push(item.toString())
        }
        
        
        
    }
    
    return (answer)
    

};