// https://leetcode.com/problems/flatten-nested-list-iterator

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
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
// var NestedIterator = function(nestedList) {
//     this.queue = flatten(nestedList)
// };


// /**
//  * @this NestedIterator
//  * @returns {boolean}
//  */
// NestedIterator.prototype.hasNext = function() {
//    return this.queue.length !== 0

// };

// /**
//  * @this NestedIterator
//  * @returns {integer}
//  */
// NestedIterator.prototype.next = function() {
//     return this.queue.shift()
// };

// function flatten(arr, result = []){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].isInteger()) {
//             result.push(arr[i].getInteger())
//         } else {
//             flatten(arr[i].getList(), result)
//         }
//     }
//     return result
    
// }

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

class NestedIterator {
    
    constructor(nestedList) {
        this.queue = this.flatten(nestedList)
    }
    
    hasNext() {
        return this.queue.length !== 0
    }
    
    next() {
        return this.queue.shift()
    }
    
    flatten(arr, result = []) {
        if (arr.length === 0) return result
        
        let first = arr[0]
        let rest = arr.slice(1)
        
        if (!first.isInteger()) return this.flatten(first.getList().concat(rest), result)
        
        result.push(first.getInteger())
        
        return this.flatten(rest, result)
    }
}