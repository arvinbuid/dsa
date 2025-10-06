// Graphs - a graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points,
//          together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graphs
//        - nodes + collections

// Uses for Graphs: Social Networks
//                - Location/Mapping
//                - Routing Algorithms
//                - Visual Hierarchy
//                - File System Optimizations

// Graph Terms:
//
// 1.) Vertex - a node
// 2.) Edge - connection between nodes

// Types of Graphs:
//
// 1.) Undirected Graph - there is no direction or polarity to the connections of edges between the vertices
// 2.) Directed Graph - often represented with arrows which indicates the direction and polarity assign to an edge
// 3.) Weighted Graph - graph where each edge has a number (weight) that represents distance, cost, or time
// 4.) Unweighted Graph - opposite of weighted graph

// Matrix - specialized, two-dimensional data structure consisting of a rectangular grid of numbers, symbols, or expressions organized into rows and columns

// Storing Graphs:
//
// 1.) Adjacency Matrix - a square matrix used to represent a finite graph
//                      - information is stored in rows and columns
//                      - The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph
// 2.) Adjacency List - used to represent a graph where each node in the graph stores a list of its neighboring vertices

/* Graph Class - Undirected Graph */

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
}

const g = new Graph();
g.addVertex("PH");
g.addVertex("Japan");
g.addVertex("USA");
g.addVertex("China");
g.addEdge("PH", "Japan");
g.addEdge("USA", "PH");
g.addEdge("China", "PH");
g.addEdge("China", "USA");
g.addEdge("China", "Japan");
// g.removeEdge("Japan", "USA");
g.removeVertex("China");
console.log(g);
