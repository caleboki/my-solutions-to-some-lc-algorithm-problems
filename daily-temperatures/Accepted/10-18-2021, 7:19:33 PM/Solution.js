// https://leetcode.com/problems/daily-temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let currentTemp
    let ans = []
    
    while (temperatures.length) {
        currentTemp = temperatures.shift()
        
        for (let i = 0; i < temperatures.length; i++) {
            if (temperatures[i] > currentTemp) {
                ans.push(i+1)
                break
            }
            
            if (i === temperatures.length - 1) {
                ans.push(0)
            }
        }
        
    }
    ans.push(0)
    return ans
    
};