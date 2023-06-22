// https://leetcode.com/problems/maximal-rectangle

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0
    let rows = matrix.length, cols = matrix[0].length, result = 0
    
    for (let i = 1; i < rows; i++) {
      
        for (let j = 0; j < cols; j++) {

            if (matrix[i][j] === "0") continue
            matrix[i][j] = (+matrix[i-1][j] + +matrix[i][j]).toString()
        }
    }
    
    const largestRectangleArea = (heights) => {
        let maxArea = 0, stack = []
        heights = ['0', ...heights, '0']
        
        for (let i = 0; i < heights.length; i++) {
            
            while (stack && heights[stack[stack.length - 1]] > +heights[i]) {
                let j = stack.pop()
                
                maxArea = Math.max(maxArea, (i - stack[stack.length - 1] - 1) * +heights[j])
            }
            stack.push(i)
        }
        console.log(maxArea)
        return maxArea
    }
    
    for (let row of matrix) {
        
        result = Math.max(largestRectangleArea(row), result)
    }
    
    
    
    return result
    
};