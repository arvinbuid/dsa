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

  push(val) {
    const newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null; // check if only 1 node === 1
    this.first = this.first.next; // if not node === 1, update first
    this.size--;
    return temp.value;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
console.log(stack);
