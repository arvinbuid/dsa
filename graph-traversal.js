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

// Graph Depth First Search (DFS) - we traverse all adjacent vertices one by one.
//                                - When we traverse an adjacent vertex, we completely finish the traversal of
//                                  all vertices reachable through that adjacent vertex.

// DFS Graph Pseudocode:
//
// DFS(vertex)
//    if vertex is empty
//        return - (base case)
//    add vertex to results list
//    mark vertex as visited
//    for each neighbor in vertex's neighbors:
//        if neighbor is not visited:
//           recursively call DFS on neighbor
