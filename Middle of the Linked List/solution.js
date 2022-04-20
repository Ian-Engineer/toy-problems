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
    // define length as 0
    // define current node as head
    let length = 0;
    let currentNode = head;
    let middle;
    // do while loop currentNode.next !== null
    while (currentNode.next !== null) {
        // redefine current node
        currentNode = currentNode.next
        // increment length
        length ++
    }
    if (head.length % 2 === 1) {
        middle = (length - 1)/2
    } else {
    middle = (length / 2)
    }
    let counter = 0
    currentNode = head
    // while loop middleCounter < middle
    while (counter < middle) {
        currentNode = currentNode.next;
        counter ++
    }
    return currentNode
};


/** FASTER VERSION */

var middleNode = function(head) {
    let fast = slow = head;
 // while fast is not null or undefined
    while (fast && fast.next) {
    // redefine fast as fast.next.next
    // redfine slow as slow.next.next
        fast = fast.next.next;
        slow = slow.next;
    }
// return slow
    return slow;
};