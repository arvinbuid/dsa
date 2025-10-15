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
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  // adding a node to the linked list
  // at specific position
  insertInto(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      // add to the end
      !!this.insert(val); // double bang to coerce to boolean
    } else if (index === 0) {
      // add at the beginning
      !!this.addHead(val);
    } else {
      let prevNode = this.get(index - 1);
      let newNode = new Node(val);
      let temp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = temp;
    }
    this.length++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.remove(); // last item
    if (index === 0) return this.removeHead();
    // now its somewhere in the middle of the linked list
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let node = this.head; // 10
    this.head = this.tail; // 10 -> 40
    this.tail = node; // 40 -> 10
    let next;
    let prev = null;
    let counter = 0;
    while (counter < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      counter++;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    const output = arr.join(" -> ");
    console.log(output);
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
// console.log(list.get(3));
// list.set(0, 4);
// console.log(list.insertInto(1, 15));
// list.removeAt(0);
console.log(list.reverse());
list.print();
// console.log(list);
