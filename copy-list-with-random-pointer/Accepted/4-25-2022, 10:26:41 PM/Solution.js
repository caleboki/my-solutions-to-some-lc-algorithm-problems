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

//Time complexity: O(N)
//Space complexity: O(N)
var copyRandomList = function(head) {
    if(!head) return null
    
    let map = new Map()
    
    //store nodes without pointers
    let current = head
    while(current)
    {
        let copy = new Node(current.val)
        map.set(current, copy)
        current = current.next
    }
    
    //set the pointers
    current = head
    while(current)
    {
        let copy = map.get(current)
        copy.next = map.get(current.next) ?? null
        copy.random = map.get(current.random) ?? null
        current = current.next
    }
    return map.get(head)
};

//Recursive implementation of the above
//Time complexity: O(N)
//Space complexity: O(N)
// var copyRandomList = function(head) {
//     let map = new Map()
    
//     const populateMap = (head) => {
//         if(!head) return null
        
//         if (map.has(head)) return map.get(head)
        
//         let copy = new Node(head.val, null, null)
//         map.set(head, copy)
        
//         copy.next = populateMap(head.next)
//         copy.random = populateMap(head.random)
        
//         return copy
//     }
//     return populateMap(head)
// };

// var copyRandomList = function(head) {
//     if(!head) return null
    
//     let map = new Map()
    
//     //store nodes without pointers
//     let current = head
//     while (current) {
//         let copy = new Node(current.val)
//         copy.next = current.next
//         current.next = copy
//         current = copy.next
//     }
//     current = head
// };

