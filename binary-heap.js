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
