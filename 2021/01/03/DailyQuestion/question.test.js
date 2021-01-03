var { partition, ListNode } = require('./question.js');

var listNode = new ListNode(1);
listNode.next = new ListNode(4);
listNode.next.next = new ListNode(3);
listNode.next.next.next = new ListNode(2);
listNode.next.next.next.next = new ListNode(5);
listNode.next.next.next.next.next = new ListNode(2);

var resultListNode = new ListNode(1);
resultListNode.next = new ListNode(2);
resultListNode.next.next = new ListNode(2);
resultListNode.next.next.next = new ListNode(4);
resultListNode.next.next.next.next = new ListNode(3);
resultListNode.next.next.next.next.next = new ListNode(4);

describe('20210103 每日一题', () => {
  test('示例 1', function() {
    expect(partition(listNode, 3)).toEqual(resultListNode);
  });
});