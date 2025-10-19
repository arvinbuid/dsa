// Stack - a LIFO data structure
//       - the last element added to the stack will be the first element removed from the stack
//       - stacks are used in managing function invocation, undo/redo, routing (history object)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push() {}
}
