// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    
    if (!root || !target) return []
    if (k === 0) return [target]
    
    //turn the tree into into a graph
    
    //do bfs on the graph
    
    const treeToGraph = (root) => {
        let adjList = {}
        let queue = [root]
        //queue.push(root)
        
        while (queue.length) {
            let current = queue.shift()
            
            if (!(current in adjList)) {
                adjList[current] = []
            }
            //add child to parent adjlist
            //add parent to child adjlist
            //add child to queue
            
            if (current.left) {
                adjList[current].push(current.left)
                
                if (!(current.left in adjList)) adjList[current.left] = []
                adjList[current.left].push(current)
                
                queue.push(current.left)
            }
            
            if (current.right) {
                adjList[current].push(current.right)
                
                if (!(current.right in adjList)) adjList[current.right] = []
                adjList[current.right].push(current)
                
                queue.push(current.right)
            }
        }
        
        return adjList
    }
    
    const adjList = treeToGraph(root)
    
    let result = [], depth = 0, visited = new Set()
    let queue = [target] //start from target node
    
    while (queue.length && depth <= k) {
        for (let i = 0; i < queue.length; i++) {
            let current = queue.shift()
            
            for (let child of adjList[current]) {
                
            }
        }
    }
    
    return result
   
   
    
};