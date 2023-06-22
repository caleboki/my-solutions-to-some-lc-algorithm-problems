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
      if(!head)
    {
        return null;
    }
    var map = new Map();
    var p = head;
    while(p)
    {
        map.set(p, new Node(p.val));
        p = p.next;
    }
    p = head;
    while(p)
    {
        map.get(p).next = map.get(p.next) ?? null;
        map.get(p).random = map.get(p.random) ?? null;
        p = p.next;
    }
    return map.get(head);
};