// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = +digits.join('') + 1
    return digits.toString().split('')
};