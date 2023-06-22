// https://leetcode.com/problems/maximum-product-of-three-numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort(function(a, b) {return b-a})
    console.log(nums)
    let positives = false, negatives = false
    
    const product = (arr) => {
        let prod = 1
    
        for (let i = 0; i < 3; i++) {
            prod = prod * arr[i]
        }
        
        return prod
    }
    
    for (num of nums) {
        if (num < 0) negatives = true
        if (num > 0) positives = true
    }
    
    if (positives && negatives) {
        
       let i = 0, j = nums.length - 1, maxProd = [], ncount = 0
       while (i <= j && maxProd.length !== 3) {
           if (Math.abs(nums[j]) > Math.abs(nums[i]) && ncount < 2) {
               maxProd.push(nums[j])
               ncount++
               j--
           } else {
               maxProd.push(nums[i])
               i++
           }
           
       }
        
        return product(maxProd)
        
    }
    
    return product(nums)
};