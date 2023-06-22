// https://leetcode.com/problems/subarrays-with-k-different-integers

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraysWithKDistinct = function(nums, k) {
//     let count = 0, i = 0, j = 0
//     const kDistinct = (m, n) => {}

//     while (i < nums.length && j < nums.length) {
//         if (kDistinct(i, j)) {
//             count++
//             j++
//         }
//         i++
//     }

//     return count
// };

var subarraysWithKDistinct = function(nums, k) {
    const atMostK = (k) => {
        let j = 0, map = {}, count = 0

        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0)

            if (map[nums[i]] === 0) k--
            map[nums[i]]++

            while (k < 0) {
                map[nums[j]]--
                if (map[nums[j]] === 0) k++
                j++
            }

            count += i - j + 1
        }
        return count
    }
    return atMostK(k) - atMostK(k-1)
};
