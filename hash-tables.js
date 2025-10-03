// What makes a good hash?
//
// Fast
// doesn't cluster outputs at specific indices, but distributes uniformly.
// Deterministic (same input yields same output)

// Simple Hash Function (need improvements)
function hash(key, arrayLength) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

console.log(hash("elation", 10));
console.log(hash("quantum", 10));
