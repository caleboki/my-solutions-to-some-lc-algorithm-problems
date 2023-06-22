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
var isSameTree = function(p, q) {
    let nodesP = []
    let nodesQ = []
   
    const traverseP = (nodeP) => {
        if (!nodeP) return
        
        traverseP(nodeP.left)
        if (nodeP) nodesP.push(nodeP.val)
        traverseP(nodeP.right)
    }
    
    const traverseQ = (nodeQ) => {
        if (!nodeQ) return
        
        traverseQ(nodeQ.left)
        if (nodeQ) nodesQ.push(nodeQ.val)
        traverseQ(nodeQ.right)
    }
    
    traverseP(p)
    traverseQ(q)
    
    if (nodesP.length !== nodesQ.length) return false
    
    for (let i = 0; i < nodesP.length; i++) {
        if (nodesP[i] !== nodesQ[i]) return false
    }
    return true
    
};