// https://leetcode.com/problems/same-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//     if (!p && !q) return true
    
//     if (!p || !q) return false
    
//     if (p.val !== q.val) return false
    
//     if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) return true
    
//     return false
// };


//inOrder: Left, Up, Right
const isSameTree = (p, q) => {
    let pArray = [], qArray = []
    
    const dfsP = (root) => {
        if (root === null) pArray.push(null)
        if (!root) return
        dfsP(root.left)
        pArray.push(root.val)
        dfsP(root.right)
    }
    
    const dfsQ = (root) => {
        if (root === null) qArray.push(null)
        if (!root) return
        dfsQ(root.left)
        qArray.push(root.val)
        dfsQ(root.right)
    }
    
    
    console.log(qArray)
    for (let i = 0; i < pArray.length; i++) {
        if (pArray[i] !== qArray[i]) return false
    }
    return true
    
    
    
    
}