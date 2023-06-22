// https://leetcode.com/problems/sign-of-the-product-of-an-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const signFunc = (x) => {
        if (x === 0) return 0
        if (x >= 1) return 1
        return -1
    }

    let product = 1
    for (let num of nums) {
        console.log(num)
        product *= num
    }
    
    return signFunc(product)
};