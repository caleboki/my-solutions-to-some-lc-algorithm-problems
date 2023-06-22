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
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) nums.splice(i, 1)
  }
};