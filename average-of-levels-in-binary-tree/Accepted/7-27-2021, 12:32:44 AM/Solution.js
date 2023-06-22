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
// var averageOfLevels = function(root) {
    
//     let result = []
//     if (root === null) return result
//     let queue = []
//     let sum = 0
    
//     queue.push(root)
    
//     while(queue.length > 0) {
//         let size = queue.length
//         for (let i = 0; i < size; i++) {
//             let node = queue.shift()
            
//             sum += node.val
//             if (node.left !== null) {
//                 queue.push(node.left)
//             }
            
//             if (node.right !== null) {
//                 queue.push(node.right)
//             }
//         }
        
//         result.push(sum/size)
//         sum = 0
//     }
//     return result
// };

var averageOfLevels = function(root) {
    if (root === null) return null
    
    let map = {}
    let result = []
    
    const getLevel = (node, map, depth = 0) => {
        if (!node) return null
        
        // if (map[depth] === undefined) map[depth] = []
        // map[depth].push(node.val)
        
        if (map[depth] === undefined) {
            map[depth] = [node.val, 1] //1 is the initial length of the array
        } else {
            map[depth][0] += node.val
            map[depth][1]++
        }
        
        getLevel(node.left, map, depth + 1)
        getLevel(node.right, map, depth + 1)
    }
    
    getLevel(root, map)
    
    const computeAverage = (arr) => {
        let average = arr[0]/arr[1]
        return average
    }
    
    let values = Object.values(map)
    
    values.forEach(value => {
        result.push(computeAverage(value))
    })
    
    return result
};