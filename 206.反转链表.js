/**
 * 反转一个单链表。
 * 
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 *  */


// 方法一: 先将其存入数组中，在将数组进行反转。然后在将下一个指向上一个的next
var reverseList = function(head) {
    var arr=[];
    var root=head;
    if(!head || !head.next) return head;
    while(root){
          arr.push(root);
          root = root.next;
    }
    arr.reverse();
    var len = arr.length;
    for(var i=0; i<len; i++){
        arr[i+1] && (arr[i].next = arr[i+1]);
        !arr[i+1] && (arr[i].next = null);
    }
    return arr[0];
};

// 方法二 : 递归解法
var reverseList = function(head) {
    // 当头节点为空或下个节点为空时返回该节点：
    if(head == null || head.next == null) return head;
    
    // 获取下一个节点：
    var next_node = head.next;
    // 递归反转
    var res = reverseList(next_node);
    // 将头节点接到反转链表的尾部
    next_node.next = head;
    head.next = null;
    return res;
};

// 方法三
var reverseList = function(head) {
    var temp = null;
    while(head){
         temp = {
             val:head.val,
             next:temp
         };
        head=head.next
    }
    return temp;
};


