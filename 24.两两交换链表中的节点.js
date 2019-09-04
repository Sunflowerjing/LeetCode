/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 示例: 给定 1->2->3->4, 你应该返回 2->1->4->3.
 */

var swapPairs = function(head) {
    let target = new ListNode();
    let pre = target;
    pre.next = head;
    while(pre.next&&pre.next.next){
        let cur = pre.next;
        let next = cur.next;
        let temp = next.next;
        cur.next = temp;
        next.next = cur;
        pre.next = next;
        pre = cur;
    }
    return target.next;
};