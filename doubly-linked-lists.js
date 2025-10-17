// Doubly Linked Lists - almost identical to Singly linked lists, except every node has
//                       another pointer, to the previous node and a pointer to the next node
//                     - it needs more memory than Singly linked lists

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
