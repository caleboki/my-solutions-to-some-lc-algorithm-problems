// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// var maxScore = function(cardPoints, k) {
    
//     let left = 0, right = cardPoints.length - 1
//     if (k === cardPoints.length) return cardPoints.reduce(function(acc, val) { return acc + val; }, 0)
    
//     if (k === 1) return Math.max(cardPoints[0], cardPoints[right])
    
    
//     let leftArr = 0, rightArr = 0, equalSum = 0
    
//     for (left; left < right; left++) {
//         leftArr += (cardPoints[left])
//         rightArr += (cardPoints[right])
//         right--
//         k--
//         if (k === 0) break
//     }
    
//     if (leftArr === rightArr) {
//         // for (i = 0; i < Math.ceil(cardPoints.length/2); i++) {
//         //     equalSum += cardPoints[i] 
//         // }
//         return leftArr+rightArr
//     }
    
//     return Math.max(leftArr, rightArr)
// };

// var maxScore = function(cardPoints, k) {
//     let left = 0, right = cardPoints.length
    
//     return helper(cardPoints, left, right-1, k)
    
    
// }

// function helper(cp, l, r, k, memo = {}) {
//     const key = l + '|' + r
//     //if (key in memo) return memo[key]
//     //base case
//     if (k === 0) return 0
//      memo[key] = Math.max(cp[l] + helper(cp, l+1, r, k-1), cp[r] + helper(cp, l, r-1, k-1))
//     return memo[key]
// }

var maxScore = function (cardPoints, k) {
    let frontScore = 0, rearScore = 0, n = cardPoints.length
    
    for (let i = 0; i < k; i++) {
        frontScore += cardPoints[i]
    }
    
    // take all k cards from the beginning
    let maxScore = frontScore
    
    // take i from the beginning and k-i from the end
    for (let i = k - 1; i >= 0; i--) {
        rearScore += cardPoints[n - (k - i)]
        frontScore -= cardPoints[i]
        let currentScore = rearScore + frontScore
        maxScore = Math.max(maxScore, currentScore)
    }
    
    return maxScore
    
    
   
}