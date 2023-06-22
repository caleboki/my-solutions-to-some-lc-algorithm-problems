// https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let result = [], queue = [root]

    while (queue.length) {
        const length = queue.length
        let currentSum = 0

        for (let i = 0; i < length; i++) {
            const current = queue.shift()
            currentSum += current.val

            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        result.push(currentSum)
    }
    
    result.sort(function(a, b){return b-a})
    return result[k-1]
    
};