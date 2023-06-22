// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let discounts = []
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                let d = prices[i] - prices[j]
                //console.log(d)
                discounts.push(d)
                break
            } 
        }
        
    }
    
    for (let i = discounts.length; i < prices.length; i++) {
        discounts.push(prices[i])
    }

    
    return (discounts)
    
};