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
}
