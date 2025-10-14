// Linked list - a data structure that contains a head, tail and length property
//             - consists of nodes, and each node has a value and a pointer to another node or null
//             - do not have indexes
//             - connected via nodes with a next pointer
//             - random access is not allowed
//             - excellent at insertion and deletion Big O(1) Constant Time

// Singly linked list - it consists of nodes where each node contains a data field and a reference to the next node in the linked list
//                    - the next of the last node is null, indicating the end of the list
//                    - each node consists of two parts: data and a pointer to the next node

// val = piece of data
// next = reference to the next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  addHead(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let current = this.head;
      newNode.next = current;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  remove() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current; // always delayed value
      current = current.next; // loop until .next is null
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  removeHead() {
    if (!this.head) return undefined;
    let current = this.head; // store the current head
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current.val;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current.val;
  }
}

const list = new SinglyLinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
// console.log(list.remove()); // remove 40
// console.log(list.removeHead());
// console.log(list.addHead(5));
console.log(list.get(3));
console.log(list);
