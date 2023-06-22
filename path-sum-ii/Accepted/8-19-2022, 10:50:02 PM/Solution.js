// https://leetcode.com/problems/path-sum-ii

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    const dfs = (node, remainingSum, pathNodes, pathsList) => {
        if (!node) return
        
        pathNodes.push(node.val)
        
        if (remainingSum === node.val && !node.left && !node.right) {
            pathsList.push([...pathNodes])
        } else {
            dfs(node.left, remainingSum - node.val, pathNodes, pathsList)
            dfs(node.right, remainingSum - node.val, pathNodes, pathsList)
        }
        
        pathNodes.pop()
    }
    
   
    dfs(root, targetSum, pathNodes = [], pathsList = [])
    return pathsList
    
};