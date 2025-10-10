// Priority Queue - a data structure where each element has a priority
//                - Elements with higher priorities are served before elements with lower priorities
//                - Value doesn't matter, priority is only used

/* Min Binary Heap Implementation */
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  // equivalent to remove
  // remove the root -> replace with the most recently added
  // adjust (sink down)
  dequeue() {
    const min = this.values[0]; // update the variable into min
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // Check the left side if not out of bounds, then do swap
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      // Check the right side if not out of bounds, then do swap
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        // Now comparison is based on the elements priority
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break; // if there is no swap available, break out of the loop
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

// Hospital Queue
const hq = new PriorityQueue();
hq.enqueue("fever", 2);
hq.enqueue("diarrhea", 3);
hq.enqueue("stroke", 1);
hq.enqueue("trauma", 1);
hq.enqueue("trouble breathing", 2);
hq.enqueue("slurred speech", 4);
console.log(hq.dequeue());
console.log(hq.dequeue());
console.log(hq.dequeue());
console.log(hq); // Results at the end:
//                                      PriorityQueue {
//                                        values: [
//                                          Node { value: 'fever', priority: 2 },
//                                          Node { value: 'diarrhea', priority: 3 },
//                                          Node { value: 'slurred speech', priority: 4 }
//                                        ]
//                                      }
