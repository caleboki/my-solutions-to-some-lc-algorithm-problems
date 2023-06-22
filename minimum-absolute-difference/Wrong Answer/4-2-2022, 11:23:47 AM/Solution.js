// https://leetcode.com/problems/minimum-absolute-difference

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => {return a-b})
    
    let min = arr[1]-arr[0], result = [[arr[0], arr[1]]]
    
    for (let i = 2; i < arr.length; i++) {
        let diff = arr[1]-arr[0]
        if (diff === min) result.push([arr[i-1], arr[i]])
    }
    
    return result
};