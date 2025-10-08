/* Two ways of traversing a tree - Breadth-first Search, Depth-first Search */

// Depth-first Traversals:
//
// Inorder Traversal (Left-Root-Right)
// Preorder Traversal (Root-Left-Right)
// Postorder Traversal (Left-Right-Root)

// I'm gonna be using Binary Search Tree as the type of the tree

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

  // Return the node
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // Return true of false
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(val) {
    let target = this.root;
    let parent;

    // Find the target node, ASSIGN PARENT NODE
    while (target.value !== val) {
      parent = target;
      if (val < target.value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }

    // Check if target is not the root
    if (target !== this.root) {
      // If no child nodes
      if (target.left === null && target.right === null) {
        if (parent.left === target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
        // If two children nodes
      } else if (target.left !== null && target.right !== null) {
        let rightParent = target;
        let right = target.right;
        if (right.left === null) {
          right.left = target.left;
          if (parent.left === target) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while (right.left !== null) {
            rightParent = right;
            right = right.left;
          }
          if (parent.left === target) {
            parent.left.value = right.value;
          } else {
            parent.right.value = right.value;
          }
          if (right.right !== null) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null;
          }
        }
        // If one child node only
      } else {
        if (parent.left === target) {
          if (target.right === null) {
            parent.left = target.left;
          } else {
            parent.left = target.right;
          }
        } else {
          if (target.right === null) {
            parent.right = target.left;
          } else {
            parent.right = target.right;
          }
        }
      }
    }
    return target;
  }

  // Recursive
  bfs() {
    let node = this.root;
    const queue = [];
    const result = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift(); // remove the first element from the queue
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  // Recursive
  dfsPreOrder() {
    const values = [];
    function traverse(node) {
      values.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return values;
  }

  // Recursive
  dfsPostOrder() {
    const values = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.value);
    }
    traverse(this.root);
    return values;
  }

  // Recursive
  dfsInOrder() {
    const values = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return values;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

//          10
//         /  \
//        6    15
//       / \    \
//      3   8   20

// console.log(bst.bfs());
// console.log(bst.dfsPreOrder());
// console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder()); // 3, 6, 8, 10, 15, 20

// Additional Notes:
//
// There are 2 other tree traversals that are worth mentioning:
//
// 1.) Boundary Traversal - left boundary (nodes on left excluding leaf nodes)
//                        - leaves (consist of only the leaf nodes)
//                        - right boundary (nodes on right excluding leaf nodes)
// 2.) Diagonal Traversal - all the nodes in a single diagonal will be printed one by one
//
// References: https://www.geeksforgeeks.org/dsa/tree-traversals-inorder-preorder-and-postorder/
