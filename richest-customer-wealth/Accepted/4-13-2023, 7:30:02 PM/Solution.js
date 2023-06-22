// https://leetcode.com/problems/richest-customer-wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sums = []

    for (let i = 0; i < accounts.length; i++) {
        let sum = 0
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]
            
        }
        sums.push(sum)
    }
    
    return Math.max(...sums)
    
};