/**
 * Find the character that is most commonly used in the string
 * @param {string} string
 * @returns {string} character that occurs most often
 * @example
 * maxChar("aaaabc"); // a
 */

function maxChars(string){
  let a0 = string.split('').reduce(((acc,element) =>{
    !acc[element] ? acc[element] = 1 : acc[element]++
    return acc
  }),{})
  return Object.keys(a0).reduce((curr,next) => a0[curr] > a0[next] ? curr : next)
}

module.exports = {
  maxChars
};
