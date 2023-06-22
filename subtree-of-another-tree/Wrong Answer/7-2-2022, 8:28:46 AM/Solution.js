// https://leetcode.com/problems/subtree-of-another-tree

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let queue = [root]
    
    while (queue.length) {
        let currentRoot = queue.shift()
        
        if (currentRoot.val === subRoot.val) {
            return traverseSubRoot(currentRoot, subRoot) 
        }
        
        if (currentRoot.left) queue.push(currentRoot.left)
        if (currentRoot.right) queue.push(currentRoot.right)
    }
    return false
};

const traverseSubRoot = (currentRoot, subRoot) => {
    
    if (!currentRoot && !subRoot) return true
    if (!currentRoot || !subRoot) return false
    if (currentRoot.val !== subRoot.val) return false
    
    if (traverseSubRoot(currentRoot.left, subRoot.left) && traverseSubRoot(currentRoot.right, subRoot.right)){
        return true
    }
    
    //return false
}