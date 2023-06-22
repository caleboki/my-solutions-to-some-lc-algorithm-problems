// https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another

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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    
    let adjList = levelOrderTraversal(root)
    
    let queue = [[startValue, '']], visited = new Set()
    
    while (queue.length) {
        let [currentValue, currentPath] = queue.shift()
        
        if (visited.has(currentValue)) continue
        visited.add(currentValue)
        
        if (currentValue === destValue) {
            return currentPath
        } else {
            for (let [child, direction] of adjList[currentValue]) {
                queue.push([child, currentPath + direction])
            }
        }
        
    }
};

const levelOrderTraversal = (root) => {
   
    let adjList = {}

    let queue = [root]
    
    while (queue.length) {
        let current = queue.shift()
        adjList[current.val] = []
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    
    queue = [root]
    
    while (queue.length) {
        let current = queue.shift()
        
        if (current.left) {
            adjList[current.val].push([current.left.val, 'L'])
            adjList[current.left.val].push([current.val, 'U'])
            queue.push(current.left)
        }
        
        if (current.right) {
            adjList[current.val].push([current.right.val, 'R'])
            adjList[current.right.val].push([current.val, 'U'])
            queue.push(current.right)
        }
    }
    return (adjList)
}