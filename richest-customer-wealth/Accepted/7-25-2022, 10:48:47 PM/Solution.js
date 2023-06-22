// https://leetcode.com/problems/richest-customer-wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let customers = {}
    
    for (let i = 0; i < accounts.length; i++) {
        customers[i] = accounts[i].reduce((a, b) =>  a+b, 0)
    }
    
    return Object.values(customers).sort((a, b) => {return b - a})[0]
    
};