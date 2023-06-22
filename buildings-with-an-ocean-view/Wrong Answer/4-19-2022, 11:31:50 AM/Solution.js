// https://leetcode.com/problems/buildings-with-an-ocean-view

/**
 * @param {number[]} heights
 * @return {number[]}
 */

//Time complexity O(N^2)
// var findBuildings = function(heights) {
//     let res = [], temp = new Set()
    
//     for (let i = 0; i < heights.length; i++) {
//         for (let j = i+1; j < heights.length; j++) {
            
//             if (heights[i] > heights[j]) {
                
//                 temp.add(i)
                
//             } else {
//                 temp = new Set()
//                 break
//             }
//             //console.log([i, j])
            
//             if (j === heights.length - 1) {
//                 res.push(...temp)
//                 break
//             }
                
//         }
//     }
//     res.push(heights.length - 1)
    
//     return Array.from(new Set(res))
    
// };

// Time complexity: O(N)
// Space complexity: O(N)

// const findBuildings = (heights) => {
//     let answer = []
    
//     for (let i = 0; i < heights.length; i++) {
//         while (answer.length && heights[answer[answer.length - 1]] <= heights[i]) {
//             answer.pop()
//         }
//         answer.push(i)
//     }
//     return answer
// }

// Time complexity: O(N)
// Space complexity: O(N)

// const findBuildings = (heights) => {
//     let answer = [], stack = []
    
//     for (let i = heights.length - 1; i >=0; i--) {
//         while(stack.length && heights[stack[stack.length - 1]] < heights[i]) {
//             stack.pop()
//         }
        
//         if (stack.length === 0) answer.push(i)
        
//         stack.push(i)
//     }
    
//     answer.reverse()
//     return answer
// }

const findBuildings = (heights) => {
    let answer = [], maxHeight = -1
    
    for (let i = heights.length-1; i >= 0; --i) {
        if (maxHeight < heights[i]) {
            answer.push(i)
        }
        maxHeight = heights[i]
    }
    
    answer.reverse()
    return answer
}