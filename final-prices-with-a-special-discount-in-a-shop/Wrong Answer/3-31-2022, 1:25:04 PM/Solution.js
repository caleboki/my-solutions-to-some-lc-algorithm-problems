// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let discounts = []
    
    for (let i = 0; i < prices.length; i++) {
        let j = i + 1
        
        if (prices[j] <= prices[i]) {
            discounts.push(prices[j]) 
        } 
        
    }
    
    for (let i = 0; i < prices.length; i++) {
        let j = i + 1
        
        if (prices[j] > prices[i]) {
            discounts.push(prices[i]) 
        }  
    }
    
    let diff = prices.length - discounts.length
    
    prices.reverse()
    let i = 0
    while(diff > 0) {
        discounts.push(prices[i])
        diff--, i++
    }
    
    return (discounts)
    
};