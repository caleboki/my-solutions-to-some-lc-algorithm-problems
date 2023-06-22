// https://leetcode.com/problems/minimum-absolute-difference

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => {return a-b})
    
    let min = Infinity, result = []
    
    
    for (let i = 0; i < arr.length-1; i++) {
        min = Math.min(min, arr[i+1] - arr[i])
    }
    
    for (let i = 0; i < arr.length-1; i++) {
        let diff = arr[i+1] - arr[i]
        if (diff === min) result.push([arr[i], arr[i+1]])
    }
    
    return result
};

