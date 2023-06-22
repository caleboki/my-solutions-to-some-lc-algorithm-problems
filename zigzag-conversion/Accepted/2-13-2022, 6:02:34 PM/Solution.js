// https://leetcode.com/problems/zigzag-conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const rows = []
    let row = 0, step = 1
    
    for (let i = 0; i < s.length; i++) {
        rows[row] = rows[row] ? rows[row] + s[i] : s[i]
        
        row += step
        if (row === numRows - 1 || row === 0) step *= -1
    }
    
    return rows.join('')
};