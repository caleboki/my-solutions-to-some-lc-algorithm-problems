// https://leetcode.com/problems/range-sum-of-bst

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// var rangeSumBST = function(root, low, high) {
//     let sum = 0
    
//     const dfs = (node) => {
//         if (node.val >= low && node.val <= high) sum += node.val
//         if (node.left) dfs(node.left)
//         if (node.right) dfs(node.right)
//     }
    
//     dfs(root)
//     return sum
// };

const rangeSumBST = (root, low, high) => {
    let sum = 0, queue = [root]
    
    while (queue.length) {
        let size = queue.length
        
        for (let i = 0; i < size; i++) {
            let current = queue.shift()
            if (current.val >= low && current.val <= high) sum += current.val
            
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right) 
        }
    }
    return sum
}