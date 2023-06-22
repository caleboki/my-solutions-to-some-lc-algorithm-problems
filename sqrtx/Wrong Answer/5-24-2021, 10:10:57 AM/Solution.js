// https://leetcode.com/problems/sqrtx

/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     if (x < 2) return x
//     let x0 = x
//     let x1 = (x0 + x /x0)/2.0
    
//     while(Math.abs(x0 - x1) >= 1) {
//         x0 = x1
//         x1 = (x0 + x /x0) / 2.0
//     }
//     return x1
// };

var mySqrt = function(x) {
    if (x < 2) return x
    let left = 0, right = x-1
    
    while(left <= right) {
        let mid = Math.floor((left + right)/2)
        if(mid * mid === x) {
            return mid
        } else if (x < (mid * mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
    
}