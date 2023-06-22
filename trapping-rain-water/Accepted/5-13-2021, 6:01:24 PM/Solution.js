// https://leetcode.com/problems/trapping-rain-water

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     //if prev element and next element < prev element
//     //maxwater <= previous elevation element
    
//     //if prev element and next element < prev element
    
//     //Base cases
//     if (height.length < 3) return 0
    
//     let sortedHeight = []
//     let trap = 0
       
//     let waterLevel = sortedHeight[1]
    
//     for (let i = 1; i < height.length - 1; i++) { 
        
//         let leftMax = 0
//         leftMax += Math.max(height[i], height[i-1])
//         let rightMax = 0
//         rightMax += Math.max(height[i], height[i+1])
        
//         let waterLevel = Math.min(leftMax, rightMax)
//         if (height[i+1] !== height[i-1]) trap += (waterLevel - height[i])
//     }
//     return (trap)
    
// };
// var trap = function(height) {
//     let leftMax = 0, rightMax = 0, left = 0, right = height.length - 1, ans = 0;
    
//     for (let i = 0; i < height.length; i++) {
//         leftMax = Math.max(leftMax, height[left]);
//         rightMax = Math.max(rightMax, height[right]);
        
//         ans += (height[left] < height[right]) ? leftMax - height[left++] : rightMax - height[right--];
        
//     }
//     return ans    
// }

var trap = function(height) {
    let res = 0;
    let len = height.length;
    let maxLeft = [];
    let maxRight = [];
    
    maxLeft[0] = height[0];
    maxRight[len - 1] = height[len - 1];
    
    for (let i = 1; i < len; i ++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    for (let i = len - 2; i >= 0; i --) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    for (let i = 1; i < len - 1; i ++) {
        res += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }
    return res;
};