// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let discounts = []
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length - 1; j++) {
            if (prices[j] <= prices[i]) {
                discounts.push(prices[i] - prices[j])
                break
            }
        }
        
    }
    
//     let diff = prices.length - discounts.length, i = 0
//     prices.reverse()
    
//     while (diff > 0) {
//         discounts.push(prices[i])
//         diff--, i++
//     }
    
    for (let i = discounts.length; i < prices.length; i++) {
        discounts.push(prices[i])
    }

    
    return (discounts)
    
};