// Dynamic Programming - a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

// Conditions:
//
// 1.) Overlapping Subproblems - a problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times
//                         - ex. Fibonacci Sequence

// 2.) Optimal Substructure - a problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
//                         - ex. Fibonacci Sequence, Shortest Path between vertices on a Graph

// Fibonacci Sequence Recursive Code:
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(25));

// Big O Notation: O(2^n) - Big O Exponential
//                        - the time complexity is terrible and very slow (need improvement)
