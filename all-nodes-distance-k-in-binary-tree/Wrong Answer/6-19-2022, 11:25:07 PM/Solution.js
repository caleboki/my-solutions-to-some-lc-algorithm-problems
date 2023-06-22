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
// var distanceK = function(root, target, k) {
    
//     if (!root || !target) return []
//     if (k === 0) return [target.val]
    
//     //turn the tree into into a graph
    
//     //do bfs on the graph
    
//     const treeToGraph = (root) => {
//         let adjList = {}
//         let queue = [root]
//         //queue.push(root)
        
//         while (queue.length) {
//             let current = queue.shift()
            
//             if (!(current in adjList)) {
//                 adjList[current] = []
//             }
//             //add child to parent adjlist
//             //add parent to child adjlist
//             //add child to queue
            
//             if (current.left) {
//                 adjList[current].push(current.left)
                
//                 if (!(current.left in adjList)) adjList[current.left] = []
//                 adjList[current.left].push(current)
                
//                 queue.push(current.left)
//             }
            
//             if (current.right) {
//                 adjList[current].push(current.right)
                
//                 if (!(current.right in adjList)) adjList[current.right] = []
//                 adjList[current.right].push(current)
                
//                 queue.push(current.right)
//             }
//         }
        
//         return adjList
//     }
    
//     const adjList = treeToGraph(root)
    
//     let result = [], depth = 0, visited = new Set()
//     let queue = [target] //start from target node
    
//     while (queue.length && depth <= k) {
//         for (let i = 0; i < queue.length; i++) {
//             let current = queue.shift()
            
//             if (!(current in visited)) {
//                 for (let child of adjList[current]) {
//                     queue.push(child)
//                 }
            
//             if (depth === k) result.push(current.val)
//             visited.add(current)
//         }
//         depth++
//         }
//     }
    
//     return result
// };

const distanceK = (root, target, k) => {
    let adjList = {}, res = [], depth = 0, visited = new Set(), queue = [target.val]
    
    const treeToGraph = (node) => {
        if (!node) return adjList
        
        const queue = [node]
        
        while (queue.length) {
            const length = queue.length
            
            for (let i = 0; i < length; i++) {
                const current = queue.shift()
                
                if (!(current.val in adjList)) adjList[current.val] = []
                if (current.left) {
                    adjList[current.val].push(current.left.val)
                    adjList[current.left.val] = []
                    adjList[current.left.val].push(current.val)
                    queue.push(current.left)
                }
                if (current.right) {
                    adjList[current.val].push(current.right.val)
                    adjList[current.right.val] = []
                    adjList[current.right.val].push(current.val)
                    queue.push(current.right)
                }
            }
        }
        
        
        return adjList
    }
    
    treeToGraph(root)
    //console.log(adjList)
    
    while (queue.length > 0 && depth <= k) {
        let current = queue.shift()
        let destinations = adjList[current]
        
        for (let i = 0; i < destinations.length; i++) {
            //console.log(destinations[i])
            
            if (depth === k) {
                let temp = adjList[destinations[i]]
                temp = temp.filter(f => f !== target.val)
                temp = new Set(temp)
                console.log(temp)
                
                res.push(...temp)
                
                
            }
            
            if (!visited.has(current)) {
                visited.add(current)
                queue.push(destinations[i])
            }
        }
        depth++
    }
    
    return res   
}
    
    