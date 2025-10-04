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

// Improved Hash Function (only work for strings)
function improvedHash(key, arrayLen) {
  let total = 0;
  let prime_num = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime_num + value) % arrayLen;
  }
  return total;
}

// console.log(hash("elation", 10));
// console.log(hash("quantum", 10));
console.log(improvedHash("cyan", 13));
console.log(improvedHash("blue", 13));

// Dealing with Collisions
//
// 1. Seperate Chaining - each index in our array we store our values using a more sophisticated data structure (e.g array, linked list)
//                      - this allow to store multiple key-value pairs at the same index
// 2. Linear Probing - we store one piece of data at each position
//                   - when we find a colision, we search through the array to find the next empty slot
