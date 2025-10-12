// Dynamic Programming - a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

// Conditions:
//
// 1.) Overlapping Subproblems - a problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times
//                             - ex. Fibonacci Sequence

// 2.) Optimal Substructure - a problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
//                          - ex. Fibonacci Sequence, Shortest Path between vertices on a Graph

// Fibonacci Sequence Recursive Code:
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(25));

// Big O Notation: O(2^n) - Big O Exponential
//                        - the time complexity is terrible and very slow (need improvement)

// To solve the issue about fibonacci recursive approach - 'use past knowledge to make solving future problem easier.'
//                                                       - use Memoization approach

// Memoization (Top-Down Approach) - storing the results of expensive function calls and returning
//                                   the cached result when the same inputs occur again

// Memoization Approach
function improvedFibonacci(n, memo = []) {
  if (n <= 2) return 1; // base case
  if (memo[n] !== undefined) return memo[n];
  memo[n] = improvedFibonacci(n - 1, memo) + improvedFibonacci(n - 2, memo);
  return memo[n];
}
console.log(improvedFibonacci(100));

// Big O Notation: O(n) - Big O Linear Time
//                      - the improved fibonacci is much faster and efficient
//                      - as (n) grows, the time it takes for this algorithm to run grows in proportion with (n)

// Tabulation (Bottom-Up Approach) - storing the result of a previous result in a 'table' (usually an array)
//                                 - usually done using iteration
//                                 - better space complexity can be achieved using tabulation
