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

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      // sever the connections of poppedNode prev & next
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    if (!this.head) return null;
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    const list = arr.join(" <-> ");
    console.log(list);
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1; // start from end of list
      let current = this.tail; // start from tail
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(15);
list.push(20);
list.push(25);
list.push(30);
list.push(35);
// console.log(list.pop());
// console.log(list.shift());
// list.unshift(1);
// console.log(list.get(4));
// console.log(list.set(5, 33));
// console.log(list.insert(3, 22.5));
// console.log(list.remove(1));
// console.log(list.remove(1));
// console.log(list);
list.print();

// Big O:
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(n)
