// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence

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
 * @return {number}
 */

//https://www.youtube.com/watch?v=oSYGjIq6ZM4
var longestConsecutive = function(root) {
    
    let max = [1]
    
    const traverse = (node, count = 0, target = 0, max) => {
        if (!node) return
        
        if (node.val === target) {
            count++
        } else {
            count = 1 //reset counter
        }
        
        max[0] = Math.max(max[0], count)
        target = node.val + 1
        
        traverse(node.left, count, target, max)
        traverse(node.right, count, target, max)
    }
    
    traverse(root, 0, 0, max)
    
    return max[0]
    
};