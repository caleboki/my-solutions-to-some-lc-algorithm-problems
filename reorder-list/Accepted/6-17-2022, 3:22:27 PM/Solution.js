// https://leetcode.com/problems/reorder-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    
    //finding middle
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    //reversing
    slow = reverse(slow);
    
    //reseting the fast to head
    fast = head;
    
	//when we get to end of the node break the loop
    while(slow.next !== null){
        let ptr1 = fast.next;  //helper pointer for the normal half
        let ptr2 = slow.next;  //helper pointer for the reversed half
        fast.next = slow;
        slow.next = ptr1;
        fast = ptr1;
        slow = ptr2;
    }
    return;
};

//reverses the given node and returns new reversed
//here, head paramenter refers to the passed in start of the linked list
function reverse(head){
    let back = null;
    let front = head;   //technically start of given linked list
    let curr = head;
    
    while(curr !== null){
        front = front.next;
        curr.next = back;
        back = curr;
        curr = front;
    }
    
    return back;  //returns the head of reversed linked list
}