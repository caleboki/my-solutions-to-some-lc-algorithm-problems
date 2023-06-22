// https://leetcode.com/problems/student-attendance-record-i

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    const absent = () => {
        let count = 0
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'A') count++
            if (count >= 2) return false
        }
       
        return true
    }
    
    const late = () => {
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === s[i+1] === s[i+2] === 'L') return false
        }
        
        return true
    }
    
    return absent() === late() === true ? true : false
};