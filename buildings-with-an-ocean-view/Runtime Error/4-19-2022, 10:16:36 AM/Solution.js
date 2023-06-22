// https://leetcode.com/problems/buildings-with-an-ocean-view

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let res = [], temp = new Set()
    
    for (let i = 0; i < heights.length; i++) {
        for (let j = i+1; j < heights.length; j++) {
            
            if (heights[i] > heights[j]) {
                
                temp.add(i)
                
            } else {
                temp = new Set()
                break
            }
            //console.log([i, j])
            
            if (j === heights.length - 1) {
                res.push(...temp)
                break
            }
                
        }
    }
    res.push(heights.length - 1)
    
    return Array.from(new Set(res))
    
    
    
};