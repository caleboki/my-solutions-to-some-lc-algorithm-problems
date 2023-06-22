// https://leetcode.com/problems/delete-node-in-a-bst

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
 * @param {number} key
 * @return {TreeNode}
 */
// var deleteNode = function(root, key) {
//     return recursivelyDeletingNode(root, key);
// };

//  function recursivelyDeletingNode(node, key){
//     if(!node) return node;
//     if(node.val === key){
//         if(!node.left && !node.right) return null;
//         else if(node.left && !node.right) return node.left;
//         else if(!node.left && node.right) return node.right;
//         else if(node.left && node.right){
//             let temp = node.right;
//             while(temp.left){
//                 temp = temp.left;
//             }
//             node.val = temp.val;
//             node.right = recursivelyDeletingNode(node.right, temp.val);
//         }

//     }else if(key > node.val){
//         node.right = recursivelyDeletingNode(node.right, key);
//     }else{
//         node.left = recursivelyDeletingNode(node.left, key);
//     }
//     return node;
// }

var deleteNode = function (root, key) {
    if (!root) return root
    
    const findMin = (subroot, nodeValues = []) => {
        if (!subroot) return
        
        findMin(subroot.left, nodeValues)
        nodeValues.push(subroot.val)
        findMin(subroot.right, nodeValues)
     
        return nodeValues[0]
    }
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        //Case 1 there is no child
        if (!root.left && !root.right) {
            root = null
        }
        
        //Case 2 there is one child
        if (root && !root.left) {
            //let temp = root
            root = root.right
            
            return root
            
            
        }
        
        if (root && !root.right) {
            //let temp = root
            root = root.left
            return root
            
        }
        
        //Case 3 there are two children
        if (root && root.left && root.right) {
            let temp = findMin(root.right)
            //set data I am trying to delete as the value returned from temp
            root.val = temp 
            root.right = deleteNode(root.right, temp)
            
        }
        
        
    }
    return root
}