/*
 * Recode the map function
 */
const assert = require('assert');

const actors = [
  { firstName: 'Bruce', lastName: 'Willis'},
  { firstName: 'Brad', lastName: 'Pitt'},
  { firstName: 'Samuel', lastName: 'L Jackson'},
  { firstName: 'Tom', lastName: 'Hanks'}
];


const createFullName = (item, index) => {
  return {
    ...item,
    index,
    fullName: item.firstName + ' ' + item.lastName
  }
}


/*
 * items is an array
 * fn is a function
 */
const map = (items, fn) => {
  // Implement map here
};

const result = map(actors, createFullName);

assert(result.length === actors.length, 'Map should return a new array of the same length than the one given in argument');
assert(result !== actors, 'Map should return a new array');
assert(result[0].fullName === createFullName(actors[0]).fullName, 'Full name should be computed on the result array');
assert(result[2].index === 2, 'Index should be correct');

console.log('Exercise 1 Success!');
