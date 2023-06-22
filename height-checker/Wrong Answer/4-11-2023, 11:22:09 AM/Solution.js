// https://leetcode.com/problems/height-checker

/**
 * @param {number[]} heights
 * @return {number}
 */
// var heightChecker = function(heights) {
//     let expected = []
//     let count = 0
    
//     for (h of heights) {
//         expected.push(h)
//     }
//     expected.sort(function(a,b){return a - b})
    
//     for (let i = 0; i < expected.length; i++) {
//         if (expected[i] !== heights[i]) count++
//     }
    
//     return count
// };

const heightChecker = (heights) => {
    let hasSwapped = true, original = [...heights], count = 0
    
    while (hasSwapped) {
        hasSwapped = false
        for (let i = 0; i < heights.length - 1; i++) {
            if (heights[i] > heights[i+1]) {
                let temp = heights[i]
                heights[i] = heights[i+1]
                heights[i+1] = temp
                hasSwapped = true
            }
            
        }
        console.log('test')
    }
    
    for (let i of original){
        if (i !== heights[i]) count++
    }
    return count
}