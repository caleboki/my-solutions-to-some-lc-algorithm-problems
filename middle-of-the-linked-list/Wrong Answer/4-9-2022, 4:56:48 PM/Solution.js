// https://leetcode.com/problems/middle-of-the-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    const getSize = (head) => {
        let count = 0
        let current = head
        
        while (current) {
            count++
            current = current.next
        }
        
        return count
    }
    
    let size = getSize(head)
    
    if (size % 2 === 0) size = (size/2) + 1
    if (size % 2 !== 0) size = ((size-1)/2) + 1
    
    const traverse = (head, length) => {
        let count = length
        let current = head
        
        while (current) {
            count--
            if (count === 0) break
            current = current.next
        }
        
        return current
    }
    
    return traverse(head, size)
    
};