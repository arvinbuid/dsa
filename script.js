/* Binary Search Tree */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined; // handle duplicate values
        // Check the left
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          // Check the right
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(7);
bst.insert(12);
bst.insert(4);
bst.insert(4);
bst.insert(14);
bst.insert(8);
bst.insert(11);
console.log(bst);
