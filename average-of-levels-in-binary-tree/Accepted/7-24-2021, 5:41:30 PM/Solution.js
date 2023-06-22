// https://leetcode.com/problems/average-of-levels-in-binary-tree

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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    let result = []
    if (root === null) return result
    let queue = []
    let sum = 0
    
    queue.push(root)
    
    while(queue.length > 0) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            
            sum += node.val
            if (node.left !== null) {
                queue.push(node.left)
            }
            
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
        
        result.push(sum/size)
        sum = 0
    }
    return result
};