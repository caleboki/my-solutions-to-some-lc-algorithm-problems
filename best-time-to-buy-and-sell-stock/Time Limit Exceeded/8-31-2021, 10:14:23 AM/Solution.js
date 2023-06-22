// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            let diff = prices[j] - prices[i]
            //if (diff > max) max = diff 
            max = Math.max(max, diff)
        }
    }
    
    return max
    
    
};