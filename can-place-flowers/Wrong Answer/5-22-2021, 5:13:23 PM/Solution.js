// https://leetcode.com/problems/can-place-flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let newFlowers = []
    
    for (let i = 0; i<n; i++) {
        newFlowers.push(1)   
    }
    
    for (let j = 0; j<newFlowers.length; j++) {
        for (let k = 1; k<flowerbed.length; k++) {
            
            
            if (flowerbed[k] === 1) {
                if ((flowerbed[k + 2] !== undefined) && (flowerbed[k + 2] === 0)) {
                    [ flowerbed[k+2], newFlowers[j] ] = [ newFlowers[j], flowerbed[k+2] ]
                    newFlowers.pop()
                    continue
                }
                
                if ((flowerbed[k - 2] !== undefined) && (flowerbed[k - 2] === 0)) {
                    [ flowerbed[k-2], newFlowers[j] ] = [ newFlowers[j], flowerbed[k-2] ]
                    newFlowers.pop()
                    continue
                }
            }
        }
    }
    if (newFlowers.length === 0) return true
    return false
};