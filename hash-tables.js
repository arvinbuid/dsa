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
// console.log(improvedHash("cyan", 13));
// console.log(improvedHash("blue", 13));

// Dealing with Collisions
//
// 1. Seperate Chaining - each index in our array we store our values using a more sophisticated data structure (e.g array, linked list)
//                      - this allow to store multiple key-value pairs at the same index
// 2. Linear Probing - we store one piece of data at each position
//                   - when we find a colision, we search through the array to find the next empty slot

// HashTable class
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime_num = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime_num + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = []; // if unoccupied, set the index to an empty array (seperate chaining)
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]; // return the value of index 1
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // Run a check to only push if the key is unique only
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // Run a check to only push if the value is unique only
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  remove(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          // Remove the key-value pair
          this.keyMap[index].splice(i, 1);
        }

        // Remove the array if it's empty
        if (this.keyMap[index].length === 0) {
          delete this.keyMap[index];
        }

        return true; // key, value pair successfully removed
      }
    }
    return undefined; // key not found
  }
}

let ht = new HashTable(17);
ht.set("red", "#FF0000");
ht.set("white", "#FFFFFF");
ht.set("cyan", "#00FFFF");
ht.set("silver", "#C0C0C0");
ht.set("blue", "#0000FF");
ht.set("gray", "#808080");
ht.set("black", "#000000");
ht.set("orange", "#FFA500");

// ht.set("purple", "#FFA500");
// ht.set("pink", "#FFA500");
// console.log(ht);
// console.log(ht.get("black"));

// console.log(ht.remove("orange"));
// console.log(ht.remove("red"));
// console.log(ht.remove("white"));
console.log(ht.remove("silver"));

console.log(ht.keys());

// loop through each keys of HashTable class
// ht.keys().forEach((key, index) => {
//   console.log(`key ${index + 1}:`, ht.get(key));
// });

// loop through each values of HashTable class
// ht.values().forEach((value, index) => {
//   console.log(`value ${index + 1}:`, value);
// });
