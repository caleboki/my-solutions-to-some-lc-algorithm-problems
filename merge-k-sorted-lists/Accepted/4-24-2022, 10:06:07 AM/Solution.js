// https://leetcode.com/problems/merge-k-sorted-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    let arrList = []
    
    const listToArray = (list) => {
        let current = list
        while (current) {
            arrList.push(current.val)
            current = current.next
        }
    }
    
    for (let list of lists) listToArray(list)
    arrList.sort((a, b) => a-b)
    
    let head = null, ln = null
    
    for (let num of arrList) {
        if (head === null) {
            head = new ListNode(num)
            ln = head
        } else {
            ln.next = new ListNode(num)
            ln = ln.next
        }
    }
    return head
};