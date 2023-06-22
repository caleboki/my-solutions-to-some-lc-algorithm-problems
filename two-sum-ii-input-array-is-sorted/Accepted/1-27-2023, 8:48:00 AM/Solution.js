// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     numbers.unshift(0)
    
//     var pairs = {}
    
//     for (let i = 1; i < numbers.length; i++){
//         if (pairs[numbers[i]] !== undefined) return [pairs[numbers[i]], i]
//         pairs[target - numbers[i]] = i
//     } 
// };

const twoSum = (numbers, target) => {
    let left = 0, right = numbers.length - 1

    while(left <= right) {
        let current = numbers[left] + numbers[right]
        if (current > target) {
            right--
        } else if (current < target) {
            left++
        } else {
            return [left+1, right+1]
        }
    }
}



