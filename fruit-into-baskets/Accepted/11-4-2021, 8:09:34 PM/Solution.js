// https://leetcode.com/problems/fruit-into-baskets

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map = {}, j = 0, max = 0
    
    for (let i = 0; i < fruits.length; i++) {
        if (!(fruits[i] in map)) {
            map[fruits[i]] = 0
        }
        map[fruits[i]]++
        
        while(Object.keys(map).length > 2) {
            map[fruits[j]]--
            
            if (map[fruits[j]] === 0) delete map[fruits[j]]
            j++
        }
        max = Math.max(max, i - j + 1)
    }
    return max
    
};
