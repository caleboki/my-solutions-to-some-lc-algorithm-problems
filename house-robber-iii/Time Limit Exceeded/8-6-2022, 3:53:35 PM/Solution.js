// https://leetcode.com/problems/house-robber-iii

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
 * @return {number}
 */
// var rob = function(root) {
//     if (!root) return 0
    
//    const evenBfs = (node) => {
//        let queue = [node], result = 0, k = 0
       
//        while (queue.length) {
//            let size = queue.length
           
//            for (let i = 0; i < size; i++) {
//                let current = queue.shift()
//                if ((k % 2) === 0) result += current.val
               
//                if (current.left) queue.shift(current.left)
//                if (current.right) queue.shift(current.right)
//            }
//            k++
//        }
//        return result
//    }
   
//    const oddBfs = (node) => {
//        let queue = [node], result = 0, k = 1
       
//        while (queue.length) {
//            let size = queue.length
           
//            for (let i = 0; i < size; i++) {
//                let current = queue.shift()
//                if ((k % 2) > 0) result += current.val
               
//                if (current.left) queue.shift(current.left)
//                if (current.right) queue.shift(current.right)
//            }
//            k++
//        }
//        return result
//    }
//    return evenBfs(root)
//    //return Math.max(evenBfs(root), oddBfs(root)) 
// };

// const rob = (root) => {
    
//     const dfs = (root, sum = 0, flag) => {
//         if (!root) return sum
//         let stack = [root]
        
//         while (stack.length > 0) {
//             let current = stack.pop()
            
//             if (flag === true) sum += current.val
//             flag = !flag
                
//             if (current.right) stack.push(current.right)
//             if (current.left) stack.push(current.left) 
//         }
//         return sum
//     }
    
//     return Math.max(dfs(root, 0, true), dfs(root, 0, false))
// }

// const rob = (root) => {
//     const bfs = (root, sum = 0, flag) => {
//         if (!root) return sum
        
//         let queue = [root]
//         while (queue.length) {
//             const length = queue.length
            
//             for (let i = 0; i < length; i++) {
//                 const current = queue.shift()  
//                 if (flag === true) sum += current.val
                
//                 if (current.left) queue.push(current.left)
//                 if (current.right) queue.push(current.right)
//             }
            
//             flag = !flag
//         }
        
//         return sum
//     }
    
//     return Math.max(bfs(root, 0, true), bfs(root, 0, false)) 
// }

// const rob = (root) => {
    
//     const bfs = (root, result = []) => {
//         if (!root) return result
    
//         const queue = [root]
    
//         while (queue.length > 0) {
//             const length = queue.length
//             const currentLevel = []

//             for (let i = 0; i < length; i++) {
//                 const current = queue.shift()
//                 currentLevel.push(current.val)
                
//                 if (current.left) queue.push(current.left)
//                 if (current.right) queue.push(current.right)
//             }
//             result.push([...currentLevel])
//         }
//         return result
//     }
    
//     const nodes = bfs(root)
//     console.log(nodes)
//     let rob1 = [], rob2 = []
    
//     const sum = (arr) => {
//         return arr.reduce((a, b) => a + b, 0)
//     }
    
//     for (let i = 0; i < nodes.length; i++) {
//         let temp = Math.max(sum(nodes[i]) + rob1, rob2)
//         rob1 = rob2
//         rob2 = temp
//     }
    
//     return rob2
    
// }

const rob = (root, map = {}) => {
    if (!root) return 0
    
    if (root in map) return map[root]
    
    let sum = root.val
    
    if (root.left) {
        sum += rob(root.left.left)
        sum += rob(root.left.right)
    }
    
    if (root.right) {
        sum += rob(root.right.right)
        sum += rob(root.right.left)
    }
    
    let nextSum = rob(root.left) + rob(root.right)
    let res = Math.max(sum, nextSum)
    
    map[root] = res
    
    return res
}