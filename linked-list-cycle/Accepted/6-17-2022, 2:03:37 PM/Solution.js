// https://leetcode.com/problems/linked-list-cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//Time complexity: O(N) We visit each of the nn elements in the list at most once. Adding a node to the hash table costs only O(1)O(1) time.
//Space complexity: O(N) The space depends on the number of elements added to the hash table, which contains at most nn elements.

// var hasCycle = function(head) {
//     let current = head
//     let seen = new Map()
    
//     while(current) {
//         if (seen.has(current)) return true
//         seen.set(current)
//         current = current.next
//     }
//     return false
    
// };

//Time complexity: O(N)
//Space complexity: 0(1)
var hasCycle = function(head) {
    if (!head) return false
    
    let slow = head
    let fast = head.next
    
    while (slow !== fast) {
        if (fast === null || fast.next === null) return false
        
        slow = slow.next
        fast = fast.next.next
    }
    return true
};