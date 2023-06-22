// https://leetcode.com/problems/trapping-rain-water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //if prev element and next element < prev element
    //maxwater <= previous elevation element
    
    //if prev element and next element < prev element
    
    //Base cases
    if (height.length < 3) return 0
    
    let waterLevel = 0
    let trap = 0
    
    for (let i = 0; i < height.length; i++) { 
        
       if (height[i] > waterLevel) waterLevel = height[i]
        
        if (height[i+1] !== height[i-1]) trap += (waterLevel - height[i])
    }
    return (trap)
    
};