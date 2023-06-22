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

const rob = (root) => {
    
    const dfs = (root, sum = 0, flag) => {
        if (!root) return sum
        let stack = [root]
        
        while (stack.length > 0) {
            let current = stack.pop()
            
            if (flag === true) sum += current.val
            flag = !flag
                
            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left) 
        }
        return sum
    }
    
    return Math.max(dfs(root, 0, true), dfs(root, 0, false))
}