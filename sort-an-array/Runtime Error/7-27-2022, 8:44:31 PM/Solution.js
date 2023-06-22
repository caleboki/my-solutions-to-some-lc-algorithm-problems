// https://leetcode.com/problems/sort-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums
    
    let pivot = nums.shift(), left = [], right = [], newData = []
    
    for (let num of nums) {
        if (num < pivot) {
            left.push(num)
        } else {
            right.push(num)
        }
    }
    
    return [...sortArray(left), pivot, ...sortArray(right)]
};

//USE HEAP SORT