// https://leetcode.com/problems/can-place-flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let previous
    let next
    let current
    
    for(let i=0; i<flowerbed.length; i++){
        previous = flowerbed[i - 1]
        current = flowerbed[i]
        next = flowerbed[i + 1]
        // here we take advantage of previous and next being falsy values when they are outside of the array or when they are equal to zero
        if(!previous && !current && !next){
            flowerbed[i] = 1
            n--
			//early return optimization
            //if(n === 0) return true
        }
    }
    
    return n <= 0
};