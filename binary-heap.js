// Binary Heap - complete binary tree that stores data efficiently, allowing quick access
//               to the maximum or minimum element, depending on the type of heap
//
// Types of Binary Heap:
//
// 1.) Max Binary Heap - parent nodes are always larger than the child nodes but not guarantee between sibling nodes
// 2.) Min Binary Heap - parent nodes are always smaller than the child nodes, also not guarantee between sibling nodes
//
// Storing Heaps - for any index of an array n...
//               - the left child is stored at 2n+1
//               - the right child is at 2n+2
// What if there is a child node and want to find its parent? - for any child node at index n,
//                                                            - its parent is at index (n-1)/2 floored (round down decimal place)
//
class BinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
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
}

const heap = new BinaryHeap();
heap.insert(55);
heap.insert(299);
console.log(heap);
// [41, 39, 33, 18, 27, 12, 55]
//  0   1   2   3   4   5   6
