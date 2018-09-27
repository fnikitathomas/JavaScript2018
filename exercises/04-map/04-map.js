/**
 * Recreate the map function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param {array} arr
 * @param {function} callback
 * @returns {array} new array
 */
//function map(arr, callback) {}

function map(arr, callback){
  let a0 = []
  for(var i = 0;i < arr.length;i++){
    a0.push(callback(arr[i],i,arr))
  }
  return a0
}

/**
 * Multiplies each vvalue in an array by two
 * @param {array} arr
 * @returns {array} new array, with each value doubled
 */
//function doubleValues(arr) {}

function doubleValues(arr){
  return arr.map((number) => number * 2)
}

/**
 * Given an array nested with objects
 * and give the name of a shared key that is in all the nested objectss,
 * extract the values from the object that have the given key
 * and returns the extracted values in an array
 * @param {array} arr
 * @param {string} key what, from the object you want to return in your new array
 * @returns {array} new array
 *
 * @example
 * var arrayOfNames = [
 *  {name: 'Ellie', age: 20},
 *  {name: 'Tim', age: 35},
 *  {name: 'Matt', age: 18},
 *  {name: 'Colt', age: 47}
 * ];
 * extractKey(arrayOfNames, 'name'); // ['Ellie', 'Tim', 'Matt', 'Colt']
 */
//function extractKey(arr, key) {}

function extractKey(arr, key){
  return arr.map((obj) =>{return obj[key]})
}

module.exports = {
  map,
  doubleValues,
  extractKey
};
