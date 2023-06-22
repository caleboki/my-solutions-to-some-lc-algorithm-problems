// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    numbers.unshift(0)
    
    var pairs = {}
    var len = numbers.length
    
    for (let i = 1; i < len; i++){
        if (pairs[numbers[i]] !== undefined) return [pairs[numbers[i]], i]
        pairs[target - numbers[i]] = i
    }
    
};

