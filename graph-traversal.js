/* Visiting/Updating/Checking each vertex in a Graph */
//
//
// Graph Traversal Use Cases:
//
// - Peer-to-peer networking
// - Web crawlers
// - Finding 'closest' matches/recommendations
// - Shortest path problems
//      - GPS Navigation
//      - Solving mazes
//      - AI (shortest path to win the game)

//  Depth First Graph Traversal (DFS) - we traverse all adjacent vertices one by one.
//                                - When we traverse an adjacent vertex, we completely finish the traversal of
//                                  all vertices reachable through that adjacent vertex.

// DFS Graph Pseudocode
//
// DFS(vertex)
//    if vertex is empty
//        return - (base case)
//    add vertex to results list
//    mark vertex as visited
//    for each neighbor in vertex's neighbors:
//        if neighbor is not visited:
//           recursively call DFS on neighbor

// Breadth First Graph Traversal  - it begins with a node, then first traverses all its adjacent nodes
//                                - Once all adjacent are visited, then their adjacent are traversed

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // set the adjacency list of that key to empty []
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop(); // remove each values inside of the vertex
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex]; // delete the vertex
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    // helper function (recursive)
    (function dfs(vertex) {
      if (!vertex) return null; // base case
      visited[vertex] = true; // place the vertex into visited object
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor); // if values not visited, recursively invoke dfs with the vertex
        }
      });
    })(start);

    return result;
  }

  // Different result than dfs recursive
  depthFirstIterative(start) {
    const stack = [start]; // initialize stack with start value
    const result = [];
    const visited = {};

    visited[start] = true;

    while (stack.length > 0) {
      let currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));

//           A
//         /   \
//        B     C
//        \     /
//         D---E
//          \ /
//           F
