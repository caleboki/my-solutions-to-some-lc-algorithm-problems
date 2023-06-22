// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected

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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let buildGraph = (root) => {
        let adjList = {}
        let queue = [root]
        
        while (queue.length) {
            let current = queue.shift()
            adjList[current.val] = []
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        
        //add edges
        queue = [root]
        
        while (queue.length) {
            let current = queue.shift()
            if (current.left) {
                
                adjList[current.val].push(current.left.val)
                adjList[current.left.val].push(current.val)
                queue.push(current.left)
            }
            
            if (current.right) {
                adjList[current.val].push(current.right.val)
                adjList[current.right.val].push(current.val)
                queue.push(current.right)
            }
            
        }
        return adjList
        
    }
    
    let graph = buildGraph(root), minutes = 0
    

    let bfs = (graph, start) => {
        let queue = [start], visited = new Set()
        visited.add(start)
        
        while (queue.length) {
            let length = queue.length
            
            for (let i = 0; i < length; i++) {
                let current = queue.shift()
                let edges = graph[current]
                
                if (!edges) continue
                
                for (let edge of edges) {
                    if (visited.has(edge)) continue
                    visited.add(edge)
                    queue.push(edge)
                }
            }
            
            
            minutes++
            
        }
        
        
    }
    
    bfs(graph, start)
    
    return minutes-1
    
    
    
    
};