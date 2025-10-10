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
    this.values = [55, 41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1; // last element in the array
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break; // stop the loop
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  // equivalent to remove
  // remove the root -> replace with the most recently added
  // adjust (sink down)
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  // [ 55, 41, 39, 33, 18, 27, 12 ]
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      // Check the right side if not out of bounds, then do swap
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        // The logic of this if statement is tough for me to understand for quite a while:<
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

const pq = new PriorityQueue();
