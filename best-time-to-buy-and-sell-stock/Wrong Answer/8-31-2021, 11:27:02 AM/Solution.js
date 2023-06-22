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
    
    let max = 0
    
    let left = 0
    
    let right = left + 1
    
    while(left < right && right < prices.length) {
        let diff = prices[right] - prices[left]
        if (diff > 0) {
            max = Math.max(max, diff)
            right++
        } else if (diff < 0) {
            left++
            right++
        } else {
            max = Math.max(max, diff)
            left++
            right++
        }
    }
    return max
};