/*
 * Reimplement the curry function
 */

const assert = require('assert');

const curry = (fn) => {
  // Implement the curry function here
};

const add = (a, b, c) => a + b + c;

assert(typeof curry(add)(1) === 'function', 'Partially curried functions should return a function');
assert(curry(add)(1, 2, 3) === 6, '1. It should return the result if all arguments are given');
assert(curry(add)(1, 2)(3) === 6, '2. It should return the result if all arguments are given');
assert(curry(add)(1)(2)(3) === 6, '3. It should return the result if all arguments are given');

console.log('Exercise 3 Success!');
