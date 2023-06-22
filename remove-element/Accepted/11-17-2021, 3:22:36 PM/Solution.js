// https://leetcode.com/problems/remove-element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//    let a = nums.filter(f => f !== val)
   
//    for (let i = 0; i < a.length; i++) {
//        nums[i] = a[i]
//    }
    
//     let j = nums.length
    
//     while (j !== a.length) {
//         nums.pop()
//         j--
//     }
// };


var removeElement = function(nums, val) {
    let i = 0
    
    while (i < nums.length) {
        if (nums[i] === val) {
            nums[i] = nums[nums.length - 1]
            nums.pop()
        } else {
            i++
        }
    }
};