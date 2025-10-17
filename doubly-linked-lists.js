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

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(15);
list.push(20);
list.push(25);
list.push(30);
console.log(list);
