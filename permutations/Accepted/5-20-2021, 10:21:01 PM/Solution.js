// https://leetcode.com/problems/permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  function permute (nums) {
//     if (nums.length < 2) return nums
//      let result = []         
//      for (let i = 0; i<nums.length; i++) {
//          let char = nums[i]
        
//          let remainingChars = nums.slice(0, i)
//          remainingChars.push(...nums.slice(i + 1, nums.length))
//          //console.log(remainingChars)
//          for (let permutation of permute(remainingChars)){
            
//             result.push([char]) 
//              console.log(result)                  
//          }
//      }    
//      return result   
// };

var permute = function(nums) {
    if(nums.length === 0) return [[]];
    
    
    const firstVal = nums[0];
    const restVals = nums.slice(1);
    const permutationsWithoutFirst = permute(restVals);
    
    const allPermutations = [];
    for(let perm of permutationsWithoutFirst) {
        // perm is an array, insert at the tail end (<=)
        for(let i = 0; i <= perm.length; i++) {
            const addFirstToPermutation = [ ...perm.slice(0, i), firstVal, ...perm.slice(i) ];
            allPermutations.push(addFirstToPermutation);
        };
    };
    
    return allPermutations;
};