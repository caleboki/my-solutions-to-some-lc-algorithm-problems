// https://leetcode.com/problems/rotate-image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {
//     let len = matrix.length;
  
//       for (let row = 0; row < len; row++) {

//         for (let col = row; col < (len - row - 1); col++ ) {
//           let firstTemp = matrix[col][row];

//           matrix[col][row] = matrix[len - row - 1][col];
//           matrix[len - row - 1][col] = matrix[len - col - 1][len - row - 1];
//           matrix[len - col - 1][len - row - 1] = matrix[row][len - col - 1];
//           matrix[row][len - col - 1] = firstTemp;  
//         } 
//       }
//     return matrix 
// };

// void rotate(vector<vector<int> > &matrix) {
//     reverse(matrix.begin(), matrix.end());
//     for (int i = 0; i < matrix.size(); ++i) {
//         for (int j = i + 1; j < matrix[i].size(); ++j)
//             swap(matrix[i][j], matrix[j][i]);
//     }
// }

var rotate = function(matrix) {
    matrix.reverse()
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i+1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
}

