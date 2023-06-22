// https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    
    let filtered
    
    if (veganFriendly === 0) {
        filtered = restaurants.filter(f => f[3] <= maxPrice && f[4] <= maxDistance) 
    } else {
        filtered = restaurants.filter(f => f[2] === veganFriendly && f[3] <= maxPrice && f[4] <= maxDistance)
    }
    
    filtered.sort(function(a, b){
        return b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]
    })
   
    let result = []
    filtered.forEach(f => result.push(f[0]))
    return result
};