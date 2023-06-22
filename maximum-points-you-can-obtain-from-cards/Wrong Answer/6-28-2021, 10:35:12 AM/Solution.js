// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let left = 0, right = cardPoints.length - 1
    let leftArr = 0, rightArr = 0, equalSum = 0
    
    for (left; left < right; left++) {
        leftArr += (cardPoints[left])
        rightArr += (cardPoints[right])
        right--
        k--
        if (k === 0) break
    }
   
    console.log(leftArr)
    console.log(rightArr)
    
    if (leftArr === rightArr) {
        // for (i = 0; i < Math.ceil(cardPoints.length/2); i++) {
        //     equalSum += cardPoints[i] 
        // }
        return leftArr+rightArr
    }
    
    return Math.max(leftArr, rightArr)
};