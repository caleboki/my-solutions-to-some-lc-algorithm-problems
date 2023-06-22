// https://leetcode.com/problems/rotate-image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length;
  
      for (let row = 0; row < len/2; row++) {

        for (let col = row; col < (len - row - 1); col++ ) {
          let firstTemp = matrix[col][row];

          matrix[col][row] = matrix[len - row - 1][col];
          matrix[len - row - 1][col] = matrix[len - col - 1][len - row - 1];
          matrix[len - col - 1][len - row - 1] = matrix[row][len - col - 1];
          matrix[row][len - col - 1] = firstTemp;  
        } 
      }
    return matrix
    
};