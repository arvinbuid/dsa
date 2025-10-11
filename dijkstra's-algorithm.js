// Dijkstra's Algorithm - finds the shortest path between two vertices on a graph
//                      - what is the fastest way to get from point A to point B
//                      - what is the fastest way to get from point A to point B

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B", 8);
g.addEdge("A", "C", 6);
g.addEdge("B", "C", 10);
g.addEdge("C", "A", 4);
console.log(g);
