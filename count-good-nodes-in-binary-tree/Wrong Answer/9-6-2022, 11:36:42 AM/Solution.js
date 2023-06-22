// https://leetcode.com/problems/count-good-nodes-in-binary-tree

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
// var goodNodes = function(root) {
//     //root to node, suggests preorder in dfs
//    //counter to count number of good nodes
//    let counter = 0;
   
//    const preOrderTraversal = (node, maxValue) => {
//        if(!node) return;
   	
//    	   //in preorder, we look at current node first and then left node then right node
//        //Add to counter and update max value for this path if the current node is equal or            //bigger than the largest value we have seen
       
//        if(node.val >= maxValue) {
//            counter++;
//            maxValue = node.val;
//        }
//        preOrderTraversal(node.left, maxValue);
//        preOrderTraversal(node.right, maxValue);
//    }
   
//    //start function call with initial root and negative number(or -100000)
//    preOrderTraversal(root, -Infinity);
//    return counter;
// };

const goodNodes = (root) => {
    let good = 1
    
    let stack = [root]
    while (stack.length) {
        let current = stack.pop()
        
        if (current.left) {
            if (current.val < current.left.val) good++
            stack.push(current.left)
        }
        
        if (current.right) {
            if (current.val < current.right.val) good++
            stack.push(current.right)
        }
    }
    
    return good
}

