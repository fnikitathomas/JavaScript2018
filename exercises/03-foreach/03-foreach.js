/**
 * Recreate the forEach function
 * @see https://www.google.com/search?q=mdn+forEach&oq=mdn+for&aqs=chrome.0.69i59j0j69i57j69i60l2j69i61.987j0j7&sourceid=chrome&ie=UTF-8
 * @param {array} arr
 * @param {function} callback
 */
function forEach(arr, callback){
  for(var i = 0;i < arr.length;i++){
    callback(arr[i],i,arr)
  }
}

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
function showFirstAndLast(arr){
  let a0 = []
  arr.forEach(str => {
    a0.push(str.charAt(0) + str.slice(str.length - 1))
  })
  return a0
}

/**
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */

/** 
 *  Shouldn't this be a job for filter?
 function onlyEvenValues(arr){
  return arr.filter(number => number % 2 === 0)
}
*/

function onlyEvenValues(arr){
  let a0 = []
  arr.forEach(number =>{
    if(number % 2 === 0)
      a0.push(number)
  })
  return a0
}

module.exports = {
  forEach,
  showFirstAndLast,
  onlyEvenValues
};
