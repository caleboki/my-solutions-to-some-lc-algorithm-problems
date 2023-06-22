// https://leetcode.com/problems/find-leaves-of-binary-tree

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
 * @return {number[][]}
 */
// var findLeaves = function(root) {
    
//     let solution = []
    
//     const getHeight = (root) => {
//         if (!root) return -1
        
//         let leftHeight = getHeight(root.left)
//         let rightHeight = getHeight(root.right)
        
//         let currentHeight = Math.max(leftHeight, rightHeight) + 1
        
//         if (solution.length === currentHeight) solution.push([])
//         solution[currentHeight] = root.val
        
//         return currentHeight
//     }
    
//     getHeight(root)
//     return solution
    
// };

// var findLeaves = function(root) {
//     let result = []
//     let temp = []
    
//     if (!root) return result
    
//     const remove = (node, temp) => {
//         if (!node) return
       
//         if (!node.left && !node.right){
//             temp.push(node.val)
//             result.push(temp)
           
//         } 
        
//         if (node.left) node.left = remove(node.left, temp)
//         if (node.right) node.right = remove(node.right, temp)
//     }
    
//     remove(root, temp)
//     return result
// }

var findLeaves = function(root) {
    let result = []
    
    const dfs = (node, list) => {
        if (!node) return null
        
        //if we are at leaf node
        if (!node.left && !node.right) {
            list.push(node.val)
            return null
        }
        node.left = dfs(node.left, list)
        node.right = dfs(node.right, list)
       
        return node
    }
    
    while (root.left !== null || root.right !== null) {
        let temp = []
        dfs(root, temp) //gets leaf nodes for each level?
        result.push(temp)
    }
    
    result.push([root.val])
    
    return result
}