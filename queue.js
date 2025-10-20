// Queue - a FIFO data structure
//       - used in programming for background tasks, uploading resources, printing/task processing

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null; // check if only 1 node
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue());
console.log(queue);
