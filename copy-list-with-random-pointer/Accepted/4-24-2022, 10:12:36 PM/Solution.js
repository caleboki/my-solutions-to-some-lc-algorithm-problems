// https://leetcode.com/problems/copy-list-with-random-pointer

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

//Investigate this properly!
var copyRandomList = function(head) {
    if(!head) return null
    
    let map = new Map()
    let current = head
    while(current)
    {
        map.set(current, new Node(current.val))
        current = current.next
    }
    current = head
    while(current)
    {
        map.get(current).next = map.get(current.next) ?? null
        map.get(current).random = map.get(current.random) ?? null
        current = current.next
    }
    return map.get(head)
};