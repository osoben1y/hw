"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val !== null && val !== void 0 ? val : 0;
        this.next = next !== null && next !== void 0 ? next : null;
    }
}
function isPalindrome(head) {
    if (!head || !head.next)
        return true;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let curr = slow;
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    let first = head;
    let second = prev;
    while (second) {
        if (first.val !== second.val)
            return false;
        first = first.next;
        second = second.next;
    }
    return true;
}
