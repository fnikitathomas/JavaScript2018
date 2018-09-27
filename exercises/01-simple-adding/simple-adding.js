/* Using the JavaScript language,
 have the function SimpleAdding(num) add up all the numbers from 1 to num. 
 For example: if the input is 4 then your program should return 
 10 because 1 + 2 + 3 + 4 = 10. For the test cases, 
 the parameter num will be any number from 1 to 1000. 
 */

/**
 * 
 * function simpleAdding(num){
 * let j = 0
 * for(var i = 1;i <= num;i++){
 *   j += i
 * }
 * return j
 *} 
 * Or use math : https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF
 */

function simpleAdding(num){
  return (num * (num + 1)) / 2
}

module.exports = {
  simpleAdding
};
