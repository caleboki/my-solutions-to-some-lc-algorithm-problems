// https://leetcode.com/problems/two-sum-iv-input-is-a-bst

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let nodeValues = []
    
    const dfs = (node) => {
        if (!node) return
        dfs(node.left)
        nodeValues.push(node.val)
        dfs(node.right)
    }
    
    const twoSum = (nums, target) => {
        const pairs = new Map()

        for (let i in nums) {
            if (pairs.has(nums[i])) return true
            let key = target - nums[i]
            pairs.set(key, i)
        }
        return false
    }
    
    dfs(root)
    return twoSum(nodeValues, k)
};