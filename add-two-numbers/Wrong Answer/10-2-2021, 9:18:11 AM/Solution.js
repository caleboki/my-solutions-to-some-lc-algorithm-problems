// https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Array = []
    let l2Array = []
    let newNode
    
    while (l1) {
        l1Array.push(l1.val)
        l1 = l1.next 
    }
    
    while (l2) {
        l2Array.push(l2.val)
        l2 = l2.next 
    }
    let res = parseInt(l1Array.join('')) + parseInt(l2Array.join(''))
    
    res = Array.from(String(res))
    
    for (let i of res) {
        newNode = new ListNode(i, newNode)  
    }
    return newNode
    
};