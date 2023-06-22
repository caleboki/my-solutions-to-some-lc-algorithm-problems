// https://leetcode.com/problems/k-closest-points-to-origin

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    
    const distance = ([i, j]) => {
        return i**2 + j**2
    }
  
    points.sort((a, b) => distance(a) - distance(b))
    return points.slice(0, k)
};

