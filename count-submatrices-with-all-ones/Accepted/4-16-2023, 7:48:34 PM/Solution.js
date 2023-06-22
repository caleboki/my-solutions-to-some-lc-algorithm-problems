// https://leetcode.com/problems/count-submatrices-with-all-ones

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSubmat = (mat) => {
  if (mat.length === 0) return 0;

  let rows = mat.length, cols = mat[0].length, count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) continue;
      let width = Infinity;
      for (let k = i; k < rows && mat[k][j] === 1; k++) {
        width = Math.min(width, getContiguousOnes(mat[k], j));
        count += width;
      }
    }
  }

  return count;
};

const getContiguousOnes = (row, start) => {
  let count = 0;
  for (let i = start; i < row.length && row[i] === 1; i++) {
    count++;
  }
  return count;
};


