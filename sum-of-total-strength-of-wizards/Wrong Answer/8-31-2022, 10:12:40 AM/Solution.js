// https://leetcode.com/problems/sum-of-total-strength-of-wizards

/**
 * @param {number[]} strength
 * @return {number}
 */
var totalStrength = function(strength) {
    let sum = 0, MOD = 1e9 + 7
    
    for (let i = 0; i < strength.length; i++) {
        let min = strength[i], subsum = 0
        
        for (let j = i; j < strength.length; j++) {
            subsum += strength[j]
            min = Math.min(min, strength[j])
            sum += (min * subsum) % 1000000007
            
        }
        
    }
    return sum 
    
};

