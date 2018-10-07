/**
 * Compare two arrays and return a new array with only the values found in one of the arrays
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array} new array of unique values
 */
function diffArray(arr1, arr2) { // returns a string even if numeric, I will correct later...
  let combo = [...arr1,...arr2].reduce((acc,value) =>{
    (acc[value]) ? acc[value]++ : acc[value] = 1
    return acc
  },{})
  return Object.keys(combo).filter((key) => combo[key] === 1)
}

module.exports = {
  diffArray
};
