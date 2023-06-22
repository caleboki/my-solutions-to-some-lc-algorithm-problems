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
// var distanceK = function(root, target, K) {
//     let m = new Map();
//     let queue = [root];
//     while (queue.length > 0) {
//         let node = queue.shift();
//         if (node.left) {
//             m.set(node.left, node);
//             queue.push(node.left);
//         }
//         if (node.right) {
//             m.set(node.right, node);
//             queue.push(node.right);
//         }
//     }
//     console.log(m.keys())
//     // (key, value) in m is (child, parent)
    
//     let values = [], visited = new Map();
//     queue = [{node: target, distance: 0}];
    
//     while (queue.length > 0) {
//         let {node, distance} = queue.shift();
//         // if (visited.has(node)) continue;
//         // we don't need this line but you can have it to play safe
//         visited.set(node, 1);
        
//         if (distance == K) {
//             values.push(node.val);
//             continue; // optimisation
//         }

//         if (node.left && !visited.has(node.left)) {
//             queue.push({node: node.left, distance: distance+1});
//         }
//         if (node.right && !visited.has(node.right)) {
//             queue.push({node: node.right, distance: distance+1});
//         }
//         if (m.has(node) && !visited.has(m.get(node))) {
//             queue.push({node: m.get(node), distance: distance+1});
//         }
//     }
//     return values;
//     // Time Complexity: O(n)
//     // Space Complexity: O(n)
// };

var distanceK = function(root, target, K) {
    let m = new Map(), visited = new Map(), result = []
    
    // (key, value) in m represents (node, parent)
    traverse(root, m, visited)
    
    findNodes(target)
    
    return result
    
    function findNodes(root, distance = 0) {
        if (!root || visited.get(root)) return
        
        if (distance == K) {
            result.push(root.val)
            return
        }
        
        visited.set(root, true)
        
        if (m.has(root)) findNodes(m.get(root), distance + 1)
        
        findNodes(root.left, distance + 1);
        findNodes(root.right, distance + 1);
    }
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

function traverse(root, map, visited) {
    if (!root) return
    
    visited.set(root, false)
    
    if (root.left) {
        map.set(root.left, root)
        traverse(root.left, map, visited)
    }
    if (root.right) {
        map.set(root.right, root)
        traverse(root.right, map, visited)
    }
}