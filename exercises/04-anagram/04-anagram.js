/**
 * Check to see if two provided strings are anagrams.
 *
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Ignore special characters and spaces; do not
 * count them.
 *
 * @example
 *   anagrams('rail safety', 'fairy tales') // true
 *   anagrams('RAIL! SAFETY', 'fairy tales') // true
 *   anagrams('Hi there', 'Bye there') // false
 *
 * @param {string} string1 first string to compare
 * @param {string} string2 second string to compare
 * @returns {boolean} whether or not the strings are anagrams
 */
function anagrams(string1,string2){
  var s0 = string1.split("")
  var s1 = string2.split("")
  return s0.sort().join("") === s1.sort().join("") ? true : false
}


module.exports = {
  anagrams
};
