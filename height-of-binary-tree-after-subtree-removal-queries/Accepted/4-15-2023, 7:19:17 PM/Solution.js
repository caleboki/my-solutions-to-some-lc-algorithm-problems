// https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries

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
 * @param {number[]} queries
 * @return {number[]}
 */
// var treeQueries = function(root, queries) {
//     const originalRoot = root, heights = []

//     const findSubtree = (tree, node) => {}

//     const removeSubtree = (tree, node) => {
//         if (!tree) return null
//         if (!node) return tree



//         return tree
//     }

//     const populateHeights = (subtree) => {}

//     for (let query of queries) {
//         const subtree = findSubtree(root, query)
//         populateHeights(subtree)
//         root = originalRoot
//     }

//     return heights
// };

// const treeQueries = (root, queries) => {
//     const depths = {}, heights = {}, levels = {}, result = []

//     //returns height for nodes
//     const dfs = (node, d) => {
//         if (!node) return -1
//         depths[node.val] = d

//         let h = Math.max(dfs(node.left, d + 1), dfs(node.right, d + 1))
//         heights[node.val] = h
//         return h
//     }
//     dfs(root, 0)
//     console.log(depths)

//     for (let [node_val, d] of Object.entries(depths)) {
//         if (!levels[d]) levels[d] = []
//         levels[d].push(node_val)
//         //levels[d].sort((a, b) => b-a)
//         levels[d].length = 2
//     }

//     for (let q of queries) {
//         let d = depths[q]
//         if (levels[d].length === 1) {
//             result.push(d-1)
//         } else if (levels[d][0])
//     }
//     console.log(levels)
// }

const treeQueries = (root, queries) => {
    let maxHeight = -Infinity
    const heights = {}, heightsAfterNodeRemoval = {}
    const updateHeights = (node) => {
        let currentNodeHeight

        if (!node.left && !node.right) {
            currentNodeHeight = 0
        } else if (!node.right) {
            currentNodeHeight = updateHeights(node.left) + 1
        } else if (!node.left) {
            currentNodeHeight = updateHeights(node.right) + 1
        }
        else {
            currentNodeHeight = Math.max(updateHeights(node.left), updateHeights(node.right)) + 1
        }
        maxHeight = Math.max(maxHeight, currentNodeHeight)

        heights[node.val] = currentNodeHeight
        return currentNodeHeight
    }

    updateHeights(root)
    console.log(heights)

    const updateHeightsAfterRemoval = (node, level = 0, bestAlternateHeight = -Infinity) => {
        if (!node.left && !node.right) return

        if (node.left && !node.right) {
            bestAlternateHeight = Math.max(level, bestAlternateHeight)
            heightsAfterNodeRemoval[node.left.val] = bestAlternateHeight
            return updateHeightsAfterRemoval(node.left, level + 1, bestAlternateHeight)
        }

        if (!node.left && node.right) {
            bestAlternateHeight = Math.max(level, bestAlternateHeight)
            heightsAfterNodeRemoval[node.right.val] = bestAlternateHeight
            return updateHeightsAfterRemoval(node.right, level + 1, bestAlternateHeight)
        }

        const rootToLeafHeightOnLeftNodePath = level + heights[node.left.val] + 1
        const rootToLeafHeightOnRightNodePath = level + heights[node.right.val] + 1

        if (rootToLeafHeightOnLeftNodePath === rootToLeafHeightOnRightNodePath) return

        if (rootToLeafHeightOnLeftNodePath > rootToLeafHeightOnRightNodePath) {
            bestAlternateHeight = Math.max(rootToLeafHeightOnRightNodePath, bestAlternateHeight)
            heightsAfterNodeRemoval[node.left.val] = bestAlternateHeight
            return updateHeightsAfterRemoval(node.left, level + 1, bestAlternateHeight)
        } else {
            bestAlternateHeight = Math.max(rootToLeafHeightOnLeftNodePath, bestAlternateHeight)
            heightsAfterNodeRemoval[node.right.val] = bestAlternateHeight
            return updateHeightsAfterRemoval(node.right, level + 1, bestAlternateHeight)
        }
    }

    updateHeightsAfterRemoval(root)
    return queries.map((item) => heightsAfterNodeRemoval[item] !== undefined ? heightsAfterNodeRemoval[item] : maxHeight)


}