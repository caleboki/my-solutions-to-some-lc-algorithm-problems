// https://leetcode.com/problems/valid-parenthesis-string

/**
 * @param {string} s
 * @return {boolean}
 */

const checkValidString = (s) => {
    let leftParans = 0, stars = 0
    
    for (let i in s) {
        
        if (s[i] === '(') {
            leftParans++
        } else if (s[i] === ')') {
            if (leftParans > 0) {
                leftParans--
            } else if (stars > 0) {
                //correcting for incrementing stars in the else block below
                stars--
            } else {
                return false
            }
        } else {
            //i.e current iteration is *
            stars++
            if (leftParans > 0) {
                leftParans--
                stars++
            }
        }
    }
    
    return leftParans === 0
}