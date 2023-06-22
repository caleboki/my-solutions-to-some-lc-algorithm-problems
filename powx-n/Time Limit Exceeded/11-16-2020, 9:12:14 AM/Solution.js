// https://leetcode.com/problems/powx-n

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
   
    var p = n;
    if (p < 0) {
        x = 1/x;
        p = -p;
    }
    var ans = 1;
    for (var i = 0; i < p; i++) {
        ans = ans * x;
    }
    return ans;
};