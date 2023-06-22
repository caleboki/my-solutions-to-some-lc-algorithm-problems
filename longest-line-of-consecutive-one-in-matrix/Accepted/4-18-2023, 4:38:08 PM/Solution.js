// https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix

/**
 * @param {number[][]} mat
 * @return {number}
 */
const longestLine = function(mat) {
    const m = mat.length, n = mat[0].length;
    let maxLen = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                // horizontal
                let len = 1, k = j + 1;
                while (k < n && mat[i][k] === 1) {
                    len++;
                    k++;
                }
                maxLen = Math.max(maxLen, len);
                
                // vertical
                len = 1, k = i + 1;
                while (k < m && mat[k][j] === 1) {
                    len++;
                    k++;
                }
                maxLen = Math.max(maxLen, len);
                
                // diagonal
                len = 1, k = i + 1, l = j + 1;
                while (k < m && l < n && mat[k][l] === 1) {
                    len++;
                    k++;
                    l++;
                }
                maxLen = Math.max(maxLen, len);
                
                // anti-diagonal
                len = 1, k = i + 1, l = j - 1;
                while (k < m && l >= 0 && mat[k][l] === 1) {
                    len++;
                    k++;
                    l--;
                }
                maxLen = Math.max(maxLen, len);
            }
        }
    }
    
    return maxLen;
};
