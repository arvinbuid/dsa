// Dijkstra's Algorithm - finds the shortest path between two vertices on a graph
//                      - what is the fastest way to get from point A to point B                   - what is the fastest way to get from point A to point B

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}
