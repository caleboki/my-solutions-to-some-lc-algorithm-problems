// https://leetcode.com/problems/nested-list-weight-sum-ii

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

var depthSumInverse = function(nestedList) {
    let maxDepth = getMaxDepth(nestedList)
    return dfs(nestedList, maxDepth)
};

function dfs (list, depth) {
    let total = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].isInteger()) {
            total += depth * list[i].getInteger()//depth of integer is 1 so weight=maxdepth(base case)
        } else {
            total += dfs(list[i].getList(), (depth - 1))
        }   
    }
    return total  
}

function getMaxDepth(list) {
    let depth = 0
    for (let i = 0; i < list.length; i++) {
        if (!list[i].isInteger()) depth = Math.max(depth, getMaxDepth(list[i].getList()))
    }
    return depth + 1
}