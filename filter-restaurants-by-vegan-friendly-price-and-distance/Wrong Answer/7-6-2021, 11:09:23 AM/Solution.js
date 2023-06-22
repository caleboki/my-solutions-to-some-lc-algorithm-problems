// https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    
    restaurants.sort(function(a, b){return b[1] - a[1]})
    
    let filtered = restaurants.filter(f => f[2] === veganFriendly && f[3] <= maxPrice && f[4] <= maxDistance)
    
    let result = []
    filtered.forEach(f => result.push(f[0]))
    return result
};