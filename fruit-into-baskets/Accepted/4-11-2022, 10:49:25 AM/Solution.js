// https://leetcode.com/problems/fruit-into-baskets

/**
 * @param {number[]} fruits
 * @return {number}
 */


// In this problem, we need to find the length of the longest subarray with no more than two distinct characters (or fruit types!). This transforms the current problem into Longest Substring with K Distinct Characters where K=2.

var totalFruit = function(fruits) {
    let map = {}, j = 0, max = 0, k = 2
    
    for (let i = 0; i < fruits.length; i++) {
        if (!(fruits[i] in map)) {
            map[fruits[i]] = 0
        }
        map[fruits[i]]++
        
        while(Object.keys(map).length > k) {
            map[fruits[j]]--
            
            if (map[fruits[j]] === 0) delete map[fruits[j]]
            j++
        }
        max = Math.max(max, i - j + 1)
    }
    return max
    
};
