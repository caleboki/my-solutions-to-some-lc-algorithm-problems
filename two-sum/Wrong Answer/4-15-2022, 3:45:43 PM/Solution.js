// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     const pairs = {}, len = nums.length
    
//     for (let i = 0; i < len; i++) {
//         if (nums[i] in pairs) return [pairs[nums[i]], i]
        
//         pairs[target-nums[i]] = i
//     }
// };

// const twoSum = (nums, target) => {
//     const pairs = {}
    
//     for (let i in nums) {
//         if (nums[i] in pairs) return [pairs[nums[i]], i]
        
//         pairs[target - nums[i]] = i
//     }
// }


var twoSum = function(nums, target) {
    nums.sort((a, b) => {return a-b})
    var i=0
    var j=nums.length-1
    var sum=0;
    while(i<j){
        sum=nums[i]+nums[j]
        if(sum==target){
            return [i,j]
        }else if(sum>target){
            j--
        }else{
            i++
        }
    }
    return []
};

