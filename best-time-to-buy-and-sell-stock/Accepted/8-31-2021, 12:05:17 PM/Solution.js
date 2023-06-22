// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     let max = 0
    
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i+1; j < prices.length; j++) {
//             let diff = prices[j] - prices[i]
//             //if (diff > max) max = diff 
//             max = Math.max(max, diff)
//         }
//     }
//     return max
    
    let max = 0, left = 0, right = left + 1
    
    while(right < prices.length) {
        
        
        if (prices[right] > prices[left]) {
            let diff = prices[right] - prices[left]
            max = Math.max(max, diff)
        } else {
            left = right
        } 
        
        right++
        
    }
    return max
};