/**
 * Write a function called specialMultiply which accepts two parameters.
 * If the function is passed both parameters, it should return the product of the two.
 * If the function is only passed one parameter, it should return a function which can later be passed another
 * parameter to return the product.
 * You will have to use closure and arguments to solve this.
 *
 * @example
 *    specialMultiply(3,4); // 12
 *    specialMultiply(3)(4); // 12
 *    specialMultiply(3); // function(){}....
 *
 * @param {number} a
 * @param {number} b
 */
function specialMultiply(a, b){
  return (a && b) ? a * b : (b) => {return a * b}
}

module.exports = {
  specialMultiply
};
