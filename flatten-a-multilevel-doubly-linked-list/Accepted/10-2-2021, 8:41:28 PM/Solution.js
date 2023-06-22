// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

//IDEA
//Traverse thru the list 
//Any node with a child pointer, sever the link
//Replace child link with next pointer
//figure out what to do with the orphan nodes:
//store orphan nodes in a stack because we want the most recent orphan nodes to come first
//upon encountering a tail node, append the first element in stack to link tail
//when stack is empty we are done
//O(N) time and O(N) space

var flatten = function(head) {
    //no need to check if head exist because we are given a linked list of @ least length 1
    
    let stack = []
    let current = head
    
    //traversing the list
    while (current) {
        if (current.child) {
            //check if current node is a tail node otherwise there is a possibility of orphans
            if (current.next) {
                stack.push(current.next) //store orphan nodes
                current.next.prev = null //remove link to previous node
                
            }
            current.next = current.child
            current.child.prev = current
            current.child = null
        }
        
        //check if we are in a tail node
        if (current.next) {
            current = current.next
        } else {
            break
        }
    }
    
    while (stack.length > 0) {
        current.next = stack.pop()
        current.next.prev = current
        //check for other adjacent nodes
        while (current && current.next) {
            current = current.next
        }
    }
        
    return head
};