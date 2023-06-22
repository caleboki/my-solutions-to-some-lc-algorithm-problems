// https://leetcode.com/problems/validate-binary-search-tree

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
 * @return {boolean}
 */
// var isValidBST = function(root) {
    
//     const dfs = (node, min = -Infinity, max = Infinity) => {
//         if (!node) return true
        
//         if (node.val <= min || node.val >= max) return false
        
//         return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
//     }
//     return dfs(root)
// };

//https://www.youtube.com/watch?v=kR5AxWHa9nc
//Above code also works. Below is clearer

var isValidBST = function(root) {
    if (!root) return true
    
    const dfs = (node, min = null, max = null) => {
        if (!node) return true
        
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false
        
        //update max value when traversing left part of tree
        //update min value when traversing right part of tree
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
        
    }
    return dfs(root)
}

//Time complexity: O(N) where N is the number of nodes