// https://leetcode.com/problems/minimum-absolute-difference

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => {return a-b})
    
    let min = Infinity, result = []
    
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i-1]
        
        if (diff < min) result.push([arr[i-1], arr[i]])
    }
    
    return result
};