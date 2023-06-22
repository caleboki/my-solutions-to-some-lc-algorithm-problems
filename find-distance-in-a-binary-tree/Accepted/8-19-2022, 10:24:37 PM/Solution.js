// https://leetcode.com/problems/find-distance-in-a-binary-tree

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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
//Just get the lengh of the returned value in this answer: https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/
var findDistance = function(root, p, q) {
    
    const levelOrderTraversal = (root) => {
        let adjList = {}, queue = [root]
        
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
        return adjList
    }
    
    let adjList = levelOrderTraversal(root)
    
    let queue = [[p, '']], visited = new Set()
    
    while (queue.length) {
        let [currentValue, currentPath] = queue.shift()
        
        if (visited.has(currentValue)) continue
        visited.add(currentValue)
        
        if (currentValue === q) return currentPath.length
        
        for (let [child, direction] of adjList[currentValue]) {
            queue.push([child, currentPath + direction])
        }
    }
    
};