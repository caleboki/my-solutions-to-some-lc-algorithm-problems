// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let max = 0, left = 0, right = left + 1
    
//     while (right < prices.length) {
//         if (prices[right] > prices[left]) {
//             max += prices[right] - prices[left]
//         } 
//         left++
//         right++
//     }
//     return max
// };

const maxProfit = (prices) => {
    let max = 0
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) max += prices[i] - prices[i-1]
    }
    
    return max
}