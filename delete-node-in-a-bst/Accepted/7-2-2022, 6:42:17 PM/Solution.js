// https://leetcode.com/problems/delete-node-in-a-bst

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
 * @param {number} key
 * @return {TreeNode}
 */

//Brilliant explanation here: https://www.youtube.com/watch?v=gcULXE7ViZw
var deleteNode = function (root, key) {
    if (!root) return root
    
    //inorder traversal of the bst so the min is just the first element of the array
    const findMin = (subroot, nodeValues = []) => {
        if (!subroot) return -Infinity
        
        findMin(subroot.left, nodeValues)
        nodeValues.push(subroot.val)
        findMin(subroot.right, nodeValues)
     
        return nodeValues[0]
    }
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        //Case 1 there is no child
        if (!root.left && !root.right) {
            root = null
        }
        
        //Case 2 there is one child
        if (root && !root.left) { 
            root = root.right
            return root
        }
        
        if (root && !root.right) {
            root = root.left
            return root
        }
        
        //Case 3 there are two children
        if (root && root.left && root.right) {
            let temp = findMin(root.right)
            //set data I am trying to delete as the value returned from temp
            root.val = temp 
            root.right = deleteNode(root.right, temp)
        } 
    }
    return root
}

//Alternative approach: collect all nodes in an array, filter the node we dont want then recreate the tree
//Time and space complexity: O(N)

// var deleteNode = function (root, key) {
    
//     if (root === null || key === null) return root
   
//     let nodeValues = []
    
//     const dfs = (node) => {
//         if (!node) return
        
//         nodeValues.push(node.val)
       
//         dfs(node.left)
//         dfs(node.right)
//     }
//     dfs(root)
    
//     nodeValues = nodeValues.filter(f => f !== key)
    
//     if (nodeValues.length === 0) return null
    
//     let tree = new TreeNode(nodeValues[0])
    
//     const insertNode = (tree, value) => {
//         if (tree === null) {
//             tree = new TreeNode(value)
//             return tree
//         }
        
//         if (tree.val > value) {
//             tree.left = insertNode(tree.left, value)
//         } else {
//             tree.right = insertNode(tree.right, value)
//         }
        
//         return tree
//     }
    
//     for (let i = 1; i < nodeValues.length; i++) insertNode(tree, nodeValues[i])
    
//     return tree
// }