// https://leetcode.com/problems/boundary-of-binary-tree

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
var boundaryOfBinaryTree = function(root) {
    let result = []
    
    const addLeaves = (node) => {
        if (!node.left && !node.right) {
            result.push(node.val)
        } else {
            if (node.left) addLeaves(node.left)
            if (node.right) addLeaves(node.right)
        }
    }
    
    if (!root) return result
    
    if (root.left || root.right) {
        console.log(root.val)
        result.push(root.val)
    }
    
    let t = root.left
    
    while (t) {
        if (t.left && t.right) result.push(t.val)
        if (t.left) {
            t = t.left
        } else {
            t = t.right
        }
        
    }
    addLeaves(root)
   
    let stack = []
    t = root.right
    while (t) {
        if (t.left || t.right) stack.push(t.val)
        if (t.right) {
            t = t.right
        } else {
            t = t.left
        } 
    }
    while (stack.length) {
        result.push(stack.pop())
    }
    return result
    
};