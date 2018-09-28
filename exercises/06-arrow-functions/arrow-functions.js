/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "add".
 * Extra points if you can fit it on one line.
 * @param {number} a
 * @param {number} b
 * @returns {number} the sum of `a` plus `b`
 */
let add = (a, b) => a + b

/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "tripleAndFilter".
 * @param {array} arr an array of numbers
 * @returns {array} an array of only the numbers that, when multiplied by 3,
 * are divisibile by 5
 */
/*
function tripleAndFilter(arr) {
  return arr
    .map(function(value) {
      return value * 3;
    })
    .filter(function(value) {
      return value % 5 === 0;
    });
}
*/
let tripleAndFilter = (arr) => arr.map((value) => value * 3).filter((value) => value % 5 === 0)
/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "doubleOddNumbers".
 * @param {array} arr an array of numbers
 * @returns {array} an array of only the even numbers. Each value in the
 * new array of numbers is doubled
 */

 /*
function doubleOddNumbers(arr) {
  return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}
*/

let doubleOddNumbers = (arr) =>{return arr.filter((val) => val % 2 !== 0).map((val) => val * 2)}

/**
 * Refactor the following to use ES6 arrow syntax and let declarations.
 * Make sure your refactored function is still called "sayNameLaterObj".
 * Sorry, this does not have a unit test. For JSBin,
 * @see https://jsbin.com/noluxolixe/1/edit?js,console
 */
/**
 * -- This is why I didn't submit this earlier, there is an issue with 'this'.
 * -- See the console output from the commented code.
 var sayNameLaterObj = {
  name: "Jamal",
  sayLater: function() {
    console.log("sayLater Fn:",this)
    setTimeout(function() {
      console.log("setTimeout Fn",this)
      console.log(sayNameLaterObj.name);
    }, 1000);
  }
};
 */

var sayNameLaterObj = {
  name: "Jamal",
  sayLater: () =>{
    setTimeout(() =>{
      console.log(sayNameLaterObj.name);
    }, 1000);
  }
};

console.log(sayNameLaterObj.sayLater())

module.exports = {
  add,
  tripleAndFilter,
  doubleOddNumbers
};
